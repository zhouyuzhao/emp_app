define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var timer;
	var Model = function(){
		this.callParent();
		var me = this;
		function refresh(){
			me.data1CustomRefresh(event);
		}
		//每隔多久刷新data
		timer = window.setInterval(refresh,5000);
	};
	
	//关闭
	Model.prototype.closebtnClick = function(event){
		window.clearInterval(timer);
		justep.Shell.closePage();
	};

	Model.prototype.data1CustomRefresh = function(event) {
		var data1 = this.comp("data1");
		AJ.RS({
			server : CFG.pi_url,
			service : "Others",
			method : "queryRuningData",
			scope : this,
			params : [],
			success : function(result) {
				//console.log(JSON.stringify(result.data));
				console.log(result);
				var data = result.data;
				data1.clear();
				for (var i = 0; i < data.length; i++) {
					var obj = data[i];
					var paramname = obj.paramname;
					var value = obj.value;
					var JZ1 = JSON.stringify(value.JZ1);
					var JZ2 = JSON.stringify(value.JZ2);
					var JZ3 = JSON.stringify(value.JZ3);
					var JZ4 = JSON.stringify(value.JZ4);
					
					data1.newData({
						defaultValues : [ {
							"paramname" :paramname,
							"JZ1" : JZ1,
							"JZ2" : JZ2,
							"JZ3" : JZ3,
							"JZ4" : JZ4
						} ]
					});
				}
				
			}
		});
		
		AJ.RS({
			server : CFG.pi_url_wifi,
			service : "Others",
			method : "queryRuningData",
			scope : this,
			params : [],
			success : function(result) {
			console.log(JSON.stringify(result.data));
				var data = result.data;
				data1.clear();
				for (var i = 0; i < data.length; i++) {
					var obj = data[i];
					var paramname = obj.paramname;
					var value = obj.value;
					var JZ1 = JSON.stringify(value.JZ1);
					var JZ2 = JSON.stringify(value.JZ2);
					var JZ3 = JSON.stringify(value.JZ3);
					var JZ4 = JSON.stringify(value.JZ4);
					
					data1.newData({
						defaultValues : [ {
							"paramname" :paramname,
							"JZ1" : JZ1,
							"JZ2" : JZ2,
							"JZ3" : JZ3,
							"JZ4" : JZ4
						} ]
					});
				}
				
			}
		});
	};
	//window.setInterval(function aa(){console.log("hello")},1000);


	return Model;
});