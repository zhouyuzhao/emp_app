define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	var type='';
	var Model = function() {
		this.callParent();
	};
	//选择部门
	Model.prototype.select1Change = function(event) {
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.show(null, "请稍等...", true);
				}
		var data2 = this.comp("data2");
		var param = [CFG.companyid,event.value];
		AJ.RS({
			service : "Vacation",
			method : "getDepartmentPerson",
			scope : this,
			params : param,
			success : function(result) {
				if(!CU.isEmpty(result.data)){
					data2.loadData(result.data);
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							window.plugins.spinnerDialog.hide();
						}
				}else{
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							window.plugins.spinnerDialog.hide();
						}
					CU.hint("没有找到该部门下的人员！");
				}
			}
		});
	};
	Model.prototype.modelParamsReceive = function(event) {
		this.comp("data3").clear();
		this.comp("data2").clear();
		this.comp("textarea2").val('');
		var data1 = this.comp("data1");
		var param = [CFG.companyid];
		AJ.RS({
			service : "Vacation",
			method : "queryDepartmentList",
			scope : this,
			params : param,
			success : function(result) {
				if(!CU.isEmpty(result.data)){
					data1.loadData(result.data);
				}else{
					CU.hint("获取部门失败！");
				}
			}
		});
	};

	Model.prototype.button1Click = function(event) {
		this.close();
	};
	//添加
	Model.prototype.button2Click = function(event){
		var name = this.comp("checkboxGroup1").val();
		if (CU.isEmpty(name)) {
			CU.hint("你没有选择人员！");
			return;
		} else {
			var arr = name.split(" ");
			var data3 = this.comp("data3");
			for (var i = 0; i < arr.length; i++) {
				var options = {
					defaultValues : [ {
						name : arr[i]
					} ]
				};
				data3.newData(options);
			}
		}
		this.button3Click2();
	};
	//向界面展示选择的人
	Model.prototype.button3Click2 = function(event){
		var data3 = this.comp("data3");
		var names = [];
		data3.each(function(param) {
			names.push(param.row.val('name'));
		});
		this.comp("textarea2").val(unique(names));
		
		function unique(arr) {
			var n = []; // 创建一个新数组
			for (var i = 0; i < arr.length; i++) {
				// 如果新数组中已经包含了当前的第i个元素，那么跳过
				if (n.indexOf(arr[i]) == -1) {
					// 否则把当前项push到新数组中
					n.push(arr[i]);
				}
			}
			return n;
		}
	};
	//选好了
	Model.prototype.button3Click = function(event){
		var names = this.comp("textarea2").val();
		if (!CU.isEmpty(names)) {
			this.comp('windowReceiver1').windowEnsure({
				names : names,
				type : type
			});
		} else {
			CU.hint("您没有指定人员！");
		}
	};
	//接收父页面的参数
	Model.prototype.windowReceiver1Receive = function(event){
		//01收文模块（指定审批人）02收文模块（指定传阅人）03发文模块（指定传阅人）
		type= event.data;
	};

	return Model;
});