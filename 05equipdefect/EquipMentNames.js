define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
		
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	
	var Model = function(){
		this.callParent();
	};

	//接收父页面参数
	Model.prototype.windowReceiver1Receive = function(event){
		var data = event.data;
		var data1 = this.comp("data1");
		data1.loadData(data);
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.hide();
		}
	};
	//点击设备名称，把名字和OBJECTID回传
	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object;
		var equipMentName = row.val('EQUIPMENTNAME');
		var OBJECTID = row.val('OBJECTID');
		this.comp('windowReceiver1').windowEnsure({equipMentName:equipMentName,objectId:OBJECTID});
	};


	return Model;
});