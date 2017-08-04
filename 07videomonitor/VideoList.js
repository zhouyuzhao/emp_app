define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-open");
	require("cordova!cordova-plugin-file-opener2");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.data1CustomRefresh = function(event){
		var  temp='[{"videoname":"厂区中控室1号摄像头"},{"videoname":"厂区中控室2号摄像头"},{"videoname":"厂区中控室3号摄像头"},{"videoname":"厂区大门1号摄像头"},{"videoname":"厂区大门2号摄像头"},{"videoname":"厂区大门3号摄像头"}]';
			 event.source.loadData(JSON.parse(temp));	
		/*	  AJ.RS({service:"Personnel",method:"querySafeAreaList",scope:this,params:"100000471",
			success:function(result){
			 event.source.loadData(result.data);
			} 		
		});	*/	
	};

	Model.prototype.row2Click = function(event){
		var url = '$UI/emp_app/07videomonitor/VideoPlay.w?videoname="1"';
		var params={
			videoname:"1111",
			videocode:"2222",
			safeareaid:"3333",
			serveraddress:"4444",
			serverport:"5555",
			username:"6666",
			userpassword:"7777"
	};
		//播放本地文件(示例视频文件)
		var fileUrl = CFG.localpath_video+"VID_20160529_104355.MP4";
		var contentType = "video/mpeg4";
		cordova.plugins.fileOpener2.open(fileUrl, contentType, {  
			error : function() {
				var src=CFG.url+"/PlayMedio.do?companyid="+CFG.companyid+"&id="+id+"&suffix="+suffix+"&filename=/"+fileName;
				//播放服务器上的文件
				if(contentType == "image/jpeg"){
					downloader.get(src);
					window.open(fileUrl,"_system");
				}else{
					cordova.plugins.videoPlayer.play(src);					
				};				
		
			},
			success : function() {
			}
		});
	};

	return Model;
});