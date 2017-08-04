define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-dialogs");//本地对话框
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	var ID="";
	var sub={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	
	Model.prototype.modelParamsReceive = function(event){
		var me = this;
		this.comp("input1").val(sub.personnelname);
		var id= event.params.id;
		var status= event.params.status;
		if (!CU.isEmpty(status) && status!='01') {
			$(".div2").hide();
		}else{
			$(".div2").show();
		}
		if (!CU.isEmpty(id)) {
			var data1 = me.comp("data1");
			var data2 = me.comp("data2");
			var select1 = this.getIDByXID("select1");
			var select2 = this.getIDByXID("select2");
			var param = [ id, sub.companyid ];
			AJ.RS({
				service : "Vacation",
				method : "queryUserVacationIdList",
				scope : this,
				params : param,
				success : function(result) {
					if (!CU.isEmpty(result.data)) {
						me.comp("input3").val(result.data[0].BEGINDATE);
						me.comp("input4").val(result.data[0].ENDDATE);	
						me.comp("input2").val(result.data[0].RESUESTCODE);
						data2.each(function(param) {
							var DEPARTMENTID = param.row.val('DEPARTMENTID');
							if (DEPARTMENTID == result.data[0].DEPARTMENTID) {
								$("#" + select1 + " option[value='" + DEPARTMENTID + "']").attr("selected", true);
							}
						});
												
						data1.each(function(param) {
							var type = param.row.val('type');
							if (type == result.data[0].VACATIONTYPE) {
								$("#" + select2 + " option[value='" + type + "']").attr("selected", true);
							}
						});
						me.comp("textarea1").val(result.data[0].REMARK);
						me.comp("input5").val(result.data[0].VACATIONDAYS);
						ID=result.data[0].ID;
					}

				}
			});

		}
		var input2= this.getElementByXid("input2");
		$(input2).attr({"disabled":"disabled"});
		var input5= this.getElementByXid("input5");
		$(input5).attr({"disabled":"disabled"});
		var input1= this.getElementByXid("input1");
		$(input1).attr({"disabled":"disabled"});
		
		
	};
	//关闭
	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("$UI/emp_app/12vacation/Vacation.w",{"value":"value"});
	};
	//结束日期改变触发的函数
	Model.prototype.input4Change = function(event){
		var begindate = this.comp("input3").val();
		var endDate = event.value;
		if(!CU.isEmpty(begindate)){
			var Date1 = new Date(begindate);
			var Date2 = new Date(endDate);
			if(Date1.getTime() > Date2.getTime()){
			   navigator.notification.alert("开始时间不能大于结束时间！", function() {}, "提示", "确定");
			   this.comp("input3").clear();
			   this.comp("input4").clear();
			   this.comp("input5").clear();
			} else {
			   var begin = justep.Date.fromString(begindate,"yyyy-MM-dd");
			   var end = justep.Date.fromString(endDate,"yyyy-MM-dd");
			   var days = justep.Date.between(begin, end)+1;
			   this.comp("input5").val(days);
			}
			
		}
	};

	//开始日期改变触发的函数
	Model.prototype.input3Change = function(event){
		var begindate = event.value;
		var endDate = this.comp("input4").val();
		if(!CU.isEmpty(endDate)){
			var Date1 = new Date(begindate);
			var Date2 = new Date(endDate);
			if(Date1.getTime() > Date2.getTime()){
			   navigator.notification.alert("开始时间不能大于结束时间！", function() {}, "提示", "确定");
			   this.comp("input3").clear();
			   this.comp("input4").clear();
			   this.comp("input5").clear();
			} else {
			   var begin = justep.Date.fromString(begindate,"yyyy-MM-dd");
			   var end = justep.Date.fromString(endDate,"yyyy-MM-dd");
			   var days = justep.Date.between(begin, end)+1;
			   this.comp("input5").val(days);
			}
		}
	};
	//修改保存请假单
	Model.prototype.button2Click = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在修改...",true);
		}
		var button2= this.getElementByXid("button2");
		var personnelid = sub.personnelid;
		var resuestcode = this.comp("input2").val();
		var departmentid = this.comp("select1").val();
		var type = this.comp("select2").val();
		var remark = this.comp("textarea1").val();
		if(CU.isEmpty(remark)){
		remark = '';
		}
		var beginDate = this.comp("input3").val();
		beginDate = beginDate.split(' ')[0];
		var endDate = this.comp("input4").val();
		endDate = endDate.split(' ')[0];
		var days = this.comp("input5").val();
		if(CU.isEmpty(departmentid)){
			navigator.notification.alert("请选择部门！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		if(CU.isEmpty(type)){
			navigator.notification.alert("请选择类型！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		if(CU.isEmpty(beginDate)){
			navigator.notification.alert("请选择开始时间！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		if(CU.isEmpty(endDate)){
			navigator.notification.alert("请选择结束时间！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		$(button2).attr({"disabled":"disabled"});
		
		var param = [resuestcode,sub.companyid,type,remark,beginDate,endDate,days,departmentid];
		AJ.RS({
			service : "Vacation",
			method : "updateVacation",
			scope : this,
			params : param,
			success : function(result) {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				$(button2).removeAttr("disabled");
				if (!CU.isEmpty(result.data)) {
					CU.hint("修改成功！");
					navigator.notification.alert("修改成功！", function() {}, "提示", "确定");
				}
			}
		});
	};

	//提交
	Model.prototype.button1Click = function(event){
	if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		var resuestcode = this.comp("input2").val();
		var param = [sub.userid,ID,sub.companyid];
		AJ.RS({
			service : "Vacation",
			method : "submitVacation",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					navigator.notification.alert("提交成功！", function() {}, "提示", "确定");
					justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
				}
			}
		});
	};


	//删除
	Model.prototype.button5Click = function(event){
	var me = this;
	navigator.notification.confirm("您确认要删除？", function(index) {
			if (index == "1") {
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在删除...",true);
		}
		var resuestcode = me.comp("input2").val();
		var param = [resuestcode,sub.companyid];
		AJ.RS({
			service : "Vacation",
			method : "deleteVacation",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
					navigator.notification.alert("删除成功！", function() {}, "提示", "确定");
				}
			}
		});		
				}
				}, "提示", [ '确定', '取消' ]);
	};

	return Model;
});