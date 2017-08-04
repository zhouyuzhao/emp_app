define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/20notice/NoticeView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7rEJri';
	this._flag_='c2b23ac06a0ba4c9e8ea37f4dcd686c2';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"filesuffixname":{"define":"filesuffixname","name":"filesuffixname","relation":"filesuffixname","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"originalname":{"define":"originalname","name":"originalname","relation":"originalname","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":1,\"filesuffixname\":\"PDF\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});