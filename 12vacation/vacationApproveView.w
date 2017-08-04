<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="top:73px;left:116px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="STATUS"><column label="评审内容" name="STATUS" type="String" xid="xid2"></column>
  <column label="状态" name="USERNAME" type="String" xid="xid1"></column>
  <column name="STATUS" type="String" xid="xid1"></column>
  <column name="CONTENT" type="String" xid="xid2"></column>
  <column name="SERIALNO" type="String" xid="xid3"></column>
  <column label="ID" name="USERID" type="String" xid="xid4"></column>
  <column label="审批人" name="USERNAME" type="String" xid="xid5"></column>
  <column label="时间" name="TIME" type="String" xid="xid6"></column>
  <column label="是否通过" name="ISPASSING" type="String" xid="xid7"></column></div></div>
   <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="demoPopOver" opacity="0.8" direction="right-top" position="center" style="background-color:black;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="width:80%;margin-right:10%;margin-left:10%;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="height:60px;border-radius:10px  10px 0 0;background-color:#2fa4e7;">
     <div class="x-col" xid="col10" bind-text="'退回原因'" style="text-align:center;color:#FFFFFF;line-height:30px;font-size:18px;"></div></div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:#FFFFFF;height:150px;padding-top:5px;">
     <div class="x-col" xid="col1">
      <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea1" style="height:137px;"></textarea></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:#FFFFFF;height:60px;padding-top:8px;">
     <div class="x-col" xid="col16" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="返回" xid="returnBtn" onClick="returnBtnClick">
       <i xid="i4"></i>
       <span xid="span4">返回</span></a> </div> 
     <div class="x-col" xid="col13" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="确定" xid="enterBtn" onClick="enterBtnClick">
       <i xid="i4"></i>
       <span xid="span4">确定</span></a> </div> </div> 
  <div xid="InfoBox" style="width:70%;margin-right:15%;margin-left:15%;height:120px;position:absolute;display:none;z-index:99;top:75px;border-radius:5px;background-color:#ccc;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="height:50px;">
    <div class="x-col" xid="col25" style="text-align:center;font-size:16px;color:#000000;" bind-text='"温馨提醒"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="height:40px;font-size:20;">
    <div class="x-col" xid="col25" style="text-align:center;color:#000000;font-size:14px;" bind-text='"请填写退回原因!"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
    <div class="x-col" xid="col28" style="text-align:center;">
     <a component="$UI/system/components/justep/button/button" class="btn x-green" label="OK" xid="OkBtn" style="height:30px;text-align:center;line-height:15px;" onClick="OkBtnClick">
      <i xid="i6"></i>
      <span xid="span13">OK</span></a> </div> </div> </div></div> </div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="请假申请单审批">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">请假申请单审批</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button2" onClick="button2Click" icon="linear linear-fileadd">
   <i xid="i5" class="linear linear-fileadd"></i>
   <span xid="span5"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><label xid="label1" style="color:#FF8000;"><![CDATA[申请人个人信息:]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><label xid="label4"><![CDATA[]]></label></div>
   <div class="x-col" xid="col2"><label xid="label5"><![CDATA[]]></label></div>
   </div>
  </div>
  <div xid="div3"><label xid="label2" style="color:#FF8000;"><![CDATA[申请人请假信息:]]></label>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><label xid="label3"><![CDATA[开始时间:]]></label></div>
   <div class="x-col" xid="col6"><label xid="label7"><![CDATA[]]></label></div>
   <div class="x-col" xid="col8"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col9"><label xid="label8"><![CDATA[结束时间:]]></label></div>
   <div class="x-col" xid="col12"><label xid="label9"><![CDATA[]]></label></div>
   <div class="x-col" xid="col14"><label xid="label10"><![CDATA[共计:]]></label>
  <label xid="label11"><![CDATA[]]></label>
  <label xid="label12"><![CDATA[天]]></label></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-33" xid="col15"><label xid="label13"><![CDATA[请假类型:]]></label></div>
   <div class="x-col" xid="col17"><label xid="label14"><![CDATA[]]></label></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-33" xid="col19"><label xid="label15"><![CDATA[请假备注:]]></label></div>
   <div class="x-col" xid="col21"><label xid="label16"><![CDATA[]]></label></div>
   </div></div><div xid="div5"><label xid="label21" style="color:#FF8000;"><![CDATA[审批意见:]]></label>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" bind-style="{'backgroundColor':  val(&quot;ISPASSING&quot;) =='0'?'#AAAAAA':''}">
   <div class="x-col x-col-25 approve" xid="col23"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("USERNAME")'></div></div>
   <div class="x-col x-col-50 approve" xid="col24" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("TIME")'></div></div>
   <div class="x-col approve" xid="col26"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("ISPASSING")' bind-html=" val(&quot;ISPASSING&quot;) =='1'?'通过':'退回'"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" bind-style="{'backgroundColor':  val(&quot;ISPASSING&quot;) =='0'?'#AAAAAA':''}">
   <div class="x-col approve" xid="col20"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label23"><![CDATA[评审意见:]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='ref("CONTENT")'></div></div></div>
   </div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"><div xid="div4" class="div4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col4" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" xid="goBtn" label="退回" style="width:80%;" onClick="goBtnClick">
   <i xid="i1"></i>
   <span xid="span1">退回</span></a></div>
   <div class="x-col" xid="col7" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" xid="passBtn" label="通过" style="width:80%;" onClick="passBtnClick">
   <i xid="i2"></i>
   <span xid="span2">通过</span></a></div>
   <div class="x-col" xid="col11" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="终止" xid="button1" style="width:80%;" onClick="button1Click">
   <i xid="i3"></i>
   <span xid="span3">终止</span></a></div></div></div></div></div></div>