<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="id" onCustomRefresh="data1CustomRefresh">
   <column label="" name="id" type="String" xid="xid1"></column>
  <column label="" name="title" type="String" xid="xid5"></column>
  <column label="" name="starttime" type="String" xid="xid3"></column>
  <column name="tokenstatus" type="String" xid="xid2"></column>
  <column label="" name="sponsorname" type="String" xid="xid2"></column>
  <column label="" name="tokennodename" type="String" xid="xid4"></column></div>
  </div>
    <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="demoPopOver" opacity="0.8" direction="right-top" position="center" style="background-color:black;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="width:80%;margin-right:10%;margin-left:10%;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="height:60px;border-radius:10px  10px 0 0;background-color:#2fa4e7;">
     <div class="x-col" xid="col10" bind-text="'审批意见'" style="text-align:center;color:#FFFFFF;line-height:30px;font-size:18px;"></div></div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:#FFFFFF;height:150px;padding-top:5px;">
     <div class="x-col" xid="col1">
      <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea1" style="height:137px;"></textarea></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:#FFFFFF;height:60px;padding-top:8px;">
     <div class="x-col" xid="col16" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="退回" xid="returnBtn" onClick="returnBtnClick">
       <i xid="i4"></i>
       <span xid="span4">退回</span></a> </div> 
     <div class="x-col" xid="col13" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="通过" xid="enterBtn" onClick="enterBtnClick">
       <i xid="i4"></i>
       <span xid="span4">通过</span></a> </div> 
  <div class="x-col" xid="col4" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="取消" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span2">取消</span></a></div></div> 
  <div xid="InfoBox" style="width:70%;margin-right:15%;margin-left:15%;height:120px;position:absolute;display:none;z-index:99;top:75px;border-radius:5px;background-color:#ccc;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="height:50px;">
    <div class="x-col" xid="col25" style="text-align:center;font-size:16px;color:#000000;" bind-text='"温馨提醒"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="height:40px;font-size:20;">
    <div class="x-col" xid="col25" style="text-align:center;color:#000000;font-size:14px;" bind-text='"请填写退回原因!"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
    <div class="x-col" xid="col28" style="text-align:center;">
     <a component="$UI/system/components/justep/button/button" class="btn x-green" label="OK" xid="OkBtn" style="height:30px;text-align:center;line-height:15px;" onClick="OkBtnClick">
      <i xid="i6"></i>
      <span xid="span13">OK</span></a> </div> </div> </div></div> </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C70DE03DCBF000016AD514392C7A19BB" style="bottom: 0px; top: 0px;"><div component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView3" class="x-scroll">
   <div class="x-content-center x-pull-down container" xid="div28">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i9"></i>
    <span class="x-pull-down-label" xid="span43">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div26">
    <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list8" data="data1" autoLoad="true">
     <ul class="x-list-template x-min-height list-group" xid="listTemplateUl8" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
      <li xid="li8" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li2" style="padding:0px 5px 0px 5px;">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="padding-bottom:0px;margin-bottom:0px;">
        <div class="x-col" style="margin-bottom:10px;"><div xid="div25" style="width:100%;float:left;margin-bottom:10px;">
          <span xid="span41" style="float:left;width:60px;margin-right:10px;color:#000000;font-weight:bold;" bind-text="ref('sponsorname')"></span>
          <span xid="span42" style="float:left;color:#000000;" bind-text="ref('tokennodename')"></span>
          <span xid="span40" style="float:right;color:#2fa4e7;" bind-text="ref('starttime')"></span></div>
         <span xid="span38" style="width:100%;word-wrap:break-word;color:#000000;" bind-text="ref('title')"></span></div> 
        <div class="x-col x-col-fixed" xid="col24" style="width:auto;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-only-icon" label="button" xid="showPopOver" icon="img:$UI/emp_app/images/pass.png|" onClick="passClick">
    <i xid="i10"></i>
    <img src="$UI/emp_app/images/pass.png" xid="image6" style="width:50px;"></img>
    <span xid="span39"></span></a> </div>
  </div> 
  <span xid="span1" style="font-weight:bold;color:#0080FF;font-size:15px;" bind-click="span1Click"><![CDATA[查看工作票]]></span></li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div27">
    <span class="x-pull-up-label" xid="span44">加载更多...</span></div> </div></div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="提示" message="确认通过？" type="OKCancel" onOK="messageDialog1OK"></span></div>