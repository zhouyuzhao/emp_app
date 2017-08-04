define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/05equipdefect/EquipMentNames'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cFBBbea';
	this._flag_='00d1416ce93d1a228cbae6034576e38d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"EQUIPMENTNAME":{"define":"EQUIPMENTNAME","label":"设备名称","name":"EQUIPMENTNAME","relation":"EQUIPMENTNAME","type":"String"},"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"OBJECTID":{"define":"OBJECTID","name":"OBJECTID","relation":"OBJECTID","type":"String"},"OLDCODE":{"define":"OLDCODE","name":"OLDCODE","relation":"OLDCODE","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data1"});
}}); 
return __result;});