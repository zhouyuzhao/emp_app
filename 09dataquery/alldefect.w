<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:77px;left:76px;height:auto;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="id" name="id" type="String" xid="xid1"></column>
  <column name="defectlinfo" type="String" xid="xid2"></column>
  <column name="plangroupname" type="String" xid="xid3"></column>
  <column name="reportcode" type="String" xid="xid4"></column>
  <column name="reportdate" type="String" xid="xid5"></column>
  <column name="recordstatus" type="String" xid="xid6"></column>
  <column name="equipmentname" type="String" xid="xid7"></column>
  <column name="defectposition" type="String" xid="xid8"></column>
  <column name="recordstatuscolor" type="String" xid="xid9"></column>
  <column name="reporter" type="String" xid="xid10"></column>
  <column name="recordid" type="String" xid="xid11"></column>
  <column name="recordstatusname" type="String" xid="xid12"></column>
  <column name="defectlevelname" type="String" xid="xid13"></column>
  <column name="companyid" type="String" xid="xid14"></column>
  <column name="defectlevel" type="String" xid="xid15"></column>
  <column name="unitname" type="String" xid="xid16"></column>
  <column name="reportername" type="String" xid="xid17"></column>
  <column name="objectid" type="String" xid="xid18"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col2"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" dataType="Date" onChange="input1Change" format="yyyy-MM"></input></div>
   </div></div><div class="x-panel-content" xid="content1" style="background-color:white;"><div xid="div1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" bind-click="row1Click">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25 x-col-center" xid="col4" style="text-align:center;"><span xid="span6"><![CDATA[缺陷编号：]]></span></div>
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output1" bind-ref="ref('reportcode')"></div></div>
   <div class="x-col" xid="col6" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output2" style="font-weight:bold;font-size:16px;" bind-ref="ref('recordstatusname')" bind-style="{'color' : $object.val(&quot;recordstatuscolor&quot;)  != null ? $object.val(&quot;recordstatuscolor&quot;) : null}"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25 x-col-center" xid="col7" style="text-align:center;"><span xid="span10"><![CDATA[设备名称：]]></span></div>
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output3" bind-ref="ref('equipmentname')" style="font-weight:bold;"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25 x-col-center" xid="col10" style="text-align:center;"><span xid="span11"><![CDATA[缺陷描述：]]></span></div>
   <div class="x-col" xid="col11"><p xid="p2" bind-text=' $object.val("defectlinfo")'></p></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25 x-col-center" xid="col13" style="text-align:center;"><span xid="span12"><![CDATA[报告人：]]></span></div>
   <div class="x-col x-col-20 x-col-center" xid="col14"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output4" bind-ref="ref('reportername')"></div></div>
   <div class="x-col" xid="col15"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output5" bind-ref="ref('reportdate')" style="color:#FF0000;"></div></div></div></div>
   </div><hr xid="hr1" class="hr1" style="background-color:#C0C0C0;"></hr></li></ul> </div></div></div>
   </div></div>