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
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/02equipcheck/TodoItemList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cU7vIzm';
	this._flag_='d8c7d7041c11d5a7c45124ab84b90bd8';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"AREACODE":{"define":"AREACODE","name":"AREACODE","relation":"AREACODE","type":"String"},"AREAID":{"define":"AREAID","name":"AREAID","relation":"AREAID","type":"String"},"AREANAME":{"define":"AREANAME","name":"AREANAME","relation":"AREANAME","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"PERSONNELNAME":{"define":"PERSONNELNAME","name":"PERSONNELNAME","relation":"PERSONNELNAME","type":"String"},"SIGNEDID":{"define":"SIGNEDID","name":"SIGNEDID","relation":"SIGNEDID","type":"String"},"SIGNINDATE":{"define":"SIGNINDATE","name":"SIGNINDATE","relation":"SIGNINDATE","type":"String"},"TASKID":{"define":"TASKID","name":"TASKID","relation":"TASKID","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ATTACHSNUM":{"define":"ATTACHSNUM","name":"ATTACHSNUM","relation":"ATTACHSNUM","type":"String"},"CHECKSTATE":{"define":"CHECKSTATE","name":"CHECKSTATE","relation":"CHECKSTATE","type":"String"},"CUSTOM1":{"define":"CUSTOM1","name":"CUSTOM1","relation":"CUSTOM1","type":"String"},"DATASCOPE":{"define":"DATASCOPE","name":"DATASCOPE","relation":"DATASCOPE","type":"String"},"DATATYPE":{"define":"DATATYPE","name":"DATATYPE","relation":"DATATYPE","type":"String"},"DATAUNIT":{"define":"DATAUNIT","name":"DATAUNIT","relation":"DATAUNIT","type":"String"},"EQUIPID":{"define":"EQUIPID","name":"EQUIPID","relation":"EQUIPID","type":"String"},"EQUIPNAME":{"define":"EQUIPNAME","name":"EQUIPNAME","relation":"EQUIPNAME","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"ITEMCODE":{"define":"ITEMCODE","name":"ITEMCODE","relation":"ITEMCODE","type":"String"},"ITEMID":{"define":"ITEMID","name":"ITEMID","relation":"ITEMID","type":"String"},"ITEMNAME":{"define":"ITEMNAME","name":"ITEMNAME","relation":"ITEMNAME","type":"String"},"ITEMNO":{"define":"ITEMNO","name":"ITEMNO","relation":"ITEMNO","type":"String"},"LOWERALAMVAL":{"define":"LOWERALAMVAL","name":"LOWERALAMVAL","relation":"LOWERALAMVAL","type":"String"},"LOWERDANVAL":{"define":"LOWERDANVAL","name":"LOWERDANVAL","relation":"LOWERDANVAL","type":"String"},"PERSONNELID":{"define":"PERSONNELID","name":"PERSONNELID","relation":"PERSONNELID","type":"String"},"PERSONNELNAME":{"define":"PERSONNELNAME","name":"PERSONNELNAME","relation":"PERSONNELNAME","type":"String"},"RECODEDATE":{"define":"RECODEDATE","name":"RECODEDATE","relation":"RECODEDATE","type":"String"},"RECORDID":{"define":"RECORDID","name":"RECORDID","relation":"RECORDID","type":"String"},"REMARK":{"define":"REMARK","name":"REMARK","relation":"REMARK","type":"String"},"RESULTVALUE":{"define":"RESULTVALUE","name":"RESULTVALUE","relation":"RESULTVALUE","type":"String"},"STANDVALUE":{"define":"STANDVALUE","name":"STANDVALUE","relation":"STANDVALUE","type":"String"},"UPPERALARMVAL":{"define":"UPPERALARMVAL","name":"UPPERALARMVAL","relation":"UPPERALARMVAL","type":"String"},"UPPERDANVAL":{"define":"UPPERDANVAL","name":"UPPERDANVAL","relation":"UPPERDANVAL","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data3"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"EQUIPID":{"define":"EQUIPID","name":"EQUIPID","relation":"EQUIPID","type":"String"},"EQUIPNAME":{"define":"EQUIPNAME","name":"EQUIPNAME","relation":"EQUIPNAME","type":"String"},"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"ITEMNO":{"define":"ITEMNO","name":"ITEMNO","relation":"ITEMNO","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"taskName":{"define":"taskName","name":"taskName","relation":"taskName","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data4"});
}}); 
return __result;});