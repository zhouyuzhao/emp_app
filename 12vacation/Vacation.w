<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="height:auto;top:186px;left:211px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="类型编号" name="type" type="String" xid="xid2"></column>
  <column label="类型名称" name="typeName" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;ID&quot;:&quot;1&quot;,&quot;type&quot;:&quot;01&quot;,&quot;typeName&quot;:&quot;年休假&quot;},{&quot;ID&quot;:&quot;2&quot;,&quot;type&quot;:&quot;02&quot;,&quot;typeName&quot;:&quot;补休假&quot;},{&quot;ID&quot;:&quot;3&quot;,&quot;type&quot;:&quot;03&quot;,&quot;typeName&quot;:&quot;事假&quot;},{&quot;ID&quot;:&quot;4&quot;,&quot;type&quot;:&quot;04&quot;,&quot;typeName&quot;:&quot;婚嫁&quot;},{&quot;ID&quot;:&quot;5&quot;,&quot;type&quot;:&quot;05&quot;,&quot;typeName&quot;:&quot;产假(陪护假)&quot;},{&quot;ID&quot;:&quot;6&quot;,&quot;type&quot;:&quot;06&quot;,&quot;typeName&quot;:&quot;病假&quot;},{&quot;ID&quot;:&quot;7&quot;,&quot;type&quot;:&quot;07&quot;,&quot;typeName&quot;:&quot;探亲假&quot;},{&quot;ID&quot;:&quot;8&quot;,&quot;type&quot;:&quot;08&quot;,&quot;typeName&quot;:&quot;丧假&quot;},{&quot;ID&quot;:&quot;9&quot;,&quot;type&quot;:&quot;09&quot;,&quot;typeName&quot;:&quot;工伤假&quot;},{&quot;ID&quot;:&quot;10&quot;,&quot;type&quot;:&quot;10&quot;,&quot;typeName&quot;:&quot;其他&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="DEPARTMENTID"><column label="部门ID" name="DEPARTMENTID" type="String" xid="xid4"></column>
  <column label="部门姓名" name="DEPARTMENTNAME" type="String" xid="xid5"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="记录时间" name="RECORDDATE" type="String" xid="xid2"></column>
  <column label="状态" name="STATUS" type="String" xid="xid3"></column>
  <column label="部门名称" name="DEPARTMENTNAME" type="String" xid="xid4"></column>
  <column label="请假天数:" name="VACATIONDAYS" type="String" xid="xid12"></column>
  <column label="工作流ID" name="WFINSTANCEID" type="String" xid="xid13"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="id"><column name="id" type="String" xid="xid6"></column>
  <column name="starttime" type="String" xid="xid7"></column>
  <column name="tokennodename" type="String" xid="xid8"></column>
  <column name="title" type="String" xid="xid9"></column>
  <column name="sponsorname" type="String" xid="xid10"></column>
  <column name="tokenstatus" type="String" xid="xid11"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="请假管理">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">请假管理</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="icon-android-close" onClick="button3Click">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="请假单" xid="button4" target="content3">
   <i xid="i4"></i>
   <span xid="span4">请假单</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="请假审批" xid="button5" target="content4">
   <i xid="i5"><span class="remind-angle-Css display-none-Css" xid="badge1"><![CDATA[]]></span></i>
   <span xid="span5">请假审批</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="请假历史" xid="button6" target="content5">
   <i xid="i6"></i>
   <span xid="span6">请假历史</span></a></div></div>
   <div class="x-panel-content" xid="content2">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content3"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
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
   <div class="x-col" xid="col22"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8" style="height:100px;">
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
  </div><div xid="div2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-center" xid="col19" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="保存" xid="button2" style="width:80%;" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">保存</span></a></div>
   </div></div></div>
  <div class="x-contents-content" xid="content4" onActive="content4Active"><div xid="div3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data4">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" bind-click="row10Click">
   <div class="x-col" xid="col6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("sponsorname")' style="text-align:center;"></div></div>
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("tokennodename")' style="text-align:center;"></div></div>
   <div class="x-col" xid="col9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("starttime")' style="text-align:center;"></div></div></div>
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div>
  <div class="x-contents-content" xid="content5" onActive="content5Active"><div xid="div4"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data3">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" bind-click="row9Click">
   <div class="x-col x-col-33" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label60" xid="labelEdit9">
   <label class="x-label" xid="label10" bind-text='label("VACATIONDAYS")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='ref("VACATIONDAYS")'></div></div></div>
   <div class="x-col" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("RECORDDATE")' style="text-align:center;"></div></div>
   <div class="x-col" xid="col5" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("STATUS")' bind-html="val(&quot;STATUS&quot;) =='01'?'初始创建': val(&quot;STATUS&quot;)=='02'?'提交': val(&quot;STATUS&quot;) =='03'?'审批中': val(&quot;STATUS&quot;) =='04'?'结束':val(&quot;STATUS&quot;) =='05'?'已终止':''"></div></div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div></div></div>
   </div></div>
   </div></div>