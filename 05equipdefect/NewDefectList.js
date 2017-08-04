define(function(require){
	var justep = require("$UI/system/lib/justep");

	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var sub ={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));	  
		}
	};
	//关闭
	Model.prototype.button1Click = function(event){
		justep.Shell.showPage("frame");
	};
	//加载数据data1
	Model.prototype.data1CustomRefresh = function(){
		var data1 = this.comp("data1");
		var params =[sub.companyid,sub.personnelid]; 
		AJ.RS({service:"TodoList",method:"queryNewDefectRdList",scope:this,params:params,
		success:function(result){
			 data1.loadData(result.data);
			 }	 			
		});
	};

	//编辑缺陷
	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object; 
		var params=row.toJson();		 
		justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/DefectEdit.w'),params);
	};

	//创建缺陷
	Model.prototype.button6Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/DefectEdit.w'),{newDefect:"newDefect"});
	};


	
	Model.prototype.content4Active = function(event){
		this.comp("windowContainer4").load(require.toUrl("$UI/emp_app/05equipdefect/oldDefectList.w"), {pagetype:"02"});//值长确认
	};

	Model.prototype.content5Active = function(event){
		this.comp("windowContainer5").load(require.toUrl("$UI/emp_app/05equipdefect/oldDefectList.w"), {pagetype:"03"});//检修确认
	};

	Model.prototype.content6Active = function(event){
		this.comp("windowContainer6").load(require.toUrl("$UI/emp_app/05equipdefect/oldDefectList.w"), {pagetype:"04"});//消缺验收
	};


	Model.prototype.modelParamsReceive = function(event){
		this.data1CustomRefresh();
	};




	return Model;
});