define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
	var sub={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	
	Model.prototype.modelParamsReceive = function(event){
		this.getNumber();
		this.comp("textarea1").clear();
		this.comp("input3").clear();
		this.comp("input4").clear();
		this.comp("input5").clear();
	
		var me = this;
		this.comp("input1").val(sub.personnelname);
		var id= event.params.id;
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
						me.comp("input3").val(result.data[0].BEGINDATE);
						me.comp("input4").val(result.data[0].ENDDATE);
						me.comp("input5").val(result.data[0].VACATIONDAYS);
					}

				}
			});

		}else{
		var departmentId = sub.departmentid;
		var select1 = this.getIDByXID("select1");
		var data2 = this.comp("data2");
		var param = [sub.companyid];
		AJ.RS({
			service : "Vacation",
			method : "queryDepartmentList",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					data2.loadData(result.data);
					data2.each(function(param) {
							var DEPARTMENTID = param.row.val('DEPARTMENTID');
							if (DEPARTMENTID == departmentId) {
								$("#" + select1 + " option[value='" + DEPARTMENTID + "']").attr("selected", true);
							}
					});
				}
			}
		});
		
		}
		
		var input5= this.getElementByXid("input5");
		$(input5).attr({"disabled":"disabled"});
		var input1= this.getElementByXid("input1");
		$(input1).attr({"disabled":"disabled"});
		
		this.content4Active();
		this.content5Active();
		
	};
	//关闭
	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("frame");
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
	//保存请假单
	Model.prototype.button2Click = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		var button2= this.getElementByXid("button2");
		var personnelid = sub.personnelid;
		var departmentid = this.comp("select1").val();
		var type = this.comp("select2").val();
		var remark = this.comp("textarea1").val();
		var beginDate = this.comp("input3").val();
		var endDate = this.comp("input4").val();
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
		//当前时间的字符串
		var resuestcode = justep.Date.toString(new Date(),"yyyyMMddHHmmss");
		var param = [resuestcode,sub.companyid,personnelid,sub.personnelname,type,remark,beginDate,endDate,days,"01",sub.personnelname,departmentid];
		AJ.RS({
			service : "Vacation",
			method : "saveVacationRd",
			scope : this,
			params : param,
			success : function(result) {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				$(button2).removeAttr("disabled");
				var id = result.data;
				justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/VacationView.w'),{"id":id});
				//navigator.notification.alert("保存成功！", function() {}, "提示", "确定");
			}
		});
	};

	//请假审批
	Model.prototype.content4Active = function(event){
		var me = this;
		var data4 = this.comp("data4");
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({
			service : "TodoList",
			method : "queryVacationList",
			scope : this,
			params : [params,sub.companyid,sub.userid],
			success : function(result) {
			data4.clear();
				if (!CU.isEmpty(result.data.valueList)) {
					localStorage.setItem("number7", result.data.valueList.length);
					data4.loadData(result.data.valueList);
					me.getNumber();
				} else {
					localStorage.setItem("number7", "0");
					me.getNumber();
				}
			}
		});
	};
	//请假历史
	Model.prototype.content5Active = function(event){
		var data3 = this.comp("data3");
		var param = [sub.personnelid,sub.companyid];
		AJ.RS({
			service : "Vacation",
			method : "queryUserVacationList",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					data3.loadData(result.data);
				}
			}
		});
	};

	Model.prototype.row9Click = function(event){
		var row = event.bindingContext.$object;
		var wfinstanceid = row.val("WFINSTANCEID");
		if(!CU.isEmpty(wfinstanceid)){
		AJ.RS({
			service : "Vacation",
			method : "getVacationRdInfo",
			scope : this,
			params : [wfinstanceid],
			success : function(result) {
				var jsonData = JSON.stringify(result.data);
				justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/vacationApproveView.w'),{"data":jsonData,"user":"user"});
			}
		});
		}else{
			var id = row.val("ID");
			var STATUS = row.val("STATUS");
			justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/VacationView.w'),{"id":id,"status":STATUS});
		}
		
	};
	//根据工作流id查看请假详情
	Model.prototype.row10Click = function(event){
		var row = event.bindingContext.$object;
		var wfinstanceid = row.val("id");
		AJ.RS({
			service : "Vacation",
			method : "getVacationRdInfo",
			scope : this,
			params : [wfinstanceid],
			success : function(result) {
				var jsonData = JSON.stringify(result.data);
				justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/vacationApproveView.w'),{"data":jsonData});
			}
		});
	};
	
	
	Model.prototype.getNumber = function(event){
		if(!CU.isEmpty(localStorage.getItem('number7'))){
			this.getElementByXid("badge1").innerHTML = localStorage.getItem("number7");
		}
	};

	return Model;
});