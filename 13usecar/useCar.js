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
	//关闭
	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("frame");
	};

	Model.prototype.data1CustomRefresh = function(event){
		var param = [sub.companyid];
		AJ.RS({
			service : "Vacation",
			method : "queryDepartmentList",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					event.source.loadData(result.data);
				}
			}
		});
	};

	Model.prototype.modelParamsReceive = function(event){
		this.getNumber();
		this.comp("input1").val(sub.personnelname);
		this.comp('input1').set({"disabled" : true});
		
		
		this.comp("input3").clear();
		
		this.comp("textarea2").clear();
		this.comp("input8").clear();
		this.comp("input4").clear();
		this.comp("input2").clear();
		this.comp("input9").clear();
		this.comp("input10").clear();
		this.comp("input11").clear();
		
		var data2 = this.comp("data2");
		//司机信息
		AJ.RS({
			service : "UseCar",
			method : "getDriverInfo",
			scope : this,
			params : [],
			success : function(result) {
				var jsonStr = result.data;
				var jsonarray = eval('('+jsonStr+')');
				data2.loadData(jsonarray);
			}
		});
		
		this.content4Active();
		this.content5Active();
		
		
		//地点
		var data5 = this.comp("data5");
		AJ.RS({
			service : "UseCar",
			method : "queryUseCarLacation",
			scope : this,
			params : [CFG.companyid],
			success : function(result) {
				data5.loadData(result.data);
			}
		});
	};
	//保存
	Model.prototype.button1Click = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		var resuestcode = justep.Date.toString(new Date(),"yyyyMMddHHmmss");
		var companyid = sub.companyid;
		var personnelid = sub.personnelid;
		var departmentid = this.comp("select1").val();
		if(CU.isEmpty(departmentid)){
			navigator.notification.alert("请选择部门！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		var personnelname = sub.personnelname;
		var personneltel = this.comp("input3").val();
		if(CU.isEmpty(personneltel)){
			navigator.notification.alert("请填写申请人电话！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		var personnum = this.comp("input8").val();
		var startdate = this.comp("input4").val();
		if(CU.isEmpty(startdate)){
			navigator.notification.alert("请填写用车时间！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		startdate = justep.Date.toString(new Date(startdate),"yyyy-MM-dd hh:mm");
		//var enddate = this.comp("textarea1").val();
		var enddate=this.comp("input2").val();
		if(!CU.isEmpty(enddate)){
		enddate = justep.Date.toString(new Date(enddate),"yyyy-MM-dd hh:mm");
		}else{
		enddate='';
		}
		var startlocation = this.comp("select3").val();
		if(CU.isEmpty(startlocation)){
			navigator.notification.alert("请填出发地！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		var endlocation = this.comp("select4").val();
		if(CU.isEmpty(endlocation)){
			navigator.notification.alert("请填写目的地！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		var reason = this.comp("textarea2").val();
		if(CU.isEmpty(reason)){
			navigator.notification.alert("请填写事由！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		var driver = this.comp("input9").val();
		var drivertel = this.comp("input10").val();
		var carnumber = this.comp("input11").val();
		var status = '01';
		var recorder = sub.personnelname;
		var param = [resuestcode,companyid,personnelid,departmentid,personnelname,personneltel,personnum,startdate,enddate,startlocation,endlocation,reason,driver,drivertel,carnumber,status,recorder];
		AJ.RS({
			service : "UseCar",
			method : "saveUseCarRequest",
			scope : this,
			params : param,
			success : function(result) {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				if (!CU.isEmpty(result.data)) {
				var id = result.data;
					justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCarView.w'),{"id":id});
				}
			}
		});
	};
	
	Model.prototype.select2Change = function(event){
		var driverNme = event.value;
		var data2 = this.comp("data2");
		var row = data2.find(['DRIVERNAME'],[driverNme]);
		var driver = row[0].val("DRIVERNAME");
		driver=driver.split("-")[0];
		var driverTel = row[0].val("DRIVERTEL");
		var driverNum = row[0].val("DRIVERNUM");
		this.comp("input9").val(driver);
		this.comp("input10").val(driverTel);
		this.comp("input11").val(driverNum);
	};
	//打开用车审批列表
	Model.prototype.content4Active = function(event){
	var me = this;
	var data3 = this.comp("data3");
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({
			service : "TodoList",
			method : "queryUseCarList",
			scope : this,
			params : [params,sub.companyid,sub.userid],
			success : function(result) {
				data3.clear();
				if (!CU.isEmpty(result.data.valueList)) {
					localStorage.setItem("number8", result.data.valueList.length);
					data3.loadData(result.data.valueList);
					me.getNumber();
				} else {
					localStorage.setItem("number8", "0");
					me.getNumber();
				}
			}
		});
	};
	//根据工作流id查看用车详情
	Model.prototype.row14Click = function(event){
		var row = event.bindingContext.$object;
		var wfinstanceid = row.val("id");
		console.log(wfinstanceid);
		AJ.RS({
			service : "UseCar",
			method : "getUseCarRdInfo",
			scope : this,
			params : [wfinstanceid],
			success : function(result) {
				var jsonData = JSON.stringify(result.data);
				justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCarApproveView.w'),{"data":jsonData});
			}
		});
		
	};
	//打开用车历史
	Model.prototype.content5Active = function(event){
		var data4 = this.comp("data4");
		var param = [sub.personnelid,sub.companyid];
		AJ.RS({
			service : "UseCar",
			method : "queryUseCarList",
			scope : this,
			params : param,
			success : function(result) {
			data4.clear();
				if (!CU.isEmpty(result.data)) {
					data4.loadData(result.data);
				}else{
					//navigator.notification.alert("没有用车记录！", function() {}, "提示", "确定");
				}
				
			}
		});
	};

	Model.prototype.row16Click = function(event){
		var row = event.bindingContext.$object;
		var wfinstanceid = row.val("WFINSTANCEID");
		if(!CU.isEmpty(wfinstanceid)){
		AJ.RS({
			service : "UseCar",
			method : "getUseCarRdInfo",
			scope : this,
			params : [wfinstanceid],
			success : function(result) {
				var jsonData = JSON.stringify(result.data);
				justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCarApproveView.w'),{"data":jsonData,"user":"user"});
			}
		});
		}else{
			var id = row.val("ID");
			var STATUS = row.val("STATUS");
			justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCarView.w'),{"id":id,"status":STATUS});
			
		}
	};
	Model.prototype.getNumber = function(event){
		if(!CU.isEmpty(localStorage.getItem('number8'))){
			this.getElementByXid("badge1").innerHTML = localStorage.getItem("number8");
		}
	};

	return Model;
});