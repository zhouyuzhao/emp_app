define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var Com = require("$UI/emp_app/common/util/CommonUtil");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-app-version");
	require("cordova!cordova-plugin-spinner-dialog");
	require("cordova!cordova-plugin-dialogs");
	require("cordova!cordova-plugin-file-transfer");
	require("cordova!cordova-plugin-file-opener2");
	require("cordova!cordova-plugin-file");
	require("cordova!cordova-plugin-device");

	var sub={};
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelLoad = function(event){
	       var userid="";
			if(!Com.isEmpty(localStorage.getItem('SUB'))) {
				  sub =JSON.parse(localStorage.getItem('SUB'));
				  userid=sub.userid; 
			}
		   var date= new Array("日", "一", "二", "三", "四", "五", "六");  
           var week = new Date().getDay();  
           var str = "星期"+ date[week];  
		   this.getElementByXid("name").innerHTML=sub.personnelname; 
		   this.getElementByXid("section").innerHTML=sub.departmentname;
		   this.getElementByXid("date").innerHTML=str;  		   
		   
		   var compbind=this.comp("bindtoggle");
		   //检测手机设备标识绑定情况
		  
			var param=[window.device.uuid,userid];
         	AJ.RS({service:"SystemSafety",method:"isDeviceBinded",scope:this,params:param,
      			success:function(result){
      				if(!Com.isEmpty(result.data)){
      				   var binded=result.data;
      				   if (binded==true){//绑定
      				   compbind.set({"checked" : true});
      				   }
      				   else{
      				    compbind.set({"checked" : false});
      				   }
      				}      				
      			}	               
      		});
    };

	Model.prototype.alterBtnClick = function(event){
          justep.Shell.showPage(require.toUrl('./Password.w'));
	};

	Model.prototype.bindtoggleChange = function(event){
       var compbind=this.comp("bindtoggle");
	   var userid="";
	   var type= compbind.get("value")==true?"1":"0";
		if(!Com.isEmpty(localStorage.getItem('SUB'))) {
			 var sub =JSON.parse(localStorage.getItem('SUB'));
			  userid=sub.userid;
		}
		var param=[window.device.uuid,userid,type];
		AJ.RS({service:"SystemSafety",method:"bindorUnbindUser",scope:this,params:param,
  			success:function(result){
  			}	               
  		});
     
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("frame");
	};
	//检测新版本
	Model.prototype.button1Click = function(event){
		this.comp("messageDialog2").show();
	};


	Model.prototype.messageDialog2OK = function(event){
		var span4 = this.getElementsByXid("span4");
		var fileName = "安全生产V"+$(span4).html()+".apk";
		var src=CFG.url+"/FileDownload.do?companyid="+CFG.companyid+"&type=apk&suffix=apk&filename="+fileName;
		src = encodeURI(src);
		var fileUrl = CFG.localpath_apk + fileName;
		window.plugins.spinnerDialog.show(null, "正在下载...", true);
			var fileTransfer = new FileTransfer();
			fileTransfer.download(src, fileUrl, function(entry) {
				window.plugins.spinnerDialog.hide();
				navigator.app.exitApp();
				cordova.plugins.fileOpener2.open(fileUrl, 'application/vnd.android.package-archive');
			}, function(error) {
				window.plugins.spinnerDialog.hide();
				navigator.notification.alert("下载失败！", function() {
				}, "提示", "确定");
			});
	};

	Model.prototype.modelParamsReceive = function(event){
		var me=this;
		var span3 = this.getElementsByXid("span3");
		var span4 = this.getElementsByXid("span4");
		var currentVersion = "";
		var latestVersion = "";
		cordova.getAppVersion.getVersionNumber(success, error);
		function success(result) {
			var str = JSON.stringify(result);
			str = str.replace("\"", "").replace("\"", "");
			currentVersion = str;
			$(span3).html(str);
		}
		function error(result) {
		}
		
		var params = [sub.companyid];
		AJ.RS({
			service : "Others",
			method : "getAPKVersion",
			scope : this,
			params : params,
			success : function(result) {
				latestVersion = result.data;
				$(span4).html(result.data);
				if(latestVersion > currentVersion){
					$(".div2").show();
					me.comp("messageDialog2").set({message:"您确认下载更新最新版本V"+latestVersion+"吗？"});
				}
			}
		});
	};


	//确定
	Model.prototype.button8Click = function(event){
		var module = this.comp("checkboxGroup1").val();
		localStorage.setItem("module",module);
		this.comp("popOver1").hide();
		justep.Shell.showPage(require.toUrl('$UI/emp_app/01main/Frame.w'),{"id":"1"});
	};
	//取消
	Model.prototype.button7Click = function(event){
		this.comp("popOver1").hide();
	};


	//模块选择
	Model.prototype.button2Click = function(event){
		var modules = localStorage.getItem('module');
		if(Com.isEmpty(modules)){
			modules='1 2 3 4 5 6 7 8 9 10 11 12 15 16';
		}
		this.comp("checkboxGroup1").val(modules);
		this.comp("popOver1").show();
	};
	
	return Model;
});