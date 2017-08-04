<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:284px;top:274px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="videocode" onCustomRefresh="data1CustomRefresh"><column label="视频编号" name="videocode" type="String" xid="xid1"></column>
  <column label="视频名称" name="videoname" type="String" xid="xid2"></column>
  <column label="注册类型" name="safeareaid" type="String" xid="xid3"></column>
  <column label="视频服务地址" name="serveraddress" type="String" xid="xid4"></column>
  <column label="视频服务端口" name="serverport" type="String" xid="xid5"></column>
  <column label="连接用户名" name="username" type="String" xid="xid6"></column>
  <column label="连接用户密码" name="userpassword" type="String" xid="xid7"></column></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog" src="$UI/emp_app/07videomonitor/VideoPlay.w" width="100%" height="100%"></span>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="视频监控"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
             
          </div>  
          <div class="x-titlebar-title">视频监控</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C70FBF439EF000014AAECA001FC5107E" style="bottom: 55px;">
    <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i2"></i>
    <span class="x-pull-down-label" xid="span2">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row x-responsive-md" xid="row2" style="float:left;width:auto;padding-right:8px;padding-left:8px;margin-top:10px;margin-left:10px;" bind-click="row2Click">
   <div class="x-col" xid="col4" style="text-align:center;cursor:auto;width:90px;"><img src="$UI/emp_app/images/camera.png" alt="" xid="image6" style="text-align:center;height:52px;width:50px;"></img>
  <div xid="div5"><span xid="span6" bind-text="ref('videoname')" style="text-align:center;left:50%;"></span></div></div>
   </div></li></ul> </div>
  </div>
   </div></div>
 </div> 
</div>