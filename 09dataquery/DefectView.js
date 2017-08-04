define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("$UI/system/lib/cordova/cordova");
	//require("css!$UI/demo/device/common/pub").load();
	require("cordova!cordova-plugin-camera");//照相
	require("cordova!cordova-plugin-media-capture");//视频
	require("cordova!cordova-plugin-media");//录音
	require("cordova!com.justep.cordova.plugin.iFlytek");  //语音识别
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
	require("cordova!com.phonegap.plugins.videoplayer");//播放视频
	
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	require("cordova!phonegap-plugin-barcodescanner");//二维码扫描插件

	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var sub ={};
	var objectId = "";
	var newDefect = "";
	var defectlinfo = "";
	var id = "";
	
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));	  
		}
	};

	//照相
	Model.prototype.photoClick = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady(){
			navigator.camera.getPicture(success, fail, {
        		//destinationType:navigator.camera.DestinationType.FILE_URI  //DATA_URL FILE_URI
        		//quality:100,
        		//targetWidth:244,
        		//targetHeight:501,
        		//saveToPhotoAlbum:true//将拍照好照片存储到本地 saveToPhotoLibrary
        	});
        	
        	var mediadata = me.comp("mediaData");
        	//拍照成功后回调
        	function success(imageURI){
        		var filename = imageURI.substr(imageURI.lastIndexOf('/')+1);
	        	mediadata.newData({index : 0});
				mediadata.setValue("filePath", imageURI);
				mediadata.setValue("fileName",filename);
				mediadata.setValue("createDate", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT ));
        	}
        	//拍照失败的回调
        	function fail(error){
        		CU.hint("照相失败！");
        	}
		}
	};

	//录像
	Model.prototype.videoClick = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady(){
			navigator.device.capture.captureVideo(succ, err,{limit : 1});
			var mediaData = me.comp('mediaData');
			function succ(mediaFiles) {
			var i, path, len;//优化大小，能够限制文档大小
			for (i = 0, len = mediaFiles.length; i < len; i += 1) {
   				path = mediaFiles[i].fullPath;
     			mediaData.newData({index : 0});
				mediaData.setValue("filePath", path);
				mediaData.setValue("fileName", mediaFiles[i].name);
				mediaData.setValue("createDate",justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT));
				}
			};
			function err(error) {
				CU.hint("录像失败！");
			};
		}
	};


	//录音
	Model.prototype.audioClick = function(event){
		this.comp("record").show();
		this.comp('recordTime').set({value: "00:00:00"});
		var me = this;
		// 根据系统时间产生文件名
		this.fileName = justep.Date.toString(new Date(), "yyyyMMddhhmmss") + ".wav";
		this.mediaRec = new Media(this.fileName,function() {},function(err) {});
		// 开始录音
		this.mediaRec.startRecord();
		var recTime = 0;
		this.mediaTimer = setInterval(function() {
			recTime = recTime + 1;
            me.setAudioPosition(recTime);
            me.comp('recordTime').set({value: me.timeLen});
		},1000);
	};

	//设置显示的时间
    Model.prototype.setAudioPosition = function(position) {
    	var hour = parseInt(position / 3600);// 小时数
		var min = parseInt(position / 60);// 分钟数
		if (min >= 60) {
			min = min % 60
		}
		var lastsecs = position % 60;
		if(hour < 10) hour = "0" + hour;
		if(min < 10) min = "0" + min;
		if(lastsecs < 10) lastsecs = "0" + lastsecs;
		
		this.timeLen = hour + ':' + min + ':' + lastsecs;
    }

	//暂停保存录音
	Model.prototype.image2Click = function(event){
		// 清空计时器
		clearInterval(this.mediaTimer);
		// 停止录音
		this.comp("record").hide();
		this.mediaRec.stopRecord();
		
		var filePath = CFG.localpath_audio+this.fileName;
		
		var data = this.comp("mediaData");
		data.newData({index : 0});
		data.setValue("filePath", filePath);
		data.setValue("fileName", this.fileName);
		data.setValue("createDate", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT));// 开始时间
		data.setValue("Len", this.timeLen);// 录音时长
	};

	//提交
	Model.prototype.submitbtnClick = function(event){
	if (justep.Browser.isX5App && justep.Browser.isAndroid) {
		window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		//不能重复提交
		var submitbtn= this.getElementByXid("submitbtn");
		$(submitbtn).attr("disabled",true);
		
		var count = this.comp('mediaData').count();
		var me=this;
		
		var files=[];
		var rowid=0;
		
		
		//设备名称、设备ID、机组、缺陷部位、缺陷内容、缺陷等级、检修专业、缺陷状态、报告人、报告日期
		var row = this.comp('data2').getCurrentRow();
		var equipmentname = row.val("equipmentname");
		if(CU.isEmpty(equipmentname)){
				$(submitbtn).attr("disabled",false);
				navigator.notification.alert("请填写设备名称！",function(){},"提示","确定");
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
				return;
			}
		var objectid = row.val("objectid");
		//新建缺陷时(当objectId有值时，说明用户搜索了设备)
		if(!CU.isEmpty(objectId)){
			objectid = objectId;
		}
		var unitname = row.val("crew");
		if(CU.isEmpty(unitname)){
				$(submitbtn).attr("disabled",false);
				navigator.notification.alert("请选择机组！",function(){},"提示","确定");
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
				return;
			}	
		var defectposition = row.val("defectposition");
		if(CU.isEmpty(defectposition)){
				$(submitbtn).attr("disabled",false);
				navigator.notification.alert("请填写缺陷部位！",function(){},"提示","确定");
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
				return;
			}
		defectlinfo = row.val("defectlinfo");
		if(CU.isEmpty(defectlinfo)){
				$(submitbtn).attr("disabled",false);
				navigator.notification.alert("请填写缺陷内容！",function(){},"提示","确定");
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
				return;
			}
		var defectlevelname = row.val("grade");
		if(CU.isEmpty(defectlevelname)){
				$(submitbtn).attr("disabled",false);
				navigator.notification.alert("请选择缺陷等级！",function(){},"提示","确定");
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
				return;
			}
		var plangroupname = row.val("major");
		if(CU.isEmpty(plangroupname)){
				$(submitbtn).attr("disabled",false);
				navigator.notification.alert("请选择检修专业！",function(){},"提示","确定");
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
				return;
			}
		var recordstatus = row.val("recordstatus");
		var reportername = row.val("reportername");
		var recorddate = row.val("recorddate");
		var recordid = row.val("recordid");

		//机组ID
		var unitid="";
		if(!CU.isEmpty(unitname)){
			var row = this.comp("crew").find(['codename'],[unitname]);
			 unitid = row[0].val('codeid');
		}
		//等级ID
		var defectlevel="";
		if(!CU.isEmpty(defectlevelname)){
			var row = this.comp("grade").find(['codename'],[defectlevelname]);
			defectlevel = row[0].val('codeid');
		}
		//专业ID
		var plangroupid ="";
		if(!CU.isEmpty(plangroupname)){
			var row = this.comp("major").find(['codename'],[plangroupname]);
			 plangroupid = row[0].val('codeid');
		}
		
		var params ={recordid:recordid,objectid:objectid,unitid:unitid,defectposition:defectposition,defectlinfo:defectlinfo,defectlevel:defectlevel,plangroupid:plangroupid,maintainplantid:CFG.plantid,recordstatus:recordstatus,reporter:sub.personnelid};
		if(!CU.isEmpty(newDefect)){//新建
			params.recordstatus="00";
			params.reportdate=justep.Date.toString(new Date(), "yyyy-MM-dd hh:mm:ss");
			params.reporter=sub.personnelid;
			params.reportdepartmentid=sub.departmentid;
			params.reportworkcenterid=sub.workcenterid;		
		}
		
		AJ.RS({userid:sub.userid,service:"Equipdefectrd",method:"saveOrUpdate",scope:this,params:params,
		success:function(result){
			id=result.data;
			var data = me.comp('mediaData');	
			if(data.count()>0){ 
				//遍历Data中的地址
				data.each(function(param){
					files.push(param.row.val('filePath'));
				});	
				mediaFile(files[rowid],id);
			 }
			else{
				//提交
				var param = [sub.companyid,sub.userid,id,defectlinfo];
				AJ.RS({userid:sub.userid,service:"Equipdefectrd",method:"submit",scope:this,params:param,
				success:function(result){
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
					}
					//justep.Shell.closePage(require.toUrl('$UI/emp_app/05equipdefect/DefectEdit.w'));
					justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'),{"id":id});
				}	 			
				});
			}
		}	 			
		});
		//单个文件上传方法
		function mediaFile(imageURI,id) { 
			var options = new FileUploadOptions(); 
			options.fileKey="file"; 
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1); 
			var params = new Object(); 
			params.sourcetablename = "EQUIPDEFECTRD";
			params.sourcefieldname = "RECORDID";
			params.sourcerecordkey = id;  
			options.params = params; 
			var fileTransfer = new FileTransfer();
			fileTransfer.upload(imageURI, CFG.url+"/FileUpload.do?companyid="+CFG.companyid, win, fail, options); 
		} ;

		function win(r) { 
			rowid++;
			if(rowid<count){
				mediaFile(files[rowid],id);	
			}
			else{
			
				//提交
				var param = [sub.companyid,sub.userid,id,defectlinfo];
				AJ.RS({userid:sub.userid,service:"Equipdefectrd",method:"submit",scope:this,params:param,
				success:function(result){
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
					}
					//justep.Shell.closePage(require.toUrl('$UI/emp_app/05equipdefect/DefectEdit.w'));
					justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'),{"id":id});
				}	 			
				});
			}
			
		} ;

		function fail(error) { 
			CU.hint("上传失败！");
		};
	};

   //播放本地录音、图片、视频  
	Model.prototype.playClick = function(event){
		var row = event.bindingContext.$object;
		var fileUrl =row.val("filePath");
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {	
			window.open(fileUrl,"_system");
		} else {
			window.open(fileUrl, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		}
			
	};
	
	//删除
	Model.prototype.deleClick = function(event){
		var row = event.bindingContext.$object;
		var data = this.comp('mediaData');
		data.deleteData(row);
		data.saveData();
	};
	//接受参数
	Model.prototype.modelParamsReceive = function(event){
		var input2 = this.comp('input2');
		var select2 = this.comp('select2');
		var input1 = this.comp('input1');
		var textarea2 = this.comp('textarea2');
		var select1 = this.comp('select1');
		var select3 = this.comp('select3');
		var button4 = this.comp('button4');
		//新建缺陷传来的参数
		newDefect = event.params.newDefect;
		if(!CU.isEmpty(newDefect)){
		input2.set({"disabled" : false});
		select2.set({"disabled" : false});
		input1.set({"disabled" : false});
		textarea2.set({"disabled" : false});
		select1.set({"disabled" : false});
		select3.set({"disabled" : false});
		button4.set({"disabled" : false});
			$(".scanner").show();
			$(".div6").show();
			$(".div3").hide();
			$(".div15").show();
		}else{
			$(".div6").hide();
			var recordID = event.params.recordid.value;
			var data4 = this.comp("data4");
			//加载附件信息
			var params =["EQUIPDEFECTRD","RECORDID",recordID];
			AJ.RS({service:"FileAttach",method:"queryList",scope:this,params:params,
				success:function(result){
					data4.loadData(result.data);
				}
			});
			$(".div3").show();
		//根据状态判断是否有提交权限	
		var recordstatus = event.params.recordstatus.value;
		if(recordstatus == "00"|| recordstatus == "10" || recordstatus == "25"){
				input2.set({"disabled" : false});
				select2.set({"disabled" : false});
				input1.set({"disabled" : false});
				textarea2.set({"disabled" : false});
				select1.set({"disabled" : false});
				select3.set({"disabled" : false});
				button4.set({"disabled" : false});
				$(".scanner").show();
				$(".div15").show();
			}else{
				input2.set({"disabled" : true});
				select2.set({"disabled" : true});
				input1.set({"disabled" : true});
				textarea2.set({"disabled" : true});
				select1.set({"disabled" : true});
				select3.set({"disabled" : true});
				button4.set({"disabled" : true});
				$(".div15").hide();
			}
		}
		var equipmentname = event.params.equipmentname;
		var objectid = event.params.objectid;
		var unitname = event.params.unitname;
		var defectposition = event.params.defectposition;
		var defectlinfo = event.params.defectlinfo;
		var defectlevelname = event.params.defectlevelname;	
		var plangroupname = event.params.plangroupname;
		var reportcode = event.params.reportcode;
		var recordstatus = event.params.recordstatus;
		var reportername = event.params.reportername;
		var recorddate = event.params.recorddate;
		var recordid = event.params.recordid;
		var data2 = this.comp("data2");
		data2.newData({
			index : 0,
			defaultValues : [{
				"equipmentname" : equipmentname,
				"objectid" : objectid,
				"crew" : unitname,
				"defectposition" : defectposition,
				"defectlinfo" : defectlinfo,
				"grade" : defectlevelname,
				"major" : plangroupname,
				"recordstatus" : recordstatus,
				"reportername" : reportername,
				"recorddate" : recorddate,
				"recordid" : recordid
				}]
			});
	};
	
	//关闭
	Model.prototype.button1Click = function(event){
		this.close();
		//justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/NewDefectList.w'));
	};
	
	//机组、等级、专业  下拉列表中的数据
	Model.prototype.modelLoad = function(event){
		var crew = this.comp("crew");
		var grade = this.comp("grade");
		var major = this.comp("major");
		var params =[]; 
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getDropListByView",ViewName:"V_DefectUnit",AddEmpty:"false",scope:this,params:params,
			success:function(result){
				crew.loadData(result);
			}	 			
		});
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getPlanMemberGroupList",AddEmpty:"false",scope:this,params:params,
			success:function(result){
				major.loadData(result);
				}	 			
			});
		AJ.RS({action:"/DropList.do",userid:sub.userid,service:"DropList",method:"getDropListByView",ViewName:"V_DefectLevel",AddEmpty:"false",scope:this,params:params,
				success:function(result){
					grade.loadData(result);
				}	 			
			});
	};
	//搜索
	Model.prototype.button4Click = function(event){
		var button4= this.getElementByXid("button4");
		$(button4).attr("disabled",true);
		var me = this;
		var equipMentName = this.comp("input2").val();
		if(!CU.isEmpty(equipMentName)&&equipMentName.length >= 3){
			var params = [ CFG.companyid, equipMentName ];
			AJ.RS({
				service : "Others",
				method : "queryEquipmentList",
				scope : this,
				params : params,
				success : function(result) {
					if (CU.isEmpty(result.data)) {
						if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							navigator.notification.alert("没有查询到设备！", function(){}, "提示", "确定");
							$(button4).attr("disabled",false);
							me.comp("input2").clear();
						}
						return;
					} else {
						if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							window.plugins.spinnerDialog.show(null, "正在搜索...", true);
						}
						$(button4).attr("disabled",false);
						me.comp("windowDialog1").open({data : result.data});
					}
				}
			});
		}else{
			$(button4).attr("disabled",false);
			CU.hint("请输入三个或者三个以上文字！");
		}
	};
	//接收子页面的传参
	Model.prototype.windowDialog1Receive = function(event){
		var equipMentName = event.data.equipMentName;
		objectId = event.data.objectId;
		this.comp("input2").val(equipMentName);
	};


	//激活页面
	Model.prototype.modelActive = function(event){
/*		var data2 = this.comp("data2");
		if(!CU.isEmpty(newDefect)){
			data2.clear();
			data2.newData({
				index : 0,
				defaultValues : [{
					"ID" : "1"
				}]
			});	
		}*/
	};
	//页面离开
	Model.prototype.modelInactive = function(event){
		var submitbtn = this.getElementByXid("submitbtn");
		$(submitbtn).attr("disabled",false);
		//当页面离开时清空mediaData里面内容 
		this.comp("mediaData").clear();
	};
	
	//查看附件
	Model.prototype.row10Click = function(event){
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
	

	//二维码扫描
	Model.prototype.button2Click = function(event) {
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			cordova.plugins.barcodeScanner.scan(succss, err);
			function succss(result) {
				//当result.cancelled为true时，说明用户取消了本次扫描！
				if(result.cancelled){
					return;
				}
				var NodeInfo = JSON.parse(result.text);
				var equipMentName = NodeInfo.name;
				navigator.speech.startSpeaking("查询到"+equipMentName+" 设备！");
				objectId = NodeInfo.id;
				me.comp("input2").val(equipMentName);
			}
			function err() {
				CU.hint("扫码失败！");
			}
		}
	};


	
	return Model;
});