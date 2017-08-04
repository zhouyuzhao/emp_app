define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/10equipquery/equip_checkinfo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='czEVrE3';
	this._flag_='49d15cd7c65298e4ce1685a0146779dc';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"NAME":{"define":"NAME","name":"NAME","relation":"NAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DATAUNIT":{"define":"DATAUNIT","name":"DATAUNIT","relation":"DATAUNIT","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"ISNORMAL":{"define":"ISNORMAL","label":"备注及附件","name":"ISNORMAL","relation":"ISNORMAL","type":"String"},"ITEMID":{"define":"ITEMID","name":"ITEMID","relation":"ITEMID","type":"String"},"ITEMNAME":{"define":"ITEMNAME","name":"ITEMNAME","relation":"ITEMNAME","type":"String"},"LOWERDANVAL":{"define":"LOWERDANVAL","name":"LOWERDANVAL","relation":"LOWERDANVAL","type":"String"},"RECODEDATE":{"define":"RECODEDATE","label":"巡检时间","name":"RECODEDATE","relation":"RECODEDATE","type":"String"},"RESULTVALUE":{"define":"RESULTVALUE","label":"","name":"RESULTVALUE","relation":"RESULTVALUE","type":"String"},"UPPERDANVAL":{"define":"UPPERDANVAL","name":"UPPERDANVAL","relation":"UPPERDANVAL","type":"String"},"VALUE":{"define":"VALUE","label":"巡检结果","name":"VALUE","relation":"VALUE","rules":{"calculate":"$row.val(\"RESULTVALUE\") + $row.val(\"DATAUNIT\")"},"type":"String"},"aaa":{"define":"aaa","name":"aaa","relation":"aaa","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[]","limit":20,"xid":"data3"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});