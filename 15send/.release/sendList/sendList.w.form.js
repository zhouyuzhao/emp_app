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
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/15send/sendList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cA7n2Yz';
	this._flag_='268d20c85da0606eb42c1b7a5ce5ecc4';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"departmentname":{"define":"departmentname","label":"发文部门:","name":"departmentname","relation":"departmentname","type":"String"},"docname":{"define":"docname","label":"发文名称:","name":"docname","relation":"docname","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"lastworkrdid":{"define":"lastworkrdid","label":"上一个节点ID","name":"lastworkrdid","relation":"lastworkrdid","type":"String"},"recorder":{"define":"recorder","label":"发送人:","name":"recorder","relation":"recorder","type":"String"},"senddate":{"define":"senddate","label":"发送时间:","name":"senddate","relation":"senddate","type":"String"},"sendtypename":{"define":"sendtypename","label":"发文类型:","name":"sendtypename","relation":"sendtypename","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data1"});
}}); 
return __result;});