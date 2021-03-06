define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/12vacation/Vacation'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNbYRzu';
	this._flag_='3a338550523b1eba8769ae34dcb0981a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"type":{"define":"type","label":"类型编号","name":"type","relation":"type","type":"String"},"typeName":{"define":"typeName","label":"类型名称","name":"typeName","relation":"typeName","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"type\":\"01\",\"typeName\":\"年休假\"},{\"ID\":\"2\",\"type\":\"02\",\"typeName\":\"补休假\"},{\"ID\":\"3\",\"type\":\"03\",\"typeName\":\"事假\"},{\"ID\":\"4\",\"type\":\"04\",\"typeName\":\"婚嫁\"},{\"ID\":\"5\",\"type\":\"05\",\"typeName\":\"产假(陪护假)\"},{\"ID\":\"6\",\"type\":\"06\",\"typeName\":\"病假\"},{\"ID\":\"7\",\"type\":\"07\",\"typeName\":\"探亲假\"},{\"ID\":\"8\",\"type\":\"08\",\"typeName\":\"丧假\"},{\"ID\":\"9\",\"type\":\"09\",\"typeName\":\"工伤假\"},{\"ID\":\"10\",\"type\":\"10\",\"typeName\":\"其他\"}]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DEPARTMENTID":{"define":"DEPARTMENTID","label":"部门ID","name":"DEPARTMENTID","relation":"DEPARTMENTID","type":"String"},"DEPARTMENTNAME":{"define":"DEPARTMENTNAME","label":"部门姓名","name":"DEPARTMENTNAME","relation":"DEPARTMENTNAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"DEPARTMENTID","limit":20,"xid":"data2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DEPARTMENTNAME":{"define":"DEPARTMENTNAME","label":"部门名称","name":"DEPARTMENTNAME","relation":"DEPARTMENTNAME","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"RECORDDATE":{"define":"RECORDDATE","label":"记录时间","name":"RECORDDATE","relation":"RECORDDATE","type":"String"},"STATUS":{"define":"STATUS","label":"状态","name":"STATUS","relation":"STATUS","type":"String"},"VACATIONDAYS":{"define":"VACATIONDAYS","label":"请假天数:","name":"VACATIONDAYS","relation":"VACATIONDAYS","type":"String"},"WFINSTANCEID":{"define":"WFINSTANCEID","label":"工作流ID","name":"WFINSTANCEID","relation":"WFINSTANCEID","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data3"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"sponsorname":{"define":"sponsorname","name":"sponsorname","relation":"sponsorname","type":"String"},"starttime":{"define":"starttime","name":"starttime","relation":"starttime","type":"String"},"title":{"define":"title","name":"title","relation":"title","type":"String"},"tokennodename":{"define":"tokennodename","name":"tokennodename","relation":"tokennodename","type":"String"},"tokenstatus":{"define":"tokenstatus","name":"tokenstatus","relation":"tokenstatus","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data4"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});