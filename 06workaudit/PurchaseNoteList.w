<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="id" onCustomRefresh="data1CustomRefresh">
   <column label="" name="id" type="Integer" xid="xid1"></column>
   <column label="" name="sponsorname" type="String" xid="xid2"></column>
   <column label="" name="starttime" type="DateTime" xid="xid3"></column>
   <column label="" name="tokennodename" type="String" xid="xid4"></column>
   <column label="" name="title" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C70DE0DA6F000001F9F684D01CC01997" style="bottom: 0px; top: 0px;"><div component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2" class="x-scroll">
   <div class="x-content-center x-pull-down container" xid="div28">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i9"></i>
    <span class="x-pull-down-label" xid="span43">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div26">
    <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list8" data="data1" autoLoad="true">
     <ul class="x-list-template x-min-height list-group" xid="listTemplateUl8" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
      <li xid="li8" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li2" style="padding:0px 5px 0px 5px;">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
        <div class="x-col x-col-80" xid="col23" style="margin-bottom:5px;" bind-click="massageClick">
         <div xid="div25" style="width:100%;float:left;margin-bottom:10px;">
          <span xid="span41" style="float:left;width:60px;margin-right:10px;color:#000000;font-weight:bold;" bind-text="ref('sponsorname')"></span>
          <span xid="span42" style="float:left;color:#000000;" bind-text="ref('tokennodename')"></span>
          <span xid="span40" style="float:right;color:#2fa4e7;" bind-text="ref('starttime')"></span></div> 
         <div xid="div24" style="width:100%;float:left;">
          <span xid="span38" style="width:100%;word-wrap:break-word;color:#000000;" bind-text="ref('title')"></span></div> </div> 
        <div class="x-col x-col-fixed" xid="col24" style="width:auto;">
         <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button10" icon="img:$UI/emp_app/images/pass.png|" onClick="passClick">
          <i xid="i10"></i>
          <img src="$UI/emp_app/images/pass.png" xid="image6" style="width:50px;"></img>
          <span xid="span39"></span></a> </div> </div> </li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div27">
    <span class="x-pull-up-label" xid="span44">加载更多...</span></div> </div></div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"></span></div>