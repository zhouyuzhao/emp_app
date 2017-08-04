define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CFG = require("$UI/emp_app/common/util/Config");
    var AJ = require("$UI/emp_app/common/util/Pajax");
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.data1CustomRefresh = function(event){
		AJ.RS({service:"Others",method:"queryNoticeList",scope:this,params:[CFG.companyid],
				success:function(result){ 
				 event.source.loadData(result.data);
			}				
		});	
	};

	Model.prototype.massageClick = function(event){
	       var row = event.bindingContext.$object;
	       var params=row.toJson();
		   justep.Shell.showPage(require.toUrl('./NoticeView.w'), {"data":JSON.stringify(params)});
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("frame");
	};

	return Model;
});