define(function(require){
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var sub={};
	var Model = function(){
		this.callParent();
			if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}		
	};
	Model.prototype.navContent1Active = function(event){
		this.comp("navContainer1").load(require.toUrl("$UI/emp_app/06workaudit/DefectList.w"));
	};
	Model.prototype.navContent2Active = function(event){
		this.comp("navContainer2").load(require.toUrl("$UI/emp_app/06workaudit/UsingNoteList.w"));
	};
	Model.prototype.navContent3Active = function(event){
		this.comp("navContainer3").load(require.toUrl("$UI/emp_app/06workaudit/PurchaseNoteList.w"));
	};
	Model.prototype.navContent4Active = function(event){
		this.comp("navContainer4").load(require.toUrl("$UI/emp_app/06workaudit/ServiceNoteList.w"));
	};
	//工作票
	Model.prototype.navContent5Active = function(event){
		this.comp("navContainer5").load(require.toUrl("$UI/emp_app/06workaudit/WorkNoteList.w"));
	};
	//操作票
	Model.prototype.navContent6Active = function(event){
		this.comp("navContainer6").load(require.toUrl("$UI/emp_app/06workaudit/OperationNoteList.w"));
	};

	Model.prototype.model1ParamsReceive = function(event){
	this.getNumber();
	};
	
	Model.prototype.getNumber = function(event){
		if(!CU.isEmpty(localStorage.getItem('number1'))){
			this.getElementByXid("badge1").innerHTML = localStorage.getItem("number1");
		}
		if(!CU.isEmpty(localStorage.getItem('number2'))){
			this.getElementByXid("badge2").innerHTML = localStorage.getItem("number2");
		}
		if(!CU.isEmpty(localStorage.getItem('number3'))){
			this.getElementByXid("badge3").innerHTML = localStorage.getItem("number3");
		}
		if(!CU.isEmpty(localStorage.getItem('number4'))){
			this.getElementByXid("badge4").innerHTML = localStorage.getItem("number4");
		}
		if(!CU.isEmpty(localStorage.getItem('number5'))){
			this.getElementByXid("badge5").innerHTML = localStorage.getItem("number5");
		}
		if(!CU.isEmpty(localStorage.getItem('number6'))){
			this.getElementByXid("badge6").innerHTML = localStorage.getItem("number6");
		}
	};

	Model.prototype.button1Click = function(event){
		this.close();
	};



	return Model;
});