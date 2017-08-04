<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog" style="left:13px;top:415px;"></span>
  <div component="$UI/system/components/justep/model/model" style="height:auto;left:57px;top:68px;" onLoad="model1Load">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="userData" idColumn="fID" autoNew="false" confirmRefresh="false">
   <column label="fID" name="fID" type="Integer" xid="default1"></column>
   <column label="username" name="username" type="String" xid="default1"></column>
   <column label="userpass" name="password" type="String" xid="default2"></column>
   </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="CUSTOM8"><column name="CUSTOM8" type="String" xid="xid1"></column></div></div>     
<div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1"  swipe="false" >
   <div class="x-contents-content" xid="login">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col7" style="text-align:center;color:#FFFFFF;margin-top:80px;font-size:18px;font-weight:normal;" bind-text="'中海福建燃气发电有限公司'"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4" bind-text="'安全生产智能管理系统'" style="text-align:center;color:#FF8000;margin-top:10px;font-size:25px;font-weight:bolder;"></div>
   </div><div class="form-vertical" component="$UI/system/components/bootstrap/form/form" xid="form1" style="height:108px;margin-top:50px;">
     <div xid="div12" class="form-group" style="width:95%;margin-right:auto;margin-left:auto;">
      <label xid="label4" class="sr-only">用户名</label>
      <div xid="div14" class="input-group" style="margin-bottom:30px;opacity:0.6;">
       <div xid="div15" class="input-group-addon">
        <span class="glyphicon glyphicon-user" xid="span3"></span></div> 
       <input component="$UI/system/components/justep/input/input" class="form-control" xid="username" placeHolder="请输入用户名" dataType="String" min="js:new Date()" bind-focus="usernameFocus"/></div> </div> 
     <div xid="div13" class="form-group" style="margin-right:auto;margin-left:auto;width:95%;">
      <label xid="label5" class="sr-only">密码</label>
      <div xid="div16" class="input-group" style="opacity:0.6;">
       <div xid="div17" class="input-group-addon">
        <span class="glyphicon glyphicon-edit" xid="span4"></span></div> 
       <input component="$UI/system/components/justep/input/password" class="form-control" xid="password" placeHolder="请输入密码" bind-focus="usernameFocus"/></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="margin-top:5px;">
   <div class="x-col x-col-50" xid="col1" style="color:#FFFFFF;">
    <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox  choose" xid="chkremember" label="记住密码" style="opacity:0.8;" onChange="chkRememberAutologinChange" name="remember"></span></div> 
   <div class="x-col" xid="col2" style="color:#FFFFFF;">
    <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox  choose" xid="chkautologin" label="自动登录" style="opacity:0.8;" onChange="chkRememberAutologinChange" name="autologin"></span></div> 
   <div class="x-col lang-switch" xid="col9" style="display:none;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link show-langs" label="显示语言选择" xid="showLangBtn" style="padding-left: 0;padding-top: 4px;">
     <i xid="i3"></i>
     <span xid="span5">显示语言选择</span></a> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link hide-langs" label="隐藏语言选择" xid="hideLangBtn" style="padding-left: 0;display:none;padding-top: 4px;">
     <i xid="i11"></i>
     <span xid="span2">隐藏语言选择</span></a> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row login" xid="row4" style="margin-bottom:20px;margin-top:10px;">
     <div class="x-col" xid="col10" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="登  录  系  统" xid="button1" onClick="btnCheckUserLogin" style="font-size:medium;">
       <i xid="i1"></i>
       <span xid="span1">登  录  系  统</span></a> </div> </div> 
    
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="margin-top:80px;">
   <div class="x-col" xid="col5" bind-text="'开发单位：北京奇迹无限软件有限公司'" style="text-align:center;font-size:small;color:#FFFFFF;font-weight:lighter;"></div>
   </div>
  </div><img src="$UI/emp_app/images/15.png" alt="" xid="image2" style="width:100%;height:100%;"></img> 
  </div>
  </div>