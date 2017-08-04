<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:m;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model1" onParamsReceive="model1ParamsReceive"></div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-card x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" title="移动审批" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1" reverse="false"></div>
     <div class="x-titlebar-title" xid="title1">移动审批</div>
     <div class="x-titlebar-right reverse" xid="right1">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button1" icon="icon-android-close" onClick="button1Click">
       <i xid="i2" class="icon-android-close"></i>
       <span xid="span2"></span></a> </div> </div> </div> 
   <div class="x-panel-content" xid="content1">
    <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
     <div class="x-panel-top" xid="top2">      
  <div xid="div1" style="overflow:auto;"><div component="$UI/system/components/justep/button/buttonGroup" tabbed="true" xid="buttonGroup1" class="btn-group x-card btn-group-justified" style="width:120%;">
        <a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button1" target="navContent1" label="设备缺陷">
        <i xid="i1"><span class="remind-angle-Css display-none-Css" xid="badge1"><![CDATA[]]></span></i>
        <span xid="span3"><![CDATA[设备缺陷]]></span></a>
        
        <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="物料领用" xid="button2" target="navContent2" >
        <i xid="i2"><span class="remind-angle-Css display-none-Css" xid="badge2"><![CDATA[]]></span></i>
        <span xid="span2">物料领用</span></a>
        
        <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="物料采购" xid="button3" target="navContent3">
        <i xid="i3"><span class="remind-angle-Css display-none-Css" xid="badge3"><![CDATA[]]></span></i>
        <span xid="span3">物料采购</span></a>
        
        <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="外委服务" xid="button4" target="navContent4">
        <i xid="i4"><span class="remind-angle-Css display-none-Css" xid="badge4"><![CDATA[]]></span></i>
        <span xid="span4">外委服务</span></a>
        <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="工作票" xid="button5" target="navContent5">
   		<i xid="i5"><span class="remind-angle-Css display-none-Css" xid="badge5"><![CDATA[]]></span></i>
  		<span xid="span5">工作票</span></a>
	   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="操作票" xid="button6" target="navContent6">
	   <i xid="i6"><span class="remind-angle-Css display-none-Css" xid="badge6"><![CDATA[]]></span></i>
	   <span xid="span6">操作票</span></a>
   </div>
  </div>
  </div> 
     <div class="x-panel-content" xid="content2">
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="navContents" wrap="true" slidable="true" swipe="true" >
       <div class="x-contents-content" xid="navContent1" onActive="navContent1Active">
       <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="navContainer1" style="height:100%;width:100%;" autoLoad="true"></div></div> 
       <div class="x-contents-content" xid="navContent2" onActive="navContent2Active">
       <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="navContainer2" style="height:100%;width:100%;" autoLoad="true"></div></div> 
       <div class="x-contents-content" xid="navContent3" onActive="navContent3Active">
       <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="navContainer3" style="height:100%;width:100%;" autoLoad="true"></div></div> 
       <div class="x-contents-content" xid="navContent4" onActive="navContent4Active">
       <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="navContainer4" style="height:100%;width:100%;" autoLoad="true"></div></div> 
       <div class="x-contents-content" xid="navContent5" onActive="navContent5Active"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="navContainer5"></div></div>
  <div class="x-contents-content" xid="navContent6" onActive="navContent6Active"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="navContainer6"></div></div></div></div>
        </div> </div> 
  <div class="x-panel-bottom" xid="bottom1" height="55">
   <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="../01main/BottomBar.w?from=home"></div></div></div>
  </div>