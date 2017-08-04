define(function(require){
	var justep = require("$UI/system/lib/justep");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.data1CustomRefresh = function(event){
		var params =[CFG.companyid];
	  	AJ.RS({service:"Personnel",method:"querySafeAreaSet",scope:this,params:params,
			success:function(result){
			//console.log(JSON.stringify(result.data));
			   event.source.loadData(result.data); 
			} 		
		});		
	};
	Model.prototype.rowClick = function(event){
		   var row = event.bindingContext.$object;
		   var areaName =row.val('AREANAME');
		   var areaid = row.val("ID");
		   justep.Shell.showPage(require.toUrl('$UI/emp_app/04safealert/AreaSafeInfoList.w'), {"areaid":areaid,"areaName":areaName});
		
	};

	Model.prototype.button1Click = function(event){
		//justep.Shell.showPage(require.toUrl('$UI/emp_app/04safealert/safe.w'));
		this.comp("windowDialog1").open();
	};

	return Model;
});