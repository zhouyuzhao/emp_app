define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/wing/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/wing/wing');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/02equipcheck/MyTaskList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7zUN3a';
	this._flag_='22cabbaf0b9878c770a41e0ee664b22e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"taskID":{"define":"taskID","name":"taskID","relation":"taskID","type":"String"}},"directDelete":false,"events":{},"idColumn":"taskID","limit":20,"xid":"data3"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ALLITEMNO":{"define":"ALLITEMNO","label":"总数","name":"ALLITEMNO","relation":"ALLITEMNO","rules":{"integer":true},"type":"Integer"},"AREACODE":{"define":"AREACODE","label":"区域ID","name":"AREACODE","relation":"AREACODE","type":"String"},"AREANAME":{"define":"AREANAME","label":"巡检点名称","name":"AREANAME","relation":"AREANAME","type":"String"},"CHECKEDNO":{"define":"CHECKEDNO","label":"已巡检数","name":"CHECKEDNO","relation":"CHECKEDNO","rules":{"integer":true},"type":"Integer"},"ID":{"define":"ID","label":"巡检点ID","name":"ID","relation":"ID","type":"String"},"STATUS":{"define":"EXPRESS","name":"STATUS","relation":"EXPRESS","type":"String"},"TASKID":{"define":"TASKID","label":"任务ID","name":"TASKID","relation":"TASKID","type":"String"},"dataID":{"define":"dataID","label":"ID","name":"dataID","relation":"dataID","type":"String"}},"directDelete":false,"events":{},"idColumn":"dataID","initData":"[]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ALLPOINTNO":{"define":"ALLPOINTNO","label":"总数：","name":"ALLPOINTNO","relation":"ALLPOINTNO","type":"String"},"BEGINTIME":{"define":"BEGINTIME","label":"开始时间：","name":"BEGINTIME","relation":"BEGINTIME","type":"String"},"ENDTIME":{"define":"ENDTIME","label":"结束时间：","name":"ENDTIME","relation":"ENDTIME","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"ISCHECKED":{"define":"ISCHECKED","name":"ISCHECKED","relation":"ISCHECKED","type":"String"},"SIGNPINTNO":{"define":"SIGNPINTNO","label":"已巡检：","name":"SIGNPINTNO","relation":"SIGNPINTNO","type":"String"},"TASKDATE":{"define":"TASKDATE","label":"任务时间：","name":"TASKDATE","relation":"TASKDATE","type":"String"},"TASKID":{"define":"TASKID","label":"任务ID：","name":"TASKID","relation":"TASKID","type":"String"},"TASKNAME":{"define":"TASKNAME","label":"任务名称：","name":"TASKNAME","relation":"TASKNAME","type":"String"},"TASKSTATUS":{"define":"TASKSTATUS","label":"任务状态：","name":"TASKSTATUS","relation":"TASKSTATUS","type":"String"},"TASKSTATUSNAME":{"define":"TASKSTATUSNAME","label":"任务状态：","name":"TASKSTATUSNAME","relation":"TASKSTATUSNAME","type":"String"},"checkProgress":{"define":"checkProgress","label":"检查情况：","name":"checkProgress","relation":"checkProgress","rules":{"calculate":"$row.val(\"SIGNPINTNO\")+\"(已巡检)/\"+ $row.val(\"ALLPOINTNO\")+\"(总数)\""},"type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"Task"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"TASKCODE":{"define":"TASKCODE","name":"TASKCODE","relation":"TASKCODE","type":"String"},"TASKNAME":{"define":"TASKNAME","name":"TASKNAME","relation":"TASKNAME","type":"String"},"TASKTIME":{"define":"TASKTIME","name":"TASKTIME","relation":"TASKTIME","type":"String"},"TEMPLETID":{"define":"TEMPLETID","label":"","name":"TEMPLETID","relation":"TEMPLETID","type":"String"}},"directDelete":false,"events":{},"idColumn":"TEMPLETID","limit":20,"xid":"data2"});
}}); 
return __result;});