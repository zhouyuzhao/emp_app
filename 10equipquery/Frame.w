<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="KKS编码" name="oldcode" type="String" xid="xid2"></column>
  <column label="所属公司" name="companyid" type="String" xid="xid3"></column>
  <column label="设备名称" name="equipmentname" type="String" xid="xid4"></column>
  <column label="规格型号" name="model" type="String" xid="xid5"></column>
  <column label="运行机组" name="equipgroupname" type="String" xid="xid6"></column>
  <column label="制造厂商" name="manufacture" type="String" xid="xid7"></column>
  <column label="分类名称" name="classname" type="String" xid="xid8"></column>
  <column label="技术对象状态颜色" name="techselfdef1" type="String" xid="xid9"></column>
  <column label="设备ID" name="objectid" type="String" xid="xid10"></column>
  <column label="技术状况名称" name="techobjectstatusname" type="String" xid="xid11"></column>
  <column label="设备编码" name="equipmentcode" type="String" xid="xid12"></column>
  <column label="国家" name="country" type="String" xid="xid13"></column>
  <column label="检修专业" name="plangroupname" type="String" xid="xid14"></column>
  <data xid="default1">[]</data>
  <column label="设备类型" name="equipmenttypename" type="String" xid="xid19"></column>
  <column label="重要程度" name="abcleveltypename" type="String" xid="xid20"></column>
  <column label="投产日期" name="beginrundate" type="String" xid="xid21"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid15"></column>
  <column name="CODENAME" type="String" xid="xid16"></column>
  <column name="GRAPHDOCNAME" type="String" xid="xid17"></column>
  <column name="SAVEDFILENAME" type="String" xid="xid18"></column></div></div>
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2" title="设备综合信息">
   <div class="x-titlebar-left" xid="left2"></div>
   <div class="x-titlebar-title" xid="title2">设备综合信息</div>
   <div class="x-titlebar-right reverse" xid="right2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-label" label="基本信息" xid="button2" target="content3">
   <i xid="i2"></i>
   <span xid="span2">基本信息</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-label" label="巡检数据" xid="button3" target="content4">
   <i xid="i3"></i>
   <span xid="span3">巡检数据</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-label" label="缺陷记录" xid="button4" target="content5">
   <i xid="i4"></i>
   <span xid="span4">缺陷记录</span></a></div></div>
   <div class="x-panel-content" xid="content2"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content3"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[设备名称：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-text=' ' bind-ref="data1.ref('equipmentname')" style="font-weight:bold;"></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[KKS编码：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-text=' ' bind-ref="data1.ref('oldcode')"></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col9"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[所属机组：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref="data1.ref('equipgroupname')"></div></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col12"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
   <label class="x-label" xid="label4"><![CDATA[设备类型：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref="data1.ref('equipmenttypename')"></div></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col3"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit9">
   <label class="x-label" xid="label9"><![CDATA[重要程度：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output9" bind-ref="data1.ref('abcleveltypename')"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col15"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label5"><![CDATA[规格型号：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref="data1.ref('model')"></div></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col16"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[生产国别：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref="data1.ref('country')"></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit10">
   <label class="x-label" xid="label10"><![CDATA[制造厂商：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output10" bind-ref="data1.ref('manufacture')"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col11"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11">
   <label class="x-label" xid="label11"><![CDATA[投产日期：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output11" bind-ref="data1.ref('beginrundate')" style="color:#FF0000;"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col22"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8">
   <label class="x-label" xid="label8"><![CDATA[检修专业：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output8" bind-ref="data1.ref('plangroupname')"></div></div>
  </div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col19"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label7"><![CDATA[技术状况：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-html='"&lt;font color="+ $model.data1.val("techselfdef1")+"&gt;"+$model.data1.val("techobjectstatusname")+"&lt;/font&gt;"'></div></div></div>
   </div>
  
  </div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><div xid="div2" style="width:100%;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;height:190px;" class="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data2">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" bind-click="row9Click" style="float:left;width:25%;height:120px;">
   <div class="x-col" xid="col1"><i xid="picbtn" style="color:green;font-size:50px;" bind-css="$object.val(&quot;CODENAME&quot;)=='PDF'?'fa fa-file-pdf-o': $object.val(&quot;CODENAME&quot;)=='DOCX'?'fa fa-file-word-o':$object.val(&quot;CODENAME&quot;)=='JPG'?'fa fa-photo':''"></i>
  <span xid="span5" style="display:block;" bind-text="ref('GRAPHDOCNAME')"></span></div>
   </div>
  </li></ul> </div></div>
  </div>
  <div class="x-contents-content" xid="content4" onActive="content4Active"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer4"></div></div>
  <div class="x-contents-content" xid="content5" onActive="content5Active"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer5"></div></div></div></div>
   </div></div>
   </div></div>