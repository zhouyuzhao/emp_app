define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/05equipdefect/oldDefectList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cjYfi6f';
	this._flag_='5bfc2562ce1409a2ea193bd2cb915d7c';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"sponsorname":{"define":"sponsorname","label":"报告人","name":"sponsorname","relation":"sponsorname","type":"String"},"starttime":{"define":"starttime","label":"时间","name":"starttime","relation":"starttime","type":"String"},"title":{"define":"title","label":"内容","name":"title","relation":"title","type":"String"},"tokennodename":{"define":"tokennodename","name":"tokennodename","relation":"tokennodename","type":"String"},"tokenstatus":{"define":"tokenstatus","label":"缺陷状态","name":"tokenstatus","relation":"tokenstatus","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"id","initData":"[]","limit":20,"xid":"data1"});
}}); 
return __result;});