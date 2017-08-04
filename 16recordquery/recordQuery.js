define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	var type='05';//记事类型
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage("frame");
	};

	Model.prototype.modelLoad = function(event){
		
	};
	//确定
	Model.prototype.button2Click = function(event){
		this.comp("popOver1").hide();
		var select1 = this.comp("select1").val();//记事类型
		var select2 = this.comp("select2").val();//机组
		var textarea1 = this.comp("textarea1").val();//记事内容
		type=select1;
		if(CU.isEmpty(select1)){
			select1='00,01,02,04,05,06,07';
		}
		if(CU.isEmpty(select2)){
			select2='01,02,03,04,05,06';
		}
		var div2 = $(this.getElementByXid('div2'));
		var datanow = this.comp("data1");
		var begindate = this.comp("input1").val();
		var endDate = this.comp("input2").val();
		if(!CU.isEmpty(begindate) &&!CU.isEmpty(endDate)){
			var Date1 = new Date(begindate);
			var Date2 = new Date(endDate);
			if(Date1.getTime() > Date2.getTime()){
			   navigator.notification.alert("开始时间不能大于结束时间！", function() {}, "提示", "确定");
			   //("开始时间不能大于结束时间！");
			}else{
				datanow.clear();
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.show(null,"正在查询...",true);
				}
				
				var params=[begindate,endDate,select1,select2,textarea1];
			AJ.RS({
			service : "Others",
			method : "recordquery",
			scope : this,
			params : params,
			success : function(result) {
					datanow.loadData(result.data);
					//div2.slideToggle();
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					if(CU.isEmpty(result.data)){
						if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							navigator.notification.alert("没有数据！", function() {}, "提示", "确定");
						}
					}
				}
			});
			}
		}else{
			 navigator.notification.alert("请正确填写时间！", function() {}, "提示", "确定");
		}
		
	};
	
	

	Model.prototype.modelParamsReceive = function(event){
		var now = new Date();
		var currentDate = CU.toDateString(now);//当前日期
		var newDateTime = justep.Date.decrease(now,6,'d');
		var weekagoDate = CU.toDateString(newDateTime);//一周前的日期
		this.comp("input1").val(weekagoDate);
		this.comp("input2").val(currentDate);
		var data1 = this.comp("data1");
		data1.clear();
		
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在查询...",true);
		}
		
		var params=[weekagoDate,currentDate,'00,01,02,04,05,06,07','01,02,03,04,05,06',''];
		AJ.RS({
			service : "Others",
			method : "recordquery",
			scope : this,
			params : params,
			success : function(result) {
					data1.loadData(result.data);
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
					if(CU.isEmpty(result.data)){
						if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							navigator.notification.alert("没有数据！", function() {}, "提示", "确定");
						}
					}
			}
		});
	};
	
	
	//打开查询条件
	Model.prototype.button3Click = function(event){
		this.comp("popOver1").show();
		/*var select1 = this.getIDByXID("select1");
		$("#" + select1 + " option[value='"+type+"']").attr("selected", true);*/
		
		//$(this.getElementByXid('div2')).slideToggle();
		
	};
	
	//点击list 收起查询条件
	Model.prototype.li1Click = function(event){
		//$(this.getElementByXid('div2')).slideToggle();
	};
	

	return Model;
});