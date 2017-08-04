<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:34px;top:264px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="filesuffixname" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;filesuffixname&quot;:&quot;PDF&quot;}]</data>
  <column name="originalname" type="String" xid="xid3"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1">
   <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar">
    <div xid="left1" style="width:50px;">
      </div> 
    <div class="x-titlebar-title flex2" xid="title1" style="width:200px;">
     <div component="$UI/system/components/justep/output/output" class="x-output" xid="output" style="text-align:center;color:#FFFFFF;font-size:large;height:44px;width:279px;margin-top:-10px;"></div></div> 
    <div xid="right1"><a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="{operation:'window.close'}" xid="backBtn" style="margin-left:10px;height:48px;">
      <i class="icon-android-close" xid="i3"></i>
      <span xid="span1"></span></a></div></div> </div><div class="x-panel-content" xid="content1"><div xid="div2" style="height:auto;padding:10px 10px 10px 10px;font-size:medium;"><span xid="content"></span></div>
  <div xid="div1">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" bind-click="row8Click" style="float:left;">
   <div class="x-col x-col-20" xid="col20">
    <i xid="picbtn" style="color:green;font-size:60px;" bind-css="$object.val(&quot;filesuffixname&quot;)=='PDF'?'fa fa-file-pdf-o':$object.val(&quot;filesuffixname&quot;)=='DOCX'  || $object.val(&quot;filesuffixname&quot;)=='DOC'?'fa fa-file-word-o':''"></i>
  </div> 
  <div class="x-col" xid="col1"><span xid="span2" bind-text="ref('originalname')"></span></div></div>
  </li></ul> </div></div></div>
  </div> 
</div>