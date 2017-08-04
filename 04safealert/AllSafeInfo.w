<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:36px;top:210px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" onCustomRefresh="data1CustomRefresh" idColumn="ID"><column name="ID" type="String" xid="xid1"></column>
  <column name="AREANAME" type="String" xid="xid2"></column>
  <column name="AREACODE" type="String" xid="xid3"></column>
  <column name="DOCNUM" type="String" xid="xid4"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="安全提醒"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
             
          </div>  
          <div class="x-titlebar-title">安全提醒</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div xid="div1"><a component="$UI/system/components/justep/button/button" class="btn x-orange info" label="公共安全提醒信息" xid="button1" onClick="button1Click" style="width:100%;height:50px;">
   <i xid="i1"></i>
   <span xid="span1">公共安全提醒信息</span></a></div><div xid="div11">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
    <ul class="x-list-template" xid="listTemplateUl1">
     <li xid="li1">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row" style="float:left;width:40%;margin-left:25px;margin-top:10px;" bind-click="rowClick">
       <div class="x-col" xid="col1" style="border-style:solid solid solid solid;border-width:thin thin thin thin;border-radius: 10px;box-shadow: 5px 5px 5px #888888;">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref('AREACODE')" style="text-align:center;font-family:微软雅黑;font-weight:bold;color:#000000;font-size:small;"></div>
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref="ref('AREANAME')" style="text-align:center;font-family:微软雅黑;color:#000000;margin-bottom:10px;"></div>
        <span xid="span4" style="margin-left:15px;font-size:medium;"><![CDATA[资料数：]]></span><span xid="span3" bind-text="ref('DOCNUM')" style="font-size:medium;color:#FF0000;font-weight:bold;"></span><span xid="span2" style="font-size:medium;"><![CDATA[项]]></span></div> </div> </li> </ul> </div> </div>
  </div>
  <div class="x-panel-bottom" xid="bottom1" height="55">
   <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="../01main/BottomBar.w"></div></div></div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/emp_app/04safealert/safe.w"></span></div>