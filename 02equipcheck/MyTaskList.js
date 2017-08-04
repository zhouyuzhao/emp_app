define(function(require){
	var justep = require("$UI/system/lib/justep");
	
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-dialogs");//本地对话框
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	var sub={};
	var taskName = "";
	var tasID="";
	var me='';
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
			 console.log(sub);
		}
	};

	//加载从后台传来的数据
	Model.prototype.MyTaskCustomRefresh = function(event){
		var me = this;
		var MyTask = me.comp("Task");
		var params =[sub.workcenterid,sub.personnelid];
		AJ.RS({service:"EquipCheck",method:"queryCheckTaskList",scope:this,params:params,
				success:function(result){
					MyTask.loadData(result.data);
	 		   }				
		});		
	};
	
	//点击巡检点，打开TodoItemList.w页面
	Model.prototype.row2Click = function(event){
		var areaId = localStorage.getItem("areaid");
		//当前行
		var row = event.bindingContext.$object;
		var areaID = row.val("ID");
		var taskID = row.val("TASKID");
		justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/TodoItemList2.w'),{areaID:areaID,taskID:taskID,taskName:taskName});
		this.comp("wing1").hideRight();
	};

	//打开对应巡检任务下面的巡检点
	Model.prototype.col1Click = function(event){
		var row = event.bindingContext.$object;//当前行
		var taskID = row.val("TASKID");
		taskName = row.val("TASKNAME");
		var taskStatus = row.val("TASKSTATUS");
		//console.log(taskID+""+taskName+""+taskStatus);
		if(taskStatus=='02'||taskStatus=='03' ||taskStatus=='04'){
			localStorage.setItem('taskID',taskID);
			localStorage.setItem('taskName',taskName);
			var me = this;   
			var tID = localStorage.getItem('taskID');
			var data3 = me.comp("data3");
			data3.newData({
				index : 0,
				defaultValues : [ {
					"taskID" : tID
				} ]
			});
			var params=[taskID];
			AJ.RS({service:"EquipCheck",method:"queryTaskAreaList",scope:this,params:params,
					success:function(result){
						me.comp("data1").loadData(result.data);
						//console.log(JSON.stringify(result.data));
						me.comp("wing1").showRight();
					}				
				});	
		}		
	};

	//签收
	Model.prototype.output3Click = function(event){  
		 me = this;
		var row = event.bindingContext.$object;
		var status = row.val("TASKSTATUS");
		if(status=='01'){
		var taskID = row.val("TASKID");
		localStorage.setItem('taskID',taskID);
		var params = {
				companyid:sub.companyid,
				taskid:taskID,
				personnelid:sub.personnelid,
				personnelname:sub.personnelname,
				status:"03"
		};
		AJ.RS({service:"EquipCheck",method:"updateTaskStatus",scope:this,params:params,
				success:function(result){
					if(result.success){			
						localStorage.setItem('taskID',taskID);
							
						me.MyTaskCustomRefresh();
						var tID = localStorage.getItem('taskID');
							var data3 = me.comp("data3");
							data3.newData({
								index : 0,
								defaultValues : [ {
									"taskID" : tID 
								} ]
							});
					}
	 		   }				
			});
			
			}else{
			
			tasID = row.val("TASKID");
				navigator.notification.confirm(
						'您确定要取消任务？', // message
						onConfirm,            // callback to invoke with index of button pressed
						'提示',           // title
						['取消','确认']     // buttonLabels
				);
	}
};

//回调函数
function onConfirm(buttonIndex) {
    if(buttonIndex=='2'){
    	var pa = [tasID];
    	window.plugins.spinnerDialog.show(null,"正在取消...",true);
    			AJ.RS({service:"Others",method:"closeTask",scope:this,params:pa,
				success:function(result){
					if(result.data='success'){
					window.plugins.spinnerDialog.hide();
					me.MyTaskCustomRefresh();
					}else{
					
						window.plugins.spinnerDialog.hide();
						alert("系统发生错误");
					}
	 		   }				
			});
    }
    }
    

   //返回首页
   Model.prototype.button1Click = function(event){
		justep.Shell.showPage("frame");
	};
   
	//打开左边栏
	Model.prototype.button3Click = function(event){
		var me = this;
		var data2 = this.comp("data2");
		var params =[sub.workcenterid];
		AJ.RS({service:"EquipCheck",method:"queryCheckTempletList",scope:this,params:params,
			success:function(result){
				data2.loadData(result.data);
				me.comp("wing1").toggleLeft();
			}				
		});
		
	};
   
	//创建任务
	Model.prototype.button4Click = function(event){
		var me = this;
		var row = event.bindingContext.$object;//当前行
		var templetId = row.val("TEMPLETID");
		var params = {companyid:CFG.companyid,personnelid:sub.personnelid,personnelname:sub.personnelname,templetid:templetId};
		AJ.RS({service:"EquipCheck",method:"CreateCheckTaskByTemplet",scope:this,params:params,
				success:function(result){
					me.MyTaskCustomRefresh();
					me.comp("wing1").toggleLeft();
			}
		});
	};
	Model.prototype.button5Click = function(event){
		this.comp("wing1").toggleLeft();
	};
	Model.prototype.button6Click = function(event){
		this.comp("wing1").toggleRight();
	};

	Model.prototype.modelParamsReceive = function(event){
		this.MyTaskCustomRefresh();
		var tID = localStorage.getItem('taskID');
		if(!CU.isEmpty(tID)){
		var data3 = this.comp("data3");
			data3.newData({
				index : 0,
				defaultValues : [ {
					"taskID" : tID 
				} ]
			});
			
		}else{
			var data3 = this.comp("data3");
			data3.newData({
				index : 0,
				defaultValues : [ {
					"taskID" : "" 
				} ]
			});
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			navigator.notification.alert("当前没有任务正在进行,请创建任务或者选择已经创建的任务！",function(){},"提示","确定");
			}
		}
	};

	return Model;
});