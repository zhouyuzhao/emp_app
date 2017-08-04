define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var Model = function(){
		this.callParent();
	};
	Model.prototype.windowReceiver1Receive = function(event){
	 var  temp = event.data;
	 var comp=this.comp('data2');
		AJ.RS({service:"Personnel",method:"querySafeAreaPersonel",scope:this,params:temp,
			success:function(result){
			comp.loadData(result.data);
			} 		
		});		
	};
	return Model;
});