define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	
	var sub={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	//关闭
	Model.prototype.button1Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
	};
	

	Model.prototype.modelParamsReceive = function(event){
	var data1 = this.comp("data1");
		var param = [sub.personnelid,sub.companyid];
		AJ.RS({
			service : "Vacation",
			method : "queryUserVacationList",
			scope : this,
			params : param,
			success : function(result) {
				if (!CU.isEmpty(result.data)) {
					data1.loadData(result.data);
				}else{
				//navigator.notification.alert("没有请假记录！", function() {}, "提示", "确定");
					}
				
			}
		});
	};
	
	//查看请假单详情
	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object;
		var id = row.val("ID");
		var STATUS = row.val("STATUS");
		justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/VacationView.w'),{"id":id,"status":STATUS});
	};
	
	

	return Model;
});