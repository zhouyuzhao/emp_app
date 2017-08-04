define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
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
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/nativedemo/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cMfUF7n';
	this._flag_='e7a80177212d150daddf52cff87b3b04';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"createData":{"define":"createData","label":"创建时间","name":"createData","relation":"createData","type":"String"},"fileName":{"define":"fileName","label":"文件名称","name":"fileName","relation":"fileName","type":"String"},"filePath":{"define":"filePath","label":"路径","name":"filePath","relation":"filePath","type":"String"}},"directDelete":false,"events":{},"idColumn":"fileName","limit":20,"xid":"videoData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"createTime":{"define":"createTime","label":"创建时间","name":"createTime","relation":"createTime","type":"String"},"fileName":{"define":"fileName","label":"音频名字","name":"fileName","relation":"fileName","type":"String"},"filePath":{"define":"filePath","label":"路径","name":"filePath","relation":"filePath","type":"String"},"len":{"define":"len","label":"长度","name":"len","relation":"len","type":"String"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"fileName","limit":20,"xid":"audioData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"createTime":{"define":"createTime","label":"创建时间","name":"createTime","relation":"createTime","type":"String"},"fileName":{"define":"fileName","label":"相片名称","name":"fileName","relation":"fileName","type":"String"},"filePath":{"define":"filePath","label":"路径","name":"filePath","relation":"filePath","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"filePath","limit":20,"xid":"photoData"});
}}); 
return __result;});