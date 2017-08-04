define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
    require("cordova!com.phonegap.plugins.videoplayer");//播放视频
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
	var objectId = "";
	var Model = function(){
		this.callParent();
	};
	//关闭
	Model.prototype.button1Click = function(event){
		//justep.Shell.showPage("frame");
		this.close();
	};

	//巡检数据页面
	Model.prototype.content4Active = function(event){
		this.comp("windowContainer4").load(require.toUrl("$UI/emp_app/10equipquery/equip_checkinfo.w"),{objectId:objectId});
	};
	//缺陷记录页面
	Model.prototype.content5Active = function(event){
		this.comp("windowContainer5").load(require.toUrl("$UI/emp_app/10equipquery/equip_defectinfo.w"),{objectId:objectId});
	};
	
	//页面激活  加载设备基本信息
	Model.prototype.modelParamsReceive = function(event){
		objectId = this.params.objectId;
		//var objectId = "81515EBA509F4BD5B737517490827183";
		var data1 = this.comp("data1");
		var data2 = this.comp("data2");
		var params =[objectId];
		AJ.RS({service:"Others",method:"queryEquipmentInfo",scope:this,params:params,
				success:function(result){
					var str = JSON.stringify([result.data]);
					data1.loadData(JSON.parse(str));
					data1.first();
				}				
		});
		//加载附件信息
		AJ.RS({service:"Others",method:"queryEquipDocs",scope:this,params:params,
				success:function(result){
					//console.log(JSON.stringify(result.data));
					data2.loadData(result.data);
				}				
			});
	};
	//查看附件
	Model.prototype.row9Click = function(event){
		 var rows = event.bindingContext.$object;
    	 var fileUrl = "";
    	 var contentType = "";
    	 var me = this;
    	 var fileName = rows.val("GRAPHDOCNAME");
    	 var id = rows.val("SAVEDFILENAME");
    	 var suffix = rows.val("CODENAME");
    
    	//如果本地存在，查看本地的文件   
    	if(suffix == 'JPG'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "image/jpeg";
		}
    	if(suffix == 'PDF'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/pdf";
		}
		if(suffix == 'WAV'){
			fileUrl = CFG.localpath_audio+fileName;
			contentType = "audio/wav";
		}
		if(suffix == 'MP4'){
			fileUrl = CFG.localpath_video+fileName;
			contentType = "video/mp4";
		}
		//如果打开本地失败,打开服务器上的文件
		cordova.plugins.fileOpener2.open(fileUrl, contentType, {  
			error : function() {
				var src=CFG.url+"/PlayMedio.do?companyid="+CFG.companyid+"&id="+id+"&suffix="+suffix+"&filename=/"+fileName;
				//播放服务器上的文件
				if(suffix == "JPG"||suffix == "PDF"||suffix == "MP4"){
					window.plugins.spinnerDialog.show(null,"正在加载...",true);
					var fileTransfer = new FileTransfer();
					fileTransfer.download(
							   src, fileUrl, 
						 function(entry) {
								   window.plugins.spinnerDialog.hide();
								   if(suffix == 'MP4'){
									   cordova.plugins.videoPlayer.play(fileUrl);
								   }else{
									   cordova.plugins.fileOpener2.open(fileUrl,contentType, function success(){}, function error(){});
								   }
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


	return Model;
});