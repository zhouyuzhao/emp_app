define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	var sub={};
	var ID = "";
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	//关闭
	Model.prototype.button3Click = function(event){
		this.close();
	};


	Model.prototype.modelParamsReceive = function(event){
		var data1 = this.comp("data1");
		//司机信息
		AJ.RS({
			service : "UseCar",
			method : "getDriverInfo",
			scope : this,
			params : [],
			success : function(result) {
				var jsonStr = result.data;
				var jsonarray = eval('('+jsonStr+')');
				data1.loadData(jsonarray);
			}
		});
	
	
		//地点
		var data3 = this.comp("data3");
		AJ.RS({
			service : "UseCar",
			method : "queryUseCarLacation",
			scope : this,
			params : [CFG.companyid],
			success : function(result) {
				data3.loadData(result.data);
			}
		});
		
		var me = this;
		this.comp("input1").val(sub.personnelname);
		this.comp('input1').set({"disabled" : true});
		this.comp('input2').set({"disabled" : true});
		var id= event.params.id;
		var status= event.params.status;
		if (!CU.isEmpty(status) && status!='01') {
			$(".div4").hide();
		}else{
			$(".div4").show();
		}
		if (!CU.isEmpty(id)) {
			var data2 = this.comp("data2");
			var select1 = this.getIDByXID("select1");
			var param = [ id, sub.companyid ];
			AJ.RS({
				service : "UseCar",
				method : "queryUseCarIdList",
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
						me.comp("input2").val(result.data[0].RESUESTCODE);
						me.comp("input3").val(result.data[0].PERSONNELTEL);
						me.comp("select3").val(result.data[0].STARTLOCATION);
						me.comp("select4").val(result.data[0].ENDLOCATION);
						me.comp("textarea2").val(result.data[0].REASON);
						me.comp("input8").val(result.data[0].PERSONNUM);
						me.comp("input4").val(result.data[0].STARTDATE);
						//me.comp("textarea1").val(result.data[0].ENDDATE);
						me.comp("input5").val(result.data[0].ENDDATE);
						me.comp("input9").val(result.data[0].DRIVER);
						me.comp("input10").val(result.data[0].DRIVERTEL);
						me.comp("input11").val(result.data[0].CARNUMBER);
						ID=result.data[0].ID;
					}

				}
			});
		}
	};
	//修改保存
	Model.prototype.button5Click = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		var resuestcode = this.comp("input2").val();
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
		var personneltel = this.comp("input3").val();
		if(CU.isEmpty(personneltel)){
			navigator.notification.alert("请填写申请人电话！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		var personnum = this.comp("input8").val();
		if(CU.isEmpty(personnum)){
		personnum = '';
		}
		var startdate = this.comp("input4").val();
		if(CU.isEmpty(startdate)){
			navigator.notification.alert("请填写用车时间！", function() {}, "提示", "确定");
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			return;
		}
		startdate = justep.Date.toString(new Date(startdate),"yyyy-MM-dd hh:mm");
		var enddate = this.comp("input5").val();
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
		if(CU.isEmpty(driver)){
		driver = '';
		}
		var drivertel = this.comp("input10").val();
		if(CU.isEmpty(drivertel)){
		drivertel = '';
		}
		var carnumber = this.comp("input11").val();
		if(CU.isEmpty(carnumber)){
		carnumber = '';
		}
		var param = [resuestcode,companyid,departmentid,personneltel,personnum,startdate,enddate,startlocation,endlocation,reason,driver,drivertel,carnumber];
		AJ.RS({
			service : "UseCar",
			method : "updateUseCarRequest",
			scope : this,
			params : param,
			success : function(result) {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				if (!CU.isEmpty(result.data)) {
					navigator.notification.alert("修改成功！", function() {}, "提示", "确定");
				}
			}
		});
	};
	//我的用车列表
	Model.prototype.button2Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCarList.w'),{"value":"value"});
	};
	//提交
	Model.prototype.button1Click = function(event){
	if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		var resuestcode = this.comp("input2").val();
		var param = [sub.userid,ID,sub.companyid];
		AJ.RS({
			service : "UseCar",
			method : "submitUseCarRequest",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCar.w'),{"value":"value"});
					navigator.notification.alert("提交成功！", function() {}, "提示", "确定");
				}
			}
		});
	};
	//删除
	Model.prototype.button4Click = function(event){
		var me = this;
	navigator.notification.confirm("您确认要删除？", function(index) {
			if (index == "1") {
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在删除...",true);
		}
		var resuestcode = me.comp("input2").val();
		var param = [resuestcode,sub.companyid];
		AJ.RS({
			service : "UseCar",
			method : "deleteUseCarRequest",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCar.w'),{"value":"value"});
					navigator.notification.alert("删除成功！", function() {}, "提示", "确定");
				}
			}
		});		
				}
				}, "提示", [ '确定', '取消' ]);
	};


	Model.prototype.select2Change = function(event){
		var driverNme = event.value;
		var data1 = this.comp("data1");
		var row = data1.find(['DRIVERNAME'],[driverNme]);
		var driver = row[0].val("DRIVERNAME");
		driver=driver.split("-")[0];
		var driverTel = row[0].val("DRIVERTEL");
		var driverNum = row[0].val("DRIVERNUM");
		this.comp("input9").val(driver);
		this.comp("input10").val(driverTel);
		this.comp("input11").val(driverNum);
	};


	return Model;
});