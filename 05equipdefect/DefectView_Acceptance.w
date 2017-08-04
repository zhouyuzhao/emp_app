<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:85px;top:92px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="filesuffixname" type="String" xid="xid6"></column>
  <column name="originalname" type="String" xid="xid7"></column></div> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="ID"><column name="ID" type="String" xid="xid1"></column>
  <column name="value" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;ID&quot;:&quot;1&quot;,&quot;value&quot;:&quot;false&quot;}]</data></div></div>  
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
   <div xid="div3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data1" autoLoad="true">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="float:left;width:25%;" bind-click="row14Click">
   <div class="x-col" xid="col19"><i xid="i5" style="color:green;font-size:50px;" bind-css="$object.val(&quot;filesuffixname&quot;)=='JPG'?'fa fa-photo':$object.val(&quot;filesuffixname&quot;)=='MP4'?'fa fa-video-camera':'fa fa-volume-up'"></i></div>
   </div></li></ul> </div></div>
  </div>
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col1" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" xid="button1" style="width:90%;" onClick="button1Click" label="缺陷验收">
   <i xid="i1"></i>
   <span xid="span1">缺陷验收</span></a></div>
   </div></div></div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="popOver1">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="width:90%;" align="center"><div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel2">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[是否停机待验收]]></h4>
  </div> 
   <div class="panel-body" xid="body1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col x-col-50" xid="col1" style="text-align:left;"><span xid="span9"><![CDATA[是否停机待验收：]]></span></div>
   <div class="x-col" xid="col28" style="text-align:left;"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio1" label="是" name="accepttance" checkedValue="true" bind-ref="data2.ref('value')"></span>
  </div>
  <div class="x-col" xid="col30" style="text-align:left;"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio2" label="否" name="accepttance" checkedValue="false" checked="true" bind-ref="data2.ref('value')"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="height:120px;">
   <div class="x-col x-col-33" xid="col13" style="text-align:left;height:120px;"><span xid="span10"><![CDATA[退回原因：]]></span></div>
   <div class="x-col" xid="col29" style="height:120px;"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea2" style="height:120px;"></textarea></div></div></div>
   <div class="panel-footer" xid="footer1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col25"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="退回" xid="button4" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span4">退回</span></a></div>
   <div class="x-col" xid="col26"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="确认" xid="button5" onClick="button5Click">
   <i xid="i6"></i>
   <span xid="span6">确认</span></a></div>
   <div class="x-col" xid="col27"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="取消" xid="button6" onClick="button6Click">
   <i xid="i8"></i>
   <span xid="span8">取消</span></a></div></div></div></div></div></div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="left:44px;top:57px;"></span></div>