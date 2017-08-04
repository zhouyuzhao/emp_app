define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!phonegap-plugin-barcodescanner");
	require("cordova!cordova-plugin-spinner-dialog");
	require("cordova!com.justep.cordova.plugin.iFlytek");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var Model = function(){
		this.callParent();
	};
	//二维码扫描
	Model.prototype.button1Click = function(event){
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
		cordova.plugins.barcodeScanner.scan(succss, err);
			function succss(result){
				// 当result.cancelled为true时，说明用户取消了本次扫描！
				if (result.cancelled) {
					return;
				}
				var NodeInfo = JSON.parse(result.text);
				var objectId = NodeInfo.id;
				var params = [objectId];
				AJ.RS({
					service : "Others",
					method : "queryEquipmentInfo",
					scope : this,
					params : params,
					success : function(result) {
						if(!CU.isEmpty(result.data)){
						var str = result.data.techobjectstatusname;
						
						navigator.speech.startSpeaking("您正在查询" + NodeInfo.name + "设备信息。目前状态："+str+"。");	
						}else{
							CU.hint("二维码信息有误！");
							return;
						}
					}
				});
				if (NodeInfo.type == 'EQ' && !CU.isEmpty(objectId)) {
					justep.Shell.showPage(require.toUrl('$UI/emp_app/10equipquery/Frame.w'), {
						objectId : objectId
					});
				}
			}
			function err(){
				CU.hint("扫码失败！");			 	
			}
		}
	};
	//搜索
	Model.prototype.button4Click = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
			window.plugins.spinnerDialog.show(null,"正在搜索...",false);
		}
		var equipMentName = this.comp("input2").val();
		if(!CU.isEmpty(equipMentName)&&equipMentName.length >= 3){
		var data1 = this.comp("data1");
		var params =[CFG.companyid,equipMentName];
		AJ.RS({service:"Others",method:"queryEquipmentList",scope:this,params:params,
				success:function(result){
					data1.clear();
					if(CU.isEmpty(result.data)){
						window.plugins.spinnerDialog.hide();
						CU.hint("没有符合条件的数据！");
						return;
					}
					data1.loadData(result.data);
					if (justep.Browser.isX5App && justep.Browser.isAndroid) {
						window.plugins.spinnerDialog.hide();
					}
	 		   }				
			});
		}else{
			window.plugins.spinnerDialog.hide();
			CU.hint("请输入三个或者三个以上文字！");
		}
		
	};
	//关闭
	Model.prototype.button3Click = function(event){
		justep.Shell.closePage();
	};
	//NFC提示
	Model.prototype.button2Click = function(event){
		CU.hint("请将手机背面贴近NFC标签！");
	};
	//NFC扫描跳转
	Model.prototype.modelLoad = function(event){

	};
	// 点击搜索到的设备跳转
	Model.prototype.row4Click = function(event){
		var row = event.bindingContext.$object;
		var objectId = row.val("OBJECTID");
		justep.Shell.showPage(require.toUrl('$UI/emp_app/10equipquery/Frame.w'),{objectId:objectId});
	};
	//语音输入
	Model.prototype.button5Click = function(event) {
		var me = this;
		navigator.notification.confirm("请对准麦克风开始说话！", function(index) {
			if (index == "1") {
				navigator.speech.startListening({}, function(res) {
					window.plugins.spinnerDialog.show(null, "正在合成...", true);
					var str = JSON.stringify(res);
					str = str.replace("\"", "").replace("\"", "");
					me.comp('input2').val(str.substring(0,str.length-1));
					window.plugins.spinnerDialog.hide();
					me.button4Click(event);
				});
			}
		}, "提示", [ '确定', '取消' ]);
	};

	Model.prototype.modelParamsReceive = function(event) {
/*		var me = this;
		var oldValue = {
			x : null,
			y : null,
			z : null
		}
		var options = {
			frequency : 600
		};
		// 摇一摇
		navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		function onSuccess(newValue) {
			var changes = {}, bound = 10;
			if (oldValue.x !== null) {
				changes.x = Math.abs(oldValue.x - newValue.x);
				changes.y = Math.abs(oldValue.y - newValue.y);
				changes.z = Math.abs(oldValue.z - newValue.z);

				if (changes.x > bound || changes.y > bound || changes.z > bound) {
					me.comp("input2").val("");
					navigator.speech.startListening({}, function(res) {
						window.plugins.spinnerDialog.show(null, "正在合成...", true);
						var str = JSON.stringify(res);
						str = str.replace("\"", "").replace("\"", "");
						me.comp('input2').val(str.substring(0, str.length - 1));
						window.plugins.spinnerDialog.hide();
						me.button4Click(event);
					});
				}
			}
			oldValue = {
				x : newValue.x,
				y : newValue.y,
				z : newValue.z
			}
		}
		function onError() {
			alert('失败!');
		}*/
	};

	return Model;
});