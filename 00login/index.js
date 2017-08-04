define(function(require) {
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-device");
	require("cordova!cordova-plugin-dialogs");
	require("cordova!phonegap-nfc");
	require("cordova!com.justep.cordova.plugin.iFlytek");
	require("cordova!cordova-plugin-dialogs");// 本地对话框
	require("cordova!cordova-plugin-vibration");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : '$UI/emp_app/00login/Login.w'
				},
				"frame" : {
					url : '$UI/emp_app/01main/Frame.w'
				},
				"notice" : {
					url : '$UI/emp_app/20notice/NoticeList.w'
				},
				"doc" : {
					url : '$UI/emp_app/21docsearch/DocSearch.w'
				},
				"myinfo" : {
					url : '$UI/emp_app/01main/AppUser.w'
				}

			}
		});
	};
	Model.prototype.modelLoad = function(event) {
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);

		// 加载完成
		function onDeviceReady() {

			// nfc标签检测监听
			window.nfc.addTagDiscoveredListener(findNfcTag);// 标签检测监听
			function findNfcTag() {
				// alert("NFCTag检测成功！");
			}

			window.nfc.enabled(win, fail);
			function win() {
			}
			function fail() {
				navigator.notification.alert("您未开启手机的NFC功能,请在手机上设置！", function() {
				}, "提示", "确定");
			}

			// nfc标签读取监听
			window.nfc.addMimeTypeListener("text/plain", readNfcTag, success, err);// 标签读取监听
			function readNfcTag(event) {
				navigator.vibrate(1000);
				if (CU.isEmpty(localStorage.getItem('SUB'))) {// 用户没有登录系统，并注册用户信息
					justep.Shell.showPage("login"); // 跳转到登录页面
				} else {
					var sub = JSON.parse(localStorage.getItem('SUB'));

					var tag = event.tag, ndefMessage = tag.ndefMessage;
					var nfcNode = nfc.bytesToString(ndefMessage[0].payload).substring(3);// 读取标签信息
					var NodeInfo = JSON.parse(nfcNode);
					var areaname = NodeInfo.name;
					if (NodeInfo.type == 'CK') { // 巡检业务 标签为巡检
						var areaID = NodeInfo.id;// 巡检(区域)点ID
						var taskID = localStorage.getItem('taskID');
						if (CU.isEmpty(taskID)) { // 未选择对应的任务
							justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/MyTaskList.w'), {
								"value" : "1"
							});
						} else {
							// 查找当前任务下面的巡检点，如果没有该巡检点提示用户
							var params = [ taskID ];
							AJ.RS({
								service : "EquipCheck",
								method : "queryTaskAreaList",
								scope : this,
								params : params,
								success : function(result) {
									if (!CU.isEmpty(result.data)) {
										me.comp("data1").loadData(result.data);
										var rows = me.comp('data1').find([ 'AREANAME' ], [ areaname ]);
										if (rows.length == 0) {
											navigator.notification.alert("当前任务下没有该巡检点！", function() {
											}, "提示", "确定");
										}
										if (rows.length != 0) {
											// 签到处理
											var param = {
												companyid : sub.companyid,
												taskid : taskID,
												personnelid : sub.personnelid,
												personnelname : sub.personnelname,
												areaid : areaID,
												signindate : CU.toTimeString(new Date())
											};
											AJ.RS({
												service : "EquipCheck",
												method : "saveCheckSignInRd",
												scope : this,
												params : param,
												success : function(result) {
													var signinID = localStorage.getItem("signinid");
													if (signinID != result.data) {
														localStorage.setItem("areaid", areaID);
														signinID = result.data;
														localStorage.setItem("signinid", signinID);
														CU.hint(areaname + "巡检点、签到成功！");
													} else {
														signinID = result.data;
														CU.hint(areaname + "巡检点、已签到,不能重复签到！");
													}
													justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
														taskID : taskID,
														areaID : areaID,
														signinID : signinID
													}); // 跳转到巡检项目列表
												}
											});
										}
									}
								}
							});
						}
					} else if (NodeInfo.type == 'SA') { // 进入、退出安全区域
						var inorout = NodeInfo.in_out;
						var areaID = NodeInfo.id;
						var isintered = localStorage.getItem("safeareaid");
						if (!CU.isEmpty(isintered) && areaID != isintered) {
							CU.hint("您没有签出" + isintered + "区域,不能进入该区域！");
							return;
						}
						if (areaID == isintered && inorout == '1') {
							navigator.speech.startSpeaking("您已经进入了" + NodeInfo.name + ",不能重复进入该区域！");
							me.comp("messageDialog").show({
								"type" : "OK",
								"title" : "您已经进入了[" + NodeInfo.name + "],不能重复进入该区域！"
							});
							return;
						}
						if (CU.isEmpty(isintered) && inorout == '0') {
							navigator.speech.startSpeaking("您已经不在" + NodeInfo.name + ",不能重复签出该区域！");
							me.comp("messageDialog").show({
								"type" : "OK",
								"title" : "您已经不在" + NodeInfo.name + ",不能重复签出该区域！"
							});
							return;
						}
						var param = {
							companyid : sub.companyid,
							personnelid : sub.personnelid,
							personnelname : sub.personnelname,
							safeareaid : areaID,
							safeareaname : NodeInfo.name,
							inorout : inorout,
							inouttime : CU.toTimeString(new Date())
						};
						AJ.RS({
							service : "Personnel",
							method : "saveSafeAreaSignRd",
							scope : this,
							params : param,
							success : function(result) {
								if (!CU.isEmpty(result.data)) {
									if (NodeInfo.in_out == '1') {
										localStorage.setItem("safeareaid", areaID);
										CU.hint("您已经进入了安全区域！--[" + NodeInfo.name + "]");
										navigator.speech.startSpeaking("您已经进入了" + NodeInfo.name + "！");
									} else {
										localStorage.setItem("safeareaid", "");
										CU.hint("您已经走出了安全区域！--[" + NodeInfo.name + "]");
										navigator.speech.startSpeaking("您已经走出了" + NodeInfo.name + "！");
									}
									justep.Shell.showPage(require.toUrl('$UI/emp_app/03personlocation/PersonStatic.w'), {
										"id" : "id"
									});
								}
							}
						});
					} else if (NodeInfo.type == 'AL') { // 安全区域提醒
						var id = NodeInfo.id;
						var name = NodeInfo.name;
						AJ.RS({
							service : "Others",
							method : "queryAlertInfo",
							scope : this,
							params : id,
							success : function(result) {
								if (!CU.isEmpty(result.data)) {
									navigator.speech.startSpeaking(result.data);
									justep.Shell.showPage(require.toUrl('$UI/emp_app/04safealert/AreaSafeInfoList.w'), {
										"areaid" : id,
										"areaName" : name
									});
								}
							}
						});
					} else if (NodeInfo.type == 'EQ') {
						var objectid = NodeInfo.id;
						var objectname = NodeInfo.name;
						var params = [ objectid ];
						AJ.RS({
							service : "Others",
							method : "queryEquipmentInfo",
							scope : this,
							params : params,
							success : function(result) {
								var str = result.data.techobjectstatusname;
								navigator.speech.startSpeaking("您正在查询" + objectname + "设备信息。目前状态：" + str + "。");
							}
						});
						justep.Shell.showPage(require.toUrl('$UI/emp_app/10equipquery/Frame.w'), {
							objectId : objectid
						});
					} else if (NodeInfo.type == 'WP') {// 打卡
						var PointID = NodeInfo.id;
						var sub = {};
						if (!CU.isEmpty(localStorage.getItem('SUB'))) {
							sub = JSON.parse(localStorage.getItem('SUB'));
						}
						var param = [ sub.companyid, PointID, sub.personnelid, sub.personnelname ];
						AJ.RS({
							service : "WorkCheck",
							method : "getCheckHint",
							scope : this,
							params : param,
							success : function(result) {
								if (!CU.isEmpty(result.data)) {
									navigator.speech.startSpeaking(result.data);
									navigator.notification.alert(result.data, function() {
									}, "提示", "确定");
									justep.Shell.showPage(require.toUrl('$UI/emp_app/11workcheck/workCheck.w'), {
										"value" : "value"
									});
								}
							}
						});
					}
				}
			}
			// 检测手机设备标识是否与用户绑定
			var param = [ window.device.uuid ];
			AJ.RS({
				service : "SystemSafety",
				method : "getUserInfo",
				scope : this,
				params : param,
				success : function(result) {
					if (!CU.isEmpty(result.data)) {
						localStorage.setItem('SUB', JSON.stringify(result.data));
						justep.Shell.showPage("frame");
					} else {
						justep.Shell.showPage("main");
					}
				}
			});
		}

		function success() {
		}
		;
		function err() {
			navigator.notification.alert("NFC读取初始化失败！", function() {
			}, "提示", "确定");
		}
		;

	};
	CommonUtils.attachDoubleClickExitApp(function() {
		justep.Util.hint("请您点击右上角按钮关闭当前页面！", {
			type : 'danger',
			position : 'top'
		});
		return true;
	});

	return Model;
});