<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:36px;top:258px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID" onCustomRefresh="data1CustomRefresh" autoNew="false" confirmDelete="false">
   <column label="" name="ID" type="String" xid="xid1"></column>
  <column label="" name="PUBDATE" type="String" xid="xid3"></column>
  <column label="" name="TITLE" type="String" xid="xid5"></column>
  <column isCalculate="true" name="NUMBER" type="Integer" xid="xid2"></column>
  <column name="TYPE" type="String" xid="xid4"></column>
  <column name="CONTENT" type="String" xid="xid6"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="通知公告"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
             
          </div>  
          <div class="x-titlebar-title">通知公告</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C716819C4B400001BAC88EB0D4E21C08" style="bottom: 0px;"><div component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView4" class="x-scroll">
   <div class="x-content-center x-pull-down container" xid="div28">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i9"></i>
    <span class="x-pull-down-label" xid="span43">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div26">
    <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list" data="data1">
     <ul class="x-list-template x-min-height list-group" xid="listTemplateUl8" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
      <li xid="massage" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li2" style="padding:0px 5px 0px 5px;" bind-click="massageClick">
       <div xid="div1"></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
        <div class="x-col" xid="col1" style="margin-top:10px;">
         <div xid="div25" style="width:100%;float:left;margin-bottom:10px;">
          <span xid="span41" style="float:left;width:60px;margin-right:10px;color:#FF0000;font-weight:bold;font-size:medium;" bind-text='ref("NUMBER")'></span><span xid="span42" style="float:left;color:#000000;font-size:medium;height:auto;width:230px;" bind-text="ref('TITLE')"></span>
          <span xid="span40" style="float:right;color:#2fa4e7;font-size:medium;height:100%;" bind-text="ref('PUBDATE')"></span>
  </div> 
         </div> 
        </div> </li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div27">
    <span class="x-pull-up-label" xid="span44">加载更多...</span></div> </div></div>
  <div class="x-panel-bottom" xid="bottom1" height="55">
   <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="../01main/BottomBar.w?from=notice"></div></div></div> 
</div>