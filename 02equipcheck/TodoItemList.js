define(function(require) {
	var justep = require("$UI/system/lib/justep");
	require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	require("cordova!cordova-plugin-dialogs");// 本地对话框
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var areaID = "";
	var taskID = "";
	var signinID = "";
	var Model = function() {
		this.callParent();
	};

	// 接收数据
	Model.prototype.modelParamsReceive = function(event) {
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
				console.log(JSON.stringify(result.data))
				me.comp("data3").loadData(result.data);
			}
		});
	};

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
				AREAID : areaID,
				TASKID : taskID,
				SIGNINID : signinID

			};
			justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemEdit.w'), params);
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

	/*
	 * //提交 Model.prototype.button1Click = function(event){ var data1 =
	 * this.comp("data1"); if(data1.count() == 0){ CU.hint("您尚未签到，不能提交巡检数据！");
	 * return; }
	 * 
	 * var rows = event.bindingContext.$object;//当前行
	 * console.log(rows.val("EQUIPID"));return; var params ={};
	 * if(!CU.isEmpty(localStorage.getItem('SUB'))) { var sub
	 * =JSON.parse(localStorage.getItem('SUB')); params.companyid=CFG.companyid;
	 * params.signinid=signinID;//对应标签的签到ID params.areaid=areaID;
	 * params.taskid=taskID; params.personnelid=sub.personnelid;
	 * params.personnelname=sub.personnelname;
	 * params.equipid=rows.val("EQUIPID");
	 * params.equipname=rows.val("EQUIPNAME"); params.itemid=rows.val("ITEMID");
	 * params.itemname=rows.val("ITEMNAME");
	 * params.datatype=rows.val("DATATYPE");
	 * params.dataunit=rows.val("DATAUNIT"); if(rows.val("DATATYPE") == "02"){
	 * params.resultvalue="100"; } if(rows.val("DATATYPE") == "01"){
	 * params.resultvalue="异常"; } params.remark="异常"; params.checkstate="1";
	 * }else{
	 * navigator.notification.alert("未登录系统，注册用户信息！",function(){},"提示","确定"); };
	 * 
	 * AJ.RS({service:"EquipCheck",method:"saveCheckItemRd",async:false,scope:this,params:params,
	 * success:function(result){ id=result.data; //console.log(id);
	 * justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList.w'),{areaID:areaID,taskID:taskID,taskName:localStorage.getItem("taskName")});
	 * //justep.Shell.closePage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemEdit.w'));
	 * //justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemView.w'),{"id":id});
	 *  } }); };
	 */

	return Model;
});