define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/12vacation/vacationApproveView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cV7Zj6z';
	this._flag_='5a8a1766628ce998dede9ab13a7e659c';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"CONTENT":{"define":"CONTENT","name":"CONTENT","relation":"CONTENT","type":"String"},"ISPASSING":{"define":"ISPASSING","label":"是否通过","name":"ISPASSING","relation":"ISPASSING","type":"String"},"SERIALNO":{"define":"SERIALNO","name":"SERIALNO","relation":"SERIALNO","type":"String"},"STATUS":{"define":"STATUS","name":"STATUS","relation":"STATUS","type":"String"},"TIME":{"define":"TIME","label":"时间","name":"TIME","relation":"TIME","type":"String"},"USERID":{"define":"USERID","label":"ID","name":"USERID","relation":"USERID","type":"String"},"USERNAME":{"define":"USERNAME","label":"审批人","name":"USERNAME","relation":"USERNAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"STATUS","limit":20,"xid":"data1"});
}}); 
return __result;});