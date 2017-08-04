<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:32px;top:316px;"> 
  </div>  
  
  <div component="$UI/system/components/justep/wing/wing" class="x-wing x-wing-xs" xid="wing1" display="push" animate="false">
   <div class="x-wing-left" xid="left2" style="border-right-color:#C0C0C0;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col3" style="text-align:center;padding-top:10px;"><span xid="span3"><![CDATA[分类]]></span></div></div>
  <div xid="div2" style="background-color:#C0C0C0;height:1px;width:100%;margin-top:3px;"></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-vertical" tabbed="true" xid="buttonGroup1" style="text-align:center;width:100%;background-color:#FFFFFF;"><a component="$UI/system/components/justep/button/button" class="btn btn-link active " label="设备缺陷" xid="button3" style="text-align:center;width:100%;font-size:medium;margin-top:10px;" target="content2" onClick="button3Click">
   <i xid="i3"></i>
   <span xid="span4">设备缺陷</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-link " label="应用情况" xid="button4" style="text-align:center;width:100%;font-size:medium;" target="content3" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span5">应用情况</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-link" label="维修费用" xid="button5" style="text-align:center;width:100%;font-size:medium;" target="content4" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span6">维修费用</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="所有缺陷" xid="button6" style="text-align:center;width:100%;font-size:medium;" target="content5" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span7">所有缺陷</span></a></div></div></div>
   <div class="x-wing-content" xid="content1">
    <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel3" style="background-color:#eee;">
   <div class="x-panel-top" xid="top3">
    <div component="$UI/system/components/justep/titleBar/titleBar" title="综合查询" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-mixer" onClick="button2Click" xid="button2">
       <i class="icon-android-mixer" xid="i2"></i>
       <span xid="span2"></span></a> </div> 
     <div class="x-titlebar-title" xid="title1">综合查询</div>
     <div class="x-titlebar-right reverse" xid="right1">
      <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="button1Click" xid="button1">
       <i class="icon-android-close" xid="i1"></i>
       <span xid="span1"></span></a> </div> </div> </div> 
   <div class="x-panel-content" xid="content6">
    <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" swipe="false">
     <div class="x-contents-content" xid="content2">
      <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="DefectDataChart.w"></div></div> 
     <div class="x-contents-content" xid="content3">
      <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer3"></div></div> 
     <div class="x-contents-content" xid="content4">
      <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer4"></div></div> 
  <div class="x-contents-content" xid="content5"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer5"></div></div></div> </div> 
</div></div> 
   </div></div>