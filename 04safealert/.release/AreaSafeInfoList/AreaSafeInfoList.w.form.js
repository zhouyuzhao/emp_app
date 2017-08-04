define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/04safealert/AreaSafeInfoList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmEnuYb';
	this._flag_='0c2b1a0f4834680409e09a3b7c46dc44';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DOCNAME":{"define":"DOCNAME","name":"DOCNAME","relation":"DOCNAME","type":"String"},"DOCTYPE":{"define":"DOCTYPE","name":"DOCTYPE","relation":"DOCTYPE","type":"String"},"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"ORIGINALNAME":{"define":"ORIGINALNAME","name":"ORIGINALNAME","relation":"ORIGINALNAME","type":"String"},"VIEWNUM":{"define":"VIEWNUM","name":"VIEWNUM","relation":"VIEWNUM","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"DOCTYPE\":\"PDF\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});