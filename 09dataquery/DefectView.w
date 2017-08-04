<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:267px;left:237px;" onParamsReceive="modelParamsReceive" onLoad="modelLoad" onActive="modelActive" onInactive="modelInactive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="mediaData" idColumn="filePath" autoNew="true"><column label="服务器返回的ID" name="ID" type="String" xid="xid1"></column>
  <column label="路径" name="filePath" type="String" xid="xid1"></column>
  <column label="名称" name="fileName" type="String" xid="xid2"></column>
  <column label="时间" name="createDate" type="String" xid="xid3"></column>
  <column label="录音时长" name="Len" type="String" xid="xid4"></column>
  <column label="文件后缀" name="Suffix" type="String" xid="xid8"></column>
  <column label="上传文件ID" name="ID" type="String" xid="xid9"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid31"></column>
  <column label="设备名称" name="equipmentname" type="String" xid="xid32"></column>
  <column label="设备ID" name="objectid" type="String" xid="xid47"></column>
  <column label="机组" name="crew" type="String" xid="xid40"></column>
  <column label="缺陷内容" name="defectlinfo" type="String" xid="xid33"></column>
  <column label="缺陷部位" name="defectposition" type="String" xid="xid34"></column>
  <column label="等级" name="grade" type="String" xid="xid41"></column>
  <column label="专业" name="major" type="String" xid="xid42"></column>
  <column label="缺陷状态" name="recordstatus" type="String" xid="xid51"></column>
  <column label="报告人" name="reportername" type="String" xid="xid52"></column>
  <column label="报告日期" name="recorddate" type="String" xid="xid53"></column>
  <column name="recordid" type="String" xid="xid48"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="crew" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid35"></column>
  <data xid="default2">[]</data>
  <column label="机组名称" name="codename" type="String" xid="xid43"></column>
  <column label="编号" name="codeid" type="String" xid="xid36"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="grade" idColumn="ID"><column name="ID" type="String" xid="xid37"></column>
  <data xid="default3">[]</data>
  <column label="等级名称" name="codename" type="String" xid="xid44"></column>
  <column label="等级编码" name="codeid" type="String" xid="xid38"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="major" idColumn="ID"><column name="ID" type="String" xid="xid39"></column>
  <data xid="default4">[]</data>
  <column label="专业名称" name="codename" type="String" xid="xid45"></column>
  <column label="专业编码" name="codeid" type="String" xid="xid46"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="filesuffixname" type="String" xid="xid6"></column>
  <column name="originalname" type="String" xid="xid7"></column></div>
  </div>
      <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="record" opacity="0.9">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="height:332px;width:250px;" align="center"><div xid="div5" align="center" style="padding:15px 15px 15px 15px;"><img src="$UI/emp_app/images/record.png" alt="" xid="image1" style="width:100%;"></img></div>
  <div xid="div7" style="padding:15px 15px 15px 15px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="recordTime" style="color:#FF0000;font-weight:bold;font-size:x-large;"></div></div>
  <div xid="div8" class="center-block" align="center" style="padding:20px 20px 20px 20px;"><img alt="" xid="image2" style="width:75px;" bind-click="image2Click" src="$UI/emp_app/images/stop.png"></img></div></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="缺陷信息">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon scanner" label="button" xid="button2" icon="linear linear-chevronupcircle" onClick="button2Click" style="display:none;">
   <i xid="i6" class="linear linear-chevronupcircle"></i>
   <span xid="span9"></span></a></div>
   <div class="x-titlebar-title" xid="title1">缺陷信息</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i4" class="icon-android-close"></i>
   <span xid="span8"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25 x-col-center" xid="col5" style="text-align:center;"><span xid="span1"><![CDATA[设备名称：]]></span></div>
   <div class="x-col" xid="col6"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
    <input class="form-control" component="$UI/system/components/justep/input/input" xid="input2" autoComplete="false" placeHolder="输入三个或者三个以上文字" bind-ref="data2.ref('equipmentname')"></input>
  <div class="input-group-btn" xid="layoutWizard1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon" xid="button4" icon="icon-search" onClick="button4Click">
    <i xid="i8" class="icon-search"></i>
    <span xid="span11"></span></a> </div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25 x-col-center" xid="col8" style="text-align:center;"><span xid="span2"><![CDATA[机组：]]></span>
  </div>
   <div class="x-col" xid="col9"><select component="$UI/system/components/justep/select/select" class="form-control" xid="select2" bind-ref="data2.ref('crew')" bind-options="crew" bind-optionsValue="codename" bind-optionsLabel="codename"></select></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25 x-col-center" xid="col11" style="text-align:center;"><span xid="span3"><![CDATA[缺陷部位：]]></span></div>
   <div class="x-col" xid="col12"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-ref="data2.ref('defectposition')"></input></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="height:110px;">
   <div class="x-col x-col-25 x-col-center" xid="col14" style="text-align:center;"><span xid="span4"><![CDATA[缺陷内容：]]></span></div>
   <div class="x-col" xid="col15"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea2" bind-ref="data2.ref('defectlinfo')" style="height:100px;"></textarea></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-25 x-col-center" xid="col17" style="text-align:center;"><span xid="span5"><![CDATA[缺陷等级*：]]></span></div>
   <div class="x-col" xid="col18"><select component="$UI/system/components/justep/select/select" class="form-control" xid="select1" bind-ref="data2.ref('grade')" bind-options="grade" bind-optionsValue="codename" bind-optionsLabel="codename"></select></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   
   <div class="x-col x-col-25 x-col-center" xid="col20" style="text-align:center;"><span xid="span6"><![CDATA[检修专业：]]></span></div><div class="x-col" xid="col21"><select component="$UI/system/components/justep/select/select" class="form-control" xid="select3" bind-ref="data2.ref('major')" bind-options="major" bind-optionsValue="codename" bind-optionsLabel="codename"></select></div>
   </div></div></div>
  </div>  <div xid="div3" class="div3" style="display:none;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data4">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="float:left;width:25%;" bind-click="row10Click">
   <div class="x-col" xid="col2"><i xid="i5" style="color:green;font-size:50px;" bind-css="$object.val(&quot;filesuffixname&quot;)=='JPG'?'fa fa-photo':$object.val(&quot;filesuffixname&quot;)=='MP4'?'fa fa-video-camera':'fa fa-volume-up'"></i></div>
   </div></li></ul> </div></div><div xid="div6" class="div6" style="display:none;"><div xid="div11" style="float:left;width:25%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="width:144px;">
   <div class="x-col x-col-33" xid="col1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="照相" xid="photo" onClick="photoClick">
   <i xid="i1"></i>
   <span xid="span1">照相</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="width:144px;">
   <div class="x-col x-col-33" xid="col6"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="录像" xid="video" onClick="videoClick">
   <i xid="i2"></i>
   <span xid="span2">录像</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="width:144px;">
   <div class="x-col x-col-33" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="录音" xid="audio" onClick="audioClick">
   <i xid="i3"></i>
   <span xid="span3">录音</span></a></div>
   </div></div>
  <div xid="div12" style="float:right;width:73%;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="mediaData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row x-row8" xid="row8">
   <div class="x-col x-col-80" xid="col20" bind-click="playClick"><div component="$UI/system/components/justep/output/output" class="x-output" xid="filename" bind-ref="ref('fileName')" style="font-size:16px;"></div></div>
   <div class="x-col x-col-fixed" xid="col21" style="text-align:center;margin-top:10px;width:auto;"><i xid="dele" style="color:red;font-size:20px;" class="fa fa-trash" bind-click="deleClick"></i></div>
   </div>
  </li></ul> </div></div>
  </div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"><div xid="div15" style="width:100%;display:none;" class="div15"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col23" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="提交" xid="submitbtn" style="width:90%;" onClick="submitbtnClick">
   <i xid="i7"></i>
   <span xid="span7">提交</span></a></div>
   </div></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/emp_app/05equipdefect/EquipMentNames.w" showTitle="true" title="设备名称" onReceive="windowDialog1Receive" status="normal" width="80%" height="80%" style="top:75px;left:1px;"></span>
  </div>