<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="top:29px;left:69px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="流转类型:" name="nodetypename" type="String" xid="xid2"></column>
  <column label="处理人:" name="personnelname" type="String" xid="xid3"></column>
  <column label="处理时间:" name="createdate" type="String" xid="xid4"></column>
  <column label="处理意见:" name="viewcontents" type="String" xid="xid5"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column name="ID" type="String" xid="xid6"></column>
  <column name="ORIGINALNAME" type="String" xid="xid7"></column>
  <column name="FILESUFFIXNAME" type="String" xid="xid8"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="发文接收单">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">发文接收单</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="发文详细" xid="button2" target="content3">
   <i xid="i2"></i>
   <span xid="span2">发文详细</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="处理记录" xid="button3" target="content4">
   <i xid="i3"></i>
   <span xid="span3">处理记录</span></a></div></div>
   <div class="x-panel-content" xid="content2"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content3"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><label xid="label2"><![CDATA[处理状态:]]></label>
  </div>
   <div class="x-col" xid="col2"><label xid="label4"><![CDATA[]]></label></div>
   <div class="x-col" xid="col3"><label xid="label5"><![CDATA[发文编号:]]></label></div>
  <div class="x-col" xid="col4"><label xid="label6"><![CDATA[]]></label></div></div>
  <div xid="div3"><label xid="label7" style="color:#FF8000;"><![CDATA[基本信息:]]></label>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25" xid="col5"><label xid="label8"><![CDATA[发文名称:]]></label></div>
   <div class="x-col" xid="col6"><label xid="label9"><![CDATA[]]></label></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col8"><label xid="label10"><![CDATA[发文序号:]]></label></div>
   <div class="x-col" xid="col9"><label xid="label11"><![CDATA[]]></label></div>
   <div class="x-col" xid="col10"><label xid="label12"><![CDATA[发文方式:]]></label></div>
  <div class="x-col" xid="col12"><label xid="label13"><![CDATA[]]></label></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col13"><label xid="label14"><![CDATA[发文类型:]]></label></div>
   <div class="x-col" xid="col14"><label xid="label15"><![CDATA[]]></label></div>
   <div class="x-col" xid="col15"><label xid="label16"><![CDATA[发文部门:]]></label></div>
  <div class="x-col" xid="col16"><label xid="label17"><![CDATA[]]></label></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25" xid="col17"><label xid="label18"><![CDATA[主送单位:]]></label></div>
   <div class="x-col" xid="col18"><label xid="label19"><![CDATA[]]></label></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-25" xid="col21"><label xid="label20"><![CDATA[抄送单位:]]></label></div>
   <div class="x-col" xid="col22"><label xid="label21"><![CDATA[]]></label></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col24"><label xid="label22"><![CDATA[发文人:]]></label></div>
   <div class="x-col" xid="col25"><label xid="label23"><![CDATA[]]></label></div>
   <div class="x-col" xid="col26"><label xid="label24"><![CDATA[发文时间:]]></label></div>
  <div class="x-col" xid="col27"><label xid="label25"><![CDATA[]]></label></div></div></div></div>
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><div xid="div5"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data2">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" bind-click="row12Click" style="width:20%;float:left;">
   <div class="x-col" xid="col19"><i xid="picbtn" style="color:green;font-size:60px;" bind-css="$object.val(&quot;FILESUFFIXNAME&quot;)=='PDF'?'fa fa-file-pdf-o':$object.val(&quot;FILESUFFIXNAME&quot;)=='DOC' || $object.val(&quot;FILESUFFIXNAME&quot;)=='DOCX'?'fa fa-file-word-o':$object.val(&quot;FILESUFFIXNAME&quot;)=='JPG'?'fa fa-photo':$object.val(&quot;FILESUFFIXNAME&quot;)=='PPT'?'fa fa-file-powerpoint-o':$object.val(&quot;FILESUFFIXNAME&quot;)=='TXT'?'fa fa-file-text':$object.val(&quot;FILESUFFIXNAME&quot;)=='PNG'?'fa fa-photo':$object.val(&quot;FILESUFFIXNAME&quot;)=='XLS'?'fa fa-file-excel-o':$object.val(&quot;FILESUFFIXNAME&quot;)=='PPTX'?'fa fa-file-powerpoint-o':$object.val(&quot;FILESUFFIXNAME&quot;)=='XLSX'?'fa fa-file-excel-o':''"></i>
  <span xid="span9" bind-text='val("ORIGINALNAME")'></span></div>
   </div></li></ul> </div></div>
  </div>
  <div class="x-contents-content" xid="content4" onActive="content4Active"><div xid="div4"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col31"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label50" xid="labelEdit2">
   <label class="x-label" xid="label26" bind-text='label("nodetypename")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='ref("nodetypename")'></div></div></div>
   <div class="x-col" xid="col32"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label50" xid="labelEdit3">
   <label class="x-label" xid="label27" bind-text='label("personnelname")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='ref("personnelname")'></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col34"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit4">
   <label class="x-label" xid="label28" bind-text='label("viewcontents")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='ref("viewcontents")'></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col37"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit5">
   <label class="x-label" xid="label29" bind-text='label("createdate")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref='ref("createdate")'></div></div></div>
   </div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></li></ul> </div></div></div></div></div>
   </div></div>
   <div class="x-panel-bottom" xid="bottom1"><div xid="div2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col7" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="已阅" xid="button4" style="width:70%;" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span4">已阅</span></a></div>
   <div class="x-col" xid="col11" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="传阅" xid="button5" style="width:70%;" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span5">传阅</span></a></div>
   </div></div></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0.7">
   <div class="x-popOver-overlay" xid="div6"></div>
   <div class="x-popOver-content" xid="div7" align="center" style="width:90%;"><div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel3">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[传阅]]></h4></div> 
   <div class="panel-body" xid="body1">
  
  <div xid="div8"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col x-col-80" xid="col28"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[传阅人:]]><font color="red">*</font></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea1" readonly="true"></textarea></div></div>
   <div class="x-col x-col-center" xid="col29"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button6" icon="linear linear-book" onClick="button6Click">
   <i xid="i6" class="linear linear-book"></i>
   <span xid="span6"></span></a></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
   <div class="x-col" xid="col33"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit6">
   <label class="x-label" xid="label3"><![CDATA[处理意见:]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea2"></textarea></div></div>
   </div>
  </div></div>
   <div class="panel-footer" xid="footer1"><div xid="div9"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col" xid="col30"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="取消" xid="button7" onClick="button7Click" style="width:50%;">
   <i xid="i7"></i>
   <span xid="span7">取消</span></a></div>
   <div class="x-col" xid="col38"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="确定" xid="button8" onClick="button8Click" style="width:50%;">
   <i xid="i8"></i>
   <span xid="span8">确定</span></a></div>
   </div></div></div></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/emp_app/15send/personnel.w" onReceive="windowDialog1Receive"></span></div>