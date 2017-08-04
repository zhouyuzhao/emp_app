define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/09dataquery/alldefect'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c3AJby2';
	this._flag_='8941fc650f831b0799674cf1dd6e89a2';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"companyid":{"define":"companyid","name":"companyid","relation":"companyid","type":"String"},"defectlevel":{"define":"defectlevel","name":"defectlevel","relation":"defectlevel","type":"String"},"defectlevelname":{"define":"defectlevelname","name":"defectlevelname","relation":"defectlevelname","type":"String"},"defectlinfo":{"define":"defectlinfo","name":"defectlinfo","relation":"defectlinfo","type":"String"},"defectposition":{"define":"defectposition","name":"defectposition","relation":"defectposition","type":"String"},"equipmentname":{"define":"equipmentname","name":"equipmentname","relation":"equipmentname","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"objectid":{"define":"objectid","name":"objectid","relation":"objectid","type":"String"},"plangroupname":{"define":"plangroupname","name":"plangroupname","relation":"plangroupname","type":"String"},"recordid":{"define":"recordid","name":"recordid","relation":"recordid","type":"String"},"recordstatus":{"define":"recordstatus","name":"recordstatus","relation":"recordstatus","type":"String"},"recordstatuscolor":{"define":"recordstatuscolor","name":"recordstatuscolor","relation":"recordstatuscolor","type":"String"},"recordstatusname":{"define":"recordstatusname","name":"recordstatusname","relation":"recordstatusname","type":"String"},"reportcode":{"define":"reportcode","name":"reportcode","relation":"reportcode","type":"String"},"reportdate":{"define":"reportdate","name":"reportdate","relation":"reportdate","type":"String"},"reporter":{"define":"reporter","name":"reporter","relation":"reporter","type":"String"},"reportername":{"define":"reportername","name":"reportername","relation":"reportername","type":"String"},"unitname":{"define":"unitname","name":"unitname","relation":"unitname","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data1"});
}}); 
return __result;});