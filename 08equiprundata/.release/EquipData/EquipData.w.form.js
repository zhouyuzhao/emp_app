define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/08equiprundata/EquipData'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cz2YZVf';
	this._flag_='9d60147f7788d4b73a493d20feed785d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"JZ1":{"define":"JZ1","name":"JZ1","relation":"JZ1","type":"String"},"JZ2":{"define":"JZ2","name":"JZ2","relation":"JZ2","type":"String"},"JZ3":{"define":"JZ3","name":"JZ3","relation":"JZ3","type":"String"},"JZ4":{"define":"JZ4","name":"JZ4","relation":"JZ4","type":"String"},"paramname":{"define":"paramname","name":"paramname","relation":"paramname","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"paramname","limit":20,"xid":"data1"});
}}); 
return __result;});