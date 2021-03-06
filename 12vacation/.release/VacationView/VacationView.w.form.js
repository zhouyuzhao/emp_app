define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/12vacation/VacationView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbymMJn';
	this._flag_='7a0d7f938779bbef8d3b6b9e2a744e9b';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"type":{"define":"type","label":"类型编号","name":"type","relation":"type","type":"String"},"typeName":{"define":"typeName","label":"类型名称","name":"typeName","relation":"typeName","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"type\":\"01\",\"typeName\":\"年休假\"},{\"ID\":\"2\",\"type\":\"02\",\"typeName\":\"补休假\"},{\"ID\":\"3\",\"type\":\"03\",\"typeName\":\"事假\"},{\"ID\":\"4\",\"type\":\"04\",\"typeName\":\"婚嫁\"},{\"ID\":\"5\",\"type\":\"05\",\"typeName\":\"产假(陪护假)\"},{\"ID\":\"6\",\"type\":\"06\",\"typeName\":\"病假\"},{\"ID\":\"7\",\"type\":\"07\",\"typeName\":\"探亲假\"},{\"ID\":\"8\",\"type\":\"08\",\"typeName\":\"丧假\"},{\"ID\":\"9\",\"type\":\"09\",\"typeName\":\"工伤假\"},{\"ID\":\"10\",\"type\":\"10\",\"typeName\":\"其他\"}]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DEPARTMENTID":{"define":"DEPARTMENTID","label":"部门ID","name":"DEPARTMENTID","relation":"DEPARTMENTID","type":"String"},"DEPARTMENTNAME":{"define":"DEPARTMENTNAME","label":"部门姓名","name":"DEPARTMENTNAME","relation":"DEPARTMENTNAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"DEPARTMENTID","initData":"[{\"DEPARTMENTID\":\"99fb3cc9-d814-4783-b767-bc6793576d4c\",\"DEPARTMENTNAME\":\"东方汽轮机\"},{\"DEPARTMENTID\":\"aef1de25-6bae-4e0d-a0ce-45adef538865\",\"DEPARTMENTNAME\":\"漳平检修\"},{\"DEPARTMENTID\":\"868df927-3682-41eb-91b1-be557aea5d7d\",\"DEPARTMENTNAME\":\"公司领导\"},{\"DEPARTMENTID\":\"e4969633-737f-4c90-9a1e-77583fedf4e6\",\"DEPARTMENTNAME\":\"福建安开消防有限公司\"},{\"DEPARTMENTID\":\"EE91E6F7-B9F1-425C-A920-1F08D3CBC58C\",\"DEPARTMENTNAME\":\"综合管理部\"},{\"DEPARTMENTID\":\"8F57753D-8309-4577-9CF4-512A48464A54\",\"DEPARTMENTNAME\":\"财务部\"},{\"DEPARTMENTID\":\"AE74B5FA-10A8-47BF-A6B3-D27A44FFA2C9\",\"DEPARTMENTNAME\":\"生产经营部\"},{\"DEPARTMENTID\":\"7F958473-AFCE-4B3B-B7C9-4BCA7063BC0B\",\"DEPARTMENTNAME\":\"合同采办部\"},{\"DEPARTMENTID\":\"BD87DBAD-7E53-437C-82E1-83464D3FC2D0\",\"DEPARTMENTNAME\":\"质量健康安全环保（QHSE）部\"},{\"DEPARTMENTID\":\"625BAE1D-CD3F-46D1-9106-67B26CFCED7F\",\"DEPARTMENTNAME\":\"工程部\"},{\"DEPARTMENTID\":\"ADE5186E-66B1-46FF-812C-17357617CD45\",\"DEPARTMENTNAME\":\"运行部\"},{\"DEPARTMENTID\":\"c38950f4-41dc-4836-92c0-f98629bb3382\",\"DEPARTMENTNAME\":\"检修部\"},{\"DEPARTMENTID\":\"ef817a58-05ff-42c0-8a5a-59d0b6114486\",\"DEPARTMENTNAME\":\"黑龙江省火电第三工程公司\"},{\"DEPARTMENTID\":\"093b86e9-4379-4577-a62b-1fa75507ea97\",\"DEPARTMENTNAME\":\"莆田市鹏程工程有限公司\"},{\"DEPARTMENTID\":\"4ab14f75-abc8-4de4-a61a-8447108421dd\",\"DEPARTMENTNAME\":\"无锡华光\"}]","limit":20,"xid":"data2"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});