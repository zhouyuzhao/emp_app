define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/03personlocation/PersonStatic'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cnUbiIb';
	this._flag_='5b76b4667802505559b926f7aa716464';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"AREACODE":{"define":"AREACODE","label":"安全区去编号","name":"AREACODE","relation":"AREACODE","type":"String"},"AREANAME":{"define":"AREANAME","label":"安全区名称","name":"AREANAME","relation":"AREANAME","type":"String"},"ID":{"define":"ID","label":"id","name":"ID","relation":"ID","type":"String"},"PERSONNELNUM":{"define":"PERSONNELNUM","label":"安全区人数","name":"PERSONNELNUM","relation":"PERSONNELNUM","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data3"});
}}); 
return __result;});