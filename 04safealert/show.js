define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};
	Model.prototype.modelParamsReceive = function(event){
		var imgName = event.params.data;
		var url = require.toUrl("$UI/emp_app/images/book/"+imgName+".jpg");
		this.getElementByXid("image4").src=url;
	};
	return Model;
});