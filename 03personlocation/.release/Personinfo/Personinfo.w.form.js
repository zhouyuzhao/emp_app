define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/03personlocation/Personinfo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbmeyuy';
	this._flag_='ba04003e2f6642f584e960aed92b73bd';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","label":"名字","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"AREACODE":{"define":"AREACODE","label":"安全区编号","name":"AREACODE","relation":"AREACODE","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"treeOption":{"isDelayLoad":false},"xid":"data2"});
}}); 
return __result;});