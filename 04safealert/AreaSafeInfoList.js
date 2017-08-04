define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");

	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
	
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
    require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
    
    require("cordova!cordova-plugin-spinner-dialog");
	
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	
	var Model = function(){
		this.callParent();
	};
	Model.prototype.data1CustomRefresh = function(event){
		var areaId = this.params.areaid;
		var params = areaId;
		AJ.RS({
			service : "Personnel",
			method : "querySafeDocsByAreaID",
			scope : this,
			params : params,
			success : function(result) {
				//console.log(JSON.stringify(result.data));
				event.source.loadData(result.data);
			}
		});	
	};

	Model.prototype.modelParamsReceive = function(event){
         var areaName=event.params.areaName;
         this.comp("output1").set({value:areaName});
	};


	Model.prototype.col20Click = function(event){
		 var rows = event.bindingContext.$object;
    	 var fileUrl = "";
    	 var contentType = "";
    	 var fileName = rows.val("ORIGINALNAME");
    	 //fileName=Com.replaceSpace(fileName);
    	 var id = rows.val("ID");
    	 var suffix = rows.val("DOCTYPE");
    	//如果本地存在，查看本地的文件   
    	if(fileName.substring(fileName.length-3) == 'pdf'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/pdf";
		}
    	if((fileName.substring(fileName.length-3) == 'doc')||(fileName.substring(fileName.length-4) == 'docx')){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/msword";
		}
		if(fileName.substring(fileName.length-3) == 'jpg'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "image/jpeg";
		}
		if((fileName.substring(fileName.length-3) == 'ppt')|| (fileName.substring(fileName.length-4) == 'pptx')){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/vnd.ms-powerpoint";
		}
		if(fileName.substring(fileName.length-3) == 'png'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "image/png";
		}
		if((fileName.substring(fileName.length-3) == 'xls')||(fileName.substring(fileName.length-4) == 'xlsx')){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/vnd.ms-excel";
		}
		
		
		//如果打开本地失败,打开服务器上的文件
    	cordova.plugins.fileOpener2.open(fileUrl, contentType, {  
			error : function() {
				var src=CFG.url+"/PlayMedio.do?companyid="+CFG.companyid+"&id="+id+"&suffix="+suffix+"&filename=/"+fileName;
				if((suffix == "PDF")||(suffix == "DOC")||(suffix == "DOCX")||(suffix == "JPG") || (suffix == "PPT")|| (suffix == "PPTX")|| (suffix == "PNG")||(suffix == "XLS")){
					window.plugins.spinnerDialog.show(null,"正在加载...",true);
					var fileTransfer = new FileTransfer();
					   fileTransfer.download(
							   src, fileUrl, 
						 function(entry) {
								   window.plugins.spinnerDialog.hide();
								   cordova.plugins.fileOpener2.open(fileUrl,contentType, function success(){}, function error(){});
					      },
					      function(error) {
					    	  //alert("222");
					    	  window.plugins.spinnerDialog.hide();
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
