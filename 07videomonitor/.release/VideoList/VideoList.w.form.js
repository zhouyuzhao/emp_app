define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/07videomonitor/VideoList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEVRfam';
	this._flag_='5c98e5b54a45b44f2f295150acb9e18d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"safeareaid":{"define":"safeareaid","label":"注册类型","name":"safeareaid","relation":"safeareaid","type":"String"},"serveraddress":{"define":"serveraddress","label":"视频服务地址","name":"serveraddress","relation":"serveraddress","type":"String"},"serverport":{"define":"serverport","label":"视频服务端口","name":"serverport","relation":"serverport","type":"String"},"username":{"define":"username","label":"连接用户名","name":"username","relation":"username","type":"String"},"userpassword":{"define":"userpassword","label":"连接用户密码","name":"userpassword","relation":"userpassword","type":"String"},"videocode":{"define":"videocode","label":"视频编号","name":"videocode","relation":"videocode","type":"String"},"videoname":{"define":"videoname","label":"视频名称","name":"videoname","relation":"videoname","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"videocode","limit":20,"xid":"data1"});
}}); 
return __result;});