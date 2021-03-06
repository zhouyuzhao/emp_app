<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="height:auto;top:291px;left:396px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="ID" name="id" type="String" xid="xid6"></column>
  <column label="发文类型:" name="sendtypename" type="String" xid="xid1"></column>
  <column label="发送人:" name="recorder" type="String" xid="xid2"></column>
  <column label="发送时间:" name="senddate" type="String" xid="xid3"></column>
  <column label="发文名称:" name="docname" type="String" xid="xid4"></column>
  <column label="发文部门:" name="departmentname" type="String" xid="xid5"></column>
  <column label="上一个节点ID" name="lastworkrdid" type="String" xid="xid7"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="发文列表">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">发文列表</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-67" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label40" xid="labelEdit1">
   <label class="x-label" xid="label1" bind-text='label("sendtypename")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='ref("sendtypename")' style="color:#FF0000;font-weight:bold;"></div></div></div>
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label50" xid="labelEdit2">
   <label class="x-label" xid="label2" bind-text='label("recorder")' style="text-align:right;"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='ref("recorder")'></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit3">
   <label class="x-label" xid="label3" bind-text='label("docname")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='ref("docname")' style="font-size:16px;"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label50" xid="labelEdit4">
   <label class="x-label" xid="label4" bind-text='label("departmentname")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref='ref("departmentname")'></div></div></div>
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("senddate")' style="text-align:right;background-color:#FFFFFF;color:#0000FF;"></div></div>
   </div><hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr>
  </li></ul> </div></div></div>
   </div></div>