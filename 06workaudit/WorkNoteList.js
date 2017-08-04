define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-open");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框

	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");

	var sub = {};
	var wfinstanceid = "";
	var Model = function() {
		this.callParent();
		if (!CU.isEmpty(localStorage.getItem('SUB'))) {
			sub = JSON.parse(localStorage.getItem('SUB'));
		}
	};

	Model.prototype.data1CustomRefresh = function(event) {
	var me = this;
		var params = {
			page : '1',
			start : '0',
			pageSize : '50'
		};
		AJ.RS({
			service : "TodoList",
			method : "queryWorkTicketList",
			scope : this,
			params : [ params, sub.companyid, sub.userid ],
			success : function(result) {
			if(!CU.isEmpty(result.data.valueList)){
				localStorage.setItem("number5", result.data.valueList.length);
				me.getParentModel().getNumber();
				event.source.loadData(result.data.valueList);
			}else{
				localStorage.setItem("number5", "0");
				me.getParentModel().getNumber();
			}
			}
		});
	};

	Model.prototype.passClick = function(event) {
		var row = event.bindingContext.$object;
		wfinstanceid = row.val("id");
		this.comp("textarea1").clear();
		this.comp("demoPopOver").show();
	};
	// 查看工作票
	Model.prototype.span1Click = function(event) {
		var me = this;
		var open = cordova.plugins.disusered.open;
		var row = event.bindingContext.$object;
		var params = [ sub.companyid, row.val("id") ];
		AJ.RS({
			service : "Others",
			method : "getWorkTicketID",
			scope : this,
			params : params,
			success : function(result) {
				var fileName = result.data;
				var temp = fileName.split(".");
				var id =temp[0];
				var suffix = temp[1];
				var fileUrl = CFG.localpath_image + fileName;
				var contentType = "application/msword";
				var src = CFG.url + "/PlayMedio.do?companyid=" + CFG.companyid + "&id=" + id + "&suffix=" + suffix + "&type=workticket&filename=/" + fileName;
				console.log("fileName="+fileName);
				console.log("id="+id);
				console.log("src="+src);
				window.plugins.spinnerDialog.show(null, "正在加载...", true);
				open(src, function success() {
					window.plugins.spinnerDialog.hide();
				}, function error(e) {
					window.plugins.spinnerDialog.hide();
				});
			}
		});
	};

	Model.prototype.messageDialog1OK = function(event) {
	var me = this;
	window.plugins.spinnerDialog.show(null, "正在执行...", true);
		var data = me.comp("data1");
		var row = event.bindingContext.$object;
		var params = [ row.toJson().userdata.id.value, "审核通过！", 1, sub.companyid, sub.userid ];
		AJ.RS({
			service : "TodoList",
			method : "audit",
			scope : this,
			params : params,
			success : function(result) {
				window.plugins.spinnerDialog.hide();
				data.refreshData();
			}
		});
	};

	//退回
	Model.prototype.returnBtnClick = function(event){
	window.plugins.spinnerDialog.show(null, "正在执行...", true);
		var me = this;
		var data = this.comp("data1");
		var str = this.comp("textarea1").val();
        if(!CU.isEmpty(str)){
            var params=[wfinstanceid,str,0,sub.companyid,sub.userid];
	 	    AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
			 if(result.success){
			 window.plugins.spinnerDialog.hide();
				data.refreshData();
				me.comp("demoPopOver").hide();
			  }else{
				  window.plugins.spinnerDialog.hide();
				  CU.hint("退回失败！");
			  }
			 } 		
	 	    });
        }else{
        	window.plugins.spinnerDialog.hide();
            this.getElementByXid("InfoBox").style.display="block";
        }
	};

	//通过
	Model.prototype.enterBtnClick = function(event){
	window.plugins.spinnerDialog.show(null, "正在执行...", true);
		var data = this.comp("data1");
		var me = this;
		var params = [wfinstanceid, "审核通过！", 1, sub.companyid, sub.userid ];
		AJ.RS({
			service : "TodoList",
			method : "audit",
			scope : this,
			params : params,
			success : function(result) {
			window.plugins.spinnerDialog.hide();
				data.refreshData();
				me.comp("demoPopOver").hide();
			}
		});
	};


	Model.prototype.OkBtnClick = function(event){
		this.getElementByXid("InfoBox").style.display="none";
	};

	//取消
	Model.prototype.button1Click = function(event){
		this.comp("demoPopOver").hide();
	};


	return Model;
});