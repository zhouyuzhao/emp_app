define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");

	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var sub={};
	var recordid = "";
	var wfinstanceid="";
	var defectLevelName = "";
	var plangroupid = "";
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	Model.prototype.modelParamsReceive = function(event){
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
	    wfinstanceid=info.WFINSTANCEID;
	    defectLevelName = info.DEFECTLEVELNAME;
	    plangroupid = info.PLANGROUPID;
	    this.modelLoad2();
	};

	Model.prototype.button2Click = function(event){
		this.comp("windowReceiver2").windowCancel();
	};
	
	//缺陷分配（选择检修班组）
	Model.prototype.button1Click = function(event){
		var selectId1 = this.getIDByXID("select1");
		var selectId6 = this.getIDByXID("select6");
		var data6 = this.comp("data6");
		var data1 = this.comp("data1");
		//回显缺陷等级
		data6.each(function(param){
			var codename = param.row.val('codename');
			if(codename == defectLevelName){
				$("#"+selectId1+" option[value='"+param.row.val('codeid')+"']").attr("selected",true);	
			}
		});
		//回显检修专业
		data1.each(function(param){
			var codeid = param.row.val('codeid');
			if(codeid == plangroupid){
				$("#"+selectId6+" option[value='"+codeid+"']").attr("selected",true);	
			}
		});
		
		this.comp("popOver1").show();
	};
	//缺陷分配（确认）
	Model.prototype.button3Click = function(event){
		//缺陷等级ID、检修专业ID、检修班组ID、检修负责人ID、退回原因
		var defectlevel = this.comp("select1").val();
		var plangroupid = this.comp("select6").val();
		var workcenterid =this.comp("select2").val();
		var workmanager = this.comp("select3").val();
		var back = this.comp("textarea1").val();
		if(CU.isEmpty(defectlevel)){
				navigator.notification.alert("请选择缺陷等级！",function(){},"提示","确定");
				return;
			}
		if(CU.isEmpty(plangroupid)){
				navigator.notification.alert("请选择检修专业！",function(){},"提示","确定");
				return;
			}
		if(CU.isEmpty(workcenterid)){
				navigator.notification.alert("请选择检修班组!",function(){},"提示","确定");
				return;
			}
		if(CU.isEmpty(workmanager)){
				navigator.notification.alert("请选择检修负责人！",function(){},"提示","确定");
				return;
			}
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在分配...",true);
		}
		var me = this;
		var params ={recordid:recordid,plangroupid:plangroupid,workcenterid:workcenterid,workmanager:workmanager,defectlevel:defectlevel};
		AJ.RS({userid:sub.userid,service:"Equipdefectrd",method:"saveOrUpdate",scope:this,params:params,
		success:function(result){
			var params2=[wfinstanceid,"审核通过！",1,sub.companyid,sub.userid];
			AJ.RS({service:"TodoList",method:"audit",scope:this,params:params2,
				success:function(result){
					me.getParentModel().comp("data1").refreshData();
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					me.comp("popOver1").hide();
					me.comp("windowReceiver2").windowCancel();
					//justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'));
				 } 		
	 	 	});
		  }	 			
		});
	};
	
	Model.prototype.modelLoad2 = function(event){
		var param =[];
		var data1 = this.comp("data1");
		var data2 = this.comp("data2");    
		var data3 = this.comp("data3");
		var data4 = this.comp("data4");
		var data6 = this.comp("data6");
		//加载附件信息
		var params =["EQUIPDEFECTRD","RECORDID",recordid];
		AJ.RS({service:"FileAttach",method:"queryList",scope:this,params:params,
				success:function(result){
					data4.loadData(result.data);
				}
			});
		//加载下拉列表信息		
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getPlanMemberGroupList",AddEmpty:"false",scope:this,params:param,
				success:function(result){
					data1.loadData(result);
				}
			});
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getMaintainWorkCenterList",AddEmpty:"false",scope:this,params:param,
				success:function(result){
					data2.loadData(result);
				}
			});
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getPersonnelByPlanMemberGroup",AddEmpty:"false",scope:this,params:param,
					success:function(result){
						//console.log(JSON.stringify(result));
						data3.loadData(result,'','','',true);
				}
			});
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getDropListByView",ViewName:"V_DefectLevel",AddEmpty:"false",scope:this,params:params,
					success:function(result){
						data6.loadData(result);	
				}	 			
			});	
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
				if(suffix == "JPG"||suffix == "PDF"||suffix == "MP4"){
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

	Model.prototype.button5Click = function(event){
		this.comp("popOver1").hide();
	};
	//退回
	Model.prototype.button4Click = function(event){
		//退回原因
		var backreason = this.comp("textarea1").val();
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在退回...",true);
		}
		var me = this;
	     var params=[localStorage.getItem('currid'),backreason,0,sub.companyid,sub.userid];
	 	    	AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
	 	    		success:function(result){
	 	    			if(result.success){
	 	    				me.getParentModel().comp("data1").refreshData();
	 	    				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
	 	    					window.plugins.spinnerDialog.hide();
	 	    				}
	 	    				me.comp("windowReceiver2").windowCancel();
	 	    				//justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'));
	 	    			}else{
	 	    				CU.hint("退回失败！");
	 	    			}
	 	    		} 		
	 	    });
	};


	return Model;
});