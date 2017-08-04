define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/00login/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c226BRz';
	this._flag_='dd780513b07c67bc536798c27ebc489a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ALLITEMNO":{"define":"ALLITEMNO","label":"总数","name":"ALLITEMNO","relation":"ALLITEMNO","rules":{"integer":true},"type":"Integer"},"AREACODE":{"define":"AREACODE","label":"区域ID","name":"AREACODE","relation":"AREACODE","type":"String"},"AREANAME":{"define":"AREANAME","label":"巡检点名称","name":"AREANAME","relation":"AREANAME","type":"String"},"CHECKEDNO":{"define":"CHECKEDNO","label":"已巡检数","name":"CHECKEDNO","relation":"CHECKEDNO","rules":{"integer":true},"type":"Integer"},"ID":{"define":"ID","label":"巡检点ID","name":"ID","relation":"ID","type":"String"},"TASKID":{"define":"TASKID","label":"任务ID","name":"TASKID","relation":"TASKID","type":"String"},"dataID":{"define":"dataID","label":"ID","name":"dataID","relation":"dataID","type":"String"}},"directDelete":false,"events":{},"idColumn":"dataID","initData":"[]","limit":20,"xid":"data1"});
}}); 
return __result;});