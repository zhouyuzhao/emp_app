/**
* 辅组方法
*/
define(function(require) {
var cfg = require("$UI/emp_app/common/util/Config");
var justep = require("$UI/system/lib/justep");
var CommonUtil = {
        BG : {SN:"BASEFLAG_ServiceName",SMN:"BASEFLAG_MethodName",CK:"BASEFLAG_CALLKEY",PS:"BASEFLAG_PageSize",P:"BASEFLAG_Paging",AV:"BASEFLAG_AppendValues",ARP:"BASEFLAG_AjaxRequestParams",TBV:"BASEFLAG_TreeBeanValues",GBV:"BASEFLAG_GridBeanValues",VN:"BASEFLAG_ViewName",AE:"BASEFLAG_AddEmpty",CIS:"BASEFLAG_CodeIds",SP:"BASEFLAG_SearchParam",BV:"BASEFLAG_BindValues",GSR:"BASEFLAG_GroupSummaryRow"},
		
	 	/**
		 * 判断数据是否为空
		 * @param v 数据对象
		 * @param allowBlank 是否允许空白('') true=允许,false=不允许 默认为false
		 * @return true=空||false=不为空
		 */
		isEmpty : function(v, allowBlank) {return v === null || v === undefined || ((this.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);},
	 
	 	/**
	     * 判断数据是否是array
	     * @param v 数据对象
	     * @return true=是||false=否
	     */
	    isArray : function(v){return Object.prototype.toString.apply(v) === '[object Array]';},
	    /**
	     * 清空array对象
	     * @param a 数据对象
	     */
	    clearArray : function(a){while(a.length>0)a.pop();},
	    
	    /**
	     * 是否是object对象
	     * @param v 数据对象
	     * @return true=是||false=否
	     */
	    isObject : function(v){ return v && typeof v == "object"; },
	    
	    /**
	     * 是否是原始类型(string,number,boolean)
	     * @param v 数据对象
	     * @return true=是||false=否
	     */
	    isPrimitive : function(v){var t=typeof v; return t == 'string' || t == 'number' || t == 'boolean'; },
	    
	    /**
	     * 是否是方法
	     * @param v 数据对象
	     * @return true=是||false=否
	     */
	    isFunction : function(v){return typeof v == "function";},
	    
	    /**
		 * 数据对象转换为string值(url参数)
		 * @param paramsobj  数据对象{a:1,b=2}
		 * @return string(&a=1&b=2)
		 */
	    parseParams:function(paramsobj){var paramsstr = "";for(var key in paramsobj) {var value = paramsobj[key];if(thiz.isEmpty(value, true)) continue;if(thiz.isArray(value)) {for(var i=0; i<value.length; i++) {paramsstr += "&" + key + "=" + value[i];}}else {paramsstr += "&" + key + "=" + value;}}return paramsstr;},
	    
	    /**
	     * 字符串转对象
	     * @param {} v 字符串
	     * @return {}
	     */
	    toObject:function(v){if(!this.isEmpty(v))v = v.trim();if((v.indexOf("[")==0&&v.lastIndexOf("]")==v.length-1)||(v.indexOf("{")==0&&v.lastIndexOf("}")==v.length-1))return JSON.parse(v);return v;},
	    
	    /**
	     * 对象转字符串
	     * @param {} v 对象
	     * @return {}
	     */
	    toString:function(v){return JSON.stringify(v)},
	    
	    /**
		 * 日期转换为字符串
		 * @param date 日期
		 * @return 字符串日期(2013-02-27)
		 */
		toDateString: function(date) {if(this.isEmpty(date))return "";var y = date.getFullYear();var m = date.getMonth()+1;if(m < 10) m = "0"+m;var d = date.getDate();if(d < 10) d = "0"+d;return y+"-"+m+"-"+d;},
		
		/**
		 * 日期转换为字符串
		 * @param date 日期
		 * @return 字符串日期(2013-02-27)
		 */
		toDateChineseString: function(date) {if(this.isEmpty(date))return "";var y = date.getFullYear();var m = date.getMonth()+1;if(m < 10) m = "0"+m;var d = date.getDate();if(d < 10) d = "0"+d;return y+"年"+m+"月"+d+'日';},
		
		/**
		 * 日期转换为字符串
		 * @param  date 日期 
		 * @return 字符串时间(2013-02-27 17:10:00)
		 */
		toTimeString: function(date) {if(this.isEmpty(date))return "";var y = date.getFullYear();var m = date.getMonth()+1;if(m < 10) m = "0"+m;var d = date.getDate();if(d < 10) d = "0"+d;var h = date.getHours();if(h < 10) h = "0"+h;var mi = date.getMinutes();if(mi < 10) mi = "0"+mi;var s = date.getSeconds();if(s < 10) s = "0"+s;return y+"-"+m+"-"+d+" "+h+":"+mi+":"+s;},
	
		/**
		 * 几天以前的日期
		 * @param day 天数
		 * @return 日期对象
		 */
		getBeforeDate: function(day) {return new Date(new Date().getTime()-1000*60*60*24*day);},
		
		/**
		 * 字符串转换为日期格式
		 * @param value 字符串数据(例如:2013-02-27)
		 * @return 日期对象
		 */
		toDate: function(value) {return new Date(Date.parse(value.replace(/-/g,"/")));},
		
		/**
		 * 替换字符串中所有空格
		 * @param str 字符串
		 */
		replaceSpace:function(str){
            var result;
            result = str.replace(/(^\s+)|(\s+$)/g,"");
            result = result.replace(/\s/g,"");
            return result;
         },
	    /**
	     * 获取服务地址
	     * @param {} config
	     * @return {}
	     */
	    getServerLink:function(config){var url = [];if(!this.isEmpty(config.server))url.push(config.server);if (!this.isEmpty(config.action))url.push(config.action);url.push("?");url.push(cfg.BG.SN); url.push("=");url.push(config.service);url.push("&");url.push(cfg.BG.SMN);url.push("=");url.push(config.method);url.push("&");url.push(cfg.BG.CK);url.push("=");url.push("emp-app");url.push("&");url.push(cfg.BG.UID);url.push("=");url.push(config.userid);return url.join("");},
	  
	    /**
	     * 获取AV方式的参数
	     * @param {} params
	     * @return {}
	     */
	    getAVParams:function(params){var ps = CU.isEmpty(params) ? [] : (CU.isArray(params)? params: [params]);var data = {};data[CU.BG.AV] = CU.toString(ps);return data;},
	 	
	    /**
		* 将数值四舍五入后格式化. 
		* @param num 数值(Number或者String)
		* @param cent 要保留的小数位(Number)
		* @param isThousand 是否需要千分位 0:不需要,1:需要(数值类型);
		* @return 格式的字符串,如'1,234,567.45'
		* @type String
		*/
		formatNumber:function(num,cent,isThousand) {
		    num = num.toString().replace(/\$|\,/g,'');
		    if(isNaN(num)){ //检查传入数值为数值类型. 
			    num = "0";
		    } 
			if(isNaN(cent)){//确保传入小数位为数值型数值. 0 不显示
				cent = 0;
			} 
			cent = parseInt(cent);
			cent = Math.abs(cent);//求出小数位数,确保为正整数.
			if(typeof isThousand == 'boolean'){  //如果为boolean 类型转换为数字
			    isThousand = isThousand?"1":"0";
			}
			if(isNaN(isThousand)){//确保传入是否需要千分位为数值类型.
				isThousand = 0;
			} 
			isThousand = parseInt(isThousand);
			if(isThousand < 0)isThousand = 0;
			if(isThousand >=1){//确保传入的数值只为0或1
			  isThousand = 1;
			} 
		    sign = (num == (num = Math.abs(num)));//获取符号(正/负数); 
		    //Math.floor:返回小于等于其数值参数的最大整数
			num = Math.floor(num*Math.pow(10,cent)+0.50000000001);//把指定的小数位先转换成整数.多余的小数位四舍五入.
			cents = num%Math.pow(10,cent); //求出小数位数值.
		    num = Math.floor(num/Math.pow(10,cent)).toString();//求出整数位数值. 
			cents = cents.toString();//把小数位转换成字符串,以便求小数位长度.
			while(cents.length<cent){ //补足小数位到指定的位数.
			    cents = "0" + cents;
			} 
			if(isThousand == 0){ //不需要千分位符. 
				return (cent==0)?(((sign)?'':'-') + num):(((sign)?'':'-') + num + '.' + cents);
			} 
			//对整数部分进行千分位格式化.
		    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++){
		    	num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
		    } 
		    return (cent==0)?(((sign)?'':'-') + num):(((sign)?'':'-') + num + '.' + cents);
		},
		hint: function(text, options){
			if(!text) return;
			if(typeof text == 'string'){
				options = options || {};
				options.text = text;
			}else if(typeof text == 'object'){
				options = text;
			}
			
			options.type = options.type || 'info';
			options.delay = options.delay || 2000;
			options.position = options.position || 'top';
			options.parent = options.parent || 'body';
			options.style = options.style || '';
		
			var template = ' <div class="dialog x-hint x-hint-{0}" style="border-radius: 5px;-moz-box-sizing:border-box;box-sizing:border-box;white-space:normal;-webkit-box-shadow:0 5px 10px rgba(0, 0, 0, .2);z-index: 50000;background-color:white;opacity:0.9;"{1}">' +
					'<button type="button" class="btn btn-large close">' + 
						'<span aria-hidden="true">&times;</span>' +						
					'</button>' +
					'<span><br><div style="padding:0 0 0 15px;font-size:26px;color:red;">{2}</div><br></span>' +
				"</div>	";
			var html = justep.String.format(template, options.position, options.style, options.text);
			var $el = $(html).appendTo(options.parent).show('slow');
			var iid;
			if(options.delay){
				iid = setTimeout(function(){
					closeFn();
				}, options.delay);
			}
			$('.close', $el).click(closeFn);
			function closeFn(){
				$el.remove();
				clearTimeout(iid);
			}
		},
	
		waiting: function(action,options){
			options.parent = options.parent || 'body';
		   var html = "<div id='loading' style=\"position:absolute;left:0;width:100%;height:100%;top:0;background:#E0ECFF;opacity:0.8;filter:alpha(opacity=80);\"><div style=\"position:absolute;  cursor1:wait;color:red;left:135px;top:250px;width:170px;height:170px;padding:90px 0px 0px 0px;background:url('../images/loading.gif')  no-repeat;\">处理中，请等待...</div></div>";
		   if(action=="show"){$(html).appendTo(options.parent).show();}
		   if(action=="hide"){$('#loading').remove();}	
		}
};
return CommonUtil;
});

