define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/11workcheck/workCheck'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cYNb2qa';
	this._flag_='22fd06826619e2ba838e64b23aa024cc';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"CHECKPOINTID":{"define":"CHECKPOINTID","label":"考勤点ID","name":"CHECKPOINTID","relation":"CHECKPOINTID","type":"String"},"CHECKPOINTNAME":{"define":"CHECKPOINTNAME","label":"考勤点名称","name":"CHECKPOINTNAME","relation":"CHECKPOINTNAME","type":"String"},"CHECKRESULT":{"define":"CHECKRESULT","label":"考勤结果","name":"CHECKRESULT","relation":"CHECKRESULT","type":"String"},"CHECKTIME":{"define":"CHECKTIME","label":"考勤时间","name":"CHECKTIME","relation":"CHECKTIME","type":"String"},"CHECKTYPE":{"define":"CHECKTYPE","label":"考勤类型","name":"CHECKTYPE","relation":"CHECKTYPE","type":"String"},"COMPANYID":{"define":"COMPANYID","label":"公司ID","name":"COMPANYID","relation":"COMPANYID","type":"String"},"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"PERSONNELID":{"define":"PERSONNELID","label":"人员ID","name":"PERSONNELID","relation":"PERSONNELID","type":"String"},"PERSONNELNAME":{"define":"PERSONNELNAME","label":"人员名称","name":"PERSONNELNAME","relation":"PERSONNELNAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data1"});
}}); 
return __result;});