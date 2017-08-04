<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:6px;top:38px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column name="ID" type="String" xid="xid5"></column>
  <column label="设备名称" name="EQUIPMENTNAME" type="String" xid="xid6"></column>
  <column name="OBJECTID" type="String" xid="xid7"></column>
  <column name="OLDCODE" type="String" xid="xid10"></column></div></div>
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="设备信息查询">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">设备信息查询</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="icon-android-close" onClick="button3Click">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="text-align:center;"><img src="$UI/emp_app/images/justep.png" alt="" xid="image1" style="height:50%;width:50%;" height="50%"></img></div>
   <div class="x-col" xid="col2" style="text-align:center;"><img src="$UI/emp_app/images/nfc.png" alt="" xid="image2" style="height:50%;width:50%;"></img></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="二维码扫描" xid="button1" style="width:70%;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">二维码扫描</span></a></div>
   <div class="x-col" xid="col5" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="RFID识别" xid="button2" style="width:70%;" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">RFID识别</span></a></div>
   </div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr>
  <div xid="div2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-fixed x-col-center" xid="col5" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-only-icon" label="button" xid="button5" icon="linear linear-mic" onClick="button5Click">
   <i xid="i5" class="linear linear-mic"></i>
   <span xid="span4"></span></a><span xid="span1"><![CDATA[设备名称：]]></span>
  </div>
   <div class="x-col" xid="col6"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
    <input class="form-control" component="$UI/system/components/justep/input/input" xid="input2" autoComplete="false" placeHolder="输入三个或者三个以上文字"></input>
  <div class="input-group-btn" xid="layoutWizard1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon" xid="button4" icon="icon-search" onClick="button4Click">
    <i xid="i8" class="icon-search"></i>
    <span xid="span11"></span></a> </div></div></div>
   </div></div>
  <div xid="div3" class="div3" style="width:100%;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#D0D0D0 #D0D0D0 #D0D0D0 #D0D0D0;height:320px;" align="left"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template x-min-height" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="x-min-height" componentname="li(html)" id="undefined_li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" bind-click="row4Click">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref('EQUIPMENTNAME')"></div></div>
   </div>
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div>
  </div>
   </div></div>