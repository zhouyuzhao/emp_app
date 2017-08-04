define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	
	var sub ={};
	var Model = function(){
		if (!CU.isEmpty(localStorage.getItem('SUB'))) {
			sub = JSON.parse(localStorage.getItem('SUB'));
		}
		this.callParent();
	};


	Model.prototype.data1CustomRefresh1 = function(event,yearMonth){
	if (justep.Browser.isX5App && justep.Browser.isAndroid) {
				window.plugins.spinnerDialog.show(null,"正在查询",true);
			}
		 var me = this;
		AJ.RS({service:"Equipdefectrd",method:"queryAllDefectRdList",scope:this,params:[CFG.companyid,yearMonth],
			success:function(result){
				me.comp("data1").loadData(result.data);
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			} 		
		});
	};



	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object; 
		var params=row.toJson();		 
		justep.Shell.showPage(require.toUrl('$UI/emp_app/09dataquery/DefectView.w'),params);
	};



	Model.prototype.input1Change = function(event){
		var date = event.value;
		if(!CU.isEmpty(date)){
		 var d = date.split("-");
		 var yearMonth = d[0]+"-"+d[1];
		 this.data1CustomRefresh1(event, yearMonth);
		 }
	};



	Model.prototype.modelParamsReceive = function(event){
		var myDate = new Date();    
		 var date = myDate.toLocaleDateString();
		 var d = date.split("/");
		 var month = d[1];
		 if(month.length==1){
			 month="0"+month;
		 }
		 var yearMonth = d[0]+"-"+month;
		this.comp("input1").val(yearMonth);
	};



	return Model;
});