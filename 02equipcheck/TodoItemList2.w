<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:194px;top:225px;" onParamsReceive="modelParamsReceive">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column name="AREANAME" type="String" xid="xid2"></column>
  <column name="SIGNINDATE" type="String" xid="xid3"></column>
  <column name="AREACODE" type="String" xid="xid4"></column>
  <column name="PERSONNELNAME" type="String" xid="xid5"></column>
  <column name="SIGNEDID" type="String" xid="xid30"></column>
  <column name="TASKID" type="String" xid="xid35"></column>
  <column name="AREAID" type="String" xid="xid36"></column></div>
  
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid10"></column>
  <column name="ITEMNO" type="String" xid="xid11"></column>
  <column name="ITEMCODE" type="String" xid="xid13"></column>
  <column name="ITEMID" type="String" xid="xid12"></column>
  <column name="RECODEDATE" type="String" xid="xid14"></column>
  <column name="CHECKSTATE" type="String" xid="xid29"></column>
  <column name="REMARK" type="String" xid="xid15"></column>
  <column name="ITEMNAME" type="String" xid="xid16"></column>
  <column name="LOWERDANVAL" type="String" xid="xid17"></column>
  <column name="UPPERDANVAL" type="String" xid="xid18"></column>
  <column name="ATTACHSNUM" type="String" xid="xid19"></column>
  <column name="DATATYPE" type="String" xid="xid20"></column>
  <column name="STANDVALUE" type="String" xid="xid21"></column>
  <column name="EQUIPID" type="String" xid="xid22"></column>
  <column name="RECORDID" type="String" xid="xid31"></column>
  <column name="PERSONNELID" type="String" xid="xid23"></column>
  <column name="UPPERALARMVAL" type="String" xid="xid24"></column>
  <column name="DATAUNIT" type="String" xid="xid25"></column>
  <column name="LOWERALAMVAL" type="String" xid="xid26"></column>
  <column name="PERSONNELNAME" type="String" xid="xid27"></column>
  <column name="RESULTVALUE" type="String" xid="xid28"></column>
  <master data="data2" xid="default2"></master>
  <column name="EQUIPNAME" type="String" xid="xid51"></column>
  <column name="DATASCOPE" type="String" xid="xid34"></column>
  <rule xid="rule1">
   <col name="ID" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default1"></expr></calculate> </col> </rule>
  <column name="CUSTOM1" type="String" xid="xid37"></column>
  <column name="INPUT" type="Float" xid="xid38"></column>
  <column name="SELECT" type="String" xid="xid40"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column name="ID" type="String" xid="xid6"></column>
  <column name="ITEMNO" type="String" xid="xid7"></column>
  <column name="EQUIPNAME" type="String" xid="xid8"></column>
  <column name="EQUIPID" type="String" xid="xid9"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid32"></column>
  <column name="taskName" type="String" xid="xid33"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data5" idColumn="value"><column name="value" type="String" xid="xid39"></column>
  <data xid="default3">[]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-title" xid="title1"><span xid="span2" bind-text="data4.ref('taskName')"></span>
  </div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="closebtn" icon="icon-android-close" onClick="closebtnClick">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div>
  </div></div>
   <div class="x-panel-content" xid="content1">
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2" height="58"><div xid="div2" style="height:58;" dir="ltr"><div component="$UI/system/components/justep/row/row" class="x-row x-row1" xid="row1" style="margin-top:0px;margin-bottom:0px;padding-bottom:0px;height:   ;">
   <div class="x-col x-col-25 x-col1" xid="col1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref="data1.ref('AREACODE')" style="text-align:left;"></div>
  </div>
   <div class="x-col x-col-50 x-col1" xid="col2"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref="data1.ref('AREANAME')" style="font-weight:bold;text-align:left;font-size:16px;"></div></div>
    <div class="x-col x-col1" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output33" bind-ref="data1.ref('SIGNINDATE')" style="text-align:center;font-weight:bold;font-family:微软雅黑;color:#FF0000;"></div></div>
   </div></div></div>
   <div class="x-panel-content" xid="content2"><div xid="div3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data3" style="margin-top:0px;margin-bottom:0px;">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="x-min-height" componentname="li(html)" id="undefined_li1" style="padding-top:7px;padding-right:12px;"><div component="$UI/system/components/justep/row/row" class="x-row x-row4" xid="row4" style="height:35px;" bind-click="row4Click">
   <div class="x-col x-col-50" xid="col4"><div component="$UI/system/components/justep/output/output" class="x-output pull-left" xid="output6" style="font-family:微软雅黑;font-weight:bold;color:#0000FF;" bind-ref='ref("ITEMNAME")'></div>
  </div>
  <div class="x-col x-col-20" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output pull-left" xid="output1" style="text-align:left;font-weight:bold;font-family:微软雅黑;color:#008000;" bind-html="val(&quot;RESULTVALUE&quot;)!=null  &amp;&amp;  val(&quot;DATAUNIT&quot;)  !=null?val(&quot;CUSTOM1&quot;) =='-1'?&quot;&lt;font color=red&gt;&quot;+$object.val(&quot;RESULTVALUE&quot;)+ val(&quot;DATAUNIT&quot;)+&quot;&lt;/font&gt;&quot;: val(&quot;RESULTVALUE&quot;)+ val(&quot;DATAUNIT&quot;) : val(&quot;RESULTVALUE&quot;) !=null?  val(&quot;CUSTOM1&quot;)=='-1'?&quot;&lt;font color=red&gt;&quot;+$object.val(&quot;RESULTVALUE&quot;)+&quot;&lt;/font&gt;&quot;: val(&quot;RESULTVALUE&quot;):''"></div>
  </div>
   <div class="x-col x-col-20" xid="col5" style="text-align:left;"><div component="$UI/system/components/justep/output/output" class="x-output pull-right" xid="output111" style="text-align:right;" bind-text='$object.val("RECORDID")  == null ? "":$object.val("RECODEDATE").substring(11)'></div></div>
  <div class="x-col x-col-10" xid="col6">
   <div component="$UI/system/components/justep/output/output" class="x-output pull-right" xid="output7" bind-text='$object.val("RECORDID")  == null ? "":"OK"' style="text-align:right;color:#0000A0;font-weight:bold;"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col x-col-20 x-col-bottom" xid="col11" style="padding:0px 0px 0px 10px;margin:0px 0px 0px 0px;">
  <label xid="label2"><![CDATA[默认值：]]></label></div>
   <div class="x-col x-col-center" xid="col14"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("ITEMNO")' style="color:#FF00FF;"></div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="margin-top:0px;margin-bottom:0px;padding-bottom:0px;">
   <div class="x-col x-col-50" xid="col7" bind-visible="$object.val(&quot;DATATYPE&quot;) == '01'?1:0"><select component="$UI/system/components/justep/select/select" class="form-control" xid="select1" bind-click="select1Click" bind-options="$model.data5" bind-optionsLabel="value" bind-optionsValue="value" bind-ref='ref("SELECT")' bind-style="{'width': $object.val(&quot;DATATYPE&quot;) == '01'?'200px':'0px' }" bind-optionsCaption="请选择..." bind-visible="$object.val(&quot;DATATYPE&quot;) == '01'?1:0" bind-labelRef='ref("SELECT")'></select></div>
   <div class="x-col" xid="col9"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-ref='ref("ITEMNO")' bind-style="{'width': $object.val(&quot;DATATYPE&quot;) == '02'?'200px':'0px'}" bind-visible="$object.val(&quot;DATATYPE&quot;) == '02'?1:0"></input>
  </div>
   <div class="x-col x-col-10 x-col-top" xid="col10"><label xid="label3" bind-text='val("DATAUNIT")' style="font-size:18px;text-align:left;"><![CDATA[]]></label></div>
  <div class="x-col x-col-fixed" xid="col12" style="width:auto;margin-left:15px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确认" xid="button1" onClick="button1Click" style="width:65px;">
   <i xid="i2"></i>
   <span xid="span3">确认</span></a></div>
  <div class="x-col x-col-10" xid="col13" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button2" icon="linear linear-arrowrightcircle" onClick="button2Click">
   <i xid="i3" class="linear linear-arrowrightcircle"></i>
   <span xid="span4"></span></a></div></div><hr xid="hr1" style="margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;" class="hh"></hr>
  </li></ul> </div></div></div>
   </div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-75 x-col-center" xid="col15" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-purple" label="一键提交" xid="button4" style="width:70%;" onClick="button4Click">
   <i xid="i5"></i>
   <span xid="span6">一键提交</span></a></div>
   <div class="x-col" xid="col16" style="text-align:right;"><a component="$UI/system/components/justep/button/button" class="btn x-red btn-only-icon" xid="button3" icon="linear linear-redo" onClick="button3Click">
   <i xid="i4" class="linear linear-redo"></i>
   <span xid="span5"></span></a>
  </div>
  <div class="x-col" xid="col17" style="text-align:right;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button6" icon="icon-android-close" onClick="button6Click">
   <i xid="i7" class="icon-android-close"></i>
   <span xid="span8"></span></a></div></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="left:18px;top:180px;"></span></div>