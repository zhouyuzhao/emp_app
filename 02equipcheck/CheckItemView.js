define(function(require){
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("cordova!com.phonegap.plugins.videoplayer");//播放视频
	
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
	
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var areaID="";
	var taskID="";
	var value = "";
	var Model = function(){
		this.callParent();
	};
	//接收父页面传过来的参数
	Model.prototype.modelParamsReceive = function(event){
		var id= event.params.id;
		value = event.params.value;
		var itemRdData=this.comp('itemRdData');
	  	var data1=this.comp('data1');
		AJ.RS({service:"EquipCheck",method:"queryCheckedItemInfo",scope:this,params:[id],
				success:function(result){ 
					itemRdData.loadData([result.data]);
					itemRdData.first();
					areaID=result.data.AREAID;
					taskID=result.data.TASKID;
			   }
			});
		var params =["SP_CHECKRESULTRECORD","ID",id];
		AJ.RS({service:"FileAttach",method:"queryList",scope:this,params:params,
				success:function(result){				
					data1.loadData(result.data);	  
				  }	 			
			 });
				
	};

    Model.prototype.row8Click = function(event){
    	 var rows = event.bindingContext.$object;
    	 var fileUrl = "";
    	 var contentType = "";
    	 var fileName = rows.val("originalname");
    	 var id = rows.val("id");
    	 var suffix = rows.val("filesuffixname").toUpperCase();

    
    	//如果本地存在，查看本地的文件   
    	if(fileName.substring(fileName.length-3).toUpperCase() == 'JPG'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "image/jpeg";
		}
    	if(fileName.substring(fileName.length-3).toUpperCase() == 'PDF'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/pdf";
		}
		if(fileName.substring(fileName.length-3).toUpperCase() == 'WAV'){
			fileUrl = CFG.localpath_audio+fileName;
			contentType = "audio/wav";
		}
		if(fileName.substring(fileName.length-3).toUpperCase() == 'MP4'){
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
									   cordova.plugins.fileOpener2.open(fileUrl,contentType,function success(){}, function error(){});
								   }
					      },
					      function(error) {
					      }
					   );
				}else{
					 cordova.plugins.videoPlayer.play(src);
				}				
			},
			success : function() {
				//alert("本地成功！");
			}
		});
	}; 
	
	Model.prototype.closebtnClick = function(event){
		if (CU.isEmpty(value)) {
			justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
				areaID : areaID,
				taskID : taskID
			});
		} else {
			this.close();
		}
 	};

	Model.prototype.submitbtnClick = function(event){
		var remark = this.comp("textarea1").val();
		console.log(remark);
	
		return;
		 AJ.RS({service:"EquipCheck",method:"saveCheckItemRd",async:false,scope:this,params:params,
				success:function(result){
				justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'),{areaID:areaID,taskID:taskID,taskName:localStorage.getItem("taskName")});
			 
		 }
		});
	};

	return Model;
});