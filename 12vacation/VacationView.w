<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:138px;left:35px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="类型编号" name="type" type="String" xid="xid2"></column>
  <column label="类型名称" name="typeName" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;ID&quot;:&quot;1&quot;,&quot;type&quot;:&quot;01&quot;,&quot;typeName&quot;:&quot;年休假&quot;},{&quot;ID&quot;:&quot;2&quot;,&quot;type&quot;:&quot;02&quot;,&quot;typeName&quot;:&quot;补休假&quot;},{&quot;ID&quot;:&quot;3&quot;,&quot;type&quot;:&quot;03&quot;,&quot;typeName&quot;:&quot;事假&quot;},{&quot;ID&quot;:&quot;4&quot;,&quot;type&quot;:&quot;04&quot;,&quot;typeName&quot;:&quot;婚嫁&quot;},{&quot;ID&quot;:&quot;5&quot;,&quot;type&quot;:&quot;05&quot;,&quot;typeName&quot;:&quot;产假(陪护假)&quot;},{&quot;ID&quot;:&quot;6&quot;,&quot;type&quot;:&quot;06&quot;,&quot;typeName&quot;:&quot;病假&quot;},{&quot;ID&quot;:&quot;7&quot;,&quot;type&quot;:&quot;07&quot;,&quot;typeName&quot;:&quot;探亲假&quot;},{&quot;ID&quot;:&quot;8&quot;,&quot;type&quot;:&quot;08&quot;,&quot;typeName&quot;:&quot;丧假&quot;},{&quot;ID&quot;:&quot;9&quot;,&quot;type&quot;:&quot;09&quot;,&quot;typeName&quot;:&quot;工伤假&quot;},{&quot;ID&quot;:&quot;10&quot;,&quot;type&quot;:&quot;10&quot;,&quot;typeName&quot;:&quot;其他&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="DEPARTMENTID"><column label="部门ID" name="DEPARTMENTID" type="String" xid="xid4"></column>
  <column label="部门姓名" name="DEPARTMENTNAME" type="String" xid="xid5"></column>
  <data xid="default2">[{&quot;DEPARTMENTID&quot;:&quot;99fb3cc9-d814-4783-b767-bc6793576d4c&quot;,&quot;DEPARTMENTNAME&quot;:&quot;东方汽轮机&quot;},{&quot;DEPARTMENTID&quot;:&quot;aef1de25-6bae-4e0d-a0ce-45adef538865&quot;,&quot;DEPARTMENTNAME&quot;:&quot;漳平检修&quot;},{&quot;DEPARTMENTID&quot;:&quot;868df927-3682-41eb-91b1-be557aea5d7d&quot;,&quot;DEPARTMENTNAME&quot;:&quot;公司领导&quot;},{&quot;DEPARTMENTID&quot;:&quot;e4969633-737f-4c90-9a1e-77583fedf4e6&quot;,&quot;DEPARTMENTNAME&quot;:&quot;福建安开消防有限公司&quot;},{&quot;DEPARTMENTID&quot;:&quot;EE91E6F7-B9F1-425C-A920-1F08D3CBC58C&quot;,&quot;DEPARTMENTNAME&quot;:&quot;综合管理部&quot;},{&quot;DEPARTMENTID&quot;:&quot;8F57753D-8309-4577-9CF4-512A48464A54&quot;,&quot;DEPARTMENTNAME&quot;:&quot;财务部&quot;},{&quot;DEPARTMENTID&quot;:&quot;AE74B5FA-10A8-47BF-A6B3-D27A44FFA2C9&quot;,&quot;DEPARTMENTNAME&quot;:&quot;生产经营部&quot;},{&quot;DEPARTMENTID&quot;:&quot;7F958473-AFCE-4B3B-B7C9-4BCA7063BC0B&quot;,&quot;DEPARTMENTNAME&quot;:&quot;合同采办部&quot;},{&quot;DEPARTMENTID&quot;:&quot;BD87DBAD-7E53-437C-82E1-83464D3FC2D0&quot;,&quot;DEPARTMENTNAME&quot;:&quot;质量健康安全环保（QHSE）部&quot;},{&quot;DEPARTMENTID&quot;:&quot;625BAE1D-CD3F-46D1-9106-67B26CFCED7F&quot;,&quot;DEPARTMENTNAME&quot;:&quot;工程部&quot;},{&quot;DEPARTMENTID&quot;:&quot;ADE5186E-66B1-46FF-812C-17357617CD45&quot;,&quot;DEPARTMENTNAME&quot;:&quot;运行部&quot;},{&quot;DEPARTMENTID&quot;:&quot;c38950f4-41dc-4836-92c0-f98629bb3382&quot;,&quot;DEPARTMENTNAME&quot;:&quot;检修部&quot;},{&quot;DEPARTMENTID&quot;:&quot;ef817a58-05ff-42c0-8a5a-59d0b6114486&quot;,&quot;DEPARTMENTNAME&quot;:&quot;黑龙江省火电第三工程公司&quot;},{&quot;DEPARTMENTID&quot;:&quot;093b86e9-4379-4577-a62b-1fa75507ea97&quot;,&quot;DEPARTMENTNAME&quot;:&quot;莆田市鹏程工程有限公司&quot;},{&quot;DEPARTMENTID&quot;:&quot;4ab14f75-abc8-4de4-a61a-8447108421dd&quot;,&quot;DEPARTMENTNAME&quot;:&quot;无锡华光&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="请假单">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">请假单</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="icon-android-close" onClick="button3Click">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[申请单号:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input2"></input></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[姓名:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[部门:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" bind-options="data2" bind-optionsLabel="DEPARTMENTNAME" bind-optionsValue="DEPARTMENTID"></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
   <label class="x-label" xid="label4"><![CDATA[类型:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select2" bind-options="data1" bind-optionsLabel="typeName" bind-optionsValue="type"></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col22">
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8" style="height:100px;">
   <label class="x-label" xid="label8"><![CDATA[备注:]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea1" style="height:90px;"></textarea></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label5"><![CDATA[开始日期:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3" dataType="Date" format="yyyy-MM-dd" onChange="input3Change"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[结束日期:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input4" dataType="Date" format="yyyy-MM-dd" onChange="input4Change"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col16"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label7"><![CDATA[请假天数:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input5"></input></div></div>
   </div>
  </div></div>
   <div class="x-panel-bottom" xid="bottom1"><div xid="div2" class="div2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-center" xid="col8" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="删除" xid="button5" style="width:80%;" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span5">删除</span></a></div><div class="x-col x-col-center" xid="col19" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="修改保存" xid="button2" style="width:80%;" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">修改保存</span></a></div>
   <div class="x-col x-col-center" xid="col6" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="提交" xid="button1" style="width:80%;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">提交</span></a></div>
  </div></div></div></div></div>