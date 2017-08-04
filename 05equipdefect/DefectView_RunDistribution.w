<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:495px;top:129px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="codeid">
  <column label="专业名称" name="codename" type="String" xid="xid2"></column>
  <column label="专业id" name="codeid" type="String" xid="xid9"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data2" idColumn="codeid"><column label="检修班组ID" name="codeid" type="String" xid="xid3"></column>
  <column label="检修班组名称" name="codename" type="String" xid="xid4"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data3" idColumn="codeid"><column label="检修负责人ID" name="codeid" type="String" xid="xid5"></column>
  <column label="检修负责人" name="codename" type="String" xid="xid6"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="filesuffixname" type="String" xid="xid6"></column>
  <column name="originalname" type="String" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data5" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid10"></column>
  <column label="缺陷等级" name="grade" type="String" xid="xid1"></column>
  <column label="检修专业" name="major" type="String" xid="xid11"></column>
  <column label="检修班组" name="team" type="String" xid="xid12"></column>
  <data xid="default1">[{&quot;ID&quot;:&quot;1&quot;}]</data>
  <column label="检修负责人" name="name" type="String" xid="xid13"></column>
  <column label="退回原因" name="back" type="String" xid="xid8"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data6" idColumn="codeid"><column label="等级id" name="codeid" type="String" xid="xid14"></column>
  <column label="等级名称" name="codename" type="String" xid="xid15"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#f0f3f4;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar">
   <div xid="left1">
    </div> 
   <div class="x-titlebar-title flex2" xid="title1">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output" style="text-align:center;color:#FFFFFF;font-size:large;height:44px;margin-top:-10px;width:375px;"></div></div> 
   <div xid="right1"></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button2" icon="icon-android-close" onClick="button2Click">
   <i xid="i7" class="icon-android-close"></i>
   <span xid="span7"></span></a></div></div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-25" xid="col2" bind-text="'所属机组：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;border-radius:5px  0 0 0;border-style:solid none solid solid;"></div>
   <div class="x-col" xid="col3" style="border-style:solid inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-radius:0  5px 0 0;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" readonly="true" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25" xid="col5" bind-text="'设备名称：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col6" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25" xid="col8" bind-text="'kks编码：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col9" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col11" bind-text="'缺陷部位：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col12" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input4" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25" xid="col14" bind-text="'缺陷等级：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col15" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input5" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-25" xid="col17" bind-text="'缺陷内容：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col18" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><span xid="span5" style="font-size:16px;margin-left:10px;"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-25" xid="col20" bind-text="'发现人：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col21" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input6" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-25" xid="col22" bind-text="'发现时间：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
   <div class="x-col" xid="col24" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input7" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div></div>
  <div xid="div3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data4" autoLoad="true">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="float:left;width:25%;" bind-click="row14Click">
   <div class="x-col" xid="col19"><i xid="i5" style="color:green;font-size:50px;" bind-css="$object.val(&quot;filesuffixname&quot;)=='JPG'?'fa fa-photo':$object.val(&quot;filesuffixname&quot;)=='MP4'?'fa fa-video-camera':'fa fa-volume-up'"></i></div>
   </div></li></ul> </div></div>
  </div>
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col1" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" xid="button1" style="width:90%;" onClick="button1Click" label="缺陷分配">
   <i xid="i1"></i>
   <span xid="span1">缺陷分配</span></a></div>
   </div></div></div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="popOver1">
   <div class="x-popOver-overlay" xid="div1" style="width:100%;"></div>
   <div class="x-popOver-content" xid="div2" style="width:90%;" align="center"><div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel2">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[提示]]></h4></div> 
   <div class="panel-body" xid="body1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit4">
   <label class="x-label" xid="label4"><![CDATA[缺陷等级：]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" bind-ref="data5.ref('grade')" bind-options="data6" bind-optionsLabel="codename" bind-optionsValue="codeid" bind-optionsCaption="请选择..."></select></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[检修专业：]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select6" bind-options="data1" optionsAutoLoad="true" bind-optionsCaption="请选择..." bind-ref="data5.ref('major')" bind-optionsLabel="codename" bind-optionsValue="codeid"></select></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[检修班组：]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select2" bind-options="data2" bind-optionsValue="codeid" bind-ref="data5.ref('team')" bind-optionsCaption="请选择..." bind-optionsLabel="codename"></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col23"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[检修负责人：]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select3" bind-options="data3" bind-optionsValue="codeid" bind-ref="data5.ref('name')" bind-optionsCaption="请选择..." bind-optionsLabel="codename"></select></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="height:120px;">
   <div class="x-col" xid="col25" style="height:120px;"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit5" style="height:120px;">
   <label class="x-label" xid="label5"><![CDATA[退回原因：]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea1" bind-ref="data5.ref('back')" style="height:120px;"></textarea></div></div>
   </div></div>
   <div class="panel-footer" xid="footer1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col x-col-center" xid="col28"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="退回" xid="button4" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span4">退回</span></a></div>
   <div class="x-col x-col-center" xid="col29"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="确定" xid="button3" onClick="button3Click">
   <i xid="i2"></i>
   <span xid="span2">确定</span></a></div>
   <div class="x-col" xid="col31"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="取消" xid="button5" onClick="button5Click">
   <i xid="i6"></i>
   <span xid="span6">取消</span></a></div></div></div></div></div></div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver2" style="left:21px;top:65px;"></span></div>