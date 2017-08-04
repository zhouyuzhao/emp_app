<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window  safe">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:137px;top:202px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" onCustomRefresh="data1CustomRefresh" idColumn="ID"><column name="ID" type="String" xid="xid1"></column>
  <column name="DOCNAME" type="String" xid="xid2"></column>
  <column name="DOCTYPE" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;ID&quot;:&quot;1&quot;,&quot;DOCTYPE&quot;:&quot;PDF&quot;}]</data>
  <column name="VIEWNUM" type="String" xid="xid4"></column>
  <column name="ORIGINALNAME" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar">
   <div xid="left1">
     
  </div> 
   <div class="x-titlebar-title" xid="title1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" style="text-align:center;color:#FFFFFF;font-size:large;height:44px;width:279px;margin-top:-10px;margin-left:15%;"></div></div> 
   <div xid="right1"><a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="{operation:'window.close'}" xid="backBtn" style="margin-left:10px;">
     <i class="icon-android-close" xid="i3"></i>
     <span xid="span3"></span></a></div>
  </div></div>  
    <div class="x-panel-content  x-scroll-view " xid="content1" _xid="C71912FEE7E0000173AF7B5014AD1466" style="bottom: 0px;"><div component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView4" class="x-scroll">
   <div class="x-content-center x-pull-down container" xid="div28">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i9"></i>
    <span class="x-pull-down-label" xid="span43">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div26">
    <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list" data="data1" style="background-color:#FFFFFF;">
     <ul class="x-list-template x-min-height list-group" xid="listTemplateUl8" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
      <li xid="li8" class="x-min-height  safe-list-row" componentname="li(html)" id="undefined_li2" style="padding:0px 10px 0px 10px;background-color:#FFFFFF;">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
        <div class="x-col" style="margin-bottom:5px;" xid="col1">
         <div xid="div25" style="width:100%;float:left;margin-bottom:10px;">
          <span xid="span41" style="margin-right:10px;color:#000000;font-weight:bold;font-size:large;" bind-text="ref('DOCNAME')"></span>
          <span xid="span1" style="margin-left:100px;font-size:medium;"><![CDATA[阅读次数：]]></span>
  <span xid="span6" bind-text="ref('VIEWNUM')" style="font-size:medium;color:#FF0000;"></span>
  <span xid="span7" style="font-size:medium;"><![CDATA[遍]]></span></div> 
         <div xid="div24" style="width:100%;float:left;">
          <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="float:left;width:25%;">
   <div class="x-col" xid="col20" bind-click="col20Click">
    <i xid="picbtn" style="color:green;font-size:60px;" bind-css="$object.val(&quot;DOCTYPE&quot;)=='PDF'?'fa fa-file-pdf-o':$object.val(&quot;DOCTYPE&quot;)=='DOC' || $object.val(&quot;DOCTYPE&quot;)=='DOCX'?'fa fa-file-word-o':$object.val(&quot;DOCTYPE&quot;)=='JPG'?'fa fa-photo':$object.val(&quot;DOCTYPE&quot;)=='PPT'?'fa fa-file-powerpoint-o':$object.val(&quot;DOCTYPE&quot;)=='TXT'?'fa fa-file-text':$object.val(&quot;DOCTYPE&quot;)=='PNG'?'fa fa-photo':$object.val(&quot;DOCTYPE&quot;)=='XLS'?'fa fa-file-excel-o':''"></i>
    <span xid="span2" bind-text="ref('ORIGINALNAME')" style="display:block;"></span></div> </div></div> </div> 
        </div> </li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div27">
    <span class="x-pull-up-label" xid="span44">加载更多...</span></div> </div></div>
  </div> 
</div>