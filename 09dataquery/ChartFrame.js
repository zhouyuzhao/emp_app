define(function(require) {
	var $ = require("jquery");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var justep = require("$UI/system/lib/justep");
	require("$UI/emp_app/common/util/echarts-all");
	var Model = function() {
		this.callParent();
	};
	Model.prototype.button2Click = function(event){
		this.comp("windowContainer2").load(require.toUrl("$UI/emp_app/09dataquery/DefectDataChart.w"));
        this.comp("wing1").toggleLeft();
	};


	Model.prototype.button4Click = function(event){
		this.comp("windowContainer3").load(require.toUrl("$UI/emp_app/09dataquery/SystemDataChart.w"));
		this.comp("wing1").toggleLeft();
	};


	Model.prototype.button5Click = function(event){
		this.comp("windowContainer4").load(require.toUrl("$UI/emp_app/09dataquery/FeeDataChart.w"));
		this.comp("wing1").toggleLeft();
	};


	Model.prototype.button3Click = function(event){
		this.comp("wing1").toggleLeft();
	};



	Model.prototype.button6Click = function(event){
		this.comp("windowContainer5").load(require.toUrl("$UI/emp_app/09dataquery/alldefect.w"));
		this.comp("wing1").toggleLeft();
	};



	Model.prototype.button1Click = function(event){
		justep.Shell.showPage("frame");
	};



	return Model;
});