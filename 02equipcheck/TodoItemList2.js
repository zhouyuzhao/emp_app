define(function(require) {
	var justep = require("$UI/system/lib/justep");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("cordova!cordova-plugin-dialogs");// 本地对话框
	require("cordova!cordova-plugin-spinner-dialog");// 等待提示框
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var areaID = "";
	var taskID = "";
	var signinID = "";
	var resultvaluenow = "";
	var thiz;
	var Model = function() {
		this.callParent();
	};

	// 接收数据
	Model.prototype.modelParamsReceive = function(event) {
		var orclose = false;
		areaID = event.params.areaID;// 接收区域ID
		taskID = event.params.taskID;
		signinID = event.params.signinID;// 签到ID
		var taskName = localStorage.getItem("taskName");// 接收taskName
		var data4 = this.comp("data4");
		data4.newData({
			index : 0
		});
		data4.setValue("taskName", taskName);
		var me = this;
		// 从后台取出数据，加载到data中
		var params = [ taskID, areaID ];
		AJ.RS({
			service : "EquipCheck",
			method : "queryAreaSignInfo",
			scope : this,
			params : params,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					if (CU.isEmpty(signinID)) {
						signinID = result.data.area.SIGNEDID;
					}
					var data1 = me.comp("data1");
					data1.loadData([ result.data.area ]);
					data1.first();
				} else {
					me.comp("data1").clear();
				}

			}
		});
		var param = [ signinID, areaID, taskID ];
		AJ.RS({
			service : "EquipCheck",
			method : "queryCheckItemListByAreaID",
			scope : this,
			params : param,
			success : function(result) {
				// console.log(JSON.stringify(result.data));
				me.comp("data3").loadData(result.data);
				var d = result.data;
				for ( var o in d) {
					if (CU.isEmpty(d[o].RESULTVALUE)) {
						orclose = true;
					}
				}

				if (!orclose) {
					// me.closebtnClick();
					/*
					 * navigator.notification.confirm( '您已经全部录入,是否关闭当前画面？', //
					 * message me.orclose, // callback to invoke with index of
					 * button pressed '提示', // title ['取消','关闭'] // buttonLabels );
					 */

					me.comp("button4").$domNode.removeClass().addClass("btn x-red");
				} else {
					me.comp("button4").$domNode.removeClass().addClass("btn x-purple");
				}

			}
		});

	};
	/*
	 * Model.prototype.orclose = function(buttonIndex){ if(buttonIndex=='2'){
	 * justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/MyTaskList.w'),{value:"value"}); } }
	 */

	Model.prototype.row4Click = function(event) {
		var data1 = this.comp("data1");
		if (data1.count() == 0) {
			CU.hint("您尚未签到，不能查看巡检数据！");
			return;
		}
		var rows = event.bindingContext.$object;// 当前行
		var me = this;
		var recordID = rows.val("RECORDID");
		// 当recordID为空
		if (CU.isEmpty(recordID)) {
			var params = {
				EQUIPNAME : rows.val("EQUIPNAME"),
				ITEMID : rows.val("ITEMID"),
				ITEMNAME : rows.val("ITEMNAME"),
				DATATYPE : rows.val("DATATYPE"),
				STANDVALUE : rows.val("STANDVALUE"),
				DATAUNIT : rows.val("DATAUNIT"),
				LOWERDANVAL : rows.val("LOWERDANVAL"),
				UPPERDANVAL : rows.val("UPPERDANVAL"),
				DATASCOPE : rows.val("DATASCOPE"),
				EQUIPID : rows.val("EQUIPID"),
				RESULTVALUE : rows.val("RESULTVALUE"),
				DEFAULT : rows.val("ITEMNO"),
				AREAID : areaID,
				TASKID : taskID,
				SIGNINID : signinID,
				resultvaluenow : resultvaluenow

			};
			justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemEdit.w'), params);
			resultvaluenow = "";
		} else {
			justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemView.w'), {
				id : recordID
			});

		}

	};

	Model.prototype.closebtnClick = function(event) {
		// 传值的目的为了触发刷新方法。
		justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/MyTaskList.w'), {
			value : "value"
		});
	};

	// 提交
	Model.prototype.button1Click = function(event) {
		var thiz = this;
		var state = true;
		var data1 = this.comp("data1");
		if (data1.count() == 0) {
			CU.hint("您尚未签到，不能提交巡检数据！");
			return;
		}

		var rows = event.bindingContext.$object;// 当前行
		resultvaluenow = rows.val("ITEMNO");
		var resultvalue = rows.val("ITEMNO");
		var SELECT = rows.val("SELECT");
		var params = {};
		if (!CU.isEmpty(localStorage.getItem('SUB'))) {
			var sub = JSON.parse(localStorage.getItem('SUB'));
			params.companyid = CFG.companyid;
			params.signinid = signinID;// 对应标签的签到ID
			params.areaid = areaID;
			params.taskid = taskID;
			params.personnelid = sub.personnelid;
			params.personnelname = sub.personnelname;
			params.equipid = rows.val("EQUIPID");
			params.equipname = rows.val("EQUIPNAME");
			params.itemid = rows.val("ITEMID");
			params.itemname = rows.val("ITEMNAME");
			params.datatype = rows.val("DATATYPE");
			params.dataunit = rows.val("DATAUNIT");
			params.id = rows.val("RECORDID");
			if (rows.val("DATATYPE") == "02") {
				if (!CU.isEmpty(resultvalue)) {
					params.resultvalue = resultvalue;
					var upperlimit = rows.val("UPPERDANVAL");
					var lowerlimit = rows.val("LOWERDANVAL");

					// 上下限都为正数
					if (!CU.isEmpty(upperlimit) && !CU.isEmpty(lowerlimit) && upperlimit >= 0 && lowerlimit >= 0) {
						if (resultvalue > upperlimit || resultvalue < lowerlimit) {
							state = false;
							params.remark = "";
							params.checkstate = "1";

							navigator.notification.confirm("确认标记为异常？", function(index) {
								if (index == "1") {
									thiz.row4Click(event);
									return;
								} else {
									params.custom1 = "1";
									params.remark = "";
									params.checkstate = "1";
									AJ.RS({
										service : "EquipCheck",
										method : "saveCheckItemRd",
										async : false,
										scope : this,
										params : params,
										success : function(result) {
											id = result.data;
											justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
												areaID : areaID,
												taskID : taskID,
												taskName : localStorage.getItem("taskName")
											});
										}
									});
								}
							}, "提示", [ '异常', '正常' ]);

						} else {
							params.custom1 = "1";
						}
					}
					// 上下限都为负数
					if (!CU.isEmpty(upperlimit) && !CU.isEmpty(lowerlimit) && upperlimit < 0 && lowerlimit < 0) {
						if (resultvalue < 0) {
							if (resultvalue - upperlimit < 0 || resultvalue - lowerlimit > 0) {
								state = false;
								params.remark = "";
								params.checkstate = "1";

								navigator.notification.confirm("确认标记为异常？", function(index) {
									if (index == "1") {
										thiz.row4Click(event);
										return;
									} else {
										params.custom1 = "1";
										params.remark = "";
										params.checkstate = "1";
										AJ.RS({
											service : "EquipCheck",
											method : "saveCheckItemRd",
											async : false,
											scope : this,
											params : params,
											success : function(result) {
												id = result.data;
												justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
													areaID : areaID,
													taskID : taskID,
													taskName : localStorage.getItem("taskName")
												});
											}
										});
									}
								}, "提示", [ '异常', '正常' ]);

							} else {
								params.custom1 = "1";
							}

						} else {
							navigator.notification.confirm("确认标记为异常？", function(index) {
								if (index == "1") {
									thiz.row4Click(event);
									return;
								} else {
									params.custom1 = "1";
									params.remark = "";
									params.checkstate = "1";
									AJ.RS({
										service : "EquipCheck",
										method : "saveCheckItemRd",
										async : false,
										scope : this,
										params : params,
										success : function(result) {
											id = result.data;
											justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
												areaID : areaID,
												taskID : taskID,
												taskName : localStorage.getItem("taskName")
											});
										}
									});
								}
							}, "提示", [ '异常', '正常' ]);
						}
					}
					// 上限为正数，下限为负数
					if (!CU.isEmpty(upperlimit) && !CU.isEmpty(lowerlimit) && upperlimit >= 0 && lowerlimit < 0) {
						if (resultvalue > upperlimit || resultvalue < lowerlimit) {
							state = false;
							params.remark = "";
							params.checkstate = "1";

							navigator.notification.confirm("确认标记为异常？", function(index) {
								if (index == "1") {
									thiz.row4Click(event);
									return;
								} else {
									params.custom1 = "1";
									params.remark = "";
									params.checkstate = "1";
									AJ.RS({
										service : "EquipCheck",
										method : "saveCheckItemRd",
										async : false,
										scope : this,
										params : params,
										success : function(result) {
											id = result.data;
											justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
												areaID : areaID,
												taskID : taskID,
												taskName : localStorage.getItem("taskName")
											});
										}
									});
								}
							}, "提示", [ '异常', '正常' ]);

						} else {
							params.custom1 = "1";
						}
					}
					// 上限或者下限不存在
					if (CU.isEmpty(upperlimit) || CU.isEmpty(lowerlimit)) {
						state = false;
						navigator.notification.confirm("没有找到该项目的上下限 该项目是否为正常？", function(index) {
							if (index == "1") {
								params.custom1 = "1";
								params.remark = "";
								params.checkstate = "1";
								AJ.RS({
									service : "EquipCheck",
									method : "saveCheckItemRd",
									async : false,
									scope : this,
									params : params,
									success : function(result) {
										id = result.data;
										justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
											areaID : areaID,
											taskID : taskID,
											taskName : localStorage.getItem("taskName")
										});
									}
								});
							} else {
								thiz.row4Click(event);
								return;
							}
						}, "提示", [ '正常', '异常' ]);
					}

				} else {
					// params.resultvalue="";
					CU.hint("请输入巡检结果！");
					return;
				}

			}

			if (rows.val("DATATYPE") == "01") {
				if (!CU.isEmpty(SELECT) || !CU.isEmpty(resultvaluenow)) {
					if (CU.isEmpty(SELECT)) {
						params.resultvalue = resultvaluenow;
					} else {
						params.resultvalue = SELECT;
						resultvaluenow = SELECT;
					}

					if (SELECT == "异常" || SELECT == "不正常" || SELECT == "有泄露" || SELECT == "液位高" || SELECT == "异常报警" || SELECT == "压力异常" || SELECT == "垃圾多") {
						state = false;
						navigator.notification.confirm("确认标记为异常？", function(index) {
							if (index == "1") {
								thiz.row4Click(event);
								return;
							} else {
								params.custom1 = "1";
								params.remark = "";
								params.checkstate = "1";
								AJ.RS({
									service : "EquipCheck",
									method : "saveCheckItemRd",
									async : false,
									scope : this,
									params : params,
									success : function(result) {
										id = result.data;
										justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
											areaID : areaID,
											taskID : taskID,
											taskName : localStorage.getItem("taskName")
										});
									}
								});

							}
						}, "提示", [ '异常', '正常' ]);

					} else {
						params.custom1 = "1";
					}
				} else {
					CU.hint("请选择...");
					return;
				}
			}
			params.remark = "";
			params.checkstate = "1";
		} else {
			navigator.notification.alert("未登录系统，注册用户信息！", function() {
			}, "提示", "确定");
		}
		;

		if (state) {

			AJ.RS({
				service : "EquipCheck",
				method : "saveCheckItemRd",
				async : false,
				scope : this,
				params : params,
				success : function(result) {
					id = result.data;
					justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
						areaID : areaID,
						taskID : taskID,
						taskName : localStorage.getItem("taskName")
					});
				}
			});

		}
	};

	Model.prototype.select1Click = function(event) {
		var rows = event.bindingContext.$object;// 当前行
		var itemid = rows.val("ITEMID");
		var data5 = this.comp("data5");
		data5.clear();
		var param = [ itemid ];
		AJ.RS({
			service : "Others",
			method : "queryScopeList",
			scope : this,
			params : param,
			success : function(result) {
				var datascope = JSON.stringify(result.data[0].DATASCOPE);
				if (!CU.isEmpty(datascope)) {
					datascope = datascope.replace(/\"/g, "");
					var strs = new Array();
					strs = datascope.split(",");
					for (i = 0; i < strs.length; i++) {
						data5.newData();
						data5.setValue("value", strs[i]);
					}
				}
			}
		});
	};
	Model.prototype.button2Click = function(event) {
		this.row4Click(event);
	};
	// 一键提交
	// RECORDID为空说明没有提交过数据
	Model.prototype.button4Click = function(event) {
		justep.Util.hint("正在一键全部提交...", {
			type : 'danger',
			position : 'top'
		});
		thiz = this;
		/*
		 * navigator.notification.confirm( '您确定要全部提交？', // message onConfirm, //
		 * callback to invoke with index of button pressed '提示', // title
		 * ['取消','确认'] // buttonLabels );
		 */

		var sum = thiz.comp('data3').count();
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null, "正在提交...", true);
		}

		thiz.comp('data3').eachAll(function(param) {
			if (!CU.isEmpty(param.row.val('ITEMNO')) && CU.isEmpty(param.row.val('RECORDID'))) {
				thiz.saveAll(param);
			} else {
			}

			if (param.index == sum - 1) {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
					areaID : areaID,
					taskID : taskID,
					taskName : localStorage.getItem("taskName")
				});
			}
		});

	};
	Model.prototype.saveAll = function(param) {
		var params = {};
		// console.log(param.row.val('ITEMNO'));
		if (!CU.isEmpty(localStorage.getItem('SUB'))) {
			var sub = JSON.parse(localStorage.getItem('SUB'));
			params.companyid = CFG.companyid;
			params.signinid = signinID;// 对应标签的签到ID
			params.areaid = areaID;
			params.taskid = taskID;
			params.personnelid = sub.personnelid;
			params.personnelname = sub.personnelname;
			params.equipid = param.row.val("EQUIPID");
			params.equipname = param.row.val("EQUIPNAME");
			params.itemid = param.row.val("ITEMID");
			params.itemname = param.row.val("ITEMNAME");
			params.datatype = param.row.val("DATATYPE");
			params.dataunit = param.row.val("DATAUNIT");
			params.id = param.row.val("RECORDID");
			params.resultvalue = param.row.val("ITEMNO");
			params.custom1 = "1";
			params.remark = "";
			params.checkstate = "1";
		}
		AJ.RS({
			service : "EquipCheck",
			method : "saveCheckItemRd",
			async : false,
			scope : this,
			params : params,
			success : function(result) {
			}
		});

	};

	// 回调函数
	function onConfirm(buttonIndex) {
		if (buttonIndex == '2') {
			var sum = thiz.comp('data3').count();
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
				window.plugins.spinnerDialog.show(null, "正在提交...", true);
			}

			thiz.comp('data3').eachAll(function(param) {
				if (!CU.isEmpty(param.row.val('ITEMNO')) && CU.isEmpty(param.row.val('RECORDID'))) {
					thiz.saveAll(param);
				} else {
				}

				if (param.index == sum - 1) {
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
						areaID : areaID,
						taskID : taskID,
						taskName : localStorage.getItem("taskName")
					});
				}
			});
		}
	}

	Model.prototype.button3Click = function(event) {
		justep.Util.hint("正在刷新！", {
			type : 'danger',
			position : 'top'
		});
		justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'), {
			areaID : areaID,
			taskID : taskID,
			taskName : localStorage.getItem("taskName")
		});
	};

	Model.prototype.button6Click = function(event) {
		justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/MyTaskList.w'), {
			value : "value"
		});
	};

	return Model;
});