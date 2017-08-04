define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	
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
		this.comp("textarea1").clear();
		 var info=JSON.parse(event.params.data);
		 wfinstanceid = info.WFINSTANCEID;
		 var user = event.params.user;
		 if(!CU.isEmpty(user)){
			 $(".div4").hide();
		 }else{
			 $(".div4").show();
		 }

		 //个人信息
		 this.getElementByXid("label4").innerHTML=info.USERNAME;
		 this.getElementByXid("label5").innerHTML=info.DEPARTMENTNAME;
		 //请假信息
		 this.getElementByXid("label7").innerHTML=info.BEGINDATE;
		 this.getElementByXid("label9").innerHTML=info.ENDDATE;
		 this.getElementByXid("label11").innerHTML=info.VACATIONDAYS;
		 var type="";
		 if(info.VACATIONTYPE == '01'){
			 type="年休假";
		 }
		 if(info.VACATIONTYPE == '02'){
			 type="补休假";
		 }
		 if(info.VACATIONTYPE == '03'){
			 type="事假";
		 }
		 if(info.VACATIONTYPE == '04'){
			 type="婚嫁";
		 }
		 if(info.VACATIONTYPE == '05'){
			 type="产假(陪护假)";
		 }
		 if(info.VACATIONTYPE == '06'){
			 type="病假";
		 }
		 if(info.VACATIONTYPE == '07'){
			 type="探亲假";
		 }
		 if(info.VACATIONTYPE == '08'){
			 type="丧假";
		 }
		 if(info.VACATIONTYPE == '09'){
			 type="工伤假";
		 }
		 if(info.VACATIONTYPE == '10'){
			 type="其他";
		 }
		 this.getElementByXid("label14").innerHTML=type;
		 if(!CU.isEmpty(info.REMARK)){
			 this.getElementByXid("label16").innerHTML=info.REMARK;
		 }
		 wfinstanceid = info.WFINSTANCEID;
		 var status = info.STATUS;
		 if(status == '04'){
		 var data1 = this.comp("data1");
			 AJ.RS({
				service : "UseCar",
				method : "getALLRdOpinion",
				scope : this,
				params : [wfinstanceid],
				success : function(result) {
					data1.loadData(result.data);
				}
			});
			 
		 }else{
		 var data1 = this.comp("data1");
		 AJ.RS({
				service : "UseCar",
				method : "getUseCarRdOpinion",
				scope : this,
				params : [wfinstanceid],
				success : function(result) {
					data1.loadData(result.data);
				}
			});
		 }
	};
	//通过
	Model.prototype.passBtnClick = function(event){
		var me = this;
		navigator.notification.prompt('请您填写评审意见！', // message
		function(results){
			if(results.buttonIndex=='2'){//results.input1
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
				var params=[wfinstanceid,results.input1,1,sub.companyid,sub.userid];
				AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
					success:function(result){
				 if(result.success){
					 CU.hint("审核通过！");
					 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
					 justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
				 }else{
					 CU.hint("审核失败！");
					 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
				 }
			} 		
		});
		}else{
			if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
			}
		},
		'您确定要评审通过？',
		[ '取消', '通过' ],
		'评审通过！'
		);
	};
	//打开退回窗口
	Model.prototype.goBtnClick = function(event){
		 this.comp("demoPopOver").show();
	};
	//返回
	Model.prototype.returnBtnClick = function(event){
		this.comp("demoPopOver").hide();
	};
	//退回
	Model.prototype.enterBtnClick = function(event){
		var me = this;
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在提交...",true);
		}
		var str = this.comp("textarea1").val();
        if(!CU.isEmpty(str)){
            var params=[wfinstanceid,str,0,sub.companyid,sub.userid];
	 	    AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
			 if(result.success){
				 CU.hint("退回成功！");
				  if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
				 justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
			  }else{
				  CU.hint("退回失败！");
				   if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
			  }
			 } 		
	 	    });
        }else{
            this.getElementByXid("InfoBox").style.display="block";
        }
	};

	Model.prototype.OkBtnClick = function(event){
		 this.getElementByXid("InfoBox").style.display="none";
	};
	
	//终止
	Model.prototype.button1Click = function(event){
		var me = this;
		navigator.notification.confirm("您确认要终止请假单？", function(index) {
			if (index == "1") {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.show(null, "正在终止...", true);
				}
			var params=[wfinstanceid,"终止！",sub.companyid,sub.userid];
	 	    AJ.RS({service:"TodoList",method:"stop",scope:this,params:params,
			 success:function(result){
			 if(result.success){
				 CU.hint("终止成功！");
				 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
							var param = [ wfinstanceid ];
							AJ.RS({
								service : "Vacation",
								method : "updateStatus",
								scope : this,
								params : param,
								success : function(result) {
									if (!CU.isEmpty(result.data)) {
										justep.Shell.showPage(require.toUrl('$UI/emp_app/12vacation/Vacation.w'),{"value":"value"});
									}else{
										 CU.hint("改状态失败！");
									}
								}
							});
			  }else{
				  CU.hint("终止失败！");
				  if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						 window.plugins.spinnerDialog.hide();
					 }
			  }
			 } 		
	 	    });
			}
		}, "提示", [ '确定', '取消' ]);
	};

	Model.prototype.button2Click = function(event){
		this.close();
	};

	return Model;
});