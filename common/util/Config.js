
/**
*项目基础配置信息
*/
define(function(require) {
	var Config = {
	 	 BG : {SN:"BASEFLAG_ServiceName",SMN:"BASEFLAG_MethodName",CK:"BASEFLAG_CALLKEY",UID:"BASEFLAG_USERID",AV:"BASEFLAG_AppendValues",ARP:"BASEFLAG_AjaxRequestParams",VN:"BASEFLAG_ViewName",AE:"BASEFLAG_AddEmpty",CIS:"BASEFLAG_CodeIds",SP:"BASEFLAG_SearchParam",BV:"BASEFLAG_BindValues",GSR:"BASEFLAG_GroupSummaryRow"},
	     
	 	 /**服务端地址*/
	 	 //url : "http://192.168.2.145:8080/emp-service", 
	 	 url : "http://218.69.249.244:8088/fjfd-service",
	 	 //url : "http://10.145.177.4:8088/fjfd-service",
	 	 //url : "http://123.206.22.203:8088/emp-service",
	 	 //url : "http://192.168.1.92:8010/emp-service",
	 	 //url : "http://localhost:8083/emp-service",
	 	 
	 	 pi_url:"http://59.58.162.122:8088/emp-service",
	 	 pi_url_wifi:"http://172.16.10.94:8088/emp-service",
	 	 //pi_url_wifi:"http://10.145.177.4:8088/emp-service",
	 	 /**跨域请求*/
	  	 crossdomain : true,	 	 
	 	 type : true ? 'jsonp':'ajax',
	 	
	    /**公司信息*/
	 	companyid:'100000471',
	 	plantid:'d3b560b1-ea8f-4a30-beef-26912d146bf0',
		 	 
	 	 /**用户信息*/ 
	 	sub : {userid:"",username:""},
	 	
	 	localpath_apk:"file:///storage/emulated/0/Download/",
	 	localpath_image:"file:///storage/emulated/0/Android/data/com.qjwxsoft.com/cache/",
	 	localpath_video:"file:///storage/emulated/0/DCIM/Camera/",
	 	localpath_audio:"file:///storage/emulated/0/",
        ishomeload : false,
	 	 
	 	 /**[0]=待办事项 [1]=异常预警 [2]=到期提醒 [3]=业务统计*/
	 	 tx : [{all:0,detail:[]},{all:0,detail:[]},{all:0,detail:[]},{all:0,detail:[]}],	 	 
	 	 params : null
	 };
	return Config;
	
});