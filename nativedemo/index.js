define(function(require){
	var $ = require("jquery");
	
	var justep = require("$UI/system/lib/justep");
	
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/device/common/pub").load();
	require("cordova!org.apache.cordova.camera");
	require("cordova!org.apache.cordova.media-capture");
	require("cordova!org.apache.cordova.inappbrowser");
	require("cordova!org.apache.cordova.media");
	require("cordova!com.phonegap.plugins.barcodescanner");
	require("cordova!com.chariotsolutions.nfc.plugin");
	require("cordova!cordova-plugin-device");
	require("cordova!org.apache.cordova.file-transfer");
	require("cordova!org.apache.cordova.file");
	require("cordova!org.apache.cordova.file-opener2");
	require("cordova!com.phonegap.plugins.videoplayer");
	var Model = function(){
		this.callParent();
	};
	Model.prototype.modelLoad = function(event){
		document.addEventListener("deviceready", onDeviceReady, false);
		// 加载完成
		function onDeviceReady() {
		//nfc读取标签的内容
		window.nfc.addNdefListener(operation, success, err);
			function operation(event) {
				var tag = event.tag,
                ndefMessage = tag.ndefMessage;
                alert("标签中内容为："+nfc.bytesToString(ndefMessage[0].payload).substring(3));
			}
			
			function success(){
			}
			
			function err(){
			}
		}

		
	};


	//扫码
	Model.prototype.button6Click = function(event){
	document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
		cordova.plugins.barcodeScanner.scan(succss, err);
			function succss(result){
				justep.Util.hint("扫码成功，正在跳转.....");
				alert(result.text);
			}
			function err(){
			justep.Util.hint("扫码失败！");				
			}
		}
	};


	//获取唯一标识
	Model.prototype.button7Click = function(event){
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			alert("uuid:"+window.device.uuid);
		}
	};


	//显示录音
	Model.prototype.button13Click = function(event){
		this.comp("record").show();
		this.comp('recordTime').set({value: "00:00:00"});
				
		var me = this;
		// 根据系统时间产生文件名
		this.fileName = justep.Date.toString(new Date(), "yyyyMMddhhmmss") + ".wav";
		this.mediaRec = new Media(this.fileName,
				function() {
				},
				function(err) {
				}
		);
		// 开始录音
		this.mediaRec.startRecord();
		var recTime = 0;
		this.mediaTimer = setInterval(function() {
			recTime = recTime + 1;
            me.setAudioPosition(recTime);
            me.comp('recordTime').set({value: me.timeLen});
		}, 1000);
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
			
		var data = this.comp("audioData");
		data.newData({index : 0});
		data.setValue("fileName", this.fileName);
		data.setValue("createTime", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT))// 开始时间
		data.setValue("len", this.timeLen);// 录音时长
	};
	
	//播放录音
	Model.prototype.list1Click = function(event){
		this.comp("play").show();
		
		var me = this;
		var data = this.comp("audioData");
		var url = data.getValue("fileName");
		this.comp('playTime').set({value: "00:00:00||" + data.getValue("timeLen")});
		this.mediaRec = new Media(url,
				function() {
				},
				function(err) {
				}
		);
		// 播放音频
		this.mediaRec.play();
		var recTime = 0;
		this.mediaTimer = setInterval(function() {
			recTime = recTime + 1;
            me.setAudioPosition(recTime);

			if(me.timeLen == data.getValue("len")){
				me.comp("play").hide();
				clearInterval(me.mediaTimer);
			}
			me.comp('playTime').set({value: me.timeLen + "||" + data.getValue("len")});
		}, 1000);
	};


	//照相
	Model.prototype.button11Click = function(event){
		var me = this;
		
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady(){
		
			navigator.camera.getPicture(success, fail, {
        		quality:100,
        		saveToPhotoAlbum:true//将拍照好照片存储到本地 saveToPhotoLibrary
        	});
        	
        	var photodata = me.comp("photoData");
        	//拍照成功后回调
        	function success(imageURL){//imageURI imageData
        		//window.localStorage.setItem("path", imageURL);
        		//var url = window.localStorage.getItem("path");
            	photodata.newData({index : 0});
				photodata.setValue("filePath", imageURL);
				photodata.setValue("fileName", imageURI.substr(imageURI.lastIndexOf('/') + 1));
				photodata.setValue("createTime", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT ));
        	}
        	function fail(error){
        		justep.Util.hint(error);
        	}
		
		}
	};


	//查看图片
	Model.prototype.list2Click = function(event){
		
		var photoData = this.comp("photoData");
		var url = photoData.getValue("filePath");
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.open(url,"_system");
			//window.open(url,"_blank");
			//window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		} else {
			window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		}
	};


	//录像
	Model.prototype.button12Click = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady(){
		
			navigator.device.capture.captureVideo(succ, err,{limit : 1});
			var videoData = me.comp('videoData');
			function succ(mediaFiles) {
			var i, path, len;
			for (i = 0, len = mediaFiles.length; i < len; i += 1) {
   				path = mediaFiles[i].fullPath;
   				window.localStorage.setItem("key", path);
   				var url = window.localStorage.getItem("key");
				videoData.newData({index : 0});
				videoData.setValue("filePath", url);
				videoData.setValue("fileName", mediaFiles[i].name);
				videoData.setValue("createData",justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT ));
				}
			};
			function err(error) {
				justep.Util.hint(error.code);
			};
		}
	};


	//显示视频
	Model.prototype.list3Click = function(event){
		var videoData = this.comp("videoData");
		var url = videoData.getValue("filePath");
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.open(url,"_system");
		} else {
			window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		}
	};


	//测试
	Model.prototype.button1Click = function(event){
		justep.Baas.sendRequest({
			"url" : "/mydb/file",
			"action" : "fileAction",
			"async" : false,
			"params" : {"aaa":"123"},
			"success" : function(data) {
			}
		});
	};


	//上传
	Model.prototype.button8Click = function(event){
		var row = event.bindingContext.$object;
		var photoData = this.comp("photoData");
		var url = photoData.getValue("filePath");
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() { 
			
			
			function win(r) {
				alert("成功"+r.bytesSent);
			}
			function fail() {
				alert("失败");
			}
			
			var options = new FileUploadOptions();
			options.fileKey="file"; 
			options.fileName=url.substr(url.lastIndexOf('/')+1); 
			options.mimeType="image/jpeg";
			
			var params = new Object(); 
			params.value1 = "test"; 
			params.value2 = "param";  

			options.params = params;
			
			
			var ft = new FileTransfer();
			ft.upload(url, "http://192.168.1.109:8080/baas/mydb/file/fileAction", win, fail, options);
		}
	};




	//测试视频
	Model.prototype.button10Click = function(event){
		var url = require.toUrl("$UI/emp-app/nativedemo/example/volcano.mp4");
		var myvideo = document.getElementById("video");
		$(myvideo).attr("src","http://192.168.1.80:8083/x5/UI2/emp_app/video/volcano.mp4");
		//$(myvideo).attr("src","http://192.168.1.109:8080"+url);
		//myvideo.src = url;
		/*var url = require.toUrl("$UI/emp-app/nativedemo/example/volcano.mp4");
		alert("123");
		 cordova.plugins.videoPlayer.play(url);
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			//window.open(url,"_system");
			  cordova.plugins.videoPlayer.play(url);
			//window.open(url,"_blank");
			//window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		} else {
			window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		}*/
	};


	//访问摄像头
	Model.prototype.button9Click = function(event){
		var video = document.getElementById("video"),
		videoObj = { "video": true },
		errBack = function(error) {
			console.log("Video capture error: ", error.code); 
		};
		
		function succ(stream){
			video.src = window.URL.createObjectURL(stream);
			//video.src = stream;
			//video.play();
		}
		
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		alert(navigator.getUserMedia);
		if(navigator.getUserMedia){
			navigator.getUserMedia(videoObj, succ, errBack);
			}else{
				alert("有错误");
			}
	
/*		
		if(navigator.getUserMedia) {
			
			navigator.getUserMedia(videoObj, function(stream) {
				video.src = stream;
				video.play();
			}, errBack);
		} else if(navigator.webkitGetUserMedia) {
		 // WebKit-prefixed
		 
			navigator.webkitGetUserMedia(videoObj, function(stream){
			alert(window.URL.createObjectURL(stream));
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		} else if(navigator.mozGetUserMedia) { // Firefox-prefixed
			
			navigator.mozGetUserMedia(videoObj, function(stream){
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}else if(navigator.msGetUserMedia) { // Firefox-prefixed
			
			navigator.msGetUserMedia(videoObj, function(stream){
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}else{ 
			alert("有错误");
		}*/
	};
	
	//添加video标签
	Model.prototype.modelModelConstruct = function(event){
		var video = this.getElementByXid('div6');
		//$(video).html('<video id=\"video\" width=\"320\" height=\"240\" autoplay></video>');
		$(video).html('<video id=\"video\" width=\"320\" height=\"240\" controls=\"controls\" autoplay></video>');
	};


	//插件播放视频
	Model.prototype.button15Click = function(event){
		cordova.plugins.videoPlayer.play("http://192.168.1.80:8083/x5/UI2/emp_app/video/volcano.mp4");
		//cordova.plugins.videoPlayer.play("http://192.168.1.109:8080/baas/mydb/file/fileAction?aaa=333");
	};

	return Model;
});