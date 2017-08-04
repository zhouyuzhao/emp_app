define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
    var AJ = require("$UI/emp_app/common/util/Pajax");
    var CU = require("$UI/emp_app/common/util/CommonUtil");
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
	    var info=JSON.parse(event.params.data);
	    console.log(info);
	    this.comp("output").set({value:info.SERVICENAME});
	    this.comp("input1").set({value:info.SERVICECODE});
	    this.comp("input2").set({value:info.SERVICENAME});
	    this.comp("input3").set({value:info.SUPPLIERNAME});
	    this.comp("input4").set({value:info.ESTIMATEACTUALCOST});
	    this.comp("input5").set({value:info.REQUIREMENTDATE});
	    this.comp("input6").set({value:info.ORDERTITLE});
	    this.getElementByXid("textarea3").innerHTML=info.SERVICEINFO;
	    wfinstanceid = info.WFINSTANCEID;
	};
	Model.prototype.passBtnClick = function(event){
		window.plugins.spinnerDialog.show(null,"正在执行...",true);
		var me = this;
        var params=[wfinstanceid,"审核通过！",1,sub.companyid,sub.userid];
	 	AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
				window.plugins.spinnerDialog.hide();
				me.getParentModel().comp("data1").refreshData();
				me.comp("windowReceiver1").windowCancel();
			    //justep.Shell.showPage(require.toUrl('./DefectList.w'));
			} 		
		});
	};
	Model.prototype.goBtnClick = function(event){
	    this.comp("demoPopOver").show();
	};
	Model.prototype.returnBtnClick = function(event){
        this.comp("demoPopOver").hide();
	};
	
	Model.prototype.enterBtnClick = function(event){
		window.plugins.spinnerDialog.show(null,"正在执行...",true);
		var me = this;
		if(this.getElementByXid("textarea1").value!==""){
            var params=[wfinstanceid,this.getElementByXid("textarea1").value,0,sub.companyid,sub.userid];
	 	    AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
				window.plugins.spinnerDialog.hide();
				me.getParentModel().comp("data1").refreshData();
				me.comp("demoPopOver").hide();
				me.comp("windowReceiver1").windowCancel();
			    //justep.Shell.showPage(require.toUrl('./DefectList.w'));
			} 		
		  });
        }else{
			window.plugins.spinnerDialog.hide();
            this.getElementByXid("InfoBox").style.display="block";
        }
	};
	Model.prototype.OkBtnClick = function(event){
         this.getElementByXid("InfoBox").style.display="none";
	};
	Model.prototype.button1Click = function(event){
		justep.Shell.closePage();
	};
	return Model;
});