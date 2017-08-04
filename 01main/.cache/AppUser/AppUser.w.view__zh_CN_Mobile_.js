window.__justep.__ResourceEngine.loadCss([{url: '/v_1c08b1f406c7467c99248ad7c6ff4778l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_6e97f4e0e7dc43bb8542cd23ab231f92l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_1c5c40f919144cb384b7b6e7dcc094abl_zh_CNs_d_m/system/components/comp2.min.js','/v_5bf919ca15c64500968d0f13bdf4111fl_zh_CNs_d_m/system/core.min.js','/v_7f658f51b37444f2a2e49b15cd3711dal_zh_CNs_d_m/system/common.min.js','/v_e4fbdffe3dba42088018955e06d54a98l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/button/toggle');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/select/checkboxGroup');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/emp_app/01main/AppUser'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cneA3au';
	this._flag_='53aa4ffb426610697a5c096a92061281';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"模块ID","name":"id","relation":"id","type":"String"},"is":{"define":"is","label":"是否选中","name":"is","relation":"is","rules":{"integer":true},"type":"Integer"},"module":{"define":"module","label":"模块名称","name":"module","relation":"module","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"module\":\"设备巡检\",\"is\":1},{\"id\":\"2\",\"module\":\"人员定位\",\"is\":1},{\"id\":\"3\",\"module\":\"安全提醒\",\"is\":1},{\"id\":\"4\",\"module\":\"缺陷管理\",\"is\":1},{\"id\":\"5\",\"module\":\"移动审批\",\"is\":1},{\"id\":\"6\",\"module\":\"视频监控\",\"is\":1},{\"id\":\"7\",\"module\":\"机组数据\",\"is\":1},{\"id\":\"8\",\"module\":\"综合查询\",\"is\":1},{\"id\":\"9\",\"module\":\"设备信息\",\"is\":1},{\"id\":\"10\",\"module\":\"考勤管理\",\"is\":1},{\"id\":\"11\",\"module\":\"请假管理\",\"is\":1},{\"id\":\"12\",\"module\":\"用车管理\",\"is\":1},{\"id\":\"15\",\"module\":\"应急处置\",\"is\":1}]","limit":20,"xid":"data1"});
}}); 
return __result;});
