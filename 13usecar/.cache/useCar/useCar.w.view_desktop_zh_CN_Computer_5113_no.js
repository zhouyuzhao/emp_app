window.__justep.__ResourceEngine.loadCss([{url: '/v_5113_nol_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_5113_nol_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_5113_nol_zh_CNs_desktopd_pc/system/core.min.js','/v_5113_nol_zh_CNs_desktopd_pc/system/common.min.js','/v_5113_nol_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/13usecar/useCar'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cnY7r6r';
	this._flag_='ce9441899c078d4d0f05ffb80aa10b95';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DEPARTMENTID":{"define":"DEPARTMENTID","label":"部门ID","name":"DEPARTMENTID","relation":"DEPARTMENTID","type":"String"},"DEPARTMENTNAME":{"define":"DEPARTMENTNAME","label":"部门姓名","name":"DEPARTMENTNAME","relation":"DEPARTMENTNAME","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"DEPARTMENTID","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DRIVERNAME":{"define":"DRIVERNAME","label":"司机姓名","name":"DRIVERNAME","relation":"DRIVERNAME","type":"String"},"DRIVERNUM":{"define":"DRIVERNUM","label":"车牌号","name":"DRIVERNUM","relation":"DRIVERNUM","type":"String"},"DRIVERTEL":{"define":"DRIVERTEL","label":"司机电话","name":"DRIVERTEL","relation":"DRIVERTEL","type":"String"}},"directDelete":false,"events":{},"idColumn":"DRIVERNAME","limit":20,"xid":"data2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"sponsorname":{"define":"sponsorname","label":"申请人","name":"sponsorname","relation":"sponsorname","type":"String"},"starttime":{"define":"starttime","label":"申请时间","name":"starttime","relation":"starttime","type":"String"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"},"tokennodename":{"define":"tokennodename","label":"审批人","name":"tokennodename","relation":"tokennodename","type":"String"},"tokenstatus":{"define":"tokenstatus","label":"状态","name":"tokenstatus","relation":"tokenstatus","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data3"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DEPARTMENTNAME":{"define":"DEPARTMENTNAME","label":"部门","name":"DEPARTMENTNAME","relation":"DEPARTMENTNAME","type":"String"},"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"REASON":{"define":"REASON","label":"事由","name":"REASON","relation":"REASON","type":"String"},"RECORDDATE":{"define":"RECORDDATE","label":"记录时间","name":"RECORDDATE","relation":"RECORDDATE","type":"String"},"STATUS":{"define":"STATUS","label":"状态","name":"STATUS","relation":"STATUS","type":"String"},"WFINSTANCEID":{"define":"WFINSTANCEID","label":"工作流ID","name":"WFINSTANCEID","relation":"WFINSTANCEID","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data4"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"CODEID":{"define":"CODEID","name":"CODEID","relation":"CODEID","type":"String"},"CODENAME":{"define":"CODENAME","name":"CODENAME","relation":"CODENAME","type":"String"}},"directDelete":false,"events":{},"idColumn":"CODEID","limit":20,"xid":"data5"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});
