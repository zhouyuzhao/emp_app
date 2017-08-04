define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var sub ={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));	  
		}
	};
	//data1刷新方法
	Model.prototype.data1CustomRefresh = function(event){
		var equipId = this.params.objectId;
		var data1 = this.comp("data1");
		var params =[sub.companyid,equipId]; 
		AJ.RS({service:"TodoList",method:"queryDefectRdListByEquipID",scope:this,params:params,
			success:function(result){
				data1.loadData(result.data);
			 }	 			
		});
	};
	
	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object; 
		var params=row.toJson();		 
		justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/DefectEdit.w'),params);
	};

	return Model;
});