define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("$UI/system/lib/cordova/cordova");

	require("cordova!cordova-plugin-camera");// 照相
	require("cordova!cordova-plugin-media-capture");// 视频
	require("cordova!cordova-plugin-media");// 录音
	require("cordova!com.justep.cordova.plugin.iFlytek"); // 语音识别
	require("cordova!cordova-plugin-file-transfer");// 文件上传/下载
	require("cordova!cordova-plugin-spinner-dialog");// 等待提示框
	require("cordova!cordova-plugin-dialogs");// 本地对话框

	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var iteminfo = {};
	var areaID = "";
	var taskID = "";
	var signinID = "";
	var resultvaluenow = "";
	var Model = function() {
		this.callParent();

	};

	// 照相
	Model.prototype.photoClick = function(event) {
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			navigator.camera.getPicture(success, fail, {
				// destinationType:navigator.camera.DestinationType.FILE_URI
				// //DATA_URL FILE_URI
				quality : 100,
				targetWidth : 350,
			// targetHeight:300,
			// saveToPhotoAlbum:true//将拍照好照片存储到本地 saveToPhotoLibrary
			});

			var mediadata = me.comp("mediaData");
			// 拍照成功后回调
			function success(imageURI) {
				var filename = imageURI.substr(imageURI.lastIndexOf('/') + 1);
				mediadata.newData({
					index : 0
				});
				mediadata.setValue("filePath", imageURI);
				mediadata.setValue("fileName", filename);
				mediadata.setValue("createDate", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT));
			}
			// 拍照失败的回调
			function fail(error) {
				CU.hint("照相失败！");
			}

		}
	};

	// 录像
	Model.prototype.videoClick = function(event) {
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			navigator.device.capture.captureVideo(succ, err, {
				limit : 1
			});
			var mediaData = me.comp('mediaData');
			function succ(mediaFiles) {
				console.log(mediaFiles);
				var i, path, len;// 优化大小，能够限制文档大小
				for (i = 0, len = mediaFiles.length; i < len; i += 1) {
					path = mediaFiles[i].fullPath;
					mediaData.newData({
						index : 0
					});
					mediaData.setValue("filePath", path);
					mediaData.setValue("fileName", mediaFiles[i].name);
					mediaData.setValue("createDate", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT));
				}
			}
			;
			function err(error) {
				CU.hint("录像失败！");
			}
			;
		}
	};

	// 录音
	Model.prototype.audioClick = function(event) {
		this.comp("record").show();
		this.comp('recordTime').set({
			value : "00:00:00"
		});
		var me = this;
		// 根据系统时间产生文件名
		this.fileName = justep.Date.toString(new Date(), "yyyyMMddhhmmss") + ".wav";
		this.mediaRec = new Media(this.fileName, function() {
		}, function(err) {
		});
		// 开始录音
		this.mediaRec.startRecord();
		var recTime = 0;
		this.mediaTimer = setInterval(function() {
			recTime = recTime + 1;
			me.setAudioPosition(recTime);
			me.comp('recordTime').set({
				value : me.timeLen
			});
		}, 1000);
	};

	// 设置显示的时间
	Model.prototype.setAudioPosition = function(position) {
		var hour = parseInt(position / 3600);// 小时数
		var min = parseInt(position / 60);// 分钟数
		if (min >= 60) {
			min = min % 60
		}
		var lastsecs = position % 60;
		if (hour < 10)
			hour = "0" + hour;
		if (min < 10)
			min = "0" + min;
		if (lastsecs < 10)
			lastsecs = "0" + lastsecs;

		this.timeLen = hour + ':' + min + ':' + lastsecs;
	}

	// 暂停保存录音
	Model.prototype.image2Click = function(event) {
		// 清空计时器
		clearInterval(this.mediaTimer);
		// 停止录音
		this.comp("record").hide();
		this.mediaRec.stopRecord();

		var filePath = CFG.localpath_audio + this.fileName;

		var data = this.comp("mediaData");
		data.newData({
			index : 0
		});
		data.setValue("filePath", filePath);
		data.setValue("fileName", this.fileName);
		data.setValue("createDate", justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT));// 开始时间
		data.setValue("Len", this.timeLen);// 录音时长
	};

	// 提交
	Model.prototype.submitbtnClick = function(event) {
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null, "正在提交...", true);
		}

		var count = this.comp('mediaData').count();
		var submitbtn = this.getElementByXid("submitbtn");
		if (this.comp("remark").val() == "") {
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
				window.plugins.spinnerDialog.hide();
			}
			navigator.notification.alert("请填写巡检说明！", function() {
			}, "提示", "确定");
			$("#submitbtn").removeAttr("disabled");
			return;
		}

		// 必须填写巡检结果才能提交
		if (iteminfo.datatype == "02") {
			if (this.comp('cheackvalue').val() == "") {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				navigator.notification.alert("请填写巡检结果！", function() {
				}, "提示", "确定");
				$("#submitbtn").removeAttr("disabled");
				return;
			}
		}
		if (iteminfo.datatype == "01") {
			if (this.comp("select1").val() == "") {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				navigator.notification.alert("请填写巡检结果！", function() {
				}, "提示", "确定");
				$("#submitbtn").removeAttr("disabled");
				return;
			}
		}

		// 不能重复提交
		$(submitbtn).attr({
			"disabled" : "disabled"
		});
		var me = this;
		var id = "";
		var files = [];
		var rowid = 0;

		var params = {};
		if (!CU.isEmpty(localStorage.getItem('SUB'))) {
			var sub = JSON.parse(localStorage.getItem('SUB'));
			params.companyid = CFG.companyid;
			params.signinid = signinID;// 对应标签的签到ID
			params.areaid = areaID;
			params.taskid = taskID;
			params.personnelid = sub.personnelid;
			params.personnelname = sub.personnelname;
			params.equipid = iteminfo.equipid;
			params.equipname = iteminfo.equipname;
			params.itemid = iteminfo.itemid;
			params.itemname = iteminfo.itemname;
			params.datatype = iteminfo.datatype;
			params.dataunit = iteminfo.dataunit;
			if (iteminfo.datatype == "02") {
				params.resultvalue = this.comp('cheackvalue').val();
				var resultvalue = this.comp('cheackvalue').val()
				var upperlimit = this.comp("upperlimit").value;
				var lowerlimit = this.comp("lowerlimit").value;
				// 上下限都为正数
				if (!CU.isEmpty(upperlimit) && !CU.isEmpty(lowerlimit) && upperlimit >= 0 && lowerlimit >= 0) {
					if (resultvalue > upperlimit || resultvalue < lowerlimit) {
						params.custom1 = "-1";
					} else {
						params.custom1 = "1";
					}
				}
				// 上下限都为负数
				if (!CU.isEmpty(upperlimit) && !CU.isEmpty(lowerlimit) && upperlimit < 0 && lowerlimit < 0) {
					if (resultvalue < 0) {
						if (resultvalue - upperlimit < 0 || resultvalue - lowerlimit > 0) {
							params.custom1 = "-1";
						} else {
							params.custom1 = "1";
						}

					} else {
						params.custom1 = "-1";
					}
				}
				// 上限为正数，下限为负数
				if (!CU.isEmpty(upperlimit) && !CU.isEmpty(lowerlimit) && upperlimit >= 0 && lowerlimit < 0) {
					if (resultvalue > upperlimit || resultvalue < lowerlimit) {
						params.custom1 = "-1";
					} else {
						params.custom1 = "1";
					}
				}

				// params.custom1;
			}
			// return;
			if (iteminfo.datatype == "01") {
				params.resultvalue = this.comp('select1').val();

				var resultvalue2 = this.comp('select1').val();
				if (!CU.isEmpty(resultvalue2)) {
					if (resultvalue2 == "异常" || resultvalue2 == "不正常" || resultvalue2 == "有泄露" || resultvalue2 == "液位高" || resultvalue2 == "异常报警" || resultvalue2 == "压力异常" || resultvalue2 == "垃圾多") {
						params.custom1 = "-1";
					} else {
						params.custom1 = "1";
					}
				}
			}
			params.remark = this.comp('remark').val();
			params.checkstate = "1";
		} else {
			navigator.notification.alert("未登录系统，注册用户信息！", function() {
			}, "提示", "确定");
		}
		;
		AJ.RS({
			service : "EquipCheck",
			method : "saveCheckItemRd",
			async : false,
			scope : this,
			params : params,
			success : function(result) {
				id = result.data;
				var data = me.comp('mediaData');
				if (data.count() > 0) {
					// 遍历Data中的地址
					data.each(function(param) {
						files.push(param.row.val('filePath'));
					});
					mediaFile(files[rowid], id);
				} else {
					window.plugins.spinnerDialog.hide();
					justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
						areaID : areaID,
						taskID : taskID,
						taskName : localStorage.getItem("taskName")
					});
					// justep.Shell.closePage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemEdit.w'));
					// justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemView.w'),{"id":id});
				}
			}
		});

		// 单个文件上传方法
		function mediaFile(imageURI, id) {
			var options = new FileUploadOptions();
			options.fileKey = "file";
			options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
			var params = new Object();
			params.sourcetablename = "SP_CHECKRESULTRECORD";
			params.sourcefieldname = "ID";
			params.sourcerecordkey = id;
			options.params = params;
			var fileTransfer = new FileTransfer();
			fileTransfer.upload(imageURI, CFG.url + "/FileUpload.do?companyid=" + CFG.companyid, win, fail, options);
		}
		;

		function win(r) {
			rowid++;
			if (rowid < count) {
				mediaFile(files[rowid], id);
			} else {
				window.plugins.spinnerDialog.hide();
				justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
					areaID : areaID,
					taskID : taskID,
					taskName : localStorage.getItem("taskName")
				});
				// justep.Shell.closePage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemEdit.w'));
				// justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemView.w'),{"id":id});
			}

		}
		;

		function fail(error) {
			CU.hint("上传失败！");
		}
		;
		// 跳转页面
	};

	// 播放本地录音、图片、视频
	Model.prototype.playClick = function(event) {
		var row = event.bindingContext.$object;
		var fileUrl = row.val("filePath");
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.open(fileUrl, "_system");
		} else {
			window.open(fileUrl, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
		}

	};

	// 删除
	Model.prototype.deleClick = function(event) {
		var row = event.bindingContext.$object;
		var data = this.comp('mediaData');
		data.deleteData(row);
		data.saveData();
	};

	// 接收父页面传过来的参数
	Model.prototype.modelParamsReceive = function(event) {

		// this.comp("cheackvalue").val(event.params.DEFAULT);

		// cheackvalue resultvaluenow
		resultvaluenow = event.params.resultvaluenow;

		var data1 = this.comp("data1");
		data1.clear();
		iteminfo.equipid = event.params.EQUIPID;
		iteminfo.equipname = event.params.EQUIPNAME;
		iteminfo.itemid = event.params.ITEMID;
		iteminfo.itemname = event.params.ITEMNAME;
		iteminfo.datatype = event.params.DATATYPE;
		iteminfo.standvalue = event.params.STANDVALUE;
		iteminfo.dataunit = event.params.DATAUNIT;
		iteminfo.lowerdanval = event.params.LOWERDANVAL;
		iteminfo.upperdanval = event.params.UPPERDANVAL;
		iteminfo.resultvalue = event.params.RESULTVALUE;
		areaID = event.params.AREAID;
		taskID = event.params.TASKID;
		signinID = event.params.SIGNINID;
		var DATASCOPE = event.params.DATASCOPE;
		if (!CU.isEmpty(DATASCOPE)) {
			var strs = new Array();
			strs = DATASCOPE.split(",");
			for (i = 0; i < strs.length; i++) {
				data1.newData();
				data1.setValue("value", strs[i]);
			}
		}

		if (!isNaN(resultvaluenow)) {
			this.comp("cheackvalue").val(resultvaluenow);
		} else {
			var select1 = this.getIDByXID("select1");
			data1.each(function(param) {
				var DEPARTMENTID = param.row.val('value');
				if (DEPARTMENTID == resultvaluenow) {
					$("#" + select1 + " option[value='" + DEPARTMENTID + "']").attr("selected", true);
				}
			});
		}
		if (event.params.DATATYPE == "02") {
			$(".div15").hide();
			$(".div13").show();
		}
		if (event.params.DATATYPE == "01") {
			$(".div13").hide();
			$(".div15").show();
		}

		var infoData = this.comp("information");
		infoData.newData({
			index : 0
		});
		infoData.setValue("equipid", iteminfo.equipid);
		infoData.setValue("equipname", iteminfo.equipname);
		infoData.setValue("itemid", iteminfo.itemid);
		infoData.setValue("itemname", iteminfo.itemname);
		infoData.setValue("standvalue", iteminfo.standvalue);
		infoData.setValue("dataunit", iteminfo.dataunit);
		infoData.setValue("upperdanval", iteminfo.upperdanval);
		infoData.setValue("lowerdanval", iteminfo.lowerdanval);
		infoData.setValue("resultvalue", iteminfo.resultvalue);
		// this.comp("cheackvalue").val("");
		this.comp("remark").val("");
		this.comp("mediaData").clear();
		this.comp("submitbtn").domNode.removeAttribute("disabled");
	};

	Model.prototype.closebtnClick = function(event) {
		justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'));
	};

	// 巡检说明，语音翻译
	Model.prototype.label2Click = function(event) {
		var me = this;
		navigator.notification.confirm("请对准麦克风开始说话！", function(index) {
			if (index == "1") {
				var remark = me.getElementByXid('remark');
				navigator.speech.startListening({}, function(res) {
					window.plugins.spinnerDialog.show(null, "正在合成...", true);
					var str = JSON.stringify(res);
					str = str.replace("\"", "").replace("\"", "");
					$(remark).val(str);
					window.plugins.spinnerDialog.hide();
				});
			}
		}, "提示", [ '确定', '取消' ]);

	};

	return Model;
});