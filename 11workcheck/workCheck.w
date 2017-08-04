<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column name="ID" type="String" xid="xid7"></column>
  <column label="考勤结果" name="CHECKRESULT" type="String" xid="xid2"></column>
  <column label="人员ID" name="PERSONNELID" type="String" xid="xid3"></column>
  <column label="考勤点名称" name="CHECKPOINTNAME" type="String" xid="xid4"></column>
  <column label="公司ID" name="COMPANYID" type="String" xid="xid5"></column>
  <column label="考勤类型" name="CHECKTYPE" type="String" xid="xid6"></column>
  <column label="考勤点ID" name="CHECKPOINTID" type="String" xid="xid10"></column>
  <column label="人员名称" name="PERSONNELNAME" type="String" xid="xid8"></column>
  <column label="考勤时间" name="CHECKTIME" type="String" xid="xid9"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="考勤管理">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">考勤管理</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="text-align:center;"><img src="$UI/emp_app/images/justep.png" alt="" xid="image1" style="height:50%;width:50%;" height="50%"></img></div>
   <div class="x-col" xid="col2" style="text-align:center;"><img src="$UI/emp_app/images/nfc.png" alt="" xid="image2" style="height:50%;width:50%;"></img></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="二维码扫描" xid="button1" style="width:70%;" onClick="button2Click">
   <i xid="i1"></i>
   <span xid="span1">二维码扫描</span></a></div>
   <div class="x-col" xid="col5" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="RFID识别" xid="button2" style="width:70%;" onClick="button3Click">
   <i xid="i2"></i>
   <span xid="span2">RFID识别</span></a></div>
   </div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr>
  <div xid="div3"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" dataType="Date" format="yyyy-MM-dd" onChange="input1Change" max="js:new Date()"></input></div><div xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" bind-style="{'backgroundColor':  val(&quot;CHECKRESULT&quot;) =='00' ||  val(&quot;CHECKRESULT&quot;) =='02'?'#FF8800':''}">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("CHECKPOINTNAME")' style="padding-top:0px;font-weight:bold;"></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" bind-style="{'backgroundColor':  val(&quot;CHECKRESULT&quot;) =='00' ||  val(&quot;CHECKRESULT&quot;) =='02'?'#FF8800':''}">
   <div class="x-col x-col-20" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("CHECKTYPE")' bind-html=" val(&quot;CHECKTYPE&quot;)=='01'?'上午签到':val(&quot;CHECKTYPE&quot;)=='02'?'上午签退':val(&quot;CHECKTYPE&quot;)=='03'?'下午签到':val(&quot;CHECKTYPE&quot;)=='04'?'下午签退':''" style="padding-top:0px;"></div></div>
   <div class="x-col x-col-67" xid="col6" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("CHECKTIME")' style="padding-top:0px;"></div></div>
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("CHECKRESULT")' bind-html="val(&quot;CHECKRESULT&quot;)=='00'?'&lt;font color=red&gt;迟到&lt;/font&gt;': val(&quot;CHECKRESULT&quot;)=='01'?'正常': val(&quot;CHECKRESULT&quot;)=='02'?'&lt;font color=red&gt;早退&lt;/font&gt;':''" style="padding-top:0px;"></div></div></div>
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div>
  </div>
   </div></div>