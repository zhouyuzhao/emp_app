define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/02equipcheck/CheckItemView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cMZRJN3';
	this._flag_='39b5e8f0f60d79f89ce91e2c36e885fa';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"custom5":{"define":"custom5","label":"录音时长","name":"custom5","relation":"custom5","type":"String"},"filesuffixname":{"define":"filesuffixname","label":"文件后缀","name":"filesuffixname","relation":"filesuffixname","type":"String"},"id":{"define":"id","label":"服务器返回的ID","name":"id","relation":"id","type":"String"},"originalname":{"define":"originalname","label":"名称","name":"originalname","relation":"originalname","type":"String"},"uploadtime":{"define":"uploadtime","label":"时间","name":"uploadtime","relation":"uploadtime","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"mediaData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"AREAID":{"define":"AREAID","label":"巡检点ID","name":"AREAID","relation":"AREAID","type":"String"},"CUSTOM1":{"define":"CUSTOM1","name":"CUSTOM1","relation":"CUSTOM1","type":"String"},"DATAUNIT":{"define":"DATAUNIT","label":"单位","name":"DATAUNIT","relation":"DATAUNIT","type":"String"},"EQUIPNAME":{"define":"EQUIPNAME","label":"设备名称","name":"EQUIPNAME","relation":"EQUIPNAME","type":"String"},"ITEMID":{"define":"ITEMID","label":"项目ID","name":"ITEMID","relation":"ITEMID","type":"String"},"ITEMNAME":{"define":"ITEMNAME","label":"项目名称","name":"ITEMNAME","relation":"ITEMNAME","type":"String"},"LOWERDANVAL":{"define":"LOWERDANVAL","label":"下限","name":"LOWERDANVAL","relation":"LOWERDANVAL","type":"String"},"RECORDID":{"define":"RECORDID","label":"记录ID","name":"RECORDID","relation":"RECORDID","type":"String"},"REMARK":{"define":"REMARK","label":"巡检说明","name":"REMARK","relation":"REMARK","type":"String"},"RESULTVALUE":{"define":"RESULTVALUE","label":"检查结果","name":"RESULTVALUE","relation":"RESULTVALUE","type":"String"},"STANDVALUE":{"define":"STANDVALUE","label":"标准值","name":"STANDVALUE","relation":"STANDVALUE","type":"String"},"UPPERDANVAL":{"define":"UPPERDANVAL","label":"上限","name":"UPPERDANVAL","relation":"UPPERDANVAL","type":"String"}},"directDelete":false,"events":{},"idColumn":"RECORDID","limit":20,"xid":"itemRdData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"companyid":{"define":"companyid","name":"companyid","relation":"companyid","type":"String"},"downloadnum":{"define":"downloadnum","name":"downloadnum","relation":"downloadnum","type":"String"},"filesize":{"define":"filesize","name":"filesize","relation":"filesize","type":"String"},"filesuffix":{"define":"filesuffix","name":"filesuffix","relation":"filesuffix","type":"String"},"filesuffixname":{"define":"filesuffixname","name":"filesuffixname","relation":"filesuffixname","type":"String"},"filetype":{"define":"filetype","name":"filetype","relation":"filetype","type":"String"},"filetypename":{"define":"filetypename","name":"filetypename","relation":"filetypename","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"keyword":{"define":"keyword","name":"keyword","relation":"keyword","type":"String"},"originalname":{"define":"originalname","name":"originalname","relation":"originalname","type":"String"},"sourcefieldname":{"define":"sourcefieldname","name":"sourcefieldname","relation":"sourcefieldname","type":"String"},"sourcerecordkey":{"define":"sourcerecordkey","name":"sourcerecordkey","relation":"sourcerecordkey","type":"String"},"sourcetablename":{"define":"sourcetablename","name":"sourcetablename","relation":"sourcetablename","type":"String"},"title":{"define":"title","name":"title","relation":"title","type":"String"},"uploadtime":{"define":"uploadtime","name":"uploadtime","relation":"uploadtime","type":"String"},"viewnum":{"define":"viewnum","name":"viewnum","relation":"viewnum","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data1"});
}}); 
return __result;});