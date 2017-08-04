<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="height:auto;top:182px;left:110px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column name="ID" type="String" xid="xid1"></column>
  <column label="日志类别" name="LOGTYPEID" type="String" xid="xid2"></column>
  <column label="时分" name="OCCURTIME" type="String" xid="xid3"></column>
  <column label="操作人" name="OPERATOR" type="String" xid="xid4"></column>
  <column label="记事内容" name="RECORDCONTENT" type="String" xid="xid5"></column>
  <column label="值班员" name="RECORDER" type="String" xid="xid6"></column>
  <column label="状态" name="RECORDSTATUS" type="String" xid="xid7"></column>
  <column label="记事类型" name="RECORDTYPE" type="String" xid="xid8"></column>
  <column label="班组" name="TEAMID" type="String" xid="xid9"></column>
  <column label="排班" name="TURNCODE" type="String" xid="xid10"></column>
  <column label="时间" name="WORKDATE" type="String" xid="xid11"></column>
  <column name="WORKCENTERID" type="String" xid="xid12"></column>
  <column name="WORKCENTERNAME" type="String" xid="xid13"></column>
  <column name="CODENAME" type="String" xid="xid14"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column name="ID" type="String" xid="xid15"></column>
  <column label="实际值" name="value" type="String" xid="xid16"></column>
  <column label="显示值" name="lable" type="String" xid="xid17"></column>
  <data xid="default1">[{&quot;ID&quot;:&quot;1&quot;,&quot;value&quot;:&quot;00&quot;,&quot;lable&quot;:&quot;办票&quot;},{&quot;ID&quot;:&quot;2&quot;,&quot;value&quot;:&quot;01&quot;,&quot;lable&quot;:&quot;操作&quot;},{&quot;ID&quot;:&quot;3&quot;,&quot;value&quot;:&quot;02&quot;,&quot;lable&quot;:&quot;异常&quot;},{&quot;ID&quot;:&quot;4&quot;,&quot;value&quot;:&quot;04&quot;,&quot;lable&quot;:&quot;定期&quot;},{&quot;ID&quot;:&quot;5&quot;,&quot;value&quot;:&quot;05&quot;,&quot;lable&quot;:&quot;记事&quot;},{&quot;ID&quot;:&quot;6&quot;,&quot;value&quot;:&quot;06&quot;,&quot;lable&quot;:&quot;交代&quot;},{&quot;ID&quot;:&quot;7&quot;,&quot;value&quot;:&quot;07&quot;,&quot;lable&quot;:&quot;启停&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="ID"><column name="ID" type="String" xid="xid18"></column>
  <column label="实际值" name="value" type="String" xid="xid19"></column>
  <column label="显示值" name="lable" type="String" xid="xid20"></column>
  <data xid="default2">[{&quot;ID&quot;:&quot;1&quot;,&quot;value&quot;:&quot;01&quot;,&quot;lable&quot;:&quot;#1机组&quot;},{&quot;ID&quot;:&quot;2&quot;,&quot;value&quot;:&quot;02&quot;,&quot;lable&quot;:&quot;#2机组&quot;},{&quot;ID&quot;:&quot;3&quot;,&quot;value&quot;:&quot;03&quot;,&quot;lable&quot;:&quot;#3机组&quot;},{&quot;ID&quot;:&quot;4&quot;,&quot;value&quot;:&quot;04&quot;,&quot;lable&quot;:&quot;#4机组&quot;},{&quot;ID&quot;:&quot;5&quot;,&quot;value&quot;:&quot;05&quot;,&quot;lable&quot;:&quot;公用&quot;},{&quot;ID&quot;:&quot;6&quot;,&quot;value&quot;:&quot;06&quot;,&quot;lable&quot;:&quot;消防&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="值长记事查询">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-only-icon" xid="button3" icon="linear linear-sun" onClick="button3Click">
   <i xid="i2" class="linear linear-sun"></i>
   <span xid="span2"></span></a></div>
   <div class="x-titlebar-title" xid="title1">值长记事查询</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i3" class="icon-android-close"></i>
   <span xid="span3"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1">
  <div xid="div1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click">
  <div xid="div3"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("WORKDATE")' format="yyyy-MM-dd"></div></div>
   <div class="x-col" xid="col11"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("OCCURTIME")' style="color:#0000FF;"></div>
  </div>
   <div class="x-col x-col-25" xid="col12"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("WORKCENTERNAME")'></div></div>
  <div class="x-col" xid="col13"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("RECORDER")' style="font-weight:bold;"></div></div>
  <div class="x-col" xid="col14"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("CODENAME")' style="color:#FF0000;"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col15"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-ref='ref("RECORDCONTENT")' style="font-size:16px;"></div></div>
   </div>
  </div>
  <hr xid="hr1" style="margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;"></hr>
  </li></ul> </div>
  </div>
  </div>
   </div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0.9" position="top">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content" xid="div5" style="width:100%;"><div xid="div2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" dataType="Date"></input></div>
   <div class="x-col" xid="col7"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" dataType="Date"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[记事类型:]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" bind-options="data2" bind-optionsValue="value" bind-optionsLabel="lable" bind-optionsCaption="请选择..."></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col17"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[机组:]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select2" bind-options="data3" bind-optionsLabel="lable" bind-optionsValue="value" bind-optionsCaption="请选择..."></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col20"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[记事内容:]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea1"></textarea></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col23" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-purple" label="确定" xid="button2" onClick="button2Click" style="width:80%;">
   <i xid="i1"></i>
   <span xid="span1">确定</span></a></div>
   </div></div></div></div></div>