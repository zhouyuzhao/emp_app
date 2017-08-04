define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	var sub={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	
	Model.prototype.data1CustomRefresh = function(event){
	var me = this;
		var params={page:'1',start:'0',pageSize:'50'};
		AJ.RS({service:"TodoList",method:"queryEquipDefectRdList",scope:this,params:[params,sub.companyid,sub.userid],
			success:function(result){			
				if(!CU.isEmpty(result.data.valueList)){
					//console.log(JSON.stringify(result.data.valueList));
					localStorage.setItem("number1", result.data.valueList.length);
					me.getParentModel().getNumber();
					event.source.loadData(result.data.valueList);
				}else{
					localStorage.setItem("number1", "0");
					me.getParentModel().getNumber();
				}			   
			} 		
		});
	};
	
	Model.prototype.passClick = function(event){	
		  var me = this;
		navigator.notification.confirm("您确认要审核通过？", function(index) {
			if (index == "1") {
				window.plugins.spinnerDialog.show(null, "正在执行...", true);
				var data = me.comp("data1");
				var row = event.bindingContext.$object;
				var params = [ row.toJson().userdata.id.value, "审核通过！", 1, sub.companyid, sub.userid ];
				AJ.RS({
					service : "TodoList",
					method : "audit",
					scope : this,
					params : params,
					success : function(result) {
						window.plugins.spinnerDialog.hide();
						CU.hint("审核通过！");
						data.refreshData();
					}
				});
			}
		}, "提示", [ '确定', '取消' ]);
 
	};
	Model.prototype.massageClick = function(event){
		var windowDialog = this.comp("windowDialog1");
		var url= "";
	    var row = event.bindingContext.$object;
	    var params=row.toJson().userdata.id.value;
		   AJ.RS({service:"TodoList",method:"getEquipDefectRdInfo",scope:this,params:params,
			   	success:function(result){
			   	var jsonData = JSON.stringify(result.data);
			   	url = require.toUrl('./DefectView.w');
				windowDialog.open({src:url,data:jsonData});
				//justep.Shell.showPage(require.toUrl('./DefectView.w'), {"data":jsonData});
			} 		
		});
	};

	return Model;
});