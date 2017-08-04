define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/06workaudit/PurchaseNoteView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c3YbM7v';
	this._flag_='18be11e5527871c4cf3c0b52f54b13c0';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"MATERIELNAME":{"define":"MATERIELNAME","name":"MATERIELNAME","relation":"MATERIELNAME","type":"String"},"MATERIELPRICE":{"define":"MATERIELPRICE","name":"MATERIELPRICE","relation":"MATERIELPRICE","type":"String"},"MATERIELVALUE":{"define":"MATERIELVALUE","name":"MATERIELVALUE","relation":"MATERIELVALUE","type":"String"},"REQUESTNUM":{"define":"REQUESTNUM","name":"REQUESTNUM","relation":"REQUESTNUM","type":"String"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"dataWuLiaoCustomRefresh"},"idColumn":"id","limit":20,"xid":"dataWuLiao"});
}}); 
return __result;});