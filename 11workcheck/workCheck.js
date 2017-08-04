define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!phonegap-plugin-barcodescanner");
	require("cordova!cordova-plugin-spinner-dialog");
	require("cordova!com.justep.cordova.plugin.iFlytek");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var sub={};
	var Model = function(){
		this.callParent();
		if (!CU.isEmpty(localStorage.getItem('SUB'))) {
				sub = JSON.parse(localStorage.getItem('SUB'));
			}
	};
	//关闭
	Model.prototype.button1Click = function(event){
		this.close();
	};

	Model.prototype.modelParamsReceive = function(event){
		var dateTime=new Date();
		var strDate = justep.Date.toString(dateTime,"yyyy-MM-dd");
		this.comp("input1").val(strDate);
		var data1 = this.comp("data1");
		var param = [sub.companyid, sub.personnelid, strDate];
		AJ.RS({
			service : "WorkCheck",
			method : "queryMyWorkDayCheckList",
			scope : this,
			params : param,
			success : function(result) {
				data1.clear();
				if (!CU.isEmpty(result.data)) {
					data1.loadData(result.data);
				}
			}
		});		
	};

	Model.prototype.modelLoad = function(event){
		
	};
	//二维码
	Model.prototype.button2Click = function(event){
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
		cordova.plugins.barcodeScanner.scan(succss, err);
			function succss(result){
				// 当result.cancelled为true时，说明用户取消了本次扫描！
				if (result.cancelled) {
					return;
				}
				var NodeInfo = JSON.parse(result.text);
				var param=[sub.companyid,NodeInfo.id,sub.personnelid,sub.personnelname];
						  AJ.RS({service:"WorkCheck",method:"getCheckHint",scope:this,params:param,
                  			success:function(result){
                  				if(!CU.isEmpty(result.data)){
                  					navigator.speech.startSpeaking(result.data);
                  					navigator.notification.alert(result.data,function(){},"提示","确定");
                  					justep.Shell.showPage(require.toUrl('$UI/emp_app/11workcheck/workCheck.w'),{"value":"value"});
                  				}
                  			}	               
                  		});
			}
			function err(){
				CU.hint("扫码失败！");			 	
			}
		}
	};
	//NFC
	Model.prototype.button3Click = function(event){
		CU.hint("请将手机背面贴近NFC标签！");
	};
	//时间变化
	Model.prototype.input1Change = function(event){
		var strDate = event.value;
		var data1 = this.comp("data1");
		var param = [sub.companyid, sub.personnelid, strDate,null];
		AJ.RS({
			service : "WorkCheck",
			method : "queryMyWorkDayCheckList",
			scope : this,
			params : param,
			success : function(result) {
					data1.clear();
				if (!CU.isEmpty(result.data)) {
					data1.loadData(result.data);
				}else{
					navigator.notification.alert(strDate+",没有考勤记录！",function(){},"提示","确定");
				}
			}
		});
	};
	return Model;
});