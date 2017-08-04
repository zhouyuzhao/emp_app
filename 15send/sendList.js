define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	var sub={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage("frame");
	};
	//获取发文列表
	Model.prototype.modelParamsReceive = function(event){
		var data1 = this.comp("data1");
		var params = {
			page : '1',
			start : '0',
			pageSize : '50'
		};
		AJ.RS({
			service : "SP_dodocworks",
			method : "querySendList",
			scope : this,
			params : [ params, sub.personnelid ],
			success : function(result) {
				data1.clear();
				if (!CU.isEmpty(result.data.valueList)) {
					data1.loadData(result.data.valueList);
					localStorage.setItem("number10", result.data.valueList.length);
				}else{
					 CU.hint("没有数据！");
					 localStorage.setItem("number10","0");
				}
			}
		});
	};
	//查看发文详情
	Model.prototype.li1Click = function(event){
		var row = event.bindingContext.$object;
		var id = row.val("id");
		var lastworkrdid = row.val("lastworkrdid");
		AJ.RS({
			service : "SP_senddocrd",
			method : "queryInfo",
			scope : this,
			params : [ id ],
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					var jsonData = JSON.stringify(result.data);
					justep.Shell.showPage(require.toUrl('$UI/emp_app/15send/sendView.w'), {
						"data" : jsonData,
						"lastworkrdid" : lastworkrdid
					});
				} else {
					CU.hint("没有找到数据！");
				}
			}
		});
	};

	return Model;
});