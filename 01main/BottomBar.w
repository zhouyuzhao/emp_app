<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:6px;top:140px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"/> 
   <span component="$UI/system/components/justep/dialog/dialog" xid="dialog1" style="left:36px;top:47px;"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-portal" xid="mainpanel">
    <div class="x-panel-bottom" xid="bottompanel" height="55">
    <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1" style="height:55px;background-color:#2fa4e7;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="首页" xid="homeBtn" icon="icon-home"  onClick="homeBtnClick">
     <i xid="i1" class="icon-home icon" style="color:#FFFF00;"></i>
     <span xid="span1" style="color:#FFFF00;font-weight:normal;">首页</span></a> 
    
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="通知" xid="noticeBtn" icon="icon-clipboard" onClick="noticeBtnClick">
     <i xid="i3" class="icon icon-clipboard" style="color:#FFFFFF;"></i>
     <span xid="span3" style="color:#FFFFFF;font-weight:normal;">通知</span></a> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="资料" xid="docBtn" icon="icon-ios7-briefcase" onClick="docBtnClick">
     <i xid="i3" class="icon icon-ios7-briefcase" style="color:#FFFFFF;"></i>
     <span xid="span1" style="color:#FFFFFF;font-weight:normal;">资料</span></a> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="我的" xid="userBtn" icon="icon-ios7-contact-outline" onClick="userBtnClick">
     <i xid="i1" class="icon icon-ios7-contact-outline" style="color:#FFFFFF;"></i>
     <span xid="span3" style="color:#FFFFFF;font-weight:normal;">我的</span></a> </div> 
     </div>
   </div>
  
</div>