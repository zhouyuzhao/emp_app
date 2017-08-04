define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	
	var sub={};
	var wfinstanceid = "";
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	Model.prototype.modelParamsReceive = function(event){
		this.comp("demoPopOver").hide();
	    var info=JSON.parse(event.params.data);
	    this.comp("output").set({value:info.EQUIPMENTNAME});
	    this.comp("input1").set({value:info.UNITIDNAME});
	    this.comp("input2").set({value:info.EQUIPMENTNAME});
	    this.comp("input3").set({value:info.OLDCODE});
	    this.comp("input4").set({value:info.DEFECTPOSITION});
	    this.comp("input5").set({value:info.DEFECTLEVELNAME});
	    this.comp("input6").set({value:info.PERSONNELNAME});
	    this.comp("input7").set({value:info.REPORTDATE});
	    this.getElementByXid("span5").innerHTML=info.DEFECTLINFO;
	    wfinstanceid = info.WFINSTANCEID;
	    value = event.params.value;
	};
	Model.prototype.goBtnClick = function(event){
	    this.comp("demoPopOver").show();
	};
	Model.prototype.returnBtnClick = function(event){
        this.comp("demoPopOver").hide();
	};
	Model.prototype.enterBtnClick = function(event){
	if (justep.Browser.isX5App && justep.Browser.isAndroid) {
				window.plugins.spinnerDialog.show(null,"正在执行...",true);
			}
		var me = this;
		var str = this.comp("textarea1").val();
        if(!CU.isEmpty(str)){
            var params=[wfinstanceid,str,0,sub.companyid,sub.userid];
	 	    AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
			 if(result.success){
			 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				me.getParentModel().comp("data1").refreshData();
				me.comp("demoPopOver").hide();
				me.comp("windowReceiver1").windowCancel();
				//justep.Shell.showPage(require.toUrl('./DefectList.w'));
			  }else{
			  if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				  CU.hint("退回失败！");
			  }
			 } 		
	 	    });
        }else{
         if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
            this.getElementByXid("InfoBox").style.display="block";
        }
	};
	Model.prototype.passBtnClick = function(event){
		window.plugins.spinnerDialog.show(null,"正在执行...",true);
		var me = this;
	    var params=[wfinstanceid,"审核通过！",1,sub.companyid,sub.userid];
	 	AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
				 if(result.success){
				 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				me.getParentModel().comp("data1").refreshData();
				me.comp("windowReceiver1").windowCancel();
				 	//justep.Shell.showPage(require.toUrl('./AuditFrame.w'));
				 }else{
					window.plugins.spinnerDialog.hide();
					 CU.hint("审核失败！");
				 }
			      
			} 		
		});
	};
	Model.prototype.OkBtnClick = function(event){
         this.getElementByXid("InfoBox").style.display="none";
	};
	Model.prototype.modelActive = function(event){
		//this.comp("demoPopOver").hide();
	};
	Model.prototype.button2Click = function(event){
		this.comp("windowReceiver1").windowCancel();
	};
	return Model;
});