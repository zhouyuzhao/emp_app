define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/10equipquery/Frame'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c2QNJZr';
	this._flag_='f9ca985495cb9fbe80443d68249dcd43';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"abcleveltypename":{"define":"abcleveltypename","label":"重要程度","name":"abcleveltypename","relation":"abcleveltypename","type":"String"},"beginrundate":{"define":"beginrundate","label":"投产日期","name":"beginrundate","relation":"beginrundate","type":"String"},"classname":{"define":"classname","label":"分类名称","name":"classname","relation":"classname","type":"String"},"companyid":{"define":"companyid","label":"所属公司","name":"companyid","relation":"companyid","type":"String"},"country":{"define":"country","label":"国家","name":"country","relation":"country","type":"String"},"equipgroupname":{"define":"equipgroupname","label":"运行机组","name":"equipgroupname","relation":"equipgroupname","type":"String"},"equipmentcode":{"define":"equipmentcode","label":"设备编码","name":"equipmentcode","relation":"equipmentcode","type":"String"},"equipmentname":{"define":"equipmentname","label":"设备名称","name":"equipmentname","relation":"equipmentname","type":"String"},"equipmenttypename":{"define":"equipmenttypename","label":"设备类型","name":"equipmenttypename","relation":"equipmenttypename","type":"String"},"manufacture":{"define":"manufacture","label":"制造厂商","name":"manufacture","relation":"manufacture","type":"String"},"model":{"define":"model","label":"规格型号","name":"model","relation":"model","type":"String"},"objectid":{"define":"objectid","label":"设备ID","name":"objectid","relation":"objectid","type":"String"},"oldcode":{"define":"oldcode","label":"KKS编码","name":"oldcode","relation":"oldcode","type":"String"},"plangroupname":{"define":"plangroupname","label":"检修专业","name":"plangroupname","relation":"plangroupname","type":"String"},"techobjectstatusname":{"define":"techobjectstatusname","label":"技术状况名称","name":"techobjectstatusname","relation":"techobjectstatusname","type":"String"},"techselfdef1":{"define":"techselfdef1","label":"技术对象状态颜色","name":"techselfdef1","relation":"techselfdef1","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"CODENAME":{"define":"CODENAME","name":"CODENAME","relation":"CODENAME","type":"String"},"GRAPHDOCNAME":{"define":"GRAPHDOCNAME","name":"GRAPHDOCNAME","relation":"GRAPHDOCNAME","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"SAVEDFILENAME":{"define":"SAVEDFILENAME","name":"SAVEDFILENAME","relation":"SAVEDFILENAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data2"});
}}); 
return __result;});