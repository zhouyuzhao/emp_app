define(function(require){
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var CFG = require("$UI/emp_app/common/util/Config");
	var sub={};
	var recordid = "";
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	Model.prototype.modelParamsReceive = function(event){
		this.comp("demoPopOver").hide();
	    var info=JSON.parse(event.params.data);
	    this.comp("output").set({value:info.EQUIPMENTNAME});
	    this.comp("input1").set({value:info.UNITIDNAME});
	    this.comp("input2").set({value:info.EQUIPMENTNAME});
	    this.comp("input3").set({value:info.OLDCODE});
	    this.comp("input4").set({value:info.DEFECTPOSITION});
	    this.comp("input5").set({value:info.DEFECTLEVELNAME});
	    this.comp("input6").set({value:info.PERSONNELNAME});
	    this.comp("input7").set({value:info.REPORTDATE});
	    this.getElementByXid("span5").innerHTML=info.DEFECTLINFO;
	    recordid = info.RECORDID;
	    //加载data1信息
	    this.dataLoad();
	};
	
	Model.prototype.dataLoad = function(event){
		var data1 = this.comp("data1");
		var params =["EQUIPDEFECTRD","RECORDID",recordid];
		AJ.RS({service:"FileAttach",method:"queryList",scope:this,params:params,
				success:function(result){
					data1.loadData(result.data);
				}
		});
	};
	
	
	Model.prototype.goBtnClick = function(event){
	    this.comp("demoPopOver").show();
	};
	Model.prototype.returnBtnClick = function(event){
        this.comp("demoPopOver").hide();
	};
	Model.prototype.enterBtnClick = function(event){
		var me = this;
		var str = this.comp("textarea1").val();
        if(!CU.isEmpty(str)){
        	if (justep.Browser.isX5App && justep.Browser.isAndroid) {
        		window.plugins.spinnerDialog.show(null,"正在退回...",true);
        	}
        	var params=[localStorage.getItem('currid'),str,0,sub.companyid,sub.userid];
        	AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
        		success:function(result){
        			if(result.success){
        				 me.getParentModel().comp("data1").refreshData();
        				 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
	 	    					window.plugins.spinnerDialog.hide();
	 	    				}
        				 me.comp("windowReceiver1").windowCancel();
        				justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'));
        			}else{
        				CU.hint("退回失败！");
        			}
        		} 		
	 	    });
        }else{
            this.getElementByXid("InfoBox").style.display="block";
        }
	};
	Model.prototype.passBtnClick = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null, "正在提交...", true);
		}
		var me = this;
		var params = [ localStorage.getItem('currid'), "审核通过！", 1, sub.companyid, sub.userid ];
		AJ.RS({
			service : "TodoList",
			method : "audit",
			scope : this,
			params : params,
			success : function(result) {
				if (result.success) {
					me.getParentModel().comp("data1").refreshData();
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							window.plugins.spinnerDialog.hide();
	 	    			}
					me.comp("windowReceiver1").windowCancel();
				} else {
					CU.hint("审核失败！");
				}

			}
		});
	};
	
	Model.prototype.OkBtnClick = function(event){
         this.getElementByXid("InfoBox").style.display="none";
	};
	Model.prototype.modelActive = function(event){
		//this.comp("demoPopOver").hide();
	};
	Model.prototype.button2Click = function(event){
		this.comp("windowReceiver1").windowCancel();
	};
	//查看文件
	Model.prototype.row14Click = function(event){
    	 var rows = event.bindingContext.$object;
    	 var fileUrl = "";
    	 var contentType = "";
    	 var me = this;
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
				if(suffix == "JPG"||suffix == "PDF"){
					window.plugins.spinnerDialog.show(null,"正在加载...",true);
					window.FileTransfer.download(
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
	return Model;
});