<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:156px;left:13px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="DEPARTMENTID"><column label="部门ID" name="DEPARTMENTID" type="String" xid="xid4"></column>
  <column label="部门姓名" name="DEPARTMENTNAME" type="String" xid="xid5"></column>
  <data xid="default2">[{&quot;DEPARTMENTID&quot;:&quot;99fb3cc9-d814-4783-b767-bc6793576d4c&quot;,&quot;DEPARTMENTNAME&quot;:&quot;东方汽轮机&quot;},{&quot;DEPARTMENTID&quot;:&quot;aef1de25-6bae-4e0d-a0ce-45adef538865&quot;,&quot;DEPARTMENTNAME&quot;:&quot;漳平检修&quot;},{&quot;DEPARTMENTID&quot;:&quot;868df927-3682-41eb-91b1-be557aea5d7d&quot;,&quot;DEPARTMENTNAME&quot;:&quot;公司领导&quot;},{&quot;DEPARTMENTID&quot;:&quot;e4969633-737f-4c90-9a1e-77583fedf4e6&quot;,&quot;DEPARTMENTNAME&quot;:&quot;福建安开消防有限公司&quot;},{&quot;DEPARTMENTID&quot;:&quot;EE91E6F7-B9F1-425C-A920-1F08D3CBC58C&quot;,&quot;DEPARTMENTNAME&quot;:&quot;综合管理部&quot;},{&quot;DEPARTMENTID&quot;:&quot;8F57753D-8309-4577-9CF4-512A48464A54&quot;,&quot;DEPARTMENTNAME&quot;:&quot;财务部&quot;},{&quot;DEPARTMENTID&quot;:&quot;AE74B5FA-10A8-47BF-A6B3-D27A44FFA2C9&quot;,&quot;DEPARTMENTNAME&quot;:&quot;生产经营部&quot;},{&quot;DEPARTMENTID&quot;:&quot;7F958473-AFCE-4B3B-B7C9-4BCA7063BC0B&quot;,&quot;DEPARTMENTNAME&quot;:&quot;合同采办部&quot;},{&quot;DEPARTMENTID&quot;:&quot;BD87DBAD-7E53-437C-82E1-83464D3FC2D0&quot;,&quot;DEPARTMENTNAME&quot;:&quot;质量健康安全环保（QHSE）部&quot;},{&quot;DEPARTMENTID&quot;:&quot;625BAE1D-CD3F-46D1-9106-67B26CFCED7F&quot;,&quot;DEPARTMENTNAME&quot;:&quot;工程部&quot;},{&quot;DEPARTMENTID&quot;:&quot;ADE5186E-66B1-46FF-812C-17357617CD45&quot;,&quot;DEPARTMENTNAME&quot;:&quot;运行部&quot;},{&quot;DEPARTMENTID&quot;:&quot;c38950f4-41dc-4836-92c0-f98629bb3382&quot;,&quot;DEPARTMENTNAME&quot;:&quot;检修部&quot;},{&quot;DEPARTMENTID&quot;:&quot;ef817a58-05ff-42c0-8a5a-59d0b6114486&quot;,&quot;DEPARTMENTNAME&quot;:&quot;黑龙江省火电第三工程公司&quot;},{&quot;DEPARTMENTID&quot;:&quot;093b86e9-4379-4577-a62b-1fa75507ea97&quot;,&quot;DEPARTMENTNAME&quot;:&quot;莆田市鹏程工程有限公司&quot;},{&quot;DEPARTMENTID&quot;:&quot;4ab14f75-abc8-4de4-a61a-8447108421dd&quot;,&quot;DEPARTMENTNAME&quot;:&quot;无锡华光&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="DRIVERNAME"><column label="司机姓名" name="DRIVERNAME" type="String" xid="xid1"></column>
  <column label="司机电话" name="DRIVERTEL" type="String" xid="xid2"></column>
  <column label="车牌号" name="DRIVERNUM" type="String" xid="xid3"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="CODEID"><column name="CODEID" type="String" xid="xid6"></column>
  <column name="CODENAME" type="String" xid="xid7"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2" title="用车申请">
   <div class="x-titlebar-left" xid="left2"></div>
   <div class="x-titlebar-title" xid="title2">用车申请</div>
   <div class="x-titlebar-right reverse" xid="right2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="icon-android-close" onClick="button3Click">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><hr xid="hr3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><label xid="label17" style="color:#FF8000;"><![CDATA[个人信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[申请单号:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input2"></input></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[申请人:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit15">
   <label class="x-label" xid="label15"><![CDATA[使用部门:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" bind-optionsLabel="DEPARTMENTNAME" bind-optionsValue="DEPARTMENTID" bind-options="data2"></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[申请人电话:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3"></input></div></div>
   </div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><label xid="label18" style="color:#FF8000;"><![CDATA[出行信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col16"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[出发地:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select3" bind-options="data3" bind-optionsValue="CODENAME" bind-optionsLabel="CODENAME"></select></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col19"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label7"><![CDATA[目的地:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select4" bind-options="data3" bind-optionsValue="CODENAME" bind-optionsLabel="CODENAME"></select></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col25"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11">
   <label class="x-label" xid="label11"><![CDATA[事由:]]><font color="red">*</font></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea2"></textarea></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col22"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit10">
   <label class="x-label" xid="label10"><![CDATA[随行人数:]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input8" placeHolder="填写数字，可为空。"></input></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
   <label class="x-label" xid="label4"><![CDATA[用车时间：]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input4" dataType="DateTime" format="yyyy-MM-dd hh:mm"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label5"><![CDATA[返回时间:]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input5" dataType="DateTime" format="yyyy-MM-dd hh:mm"></input></div></div>
   </div>
  
  
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr>
  </div>
  <div xid="div2"><label xid="label16" style="color:#FF8000;"><![CDATA[司机信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[司机信息:]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select2" bind-options="data1" bind-optionsValue="DRIVERNAME" bind-optionsLabel="DRIVERNAME" onChange="select2Change"></select></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col28"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit12">
   <label class="x-label" xid="label12"><![CDATA[司机姓名:]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input9"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col31"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13">
   <label class="x-label" xid="label13"><![CDATA[司机电话:]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input10"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col34"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit14">
   <label class="x-label" xid="label14"><![CDATA[车牌号:]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input11"></input></div></div>
   </div>
  </div></div>
   <div class="x-panel-bottom" xid="bottom1"><div xid="div4" class="div4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   
   <div class="x-col x-col-center" xid="col2" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="删除" xid="button4" style="width:80%;" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span4">删除</span></a></div>
  <div class="x-col x-col-center" xid="col3" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="修改保存" xid="button5" style="width:80%;" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span5">修改保存</span></a></div><div class="x-col x-col-center" xid="col43" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="提交" xid="button1" style="width:80%;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">提交</span></a></div></div></div></div></div></div>