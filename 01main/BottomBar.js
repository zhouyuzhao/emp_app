define(function(require){
	var currentpage="";
	var Model = function(){
		this.callParent();
	};
	Model.prototype.modelLoad = function(event){
  
	};
	Model.prototype.homeBtnClick = function(event){
		 parent.justep.Shell.showPage('frame');
	};

	Model.prototype.noticeBtnClick = function(event){
	    
       parent.justep.Shell.showPage('notice');
	};

	Model.prototype.docBtnClick = function(event){
	    justep.Shell.showPage(require.toUrl('$UI/emp_app/21docsearch/DocSearch.w'),{value:"value"});
        //parent.justep.Shell.showPage('doc');
	};

	Model.prototype.userBtnClick = function(event){
		parent.justep.Shell.showPage('myinfo');
		
	};	
	 /*btnGroup按钮高亮显示工具方法*/
	Model.prototype.editBtnBackground = function(addBtn,removeBtns){
		this.getElementByXid(addBtn).children[0].style.color="#FFFF00";
		this.getElementByXid(addBtn).children[1].style.color="#FFFF00";
		for(var i=0;i<removeBtns.length;i++){
			this.getElementByXid(removeBtns[i]).children[0].style.color="#FFFFFF";
			this.getElementByXid(removeBtns[i]).children[1].style.color="#FFFFFF";
		}
	};
	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		currentpage = context.getRequestParameter("from");
		if (currentpage=="home"){
			 this.editBtnBackground("homeBtn",["noticeBtn","docBtn","userBtn"]);
		}
		if (currentpage=="notice"){
			 this.editBtnBackground("noticeBtn",["homeBtn","docBtn","userBtn"]);
		}
		if (currentpage=="doc"){
			 this.editBtnBackground("docBtn",["noticeBtn","homeBtn","userBtn"]);
		}
		if (currentpage=="user"){
			this.editBtnBackground("userBtn",["noticeBtn","docBtn","homeBtn"]);
		}
		
	};
	return Model;
});