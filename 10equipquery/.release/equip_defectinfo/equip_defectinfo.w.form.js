define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/10equipquery/equip_defectinfo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqM3i6r';
	this._flag_='d3f9cfd09c266acb04644bbc5e9e23d1';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"companyid":{"define":"companyid","label":"公司代码：","name":"companyid","relation":"companyid","type":"String"},"defectlevelname":{"define":"defectlevelname","label":"缺陷等级","name":"defectlevelname","relation":"defectlevelname","type":"String"},"defectlinfo":{"define":"defectlinfo","label":"缺陷描述：","name":"defectlinfo","relation":"defectlinfo","type":"String"},"defectposition":{"define":"defectposition","label":"缺陷部位","name":"defectposition","relation":"defectposition","type":"String"},"equipmentname":{"define":"equipmentname","label":"设备名称：","name":"equipmentname","relation":"equipmentname","type":"String"},"objectid":{"define":"objectid","label":"设备ID","name":"objectid","relation":"objectid","type":"String"},"plangroupname":{"define":"plangroupname","label":"检修专业","name":"plangroupname","relation":"plangroupname","type":"String"},"recordid":{"define":"recordid","name":"recordid","relation":"recordid","type":"String"},"recordstatus":{"define":"recordstatus","label":"缺陷状态","name":"recordstatus","relation":"recordstatus","type":"String"},"recordstatuscolor":{"define":"recordstatuscolor","label":"状态颜色：","name":"recordstatuscolor","relation":"recordstatuscolor","type":"String"},"recordstatusname":{"define":"recordstatusname","label":"缺陷状态：","name":"recordstatusname","relation":"recordstatusname","type":"String"},"reportcode":{"define":"reportcode","label":"缺陷单编号：","name":"reportcode","relation":"reportcode","type":"String"},"reportdate":{"define":"reportdate","label":"报告日期：","name":"reportdate","relation":"reportdate","type":"String"},"reportername":{"define":"reportername","label":"缺陷报告人：","name":"reportername","relation":"reportername","type":"String"},"unitname":{"define":"unitname","label":"机组","name":"unitname","relation":"unitname","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"ID","limit":20,"xid":"data1"});
}}); 
return __result;});