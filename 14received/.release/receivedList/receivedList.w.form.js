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
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/14received/receivedList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmiI3Yj';
	this._flag_='c02494d1ff50f54795ac1bc95b4b9167';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"departmentname":{"define":"departmentname","label":"收文部门:","name":"departmentname","relation":"departmentname","type":"String"},"docname":{"define":"docname","label":"收文名称:","name":"docname","relation":"docname","type":"String"},"dotypename":{"define":"dotypename","label":"来文形式:","name":"dotypename","relation":"dotypename","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"lastworkrdid":{"define":"lastworkrdid","label":"上一节点ID","name":"lastworkrdid","relation":"lastworkrdid","type":"String"},"nodetype":{"define":"nodetype","label":"流程","name":"nodetype","relation":"nodetype","type":"String"},"receivedate":{"define":"receivedate","label":"收文时间:","name":"receivedate","relation":"receivedate","type":"String"},"recorder":{"define":"recorder","label":"收文人:","name":"recorder","relation":"recorder","type":"String"},"sendcompany":{"define":"sendcompany","label":"来文单位:","name":"sendcompany","relation":"sendcompany","type":"String"},"statusname":{"define":"statusname","label":"文件状态:","name":"statusname","relation":"statusname","type":"String"},"urgencylevelname":{"define":"urgencylevelname","label":"紧急程度:","name":"urgencylevelname","relation":"urgencylevelname","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data1"});
}}); 
return __result;});