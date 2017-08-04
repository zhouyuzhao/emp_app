<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:49px;top:209px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="id" autoNew="true" onCustomRefresh="data1CustomRefresh"><column name="id" type="String" xid="xid16"></column>
  <column label="报告人" name="sponsorname" type="String" xid="xid17"></column>
  <column label="时间" name="starttime" type="String" xid="xid19"></column>
  <column label="内容" name="title" type="String" xid="xid21"></column>
  <column name="tokennodename" type="String" xid="xid22"></column>
  <column label="缺陷状态" name="tokenstatus" type="String" xid="xid23"></column>
  <data xid="default1">[]</data></div></div>
   
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C720800E0B8000011C34869CF4609360" style="top: 0px; bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data1" limit="5" autoLoad="true" disablePullToRefresh="false">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col3" bind-click="col3Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-25" xid="col9"><span xid="span16" bind-text="ref('sponsorname')" style="font-weight:bold;"></span></div>
   <div class="x-col" xid="col12"><span xid="span21" bind-text="ref('tokennodename')"></span></div>
   <div class="x-col x-col-25" xid="col16"><span xid="span22" bind-text="ref('starttime')" style="color:#FF0000;"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col17"><span xid="span9" bind-text="ref('title')"></span></div>
   </div></div>
   </div>
  <hr xid="hr2" class="hr1"></hr></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
   </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"></span></div>