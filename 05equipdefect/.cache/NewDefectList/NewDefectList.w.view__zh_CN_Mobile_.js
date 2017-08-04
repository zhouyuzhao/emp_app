window.__justep.__ResourceEngine.loadCss([{url: '/v_4c6282d93393465698aef1256aa3a0c3l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_f44af41277c74d09b73c12685fc182eal_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_5f4b7b7c3b424243aabc75717750a8f1l_zh_CNs_d_m/system/core.min.js','/v_4f32643df0864a488e5c8f935a84c001l_zh_CNs_d_m/system/common.min.js','/v_518aa685cc6247018d2e0026f0374832l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
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
var __parent0=require('$model/UI2/emp_app/05equipdefect/NewDefectList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cFfErIz';
	this._flag_='923d1942dfee0a19f78ec1a85eb5b688';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"companyid":{"define":"companyid","label":"公司代码：","name":"companyid","relation":"companyid","type":"String"},"defectlevelname":{"define":"defectlevelname","label":"缺陷等级","name":"defectlevelname","relation":"defectlevelname","type":"String"},"defectlinfo":{"define":"defectlinfo","label":"缺陷描述：","name":"defectlinfo","relation":"defectlinfo","type":"String"},"defectposition":{"define":"defectposition","label":"缺陷部位","name":"defectposition","relation":"defectposition","type":"String"},"equipmentname":{"define":"equipmentname","label":"设备名称：","name":"equipmentname","relation":"equipmentname","type":"String"},"objectid":{"define":"objectid","label":"设备ID","name":"objectid","relation":"objectid","type":"String"},"plangroupname":{"define":"plangroupname","label":"检修专业","name":"plangroupname","relation":"plangroupname","type":"String"},"recordid":{"define":"recordid","name":"recordid","relation":"recordid","type":"String"},"recordstatus":{"define":"recordstatus","label":"缺陷状态","name":"recordstatus","relation":"recordstatus","type":"String"},"recordstatuscolor":{"define":"recordstatuscolor","label":"状态颜色：","name":"recordstatuscolor","relation":"recordstatuscolor","type":"String"},"recordstatusname":{"define":"recordstatusname","label":"缺陷状态：","name":"recordstatusname","relation":"recordstatusname","type":"String"},"reportcode":{"define":"reportcode","label":"缺陷单编号：","name":"reportcode","relation":"reportcode","type":"String"},"reportdate":{"define":"reportdate","label":"报告日期：","name":"reportdate","relation":"reportdate","type":"String"},"reportername":{"define":"reportername","label":"缺陷报告人：","name":"reportername","relation":"reportername","type":"String"},"unitname":{"define":"unitname","label":"机组","name":"unitname","relation":"unitname","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"ID","limit":20,"xid":"data1"});
}}); 
return __result;});
