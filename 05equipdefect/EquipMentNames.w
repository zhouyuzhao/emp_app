<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:184px;top:64px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column name="ID" type="String" xid="xid5"></column>
  <column label="设备名称" name="EQUIPMENTNAME" type="String" xid="xid6"></column>
  <column name="OBJECTID" type="String" xid="xid7"></column>
  <column name="OLDCODE" type="String" xid="xid10"></column></div></div>
  
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive"></span>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content2"><div xid="div1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template x-min-height" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="x-min-height" componentname="li(html)" id="undefined_li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" bind-click="row1Click">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref="ref('OLDCODE')"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref="ref('EQUIPMENTNAME')"></div></div>
   </div>
  <hr xid="hr1" class="hr1"></hr></li></ul> </div></div></div>
   </div></div>