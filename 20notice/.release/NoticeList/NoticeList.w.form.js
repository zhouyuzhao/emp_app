define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/20notice/NoticeList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cvQZbm2';
	this._flag_='6e4a232c79ef70188fc9b94f279fa0b2';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"CONTENT":{"define":"CONTENT","name":"CONTENT","relation":"CONTENT","type":"String"},"ID":{"define":"ID","label":"","name":"ID","relation":"ID","type":"String"},"NUMBER":{"define":"EXPRESS","name":"NUMBER","relation":"EXPRESS","rules":{"integer":true},"type":"Integer"},"PUBDATE":{"define":"PUBDATE","label":"","name":"PUBDATE","relation":"PUBDATE","type":"String"},"TITLE":{"define":"TITLE","label":"","name":"TITLE","relation":"TITLE","type":"String"},"TYPE":{"define":"TYPE","name":"TYPE","relation":"TYPE","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"ID","limit":20,"xid":"data1"});
}}); 
return __result;});