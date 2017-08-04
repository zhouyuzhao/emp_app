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
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/16recordquery/recordQuery'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyMZVrq';
	this._flag_='94ba1d7c35d2dd5cf188b8794f1f794c';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"CODENAME":{"define":"CODENAME","name":"CODENAME","relation":"CODENAME","type":"String"},"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"LOGTYPEID":{"define":"LOGTYPEID","label":"日志类别","name":"LOGTYPEID","relation":"LOGTYPEID","type":"String"},"OCCURTIME":{"define":"OCCURTIME","label":"时分","name":"OCCURTIME","relation":"OCCURTIME","type":"String"},"OPERATOR":{"define":"OPERATOR","label":"操作人","name":"OPERATOR","relation":"OPERATOR","type":"String"},"RECORDCONTENT":{"define":"RECORDCONTENT","label":"记事内容","name":"RECORDCONTENT","relation":"RECORDCONTENT","type":"String"},"RECORDER":{"define":"RECORDER","label":"值班员","name":"RECORDER","relation":"RECORDER","type":"String"},"RECORDSTATUS":{"define":"RECORDSTATUS","label":"状态","name":"RECORDSTATUS","relation":"RECORDSTATUS","type":"String"},"RECORDTYPE":{"define":"RECORDTYPE","label":"记事类型","name":"RECORDTYPE","relation":"RECORDTYPE","type":"String"},"TEAMID":{"define":"TEAMID","label":"班组","name":"TEAMID","relation":"TEAMID","type":"String"},"TURNCODE":{"define":"TURNCODE","label":"排班","name":"TURNCODE","relation":"TURNCODE","type":"String"},"WORKCENTERID":{"define":"WORKCENTERID","name":"WORKCENTERID","relation":"WORKCENTERID","type":"String"},"WORKCENTERNAME":{"define":"WORKCENTERNAME","name":"WORKCENTERNAME","relation":"WORKCENTERNAME","type":"String"},"WORKDATE":{"define":"WORKDATE","label":"时间","name":"WORKDATE","relation":"WORKDATE","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"lable":{"define":"lable","label":"显示值","name":"lable","relation":"lable","type":"String"},"value":{"define":"value","label":"实际值","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"value\":\"00\",\"lable\":\"办票\"},{\"ID\":\"2\",\"value\":\"01\",\"lable\":\"操作\"},{\"ID\":\"3\",\"value\":\"02\",\"lable\":\"异常\"},{\"ID\":\"4\",\"value\":\"04\",\"lable\":\"定期\"},{\"ID\":\"5\",\"value\":\"05\",\"lable\":\"记事\"},{\"ID\":\"6\",\"value\":\"06\",\"lable\":\"交代\"},{\"ID\":\"7\",\"value\":\"07\",\"lable\":\"启停\"}]","limit":20,"xid":"data2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"lable":{"define":"lable","label":"显示值","name":"lable","relation":"lable","type":"String"},"value":{"define":"value","label":"实际值","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"value\":\"01\",\"lable\":\"#1机组\"},{\"ID\":\"2\",\"value\":\"02\",\"lable\":\"#2机组\"},{\"ID\":\"3\",\"value\":\"03\",\"lable\":\"#3机组\"},{\"ID\":\"4\",\"value\":\"04\",\"lable\":\"#4机组\"},{\"ID\":\"5\",\"value\":\"05\",\"lable\":\"公用\"},{\"ID\":\"6\",\"value\":\"06\",\"lable\":\"消防\"}]","limit":20,"xid":"data3"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});