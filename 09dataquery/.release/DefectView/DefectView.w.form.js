define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/09dataquery/DefectView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEvUn6v';
	this._flag_='aa466aca5e44810636365790b4644560';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"上传文件ID","name":"ID","relation":"ID","type":"String"},"Len":{"define":"Len","label":"录音时长","name":"Len","relation":"Len","type":"String"},"Suffix":{"define":"Suffix","label":"文件后缀","name":"Suffix","relation":"Suffix","type":"String"},"createDate":{"define":"createDate","label":"时间","name":"createDate","relation":"createDate","type":"String"},"fileName":{"define":"fileName","label":"名称","name":"fileName","relation":"fileName","type":"String"},"filePath":{"define":"filePath","label":"路径","name":"filePath","relation":"filePath","type":"String"}},"directDelete":false,"events":{},"idColumn":"filePath","limit":20,"xid":"mediaData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"crew":{"define":"crew","label":"机组","name":"crew","relation":"crew","type":"String"},"defectlinfo":{"define":"defectlinfo","label":"缺陷内容","name":"defectlinfo","relation":"defectlinfo","type":"String"},"defectposition":{"define":"defectposition","label":"缺陷部位","name":"defectposition","relation":"defectposition","type":"String"},"equipmentname":{"define":"equipmentname","label":"设备名称","name":"equipmentname","relation":"equipmentname","type":"String"},"grade":{"define":"grade","label":"等级","name":"grade","relation":"grade","type":"String"},"major":{"define":"major","label":"专业","name":"major","relation":"major","type":"String"},"objectid":{"define":"objectid","label":"设备ID","name":"objectid","relation":"objectid","type":"String"},"recorddate":{"define":"recorddate","label":"报告日期","name":"recorddate","relation":"recorddate","type":"String"},"recordid":{"define":"recordid","name":"recordid","relation":"recordid","type":"String"},"recordstatus":{"define":"recordstatus","label":"缺陷状态","name":"recordstatus","relation":"recordstatus","type":"String"},"reportername":{"define":"reportername","label":"报告人","name":"reportername","relation":"reportername","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"codeid":{"define":"codeid","label":"编号","name":"codeid","relation":"codeid","type":"String"},"codename":{"define":"codename","label":"机组名称","name":"codename","relation":"codename","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[]","limit":20,"xid":"crew"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"codeid":{"define":"codeid","label":"等级编码","name":"codeid","relation":"codeid","type":"String"},"codename":{"define":"codename","label":"等级名称","name":"codename","relation":"codename","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[]","limit":20,"xid":"grade"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"codeid":{"define":"codeid","label":"专业编码","name":"codeid","relation":"codeid","type":"String"},"codename":{"define":"codename","label":"专业名称","name":"codename","relation":"codename","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[]","limit":20,"xid":"major"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"filesuffixname":{"define":"filesuffixname","name":"filesuffixname","relation":"filesuffixname","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"originalname":{"define":"originalname","name":"originalname","relation":"originalname","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data4"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});