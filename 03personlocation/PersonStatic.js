define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var Com = require("$UI/emp_app/common/util/CommonUtil");
	var sub ={};
	var Model = function(){
		this.callParent();
		if(!Com.isEmpty(localStorage.getItem('SUB'))) {
			  sub =JSON.parse(localStorage.getItem('SUB'));
			  console.log(sub);
		}
	};
	Model.prototype.rowClick = function(event){
		var row = event.bindingContext.$object;
		var params =row.val('AREACODE');
		this.comp('windowDialog').open({data:params});
	};

	Model.prototype.CustomRefresh = function(){	
	    var personnum= this.getElementByXid("personnum");
	    var safedata=this.comp("data3");
	  	AJ.RS({service:"Personnel",method:"querySafeAreaList",scope:this,params:sub.companyid,
			success:function(result){
		    safedata.loadData(result.data);
			} 		
		});
		AJ.RS({service:"Personnel",method:"querySafeAreaPersonNum",scope:this,params:sub.companyid,
			 success:function(result){
			 var str="全厂安全区域内人员数量:"+result.data.PERSONNELNUM+"人";
			 personnum.innerHTML=str;
			 } 		
		});				
	};		
	
	Model.prototype.modelParamsReceive = function(event){	
	  this.CustomRefresh();   
	};
	

	
	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("frame");
	};
	

	
	return Model;
});