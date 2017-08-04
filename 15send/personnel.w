<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:36px;left:339px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="DEPARTMENTID"><column label="部门ID" name="DEPARTMENTID" type="String" xid="xid1"></column>
  <column label="部门姓名" name="DEPARTMENTNAME" type="String" xid="xid2"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="PERSONNELNAME"><column name="PERSONNELNAME" type="String" xid="xid3"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="name"><column name="name" type="String" xid="xid4"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="指定审批传阅人">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">指定审批传阅人</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div><div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1" style="text-align:center;"><![CDATA[部门:]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" onChange="select1Change" bind-options="data1" bind-optionsValue="DEPARTMENTID" bind-optionsLabel="DEPARTMENTNAME"></select></div></div>
   </div></div>
  <div xid="div2" style="width:100%;height:60%;" class="div2"><span component="$UI/system/components/justep/select/checkboxGroup" class="x-checkbox-group" xid="checkboxGroup1" bind-itemset="data2" bind-itemsetValue='ref("PERSONNELNAME")' bind-itemsetLabel='ref("PERSONNELNAME")'></span></div>
  <div xid="div3" class="div3"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="height:120px;">
   <div class="x-col x-col-10" xid="col2"><label xid="label2" style="color:#FF8000;font-size:16px;"><![CDATA[您选择的人:]]></label></div>
   <div class="x-col" xid="col3"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea2" style="height:110px;"></textarea></div>
   </div></div></div>
   <div class="x-panel-bottom" xid="bottom2"><div xid="div4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="添加" xid="button2" onClick="button2Click" style="width:50%;">
   <i xid="i2"></i>
   <span xid="span2">添加</span></a></div>
   <div class="x-col" xid="col11" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-red" label="选好了" xid="button3" onClick="button3Click" style="width:50%;">
   <i xid="i3"></i>
   <span xid="span3">选好了</span></a></div>
   </div></div></div></div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive"></span></div>