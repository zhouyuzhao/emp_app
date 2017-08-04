define(function(require){
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	
	var pagetype = "";
	var sub={};
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};

	Model.prototype.data1CustomRefresh2 = function(){
		var data1 = this.comp("data1");
		var methodname="";
		var status="";
		var params={page:'1',start:'0',pageSize:'50'};
		 if(pagetype == "02"){//值长确认
			 methodname="queryDefectRdListByStatus";
			 status="05";//缺陷待确认
		 }
		 if(pagetype == "03"){//检修确认
			 methodname="queryDefectRdListByStatus";
			 status="15";//值长确认通过
			
		 }
		 if(pagetype == "04"){//消缺验收
			 methodname="queryDefectRdListByStatus";
			 status="40";	//	缺陷待验收、停机待验收
		 }
		data1.clear();
		AJ.RS({service:"TodoList",method:methodname,async:false,scope:this,params:[params,sub.companyid,sub.userid,status],
			success:function(result){
				//console.log(result.data.valueList);
				if(!CU.isEmpty(result.data.valueList)){
					data1.loadData(result.data.valueList);	
				}			   
			} 		
		});
	};
	
	Model.prototype.col3Click = function(event){
		var windowDialog = this.comp("windowDialog1");
		var url = "";
		var row = event.bindingContext.$object;
		var params=row.val("id");
		AJ.RS({service:"TodoList",method:"getEquipDefectRdInfo",scope:this,params:params,
			success:function(result){
			 localStorage.setItem('currid',row.val("id"));
			 var jsonData = JSON.stringify(result.data);
			 if(pagetype == "02"){
				 	url = require.toUrl('$UI/emp_app/05equipdefect/DefectView_RunDistribution.w');
					windowDialog.open({src:url,data:jsonData});
					//justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/DefectView_RunDistribution.w'), {"data":jsonData});
			 }
			 if(pagetype == "03"){
				 	url = require.toUrl('$UI/emp_app/05equipdefect/DefectView_MaintianAudit.w');
				 	windowDialog.open({src:url,data:jsonData});			 
				 	//justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/DefectView_MaintianAudit.w'), {"data":jsonData});
			 }
			 if(pagetype == "04"){
				 	url = require.toUrl('$UI/emp_app/05equipdefect/DefectView_Acceptance.w');
				 	windowDialog.open({src:url,data:jsonData});			 
				 	//justep.Shell.showPage(require.toUrl('$UI/emp_app/05equipdefect/DefectView_Acceptance.w'), {"data":jsonData});
			 }
			 
			} 		
		});
	};
	//通过
	Model.prototype.button7Click = function(event){
		 var data = this.comp("data1");
	     var row = event.bindingContext.$object;
	     var params=[row.toJson().userdata.id.value,"",1];
	 	 AJ.RS({service:"TodoList",method:"audit",scope:this,params:params,
			 success:function(result){
			      data.refreshData();
			} 		
		});
	};

	//接收参数
	Model.prototype.modelParamsReceive = function(event){
		pagetype= event.params.pagetype;
		this.data1CustomRefresh2();  
	};


	Model.prototype.data1CustomRefresh = function(event){
		pagetype= this.params.pagetype;
		this.data1CustomRefresh2();
	};



	return Model;
});