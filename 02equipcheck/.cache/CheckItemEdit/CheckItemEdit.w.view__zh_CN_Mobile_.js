window.__justep.__ResourceEngine.loadCss([{url: '/v_f8feb281497247cb9383cff644650b96l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_7a8a299bd96f4233ae491b4bc27dec98l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_d6ada2a80f7645e694c76a0f49e6455cl_zh_CNs_d_m/system/core.min.js','/v_318dfda599204ca69adc2d5ccffe1979l_zh_CNs_d_m/system/common.min.js','/v_34e73dd74a0040daada84d09c595e1fbl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/02equipcheck/CheckItemEdit'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cZn6V3e';
	this._flag_='96650f8dcd01b058c0c7949ab743362f';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"上传文件ID","name":"ID","relation":"ID","type":"String"},"Len":{"define":"Len","label":"录音时长","name":"Len","relation":"Len","type":"String"},"Suffix":{"define":"Suffix","label":"文件后缀","name":"Suffix","relation":"Suffix","type":"String"},"createDate":{"define":"createDate","label":"时间","name":"createDate","relation":"createDate","type":"String"},"fileName":{"define":"fileName","label":"名称","name":"fileName","relation":"fileName","type":"String"},"filePath":{"define":"filePath","label":"路径","name":"filePath","relation":"filePath","type":"String"}},"directDelete":false,"events":{},"idColumn":"filePath","limit":20,"xid":"mediaData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"dataunit":{"define":"dataunit","label":"单位","name":"dataunit","relation":"dataunit","type":"String"},"equipname":{"define":"equipname","label":"设备名称","name":"equipname","relation":"equipname","type":"String"},"itemid":{"define":"itemid","label":"项目ID","name":"itemid","relation":"itemid","type":"String"},"itemname":{"define":"itemname","label":"项目名称","name":"itemname","relation":"itemname","type":"String"},"lowerdanval":{"define":"lowerdanval","label":"下限","name":"lowerdanval","relation":"lowerdanval","type":"String"},"recordid":{"define":"recordid","label":"记录ID","name":"recordid","relation":"recordid","type":"String"},"resultvalue":{"define":"resultvalue","label":"巡检值","name":"resultvalue","relation":"resultvalue","type":"String"},"standvalue":{"define":"standvalue","label":"标准值","name":"standvalue","relation":"standvalue","type":"String"},"upperdanval":{"define":"upperdanval","label":"上限","name":"upperdanval","relation":"upperdanval","type":"String"}},"directDelete":false,"events":{},"idColumn":"itemid","limit":20,"xid":"information"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","name":"ID","relation":"ID","type":"String"},"value":{"define":"value","label":"巡检结果","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","limit":20,"xid":"data1"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});
