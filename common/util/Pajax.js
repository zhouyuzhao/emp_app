define(function(require) {
	var $ = require("jquery");
	var Util = require("$UI/system/lib/base/util");
	var CFG = require("$UI/emp_app/common/util/Config");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var MyAjax = {
	  RS : function(options) {
			var self = this;
			if (CU.isEmpty(options.server))options.server = CFG.url;
			if (CU.isEmpty(options.action))options.action = "/HttpAjax.do";
        	var ps = CU.isEmpty(options.params) ? [] : (CU.isArray(options.params)? options.params: [options.params]);
        	options.params = {};
        	options.params[CU.BG.ARP] = CU.toString(ps);
        	options.url = CU.getServerLink({server:options.server,userid:options.userid,action:options.action,service:options.service,method:options.method});
        	if ((!CU.isEmpty(options.method))&&(options.method=="getDropListByView"))options.url=options.url+"&BASEFLAG_ViewName="+options.ViewName;
        	if (!CU.isEmpty(options.AddEmpty))options.url=options.url+"&BASEFLAG_AddEmpty="+options.AddEmpty;       	
        	options.async = CU.isEmpty(options.async)?true:options.async; // true=异步 , false=同步
        	options.scope = options.scope || self;
        	options.dataType = options.dataType || "jsonp"; 
        	options.timeout = options.timeout || 3000;
        	return $.ajax({
				type : "post",
				url : options.url,
				data :options.params,
				async : options.async,
				dataType : options.dataType,
				contentType : "application/json",
				jsonp: "callback",
	         	//jsonpCallback:"jsonpCallback",
	         	crossDomain: true,
				"complete" : function(xhr) {
						if (xhr.readyState == 4 && xhr.status == 200) {
						if (options.success) {
							options.success.call(this, xhr.responseJSON, xhr);
						}
					} else {
						var msg = self.getErrorMsg(xhr);
						if (options.error) {
							options.error.call(this, msg, xhr);
						} else {
							//self.showError(msg);
						}
					}
				},
				"error": function(xhr,status,error){
					alert("网络访问错误！");
				}
			});
		},
		
		getErrorMsg : function(xhr) {
			return $(xhr.responseText).filter("h1:first").text() || xhr.statusText;
		},
		
		showError : function(msg) {
			Util.hint(msg, {
				"type" : "danger"
			});
		},
		
		getDataColumns : function(data) {
			var columns = {};
			$.each(data.defCols, function(key){
				columns[key] = {
					"name" : data.defCols[key]["name"],
					"type" : data.defCols[key]["type"]
				};
			});
			return columns;
		}
		
	};

	return MyAjax;
});