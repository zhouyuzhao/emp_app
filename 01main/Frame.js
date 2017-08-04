define(function(require){
	var justep = require("$UI/system/lib/justep");
	var Com = require("$UI/emp_app/common/util/CommonUtil");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-file-opener2");
	require("cordova!cordova-plugin-file-transfer");
	require("cordova!cordova-plugin-spinner-dialog");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var sub ={};
	//待处理个数
	var defect="";
	var Model = function(){
		this.callParent();
		var me = this;
		function refresh(){
			me.modelLoad(event);
		}
		//每隔多久刷新data
		window.setInterval(refresh,1500);
	};
	
	Model.prototype.modelLoad = function(event){
		var numberSum = Number(localStorage.getItem("number1"))+Number(localStorage.getItem("number2"))+Number(localStorage.getItem("number3"))+Number(localStorage.getItem("number4"))+Number(localStorage.getItem("number5"))+Number(localStorage.getItem("number6"));
		var numberVacation = Number(localStorage.getItem("number7"));
		var numberUserCar = Number(localStorage.getItem("number8"));
		var numberReceived = Number(localStorage.getItem("number9"));
		var numberSend = Number(localStorage.getItem("number10"));
		this.getElementByXid("badgeSum").innerHTML = numberSum;
		this.getElementByXid("badgeSum2").innerHTML = numberVacation;
		this.getElementByXid("badgeSum3").innerHTML = numberUserCar;
		this.getElementByXid("badgeSum4").innerHTML = numberReceived;
		this.getElementByXid("badgeSum5").innerHTML = numberSend;
    };
	
	Model.prototype.exitBtnClick = function(event){
		localStorage.setItem('taskID',"");
	    justep.Shell.showPage('main');
	    //justep.Shell.showPage(require.toUrl('$UI/emp_app/00login/Login.w'));
	};
	
	Model.prototype.equipcheckClick = function(event){
		if(Com.isEmpty(sub.workcenterid)){
			 this.comp("messageDialog1").show({
	        	    "type":"OK",
					"title" : "您没有分配到对应的巡检班组，请联系管理员分配班组！"
				});			 
		}else{
			 justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/MyTaskList.w'),{"value":"1"});   
		}
   };
	
	Model.prototype.personlocationClick = function(event){
	   justep.Shell.showPage(require.toUrl('$UI/emp_app/03personlocation/PersonStatic.w'));
	};
	
	
	Model.prototype.safealertClick = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/04safealert/AllSafeInfo.w'));		
	};
	
	Model.prototype.equipfaultClick = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'));
	};	
	
	Model.prototype.moveauditClick = function(event){
	  justep.Shell.showPage(require.toUrl('$UI/emp_app/06workaudit/AuditFrame.w'));		
	};
	
	Model.prototype.videomonitorClick = function(event){
		var src1=CFG.url+"/FileDownload.do?companyid="+CFG.companyid+"&type=apk&suffix=apk&filename=VideoInterface.apk";
		var src2=CFG.url+"/FileDownload.do?companyid="+CFG.companyid+"&type=apk&suffix=apk&filename=iVMS-4500.apk";
		src1 = encodeURI(src1);
		src2 = encodeURI(src2);
		var fileUrl1 = CFG.localpath_apk+"VideoInterface.apk";
		var fileUrl2 = CFG.localpath_apk+"iVMS-4500.apk";
		cordova.plugins.fileOpener2.appIsInstalled('com.video.videointerface', {
			success : function(res) {
				if (res.status === 0) {
					window.plugins.spinnerDialog.show(null,"请稍等...",true);
					var fileTransfer = new FileTransfer();
					fileTransfer.download(src1, fileUrl1, function(entry) {
						fileTransfer.download(src2, fileUrl2, function(entry) {
							window.plugins.spinnerDialog.hide();
							cordova.plugins.fileOpener2.open(fileUrl1, 'application/vnd.android.package-archive');
						});
					});
				} else {
				} 
			}
		});

		cordova.plugins.fileOpener2.appIsInstalled('com.mcu.iVMS', {
			success : function(res) {
				if (res.status === 0) {
					cordova.plugins.fileOpener2.open(fileUrl2, 'application/vnd.android.package-archive');
				}
			}
		});
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.open("myapp://vinterface/openwith?data=mydata", "_system");
		}
	};
	
    Model.prototype.rundataClick = function(event){
    justep.Shell.showPage(require.toUrl('$UI/emp_app/08equiprundata/EquipData2.w'));
  };
  
   Model.prototype.allqueryClick = function(event){
	   justep.Shell.showPage(require.toUrl('$UI/emp_app/09dataquery/ChartFrame.w'));
	};
	
	Model.prototype.morefunClick = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/10equipquery/equip_Entry.w'));
	};	
		

	
	Model.prototype.modelParamsReceive = function(event){
	this.moduleSelect();//模块选择方法
	localStorage.setItem("number1","0");
	localStorage.setItem("number2","0");
	localStorage.setItem("number3","0");
	localStorage.setItem("number4","0");
	localStorage.setItem("number5","0");
	localStorage.setItem("number6","0");
	localStorage.setItem("number7","0");
	localStorage.setItem("number8","0");
	localStorage.setItem("number9","0");
	localStorage.setItem("number10","0");
	var me =this;
	if (!Com.isEmpty(localStorage.getItem('SUB'))) {
			sub = JSON.parse(localStorage.getItem('SUB'));
		}
		var userinfo = "";
		userinfo = sub.personnelname + "-" + sub.departmentname + "[" + sub.position + "]";
		this.comp("outputtitle").set({
			value : userinfo
		});
		
		//设备缺陷条数
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({service:"TodoList",method:"queryEquipDefectRdList",scope:this,params:[params,sub.companyid,sub.userid],
			success:function(result){			
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number1", result.data.valueList.length);
				}else{
					localStorage.setItem("number1","0");
				}			   
			} 		
		}); 
		//物料领用条数
		var  params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({service:"TodoList",method:"queryUsingRequestNoteList",scope:this,params:[params,sub.companyid,sub.userid],
			success:function(result){
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number2", result.data.valueList.length);
				}else{
					localStorage.setItem("number2","0");
				}
			} 		
		});
		
		//物料采购条数
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({service:"TodoList",method:"queryPurchaseRequestNoteList",scope:this,params:[params,sub.companyid,sub.userid],
			success:function(result){
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number3", result.data.valueList.length);
				}else{
					localStorage.setItem("number3","0");
				}				 
			} 		
		});
		
		//外委服务条数
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({service:"TodoList",method:"queryOrderServiceNoteList",scope:this,params:[params,sub.companyid,sub.userid],
			success:function(result){
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number4", result.data.valueList.length);
				}else{
					localStorage.setItem("number4","0");
				}	
			} 		
		});
		
		//工作票条数
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
				}else{
					localStorage.setItem("number5","0");
				}
			}
		});
		//操作票条数
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({service:"TodoList",method:"queryOperateTicketList",scope:this,params:[params,sub.companyid,sub.userid],
			success:function(result){
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number6", result.data.valueList.length);
				}else{
					localStorage.setItem("number6","0");
				}
			} 		
		});
		//请假审批条数
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({
			service : "TodoList",
			method : "queryVacationList",
			scope : this,
			params : [params,sub.companyid,sub.userid],
			success : function(result) {
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number7", result.data.valueList.length);
				}else{
					localStorage.setItem("number7","0");
				}
			}
		});
		//用车审批条数
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({
			service : "TodoList",
			method : "queryUseCarList",
			scope : this,
			params : [params,sub.companyid,sub.userid],
			success : function(result) {
				if(!CU.isEmpty(result.data.valueList)){
					localStorage.setItem("number8", result.data.valueList.length);
				}else{
					localStorage.setItem("number8","0");
				}
			}
		});
		//收文条数
		 var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({
			service : "SP_dodocworks",
			method : "queryReceiveList",
			scope : this,
			params : [params,sub.personnelid],
			success : function(result) {
					if(!CU.isEmpty(result.data.valueList)){
						localStorage.setItem("number9", result.data.valueList.length);
					}else{
						localStorage.setItem("number9","0");
					}
					
			}
		});
		//发文条数
		var params = {
			page : '1',
			start : '0',
			pageSize : '50'
		};
		AJ.RS({
			service : "SP_dodocworks",
			method : "querySendList",
			scope : this,
			params : [ params, sub.personnelid ],
			success : function(result) {
				if (!CU.isEmpty(result.data.valueList)) {
					localStorage.setItem("number10", result.data.valueList.length);
				}else{
					localStorage.setItem("number10","0");
				}
			}
		});
	};	
	//请假申请
	Model.prototype.button2Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
	};	
	//考勤管理
	Model.prototype.button1Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/11workcheck/workCheck.w'),{"value":"value"});
	};	
	//用车申请
	Model.prototype.button3Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCar.w'),{"value":"value"});
	};	
	//收文管理
	Model.prototype.button4Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/14received/receivedList.w'),{"value":"value"});
	};	
	//发文管理
	Model.prototype.button5Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/15send/sendList.w'),{"value":"value"});
	};	

			
		
	Model.prototype.moduleSelect = function(event){
		//var arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
		var arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15,16);
		for (var i = 0; i < arr1.length; i++) {
			$(".module" + arr1[i]).hide();
		}
		var modules = localStorage.getItem('module');
		if (CU.isEmpty(modules)) {
			for (var i = 0; i < arr1.length; i++) {
				$(".module" + arr1[i]).show();
			}
			return;
		} else {

			var moduleArray = modules.split(" ");
			for (var i = 0; i < moduleArray.length; i++) {
				if (contains(arr1, Number(moduleArray[i]))) {
					$(".module" + moduleArray[i]).show();
				}
			}

			function contains(arr, obj) {
				var i = arr.length;
				while (i--) {
					if (arr[i] === obj) {
						return true;
					}
				}
				return false;
			}
		}
	};	
			
		
	Model.prototype.button6Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/04safealert/safe.w'),{"id":"id"});
	};	
			
		
	Model.prototype.button7Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/16recordquery/recordQuery.w'),{"id":"id"});
	};	
			
		
	return Model;
});