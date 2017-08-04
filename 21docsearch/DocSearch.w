<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:82px;top:255px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <column name="contents" type="String" xid="xid3"></column>
  <column name="cname" type="String" xid="xid4"></column>
  <column name="format" type="String" xid="xid5"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;format&quot;:&quot;pdf&quot;}]</data>
  <column name="modified" type="String" xid="xid6"></column>
  <column name="cdate" type="String" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="文档资料"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
             
          </div>  
          <div class="x-titlebar-title">文档资料</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  
  
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-fixed x-col-center" xid="col2" style="width:auto;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="linear linear-mic" onClick="button1Click">
   <i xid="i1" class="linear linear-mic"></i>
   <span xid="span6"></span></a>
  </div>
   <div class="x-col" xid="col3"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
   <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="searchInput"></input>
   <div class="input-group-btn" xid="div4">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon" xid="SearchBtn" icon="icon-android-search" onClick="SearchBtnClick">
     <i xid="i6" class="icon-android-search"></i>
     <span xid="span10"></span></a> </div> </div></div></div><div xid="div1" style="width:100%;background-color:#000000;height:1px;"></div></div>
   <div class="x-panel-content" xid="content2"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list" data="data1" style="padding:0px 0px 0px 0px;display:none;" autoLoad="true">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl8" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="massage" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li2" style="padding:0px 5px 0px 5px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;" bind-click="row5Click">
   
  <div class="x-col" xid="col1"><i xid="picbtn" bind-css="$object.val(&quot;format&quot;)=='pdf'?'fa fa-file-pdf-o':$object.val(&quot;format&quot;)=='docx'?'fa fa-file-word-o':''" style="font-size:large;color:green;"></i><span xid="span1" style="color:#7187ac;font-size:medium;" bind-html=' $object.val("name")'></span><span xid="span2" style="display:block;" bind-html=' $object.val("contents")'></span><span xid="span3" style="color:#66a766;"><![CDATA[上传者:]]></span><span xid="span4" bind-text="ref('cname')" style="color:#66a766;"></span><span xid="span5" style="color:#66a766;"><![CDATA[上传时间：]]></span><span xid="span7" style="color:#66a766;" bind-text='justep.Date.toString(new Date( justep.String.toInt($object.val("cdate"))), justep.Date.DEFAULT_FORMAT)'><![CDATA[]]></span></div></div></li> </ul> </div></div>
   </div></div>
  <div class="x-panel-bottom" xid="bottom1" height="55">
   <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="../01main/BottomBar.w?from=doc"></div></div></div> 
</div>