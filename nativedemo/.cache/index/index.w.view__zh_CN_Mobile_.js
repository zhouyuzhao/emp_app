window.__justep.__ResourceEngine.loadCss([{url: '/v_087224c8422547be98d48bbc202cdd64l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_b8a290364b454be5bd5320857427d415l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_6c079e31e25d4b158c2ebeb1bea5009cl_zh_CNs_d_m/system/core.min.js','/v_8d6fbf821b4b4b5b9d5bdf73cf18b86fl_zh_CNs_d_m/system/common.min.js','/v_6a6fb2e6262649e0abe58f6f48167641l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
