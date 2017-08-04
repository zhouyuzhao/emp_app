<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:96px;top:213px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="paramname" onCustomRefresh="data1CustomRefresh"><column name="paramname" type="String" xid="xid1"></column>
  <column name="JZ4" type="String" xid="xid2"></column>
  <column name="JZ1" type="String" xid="xid3"></column>
  <column name="JZ2" type="String" xid="xid4"></column>
  <column name="JZ3" type="String" xid="xid5"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="paramname"><column name="paramname" type="String" xid="xid6"></column>
  <column name="JZ1" type="String" xid="xid7"></column>
  <column name="JZ3" type="String" xid="xid8"></column>
  <column name="JZ2" type="String" xid="xid9"></column>
  <column name="JZ4" type="String" xid="xid10"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="运行主要参数一览表">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">运行主要参数一览表</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="closebtn" icon="icon-android-close" onClick="closebtnClick">
   <i xid="i9" class="icon-android-close"></i>
   <span xid="span6"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1">
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div xid="div1" class="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col" xid="col2"><span xid="span2"><![CDATA[#1机组]]></span></div>
   <div class="x-col" xid="col3"><span xid="span3"><![CDATA[#2机组]]></span></div>
  <div class="x-col" xid="col4"><span xid="span4"><![CDATA[#3机组]]></span></div>
  <div class="x-col" xid="col5"><span xid="span5"><![CDATA[#4机组]]></span></div></div>
  </div></div>
   <div class="x-panel-content" xid="content2">
  <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel" xid="carousel1">
   <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" routable="false" xid="contents1">
    <div class="x-contents-content" xid="content3"><div xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div xid="div3">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 10px;">
   <div class="x-col1" xid="col14"><span xid="span1" bind-text="ref('paramname')" style="font-weight:bold;color:#0080FF;"></span></div>
   </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col6"></div>
   <div class="x-col x-col-center" xid="col7" style="font-size:15px;"><span xid="span8" bind-text="ref('JZ1')" class="jz"></span></div>
   <div class="x-col x-col-center" xid="col8" style="font-size:15px;"><span xid="span9" bind-text="ref('JZ2')" class="jz"></span></div>
  <div class="x-col x-col-center" xid="col9" style="font-size:15px;"><span xid="span10" bind-text="ref('JZ3')" class="jz"></span></div>
  <div class="x-col x-col-center" xid="col10" style="font-size:15px;"><span xid="span11" bind-text="ref('JZ4')" class="jz"></span></div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr>
  </li></ul> </div></div></div>
  <div class="x-contents-content" xid="content4" onActive="content4Active"><div xid="div4"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data2">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div xid="div5"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 10px;">
   <div class="x-col1" xid="col11"><span xid="span7" style="font-weight:bold;color:#0080FF;" bind-text="ref('paramname')"></span></div>
   </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col15"></div>
   <div class="x-col x-col-center" xid="col16" style="font-size:15px;"><span xid="span12" class="jz" bind-text="ref('JZ1')"></span></div>
   <div class="x-col x-col-center" xid="col17" style="font-size:15px;"><span xid="span13" class="jz" bind-text="ref('JZ2')"></span></div>
  <div class="x-col x-col-center" xid="col18" style="font-size:15px;"><span xid="span14" class="jz" bind-text="ref('JZ3')"></span></div>
  <div class="x-col x-col-center" xid="col19" style="font-size:15px;"><span xid="span15" class="jz" bind-text="ref('JZ4')"></span></div></div>
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div></div> 
   
   </div></div>
   </div></div>
   </div></div>