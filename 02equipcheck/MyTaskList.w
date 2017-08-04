<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:211px;left:79px;" onParamsReceive="modelParamsReceive">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data3" idColumn="taskID"><column name="taskID" type="String" xid="xid25"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="dataID"><column label="ID" name="dataID" type="String" xid="xid1"></column>
  <column label="巡检点名称" name="AREANAME" type="String" xid="xid2"></column>
  <column label="巡检点ID" name="ID" type="String" xid="xid3"></column>
  <column label="区域ID" name="AREACODE" type="String" xid="xid4"></column>
  <column label="总数" name="ALLITEMNO" type="Integer" xid="xid6"></column>
  <column label="已巡检数" name="CHECKEDNO" type="Integer" xid="xid7"></column>
  <column isCalculate="true" name="STATUS" type="String" xid="xid8"></column>
  <column label="任务ID" name="TASKID" type="String" xid="xid10"></column>
  <data xid="default2">[]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="Task" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid11"></column>
  <column label="任务名称：" name="TASKNAME" type="String" xid="xid12"></column>
  <column label="任务ID：" name="TASKID" type="String" xid="xid13"></column>
  <column label="任务时间：" name="TASKDATE" type="String" xid="xid14"></column>
  <column label="已巡检：" name="SIGNPINTNO" type="String" xid="xid15"></column>
  <column label="总数：" name="ALLPOINTNO" type="String" xid="xid16"></column>
  <column label="任务状态：" name="TASKSTATUS" type="String" xid="xid17"></column>
  <column isCalculate="false" label="检查情况：" name="checkProgress" type="String" xid="xid18"></column>
  <column name="ISCHECKED" type="String" xid="xid5"></column>
  <column label="任务状态：" name="TASKSTATUSNAME" type="String" xid="xid9"></column>
  <column label="开始时间：" name="BEGINTIME" type="String" xid="xid23"></column>
  <column label="结束时间：" name="ENDTIME" type="String" xid="xid24"></column>
  <rule xid="rule1">
   <col name="checkProgress" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default1">$row.val(&quot;SIGNPINTNO&quot;)+&quot;(已巡检)/&quot;+ $row.val(&quot;ALLPOINTNO&quot;)+&quot;(总数)&quot;</expr></calculate> </col> </rule></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="TEMPLETID"><column label="" name="TEMPLETID" type="String" xid="xid19"></column>
  <column name="TASKNAME" type="String" xid="xid20"></column>
  <column name="TASKTIME" type="String" xid="xid21"></column>
  <column name="TASKCODE" type="String" xid="xid22"></column></div></div> 

  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="./point.w" style="top:80px;left:8px;"></span>
  <div component="$UI/system/components/justep/wing/wing" class="x-wing" xid="wing1" display="overlay" animate="false">
   <div class="x-wing-left" xid="left2" style="width:80%;"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel4">
   <div class="x-panel-top" xid="top4"><div component="$UI/system/components/justep/row/row" class="x-row point" xid="row1">
   <div class="x-col x-col-center point" xid="col3" style="text-align:center;padding-top:10px;"><span xid="span3" style="font-size:16px;"><![CDATA[巡检任务模板]]></span></div>
  <div class="x-col x-col-fixed point" xid="col8" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button5" icon="icon-arrow-left-c" onClick="button5Click">
   <i xid="i5" class="icon-arrow-left-c"></i>
   <span xid="span6"></span></a></div></div>
  <div xid="div2" style="background-color:#C0C0C0;height:1px;width:100%;margin-top:3px;"></div></div>
   <div class="x-panel-content" xid="content5"><div xid="div4"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="data2">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3"><div component="$UI/system/components/justep/row/row" class="x-row left-row" xid="row3" style="padding:0px 0px 0px 0px;">
   <div class="x-col" xid="col6"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref="ref('TASKCODE')" style="padding-top:0px;"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref="ref('TASKNAME')" style="font-weight:bold;padding-top:0px;color:#993366;"></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-fixed" xid="col12" style="width:auto;"><span xid="span4"><![CDATA[巡检时间：]]></span></div>
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/output/output" class="x-output output7" xid="output7" bind-ref="ref('TASKTIME')" style="width:90%;"></div>
  </div>
   </div>
  </div>
   <div class="x-col x-col-fixed" xid="col7" style="width:auto;padding-top:30px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm" label="创建任务" xid="button4" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span5">创建任务</span></a></div>
   </div>
  <hr xid="hr1" style="margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div>
   </div></div><div class="x-wing-content" xid="content2">
    <div class="x-wing-backdrop" xid="div2"></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="巡检任务">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button3" icon="icon-arrow-swap" onClick="button3Click">
   <i xid="i3" class="icon-arrow-swap"></i>
   <span xid="span3"></span></a></div>
   <div class="x-titlebar-title" xid="title1">巡检任务</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button1" onClick="button1Click" icon="icon-android-close">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="Task">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0px 0px 0px 0px;" bind-style="{'backgroundColor': $object.val(&quot;TASKID&quot;) == $model.data3.val(&quot;taskID&quot;)?'#FF8800':'#DDDDDD'}">
   <div class="x-col x-col-80" xid="col1" bind-click="col1Click">
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label40 task" xid="labelEdit1">
   <label class="x-label" xid="label1" bind-text="label('TASKNAME')" style="font-weight:bold;font-size:16px;"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref="ref('TASKNAME')" style="font-weight:bold;font-size:16px;"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label40 task" xid="labelEdit4">
   <label class="x-label" xid="label4" bind-text="label('TASKDATE')" style="font-size:16px;"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref="ref('TASKDATE')" style="font-size:16px;"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;">
   <div class="x-col x-col-33" xid="col11" style="padding:0px 0px 0px 0px;"><span xid="span7" style="font-size:16px;"><![CDATA[巡检时间：]]></span></div>
   <div class="x-col x-col-25" xid="col14" style="padding:0px 0px 0px 0px;text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref="ref('BEGINTIME')" style="font-size:16px;padding:0px 0px 0px 0px;text-align:center;"></div></div>
   <div class="x-col x-col-10 x-col-center" xid="col18" style="padding:0px 0px 0px 0px;text-align:center;"><span xid="span10" bind-text=" $object.val(&quot;ENDTIME&quot;) ==  null?'':'─'"><![CDATA[]]></span></div><div class="x-col x-col-25" xid="col15" style="padding:0px 0px 0px 0px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output9" bind-ref="ref('ENDTIME')" style="font-size:16px;padding:0px 0px 0px 0px;"></div></div>
  </div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label40 task" xid="labelEdit8">
   <label class="x-label" xid="label8" bind-text="label('checkProgress')" style="font-size:16px;"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output11" bind-ref="ref('checkProgress')" style="font-size:16px;color:#000000;"></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label40 task" xid="labelEdit7">
   <label class="x-label" xid="label7" bind-text="label('TASKSTATUS')" style="font-size:16px;"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output10" style="font-size:16px;font-weight:bold;" bind-value=' val("TASKSTATUSNAME")' bind-style="{'color' : $object.val(&quot;TASKSTATUS&quot;)== '03' ? 'red':$object.val(&quot;TASKSTATUS&quot;)== '04' ?'blue':''}"></div></div>
  </div>
   <div class="x-col x-col-fixed x-col-center" xid="col4" style="margin-top:70px;width:auto;padding:0px 0px 0px 0px;">
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-text='$object.val("TASKSTATUS") == "01"?"开始巡检":"取消任务"' bind-click="output3Click" style="font-weight:bold;background-color:#FFFFFF;color:#0080FF;font-size:16px;"></div></div><hr xid="hr3"></hr>
  </div></li></ul> </div></div>
  </div>
   </div></div> 
   <div class="x-wing-right" xid="right" style="width:80%;"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-fixed" xid="col16" style="width:auto;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon point" label="button" xid="button6" icon="icon-arrow-right-c" onClick="button6Click">
   <i xid="i6" class="icon-arrow-right-c"></i>
   <span xid="span9"></span></a></div>
   <div class="x-col x-col-center pull-left point" xid="col17" style="text-align:center;"><span xid="span8" style="font-size:16px;padding:0px 0px 0px 0px;"><![CDATA[巡检点]]></span></div>
   </div><div xid="div2" style="background-color:#C0C0C0;height:1px;width:100%;"></div></div>
   <div class="x-panel-content" xid="content3"><div xid="div3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data1">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row right-row" xid="row2" bind-click="row2Click">
   <div class="x-col x-col-10 right-col" xid="col2" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button2" icon="icon-ios7-circle-filled">
   <i xid="i2" class="icon-ios7-circle-filled"></i>
   <span xid="span2"></span></a>
  </div>
   <div class="x-col right-col" xid="col3" style="text-align:left;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output8" bind-ref="ref('AREANAME')" style="font-size:16px;color:#333333;"></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col19" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" style="font-size:16px;" bind-html="$object.val(&quot;ALLITEMNO&quot;) - $object.val(&quot;CHECKEDNO&quot;)==0?'&lt;font color=red&gt;（OK）&lt;/font&gt;':&quot;已检：&quot;+&quot;&lt;font color=red&gt;&quot;+$object.val(&quot;CHECKEDNO&quot;)+&quot;&lt;/font&gt;&quot;+&quot;/总数：&quot;+&quot;&lt;font color=blue&gt;&quot;+$object.val(&quot;ALLITEMNO&quot;)+&quot;&lt;/font&gt;&quot;"></div></div>
   </div></div>
   </div>
  <hr xid="hr2" style="padding-top:0px;margin:7px 0px 7px 0px;"></hr>
  </li></ul> </div></div></div>
   </div></div></div>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="签收成功！" style="top:44px;left:9px;"></span></div>