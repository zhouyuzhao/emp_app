<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:-4px;left:19px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="记录时间" name="RECORDDATE" type="String" xid="xid2"></column>
  <column label="状态" name="STATUS" type="String" xid="xid3"></column>
  <column label="部门名称" name="DEPARTMENTNAME" type="String" xid="xid4"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="我的请假单">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">我的请假单</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" bind-click="row1Click">
   <div class="x-col x-col-25" xid="col1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("DEPARTMENTNAME")'></div></div>
   <div class="x-col x-col-50" xid="col2" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("RECORDDATE")'></div></div>
   <div class="x-col" xid="col3" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("STATUS")' bind-html="val(&quot;STATUS&quot;) =='01'?'初始创建': val(&quot;STATUS&quot;)=='02'?'提交': val(&quot;STATUS&quot;) =='03'?'审批中': val(&quot;STATUS&quot;) =='04'?'结束':''"></div></div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div>
  </div>
  </div>
   </div></div>