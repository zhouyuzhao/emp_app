define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var Com = require("$UI/emp_app/common/util/CommonUtil");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	   
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
    require("cordova!com.phonegap.plugins.videoplayer");//播放视频
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
    
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelParamsReceive = function(event){
	    var info=JSON.parse(event.params.data);
	    var id=info.userdata.id.value;
	    var data1=this.comp('data1');
	    var title=JSON.stringify(info.TITLE.value).substring(1,20);
	    this.comp("output").set({value:title});
	    
	    if (!Com.isEmpty(info.CONTENT.value))this.getElementByXid("content").innerHTML=info.CONTENT.value; 
	    var params =["SYSTEMNOTICEBOARD","NOTICEID",id];
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
    	 var me = this;
    	 
    	 var fileName = rows.val("originalname");
    	 fileName=Com.replaceSpace(fileName);
    	 //alert(fileName);
    	 var id = rows.val("id");
    	 var suffix = rows.val("filesuffixname").toUpperCase();
    	//如果本地存在，查看本地的文件   
    	if(fileName.substring(fileName.length-3).toUpperCase() == 'PDF'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/pdf";
		}
    	//如果本地存在，查看本地的文件   
    	if((fileName.substring(fileName.length-3).toUpperCase() == 'DOC')||(fileName.substring(fileName.length-4).toUpperCase() == 'DOCX')){
    		fileUrl = CFG.localpath_image+fileName;
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
					    	  //alert(0);
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