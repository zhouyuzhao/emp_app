<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:1px;left:8px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="DEPARTMENTID" onCustomRefresh="data1CustomRefresh"><column label="部门ID" name="DEPARTMENTID" type="String" xid="xid1"></column>
  <column label="部门姓名" name="DEPARTMENTNAME" type="String" xid="xid2"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="DRIVERNAME"><column label="司机姓名" name="DRIVERNAME" type="String" xid="xid3"></column>
  <column label="司机电话" name="DRIVERTEL" type="String" xid="xid4"></column>
  <column label="车牌号" name="DRIVERNUM" type="String" xid="xid5"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="id"><column label="ID" name="id" type="String" xid="xid6"></column>
  <column label="申请时间" name="starttime" type="String" xid="xid7"></column>
  <column label="审批人" name="tokennodename" type="String" xid="xid8"></column>
  <column label="标题" name="title" type="String" xid="xid9"></column>
  <column label="申请人" name="sponsorname" type="String" xid="xid10"></column>
  <column label="状态" name="tokenstatus" type="String" xid="xid11"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="记录时间" name="RECORDDATE" type="String" xid="xid2"></column>
  <column label="部门" name="DEPARTMENTNAME" type="String" xid="xid3"></column>
  <column label="状态" name="STATUS" type="String" xid="xid4"></column>
  <column label="事由" name="REASON" type="String" xid="xid12"></column>
  <column label="工作流ID" name="WFINSTANCEID" type="String" xid="xid13"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data5" idColumn="CODEID"><column name="CODEID" type="String" xid="xid14"></column>
  <column name="CODENAME" type="String" xid="xid15"></column></div></div> 
<div component="$UI/system/components/justep/model/model" xid="model1" style="position:absolute;;left:229.0px;top:322.0px"></div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2" title="用车管理">
   <div class="x-titlebar-left" xid="left2"></div>
   <div class="x-titlebar-title" xid="title2">用车管理</div>
   <div class="x-titlebar-right reverse" xid="right2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="icon-android-close" onClick="button3Click">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1">
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="用车申请" xid="button4" target="content3">
   <i xid="i4"></i>
   <span xid="span4">用车申请</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="用车审批" xid="button5" target="content4">
   <i xid="i5"><span class="remind-angle-Css display-none-Css" xid="badge1"><![CDATA[]]></span></i>
   <span xid="span5">用车审批</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="用车历史" xid="button6" target="content5">
   <i xid="i6"></i>
   <span xid="span6">用车历史</span></a></div></div>
   <div class="x-panel-content" xid="content2">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content3"><div xid="div1"><hr xid="hr3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><label xid="label17" style="color:#FF8000;"><![CDATA[个人信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[申请人:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1"></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit15">
   <label class="x-label" xid="label15"><![CDATA[使用部门:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" bind-optionsLabel="DEPARTMENTNAME" bind-optionsValue="DEPARTMENTID" bind-options="data1"></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[申请人电话:]]><font color="red">*</font></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3"></input></div></div>
   </div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><label xid="label18" style="color:#FF8000;"><![CDATA[出行信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col16"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[出发地:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select3" bind-options="data5" bind-optionsLabel="CODENAME" bind-optionsValue="CODENAME"></select></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col19"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label7"><![CDATA[目的地:]]><font color="red">*</font></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select4" bind-options="data5" bind-optionsValue="CODENAME" bind-optionsLabel="CODENAME"></select></div></div>
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
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input2" dataType="DateTime" format="yyyy-MM-dd hh:mm"></input></div></div>
   </div>
  
  
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr>
  </div><div xid="div2"><label xid="label16" style="color:#FF8000;"><![CDATA[司机信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[司机信息:]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select2" bind-options="data2" bind-optionsValue="DRIVERNAME" bind-optionsLabel="DRIVERNAME" onChange="select2Change"></select></div></div>
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
  </div>
  <div xid="div4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col x-col-center" xid="col43" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="保存" xid="button1" style="width:80%;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">保存</span></a></div>
   </div></div></div>
  <div class="x-contents-content" xid="content4" onActive="content4Active"><div xid="div3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data3">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" bind-click="row14Click">
   <div class="x-col x-col-33" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("sponsorname")' style="text-align:center;"></div></div>
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("tokennodename")'></div></div>
   <div class="x-col" xid="col6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("starttime")'></div></div></div>
  <hr xid="hr5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div>
  <div class="x-contents-content" xid="content5" onActive="content5Active"><div xid="div5"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data4">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row16" bind-click="row16Click">
   <div class="x-col x-col-33" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("REASON")' style="text-align:center;"></div></div>
   <div class="x-col x-col-33" xid="col9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("RECORDDATE")' style="text-align:center;"></div></div>
   <div class="x-col" xid="col11"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("STATUS")' bind-html="val(&quot;STATUS&quot;) =='01'?'初始创建': val(&quot;STATUS&quot;)=='02'?'提交': val(&quot;STATUS&quot;) =='03'?'审批中': val(&quot;STATUS&quot;) =='04'?'结束':val(&quot;STATUS&quot;) =='05'?'已终止':''" style="text-align:center;"></div></div></div>
  <hr xid="hr4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div></div></div>
   </div></div>
   </div></div>