<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window portal-main" component="$UI/system/components/justep/window/window">
  <link type="text/css" rel="stylesheet" href="main.ext.css" xid="link1"></link><div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:182px;top:77px;"
    onLoad="modelLoad" onParamsReceive="modelParamsReceive"></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-portal" xid="panel2">
   
   <div class="x-panel-top" xid="top1" style="background-color:#2fa4e7;height:50px;"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar">
   <div class="x-titlebar-left flex5" xid="div1" reverse="false">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button14" icon="icon-android-contact">
     <i xid="i11" class="icon-android-contact"></i>
     <span xid="span12"></span></a> 
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="outputtitle" style="padding-top:0;color:#fff;font-size:15px;font-family:微软雅黑;"></div>
  <span xid="span1"></span></div> 
   <div class="x-titlebar-title" xid="div2" style="display:none;"></div>
   <div class="x-titlebar-right reverse" xid="div3">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="exitBtn" icon="glyphicon glyphicon-log-out" onClick="exitBtnClick">
     <i xid="i12" class="glyphicon glyphicon-log-out"></i>
     <span xid="span13"></span></a> </div> </div></div>
     <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="contents" wrap="false" swipe="false" slidable="false" style="margin-top:40px;">
   <div class="x-contents-content" xid="content5">
  <div xid="div5" style="width:100%;z-index:99;position:absolute;background-color:#FFFFFF;display:none;margin-top:10px;height:70px;"></div><div xid="div9">
      <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel" xid="carousel1" auto="true">
   <ol xid="default1" class="carousel-indicators"></ol><div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" xid="contents1" style="margin-bottom:5%;height:200px;">
    <div class="x-contents-content" xid="content1" style="height:200px;">
     <img src="../images/11.png" class="image-wall" xid="image1" style="height:100%;"></img></div> 
    <div class="x-contents-content" xid="content2" style="height:200px;">
     <img src="../images/12.png" class="image-wall" xid="image2" style="height:100%;"></img></div> 
    <div class="x-contents-content" xid="content3" style="height:200px;">
     <img src="../images/13.png" class="image-wall" xid="image3" style="height:100%;"></img></div> 
    <div class="x-contents-content" xid="content4" style="height:200px;">
     <img src="../images/14.png" class="image-wall" xid="image4" style="height:100%;"></img></div> </div> 
   
   </div> 
  </div>
  <div xid="div7" class="div7" style="width:100%;height:350px;">
  <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel" xid="carousel2">
   <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" routable="false" xid="contents2">
    <div class="x-contents-content content6" xid="content6"><div xid="div12"><div component="$UI/system/components/bootstrap/row/row" class="row grid9" xid="row1" style="margin-top:-10px;">
        <div class="col  col-xs-4 col-sm-4 cell col-md-4col-lg-4 module1" xid="col1">
         <div class="card div1" xid="div14">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="设备巡检" xid="equipcheck" onClick="equipcheckClick">
           <img src="../images/equipcheck.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span16">设备巡检</span></a> </div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module2" xid="col2">
         <div class="card" xid="div15">
           <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="人员定位" xid="personlocation" onClick="personlocationClick">
           <img src="../images/personlocation.png" alt="" xid="image8" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span53">人员定位</span></a></div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module3" xid="col3">
         <div class="card" xid="div16">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="安全提醒" xid="safealert" onClick="safealertClick">
           <img src="../images/safealert.png" alt="" xid="image9" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span9">安全提醒</span></a> </div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module4" xid="col4">
         <div class="card" xid="div17">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="缺陷管理" xid="equipfault" onClick="equipfaultClick">
        <img src="../images/equipfault.png" alt="" xid="image10" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span14">缺陷管理</span></a></div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module5" xid="col5">
         <div class="card" xid="div18">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="移动审批" xid="moveaudit" onClick="moveauditClick"><i xid="i1" style="padding-bottom:0px;margin-top:0px;margin-bottom:0px;"><span class="remind-angle-Css display-none-Css" xid="badgeSum"><![CDATA[]]></span></i>
           <img src="../images/moveaudit.png" alt="" xid="image11" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span7">移动审批</span></a>
  </div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module6" xid="col6">
         <div class="card" xid="div19">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="视频监控" xid="videomonitor" onClick="videomonitorClick">
           <img src="../images/videomonitor.png" alt="" xid="image12" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span2">视频监控</span></a> </div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module7" xid="col7">
         <div class="card" xid="div20">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" xid="rundata" label="机组数据" onClick="rundataClick">
           <img src="../images/rundata.png" alt="" xid="image13" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span15">机组数据</span></a> </div> </div> 
        <div class="col cell col-xs-4 col-sm-4 col-md-4 col-lg-4 module8" xid="col8">
         <div class="card" xid="div21">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="综合查询" xid="allquery" onClick="allqueryClick">
           <img src="../images/allquery.png" alt="" xid="image14" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span5">综合查询</span></a> </div> </div> 
        <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-4 cell module9" xid="col10">
         <div class="card" xid="div9">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="设备信息" xid="morefun" onClick="morefunClick">
           <img src="../images/equipinfo.png" alt="" xid="image15" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img><span xid="span4">设备信息</span></a> </div> </div>
        </div></div></div>
  <div class="x-contents-content" xid="content7"><div xid="div13"><div component="$UI/system/components/justep/row/row" class="row grid9" xid="row2" style="margin-top:-10px;">
   <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module10" xid="col9"><div xid="div8" class="card"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="考勤管理" xid="button1" onClick="button1Click">
   <img src="../images/checkwork.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span3">考勤管理</span></a></div></div>
   <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module11" xid="col11"><div xid="div10" class="card"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="请假管理" xid="button2" onClick="button2Click"><i xid="i1" style="padding-bottom:0px;margin-top:0px;margin-bottom:0px;"><span class="remind-angle-Css display-none-Css" xid="badgeSum2"><![CDATA[]]></span></i>
   <img src="../images/vacation.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span6">请假管理</span></a></div></div>
   <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module12" xid="col12"><div xid="div11" class="card"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="用车管理" xid="button3" onClick="button3Click"><i xid="i1" style="padding-bottom:0px;margin-top:0px;margin-bottom:0px;"><span class="remind-angle-Css display-none-Css" xid="badgeSum3"><![CDATA[]]></span></i>
   <img src="../images/car.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span8">用车管理</span></a></div></div>
  <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module13" xid="col13" style="display:none;"><div xid="div4" class="card "><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="收文管理" xid="button4" onClick="button4Click"><i xid="i2" style="padding-bottom:0px;margin-top:0px;margin-bottom:0px;"><span class="remind-angle-Css display-none-Css" xid="badgeSum4"><![CDATA[]]></span></i>
   <img src="../images/received.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span10">收文管理</span></a></div></div>
  <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module14" xid="col14" style="display:none;"><div xid="div6" class="card"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="发文管理" xid="button5" onClick="button5Click"><i xid="i3" style="padding-bottom:0px;margin-top:0px;margin-bottom:0px;"><span class="remind-angle-Css display-none-Css" xid="badgeSum5"><![CDATA[]]></span></i>
   <img src="../images/send.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span11">发文管理</span></a></div></div>
  <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module15" xid="col15"><div xid="div22" class="card"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="应急处置" xid="button6" onClick="button6Click">
    <img src="../images/jijiu.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span17">应急处置</span></a></div></div>
   <div class="col col-xs-4 col-sm-4 cell col-md-4col-lg-4 module16" xid="col15"><div xid="div22" class="card"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="记事查询" xid="button7" onClick="button7Click">
    <img src="../images/record2.png" alt="" xid="image7" style="height:38px;width:38px;margin-bottom:10px;margin-top:5px;"></img>
   <span xid="span17">记事查询</span></a></div></div></div></div></div></div> 
   
   </div></div>
  </div></div> 
    <div class="x-panel-bottom" xid="bottom1" height="55">
    <div component="$UI/system/components/justep/windowContainer/windowContainer"
		class="x-window-container" xid="windowContainer2" src="./BottomBar.w?from=home"></div>
   </div>
  </div>
 
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" style="left:10px;top:43px;"></span>
  </div>