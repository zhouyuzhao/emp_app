<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:94px;top:237px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid5"></column>
  <column name="NAME" type="String" xid="xid6"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid7"></column>
  <column name="ITEMID" type="String" xid="xid8"></column>
  <column label="巡检时间" name="RECODEDATE" type="String" xid="xid9"></column>
  <column name="DATAUNIT" type="String" xid="xid10"></column>
  <column name="ITEMNAME" type="String" xid="xid11"></column>
  <column name="LOWERDANVAL" type="String" xid="xid12"></column>
  <column name="UPPERDANVAL" type="String" xid="xid13"></column>
  <column label="" name="RESULTVALUE" type="String" xid="xid15"></column>
  <column label="备注及附件" name="ISNORMAL" type="String" xid="xid14"></column>
  <data xid="default1">[]</data>
  <column label="巡检结果" name="VALUE" type="String" xid="xid2"></column>
  <column name="aaa" type="String" xid="xid1"></column>
  <rule xid="rule1">
   <col name="ISNORMAL" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default2"></expr></calculate> </col> 
   <col name="RESULTVALUE" xid="ruleCol2">
    <calculate xid="calculate2">
     <expr xid="default3"></expr></calculate> </col> 
   <col name="VALUE" xid="ruleCol3">
    <calculate xid="calculate3">
     <expr xid="default4">$row.val(&quot;RESULTVALUE&quot;) + $row.val(&quot;DATAUNIT&quot;)</expr></calculate> </col> 
   <col name="VALUE2" xid="ruleCol4">
    <calculate xid="calculate4">
     <expr xid="default5">$row.val(&quot;ISNORMAL&quot;) ==&quot;1&quot;?&quot;正常&quot;:&quot;异常&quot;</expr></calculate> </col> 
   <col name="aaa" xid="ruleCol5">
    <calculate xid="calculate5">
     <expr xid="default6"></expr></calculate> </col> </rule></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div xid="div4" style="width:100%;z-index:99;position:absolute;background-color:#eee;height:216px;display:none;">
   <div xid="div5" style="background-color:#f8f6f6;margin-right:5%;margin-left:5%;width:90%;margin-top:20px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;">
     <div class="x-col" xid="col4">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
       <label class="x-label" xid="label1">开始时间：</label>
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3" dataType="Date"></input></div> </div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;">
     <div class="x-col" xid="col5">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
       <label class="x-label" xid="label2">结束时间：</label>
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input4" dataType="Date" max="js:new Date()"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="取消" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">取消</span></a></div>
   <div class="x-col" xid="col2" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确定" xid="button3" onClick="button3Click">
   <i xid="i1"></i>
   <span xid="span1">确定</span></a></div>
   </div> 
    </div> </div><div xid="div1" style="width:100%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-25 x-col-center" xid="col1"><span xid="span1"><![CDATA[巡检项目：]]></span></div>
   <div class="x-col" xid="col2"><select component="$UI/system/components/justep/select/select" class="form-control" xid="select2" bind-options="data2" bind-optionsValue="ID" bind-optionsLabel="NAME" onChange="select2Change"></select></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25 x-col-center" xid="col4"><span xid="span2"><![CDATA[展现方式：]]></span></div>
   <div class="x-col x-col-33 x-col-center" xid="col5"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio1" label="数据表格" name="switch" checked="true" onChange="radio1Change" style="color:#000000;"></span></div>
   <div class="x-col x-col-25 x-col-center" xid="col6"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio2" label="趋势图" name="switch" onChange="radio2Change"></span></div>
  <div class="x-col x-col-fixed x-col-center" xid="col11" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-add" onClick="button1Click">
   <i xid="i1" class="icon-android-add"></i>
   <span xid="span4"></span></a></div></div>
  </div>
  <hr xid="hr3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><div xid="div2" class="div2" style="width:100%;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;height:75%;" align="center"><div component="$UI/system/components/justep/dataTables/dataTables" flexibleWidth="true" responsive="true" class="table table-hover table-striped" xid="dataTables3" data="data3" showRowNumber="true" ordering="false" style="text-align:center;" rowAttr="$row.val('ISNORMAL')=='正常'?'':{style:'background:yellow;color:red'}" onRowClick="dataTables3RowClick">
   <columns xid="columns3"><column name="RECODEDATE" xid="column3" className="x-dt-title-center x-dt-cell-center" width="42%"></column>
  <column name="VALUE" xid="column6" width="23%" className="x-dt-title-center x-dt-cell-center"></column><column name="ISNORMAL" xid="column5" className="x-dt-title-center x-dt-cell-center" width="25%"></column>
  </columns></div></div>
  <div xid="div6" style="display:none;height:370px;width:360px;" class="div6"></div>
  </div>
   </div>
  </div>