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
	
	Model.prototype.modelParamsReceive = function(event){
	var data1 = this.comp("data1");
		var param = [sub.personnelid,sub.companyid];
		AJ.RS({
			service : "UseCar",
			method : "queryUseCarList",
			scope : this,
			params : param,
			success : function(result) {
			data1.clear();
				if (!CU.isEmpty(result.data)) {
					data1.loadData(result.data);
				}else{
					//navigator.notification.alert("没有用车记录！", function() {}, "提示", "确定");
				}
				
			}
		});
	};

	//查看用车申请详情
	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object;
		var id = row.val("ID");
		var STATUS = row.val("STATUS");
		justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCarView.w'),{"id":id,"status":STATUS});
	};
	
	

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/13usecar/useCar.w'),{"value":"value"});
	};
	
	

	return Model;
});