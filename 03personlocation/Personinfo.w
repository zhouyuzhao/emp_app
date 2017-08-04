<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:202px;top:336px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="id"><column label="id" name="id" type="String" xid="xid1"></column>
  <column label="名字" name="name" type="String" xid="xid1"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data2" idColumn="id" isTree="true">
  <column label="id" name="id" type="String" xid="xid2"></column>
  <column label="name" name="name" type="String" xid="xid3"></column>
  <column label="安全区编号" name="AREACODE" type="String" xid="xid4"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top center-block" xid="top1" height="38"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="人员信息"
          class="x-titlebar" xid="showData" style="font-size:medium;color:#FFFFFF;height:38;">
          <div class="x-titlebar-left"> 
             
          </div>  
          <div class="x-titlebar-title">人员信息</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="padding:20px 20px 20px 20px;">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data2" style="height:30;" autoLoad="true">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="text-align:center;border-style:groove groove groove groove;border-width:thin thin thin thin;padding-left:0px;margin-top:0px;margin-bottom:0px;height:35px;width:100%;">
      <div class="x-col" xid="col1" style="margin-top:0px;margin-bottom:0px;">
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref('name')" style="color:#FF0000;padding-top:0px;padding-bottom:0px;"></div></div> </div> </li> </ul> </div></div>
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="left:78px;top:174px;" onReceive="windowReceiver1Receive"></span></div>