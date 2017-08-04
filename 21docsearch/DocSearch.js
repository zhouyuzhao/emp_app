define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Com = require("$UI/emp_app/common/util/CommonUtil");
    var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	
    require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
  	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
    require("cordova!com.phonegap.plugins.videoplayer");//播放视频
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	require("cordova!com.justep.cordova.plugin.iFlytek"); //语音识别
	require("cordova!cordova-plugin-device-motion");//摇一摇



	var sub ={};
	var Model = function(){
		this.callParent();
		 if(!Com.isEmpty(localStorage.getItem('SUB'))) {
			  sub =JSON.parse(localStorage.getItem('SUB'));
			  
		}
	};
 	Model.prototype.SearchBtnClick = function(event){
	    var self=this;
        if ($.trim(this.comp('searchInput').val()) !== "" ) {
        	window.plugins.spinnerDialog.show(null,"正在查询...",true);
		    var info=$.trim(this.comp('searchInput').val());
		     var params =[sub.companyid,sub.userid,info,1];
			AJ.RS({userid:sub.userid,service:"Others",method:"searchDocument",scope:this,params:params,
			success:function(result){
				if(Com.isEmpty(result.data.valueList)){
					window.plugins.spinnerDialog.hide();
					self.comp("data1").clear();
					Com.hint("没有查询到相关资料！");
					 
				}else{
					window.plugins.spinnerDialog.hide();
					self.comp("data1").loadData(result.data.valueList);	
				}
						
			  }	 			
			});				
		 
		this.getElementByXid("list").style.display="";
		}else{
			navigator.notification.alert("请输入要查询的内容！",function(){},"提示","确定");
		}
	};

	Model.prototype.row5Click = function(event){
        var rows = event.bindingContext.$object;
        var open = cordova.plugins.fileOpener2.open
    	 var fileUrl = "";
    	 var contentType = "";
    	 var me = this; 
    	 var fileName = rows.val("id");
         var id = rows.val("id");
    	 var suffix = rows.val("format").toUpperCase();
    	//如果本地存在，查看本地的文件   
    	if(suffix == 'PDF'){
    		fileUrl = CFG.localpath_image+fileName+"."+suffix;
    		contentType = "application/pdf";
		}
    	//如果本地存在，查看本地的文件   
    	if((suffix == 'DOC')||(suffix == 'DOCX')){
    		fileUrl = CFG.localpath_image+fileName+"."+suffix;
    		contentType = "application/msword";
		}
		//如果打开本地失败,打开服务器上的文件
		cordova.plugins.fileOpener2.open(fileUrl, contentType, {  
			error : function() {
				var src=CFG.url+"/PlayMedio.do?companyid="+CFG.companyid+"&id="+id+"&suffix="+suffix+"&filename=/"+fileName;
				//播放服务器上的文件
				if((suffix == "PDF")||(suffix == "DOC")||(suffix == "DOCX")){
					window.plugins.spinnerDialog.show(null,"正在加载...",true);
					var fileTransfer = new FileTransfer(); 
					fileTransfer.download(
							   src, fileUrl, 
						 function(entry) {
								window.plugins.spinnerDialog.hide();
								cordova.plugins.fileOpener2.open(fileUrl,contentType, function success(){}, function error(){});
							
					      },
					      function(error) {
					    	  window.plugins.spinnerDialog.hide();
					    	
					      }
					   );
				}			
			},
			success : function() {
				//alert("本地成功！");
			}
		});
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("frame");
	};

	Model.prototype.modelParamsReceive = function(event){
		this.comp("searchInput").clear();
		this.comp("data1").clear();
/*		var oldValue = {
			x : null,
			y : null,
			z : null
		}
		var options = {
			frequency : 600
		};
		var me = this;
		this.comp("searchInput").clear();
		this.comp("data1").clear();
		//navigator.notification.confirm("请对准麦克风开始说话！",function(){},"提示",["确定","取消"]);
		var searchInput = this.comp('searchInput');
    	navigator.speech.startListening({}, 
        function(res) {
    		window.plugins.spinnerDialog.show(null,"正在合成...",true);
    		var str = JSON.stringify(res);
    		str = str.replace("\"","").replace("\"","");
    		me.comp('searchInput').val(str.substring(0,str.length-1));
    		window.plugins.spinnerDialog.hide();
    		me.SearchBtnClick(event);
    });
    //摇一摇
	navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		function onSuccess(newValue) {
			var changes = {}, bound = 10;
			if (oldValue.x !== null) {
				changes.x = Math.abs(oldValue.x - newValue.x);
				changes.y = Math.abs(oldValue.y - newValue.y);
				changes.z = Math.abs(oldValue.z - newValue.z);

				if (changes.x > bound || changes.y > bound || changes.z > bound) {
				me.comp('searchInput').clear();
					navigator.speech.startListening({}, 
						function(res) {
							window.plugins.spinnerDialog.show(null,"正在合成...",true);
							var str = JSON.stringify(res);
							str = str.replace("\"","").replace("\"","");
							me.comp('searchInput').val(str.substring(0,str.length-1));
							window.plugins.spinnerDialog.hide();
							me.SearchBtnClick(event);
						});
				}
			}
			oldValue = {
				x : newValue.x,
				y : newValue.y,
				z : newValue.z
			}
		}
		function onError() {
			alert('失败!');
		}
*/    
	};
	//语音
	Model.prototype.button1Click = function(event){
		var me = this;
		navigator.notification.confirm("请对准麦克风开始说话！", function(index) {
			if (index == "1") {
				navigator.speech.startListening({}, function(res) {
					window.plugins.spinnerDialog.show(null, "正在合成...", true);
					var str = JSON.stringify(res);
					str = str.replace("\"", "").replace("\"", "");
					me.comp('searchInput').val(str.substring(0,str.length-1));
					window.plugins.spinnerDialog.hide();
					me.SearchBtnClick(event);
				});
			}
		}, "提示", [ '确定', '取消' ]);
	};

	return Model;
});