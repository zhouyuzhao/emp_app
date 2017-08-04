define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("cordova!cordova-plugin-spinner-dialog");//等待提示框
	require("cordova!cordova-plugin-dialogs");//本地对话框
	require("cordova!cordova-plugin-file-transfer");//文件上传/下载
	require("cordova!cordova-plugin-file-opener2");//打开本地文件
    require("css!$UI/emp_app/common/css/font-awesome-4.4.0/css/font-awesome.min.css").load();
	var sub={};
	var id='';
	var lastworkrdid='';
	var personid = [];
	var Model = function(){
		this.callParent();
		if(!CU.isEmpty(localStorage.getItem('SUB'))) {
			 sub =JSON.parse(localStorage.getItem('SUB'));
		}
	};
	Model.prototype.button1Click = function(event){
		justep.Shell.showPage(require.toUrl('$UI/emp_app/15send/sendList.w'),{"value":"value"});
	};
	Model.prototype.modelParamsReceive = function(event){
		this.comp("popOver1").hide();
		var send=JSON.parse(event.params.data);
		id=send.id;
		lastworkrdid = event.params.lastworkrdid;
		this.getElementByXid("label4").innerHTML=send.statusname;
		this.getElementByXid("label6").innerHTML=send.doccode;
		this.getElementByXid("label9").innerHTML=send.docname;
		this.getElementByXid("label11").innerHTML=send.docno;
		this.getElementByXid("label13").innerHTML=send.dotypename;
		this.getElementByXid("label15").innerHTML=send.sendtypename;
		this.getElementByXid("label17").innerHTML=send.departmentname;
		this.getElementByXid("label19").innerHTML=send.sendfirst;
		this.getElementByXid("label21").innerHTML=send.sendby;
		this.getElementByXid("label23").innerHTML=send.recorder;
		this.getElementByXid("label25").innerHTML=send.senddate;
		var data2 = this.comp("data2");
			AJ.RS({
				service : "SP_dodocworks",
				method : "getFile",
				scope : this,
				params : ['SP_SENDDOCRD',id],
				success : function(result) {
						//console.log(JSON.stringify(result.data));
						data2.loadData(result.data);
				}
			});	
	};
	//查看传阅信息
	Model.prototype.content4Active = function(event){
		var data1 = this.comp("data1");
			AJ.RS({
				service : "SP_dodocworks",
				method : "getDoDocWorksList",
				scope : this,
				params : [id],
				success : function(result) {
					if(!CU.isEmpty(result.data)){
						data1.loadData(result.data);
					}else{
						CU.hint("没有传阅信息！");
					}
						
				}
			});
	};
	//已阅
	Model.prototype.button4Click = function(event){
		navigator.notification.prompt('请您填写处理意见！', // message
		function(results) {
			if (results.buttonIndex == '2') {// results.input1
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.show(null, "正在提交...", true);
				}
				var params={docrecordid:id,dodocpersonid:lastworkrdid,nodetype:'05',tablename:'SP_SENDDOCRD',worktype:'03',viewcontents:results.input1};
				AJ.RS({
				service : "SP_dodocworks",
				method : "saveOrUpdate",
				scope : this,
				params : params,
				success : function(result) {
						if (justep.Browser.isX5App && justep.Browser.isAndroid) {
							window.plugins.spinnerDialog.hide();
						}
						if (result.success) {
							CU.hint("操作成功！");
						} else {
							CU.hint("操作失败！");
						}
						justep.Shell.showPage(require.toUrl('$UI/emp_app/15send/sendList.w'),{"value":"value"});
						
						
				}
			});
			} else {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			}
		}, '您确认已经阅读完成？', [ '取消', '确定' ], '已阅！');
	};
	//查看附件
	Model.prototype.row12Click = function(event){
		var rows = event.bindingContext.$object;
    	 var fileUrl = "";
    	 var contentType = "";
    	 var fileName = rows.val("ORIGINALNAME");
    	 var id = rows.val("ID");
    	  var suffix =  rows.val("FILESUFFIXNAME");
    	 
    	if(fileName.substring(fileName.length-3) == 'pdf'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/pdf";
		}
    	if((fileName.substring(fileName.length-3) == 'doc')||(fileName.substring(fileName.length-4) == 'docx')){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/msword";
		}
		if(fileName.substring(fileName.length-3) == 'jpg'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "image/jpeg";
		}
		if((fileName.substring(fileName.length-3) == 'ppt')|| (fileName.substring(fileName.length-4) == 'pptx')){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/vnd.ms-powerpoint";
		}
		if(fileName.substring(fileName.length-3) == 'png'){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "image/png";
		}
		if((fileName.substring(fileName.length-3) == 'xls')||(fileName.substring(fileName.length-4) == 'xlsx')){
    		fileUrl = CFG.localpath_image+fileName;
    		contentType = "application/vnd.ms-excel";
    		}
  		//如果打开本地失败,打开服务器上的文件
    	cordova.plugins.fileOpener2.open(fileUrl, contentType, {  
			error : function() {
				var src=CFG.url+"/PlayMedio.do?companyid="+CFG.companyid+"&id="+id+"&suffix="+suffix+"&filename=/"+fileName;
				if((suffix == "PDF")||(suffix == "DOC")||(suffix == "DOCX")||(suffix == "JPG") || (suffix == "PPT")|| (suffix == "PPTX")|| (suffix == "PNG")||(suffix == "XLS")){
					window.plugins.spinnerDialog.show(null, "正在加载...", true);
					var fileTransfer = new FileTransfer();
					fileTransfer.download(src, fileUrl, function(entry) {
						window.plugins.spinnerDialog.hide();
						cordova.plugins.fileOpener2.open(fileUrl, contentType, function success() {
						}, function error() {
						});
					}, function(error) {
						window.plugins.spinnerDialog.hide();
					});
				}			
			},
			success : function() {
			}
		});
		
		
	};
	//打开传阅窗口
	Model.prototype.button5Click = function(event){
		this.comp("textarea1").clear();
		this.comp("textarea2").clear();
		this.comp("popOver1").show();
	};
	//取消传阅窗口
	Model.prototype.button7Click = function(event){
		this.comp("popOver1").hide();
	};
	//打开选择传阅人页面
	Model.prototype.button6Click = function(event){
		this.comp("windowDialog1").open({data:'03'});
	};
	//接收返回来的传阅人
	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.type == '03') {
			personid.splice(0, personid.length);
			var names = event.data.names;
			this.comp("textarea1").val(names);
			var seletName = this.comp("textarea1").val();
			if (!CU.isEmpty(seletName)) {
				var arr = seletName.split(",");
				for (var i = 0; i < arr.length; i++) {
					var param = [ CFG.companyid, arr[i] ];
					AJ.RS({
						service : "Vacation",
						method : "getPersonID",
						scope : this,
						params : param,
						success : function(result) {
						if(!CU.isEmpty(result.data.PERSONNELID)){
							personid.push(result.data.PERSONNELID);
						}else{
							CU.hint("未知错误,请您终止操作！");
						}
						}
					});
				}
			} else {
				CU.hint("您没有指定传阅人！");
			}
		}
	};
	//传阅的确认
	Model.prototype.button8Click = function(event){
		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
				window.plugins.spinnerDialog.show(null, "正在提交...", true);
			}
		var personnelname2 = this.comp("textarea1").val();
		if(CU.isEmpty(personnelname2)){
			 if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
			CU.hint("操作失败,您没有指定传阅人！");
			return;
		}
		var personnelid2 = personid.toString();
		var suggestion = this.comp("textarea2").val();//处理意见
		if(CU.isEmpty(suggestion)){
			suggestion='已阅！';
		}
		var params = {
			docrecordid : id,
			dodocpersonid : lastworkrdid,
			nodetype : '05',
			tablename : 'SP_SENDDOCRD',
			worktype : '03',
			viewcontents : suggestion,
			personnelid2 : personnelid2,
			personnelname2 : personnelname2
		};
		AJ.RS({
			service : "SP_dodocworks",
			method : "saveOrUpdate",
			scope : this,
			params : params,
			success : function(result) {
				if (justep.Browser.isX5App && justep.Browser.isAndroid) {
					window.plugins.spinnerDialog.hide();
				}
				if (result.success) {
					CU.hint("操作成功！");
					justep.Shell.showPage(require.toUrl('$UI/emp_app/15send/sendList.w'),{"value":"value"});
				} else {
					CU.hint("操作失败！");
					justep.Shell.showPage(require.toUrl('$UI/emp_app/15send/sendList.w'),{"value":"value"});
				}
			}
		});
	};

	return Model;
});