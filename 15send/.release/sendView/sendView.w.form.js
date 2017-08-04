define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/bootstrap/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/15send/sendView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cVZBnEr';
	this._flag_='0ddc904f6cec73d40021d0adf89529cb';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"createdate":{"define":"createdate","label":"处理时间:","name":"createdate","relation":"createdate","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"nodetypename":{"define":"nodetypename","label":"流转类型:","name":"nodetypename","relation":"nodetypename","type":"String"},"personnelname":{"define":"personnelname","label":"处理人:","name":"personnelname","relation":"personnelname","type":"String"},"viewcontents":{"define":"viewcontents","label":"处理意见:","name":"viewcontents","relation":"viewcontents","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"FILESUFFIXNAME":{"define":"FILESUFFIXNAME","name":"FILESUFFIXNAME","relation":"FILESUFFIXNAME","type":"String"},"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"ORIGINALNAME":{"define":"ORIGINALNAME","name":"ORIGINALNAME","relation":"ORIGINALNAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data2"});
}}); 
return __result;});