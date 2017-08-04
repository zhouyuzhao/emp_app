define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/06workaudit/WorkNoteList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cBJZ7j2';
	this._flag_='535bf35176e079bc0048e102f57aa696';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"","name":"id","relation":"id","type":"String"},"sponsorname":{"define":"sponsorname","label":"","name":"sponsorname","relation":"sponsorname","type":"String"},"starttime":{"define":"starttime","label":"","name":"starttime","relation":"starttime","type":"String"},"title":{"define":"title","label":"","name":"title","relation":"title","type":"String"},"tokennodename":{"define":"tokennodename","label":"","name":"tokennodename","relation":"tokennodename","type":"String"},"tokenstatus":{"define":"tokenstatus","name":"tokenstatus","relation":"tokenstatus","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"id","limit":20,"xid":"data1"});
}}); 
return __result;});