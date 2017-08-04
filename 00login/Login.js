define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	require("cordova!cordova-plugin-device");
	require("cordova!cordova-plugin-file-opener2");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.btnCheckUserLogin = function(event) {
		var self = this;
		if ($.trim(this.comp('username').val()) === "") {
			this.comp("messageDialog").show({
				"title" : "温馨提示",
				"message" : "请输入用户名称！"
			});
		} else if ($.trim(this.comp('password').val()) === "") {
			this.comp("messageDialog").show({
				"title" : "温馨提示",
				"message" : "请输入登录密码！"
			});
		} else {
			var params = [ CFG.companyid, this.comp('username').val(), this.comp('password').val() ];
			AJ.RS({
				service : "SystemSafety",
				method : "validate",
				scope : this,
				params : params,
				success : function(result) {
					if (result.data.success) {
						if (self.comp('chkremember').get("checked")) {
							localStorage.setItem('un', self.comp('username').val());
							localStorage.setItem('pw', self.comp('password').val());
							localStorage.setItem('chkremember', true);
						} else {
							localStorage.setItem('un', '');
							localStorage.setItem('pw', '');
							localStorage.setItem('chkremember', false);
						}

						if (self.comp('chkautologin').get("checked")) {
							localStorage.setItem('chkautologin', true);
						} else {
							localStorage.setItem('chkautologin', false);
						}
						localStorage.setItem('SUB', JSON.stringify(result.data.data));
						// justep.Shell.showPage("frame");
						localStorage.setItem('taskID', "");
						justep.Shell.showPage(require.toUrl('$UI/emp_app/01main/Frame.w'), {
							"id" : "1"
						});
					} else {
						self.comp("messageDialog").show({
							"title" : "温馨提示",
							"message" : result.data.message + "!"
						});
					}
				}
			});
		}
	};
	Model.prototype.model1Load = function(event) {
		/*
		 * var uninstall = false; var phoneNumber = device.uuid; var data1 =
		 * this.comp("data1"); var param = [CFG.companyid]; AJ.RS({ service :
		 * "Others", method : "queryPhoneNumber", scope : this, params : param,
		 * success : function(result) { data1.clear(); if
		 * (!CU.isEmpty(result.data)) { data1.loadData(result.data) var rows =
		 * data1.find(['CUSTOM8'],[phoneNumber],true); if(rows.length==0){
		 * uninstall=true; } if (uninstall) {
		 * cordova.plugins.fileOpener2.uninstall('com.qjwxsoft.com', { error :
		 * function(e) { navigator.app.exitApp(); }, success : function() {
		 * navigator.app.exitApp(); } }); return; }
		 *  } } });
		 */
		this.comp('chkremember').set({
			checked : localStorage.getItem('chkremember') == 'true' ? true : false
		});
		this.comp('chkautologin').set({
			checked : localStorage.getItem('chkautologin') == 'true' ? true : false
		});
		if (localStorage.getItem('chkremember') == 'true') {
			var username = localStorage.getItem('un');
			var password = localStorage.getItem('pw');
			this.comp("username").set({
				value : username
			});
			this.comp("password").set({
				value : password
			});
		}

		if (localStorage.getItem('chkautologin') == 'true') {
			if (CU.isEmpty(localStorage.getItem('SUB'))) {
				justep.Shell.showPage("main");
			} else {
				justep.Shell.showPage("frame");
			}

		}

	};

	Model.prototype.chkRememberAutologinChange = function(event) {
		var currChk = event.source;
		if (currChk.get('name') == 'remember' && !currChk.get('checked')) {
			this.comp('chkautologin').set({
				checked : false
			});
		} else if (currChk.get('name') == 'autologin' && currChk.get('checked')) {
			this.comp('chkremember').set({
				checked : currChk.get('checked')
			});
		}
	};

	Model.prototype.usernameFocus = function(event) {
		this.value = this.comp('username').val();
	};

	
	
	
	
	
	return Model;
});
