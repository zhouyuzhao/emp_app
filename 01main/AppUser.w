<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:305px;left:65px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="模块ID" name="id" type="String" xid="xid1"></column>
  <column label="模块名称" name="module" type="String" xid="xid2"></column>
  <column label="是否选中" name="is" type="Integer" xid="xid3"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;module&quot;:&quot;设备巡检&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;2&quot;,&quot;module&quot;:&quot;人员定位&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;3&quot;,&quot;module&quot;:&quot;安全提醒&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;4&quot;,&quot;module&quot;:&quot;缺陷管理&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;5&quot;,&quot;module&quot;:&quot;移动审批&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;6&quot;,&quot;module&quot;:&quot;视频监控&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;7&quot;,&quot;module&quot;:&quot;机组数据&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;8&quot;,&quot;module&quot;:&quot;综合查询&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;9&quot;,&quot;module&quot;:&quot;设备信息&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;10&quot;,&quot;module&quot;:&quot;考勤管理&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;11&quot;,&quot;module&quot;:&quot;请假管理&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;12&quot;,&quot;module&quot;:&quot;用车管理&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;15&quot;,&quot;module&quot;:&quot;应急处置&quot;,&quot;is&quot;:1},{&quot;id&quot;:&quot;16&quot;,&quot;module&quot;:&quot;记事查询&quot;,&quot;is&quot;:1}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#f0f3f4;"> 
      <div class="x-panel-top" xid="top2"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="个人信息"
          class="x-titlebar" xid="titleBar">
          <div class="x-titlebar-left"> 
             
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-only-icon" xid="button2" icon="linear linear-clouddownload" onClick="button2Click">
   <i xid="i3" class="linear linear-clouddownload"></i>
   <span xid="span9"></span></a></div>  
          <div class="x-titlebar-title">个人信息</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="backBtnClick" xid="backBtn" style="margin-bottom:10px;"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="width:96%;margin-right:2%;margin-left:2%;margin-top:20px;border:1px solid green;border-radius:5px;">
   <div class="x-col x-col-25" xid="col2" style="text-align:left;"><img src="../images/person.png" alt="" xid="image1" style="height:90px;width:90px;"></img></div>
   <div class="x-col" xid="col3" style="padding-top:10px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col4"><span xid="name" style="font-size:medium;color:#FF0000;"></span></div>
   <div class="x-col" xid="col7"><span xid="section" style="font-size:medium;margin-right:30px;"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" dataType="Date" format="yyyy-MM-dd" bind-text=" justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT)" style="float:left;font-size:medium;width:129px;"></div></div>
   <div class="x-col" xid="col11"><span xid="date" style="float:left;margin-top:10px;font-size:medium;"></span></div></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col9" bind-text='"修改用户登录密码"' style="padding-top:35px;font-size:16px;"></div><div class="x-col" xid="col6" style="text-align:right;padding-top:20px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="alterBtn" icon="icon-chevron-right" style="font-weight:bolder;height:38px;font-size:medium;" onClick="alterBtnClick">
   <i xid="i1" class="icon-chevron-right"></i>
   <span xid="span6"></span></a></div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="height:66px;">
   <div class="x-col" xid="col1" style="text-align:right;padding-top:20px;">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label60" xid="labelEdit1" style="height:34px;">
   <label class="x-label" xid="label1" style="text-align:left;font-size:16px;"><![CDATA[与手机设备标识绑定]]></label>
   <span component="$UI/system/components/justep/button/toggle" class="x-toggle x-edit" xid="bindtoggle" style="font-size:large;" onChange="bindtoggleChange"></span></div></div> </div>
  
  <hr xid="hr2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-center" xid="col8">
  
  <div xid="div8"><span xid="span1"><![CDATA[当前版本号：]]></span><span xid="span3" style="color:#FF0000;"><![CDATA[]]></span></div></div>
   <div class="x-col x-col-center" xid="col12">
  
  <div xid="div1" class="div1"><span xid="span2"><![CDATA[最新版本号：]]></span><span xid="span4" style="color:#FF00FF;"></span></div></div>
  <div class="x-col x-col-fixed" xid="col13" style="width:auto;">
  <div xid="div2" class="div2" style="display:none;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-only-icon" label="button" xid="button1" icon="linear linear-warning" onClick="button1Click">
   <i xid="i2" class="linear linear-warning"></i>
   <span xid="span5"></span></a></div></div></div></div>
    <div class="x-panel-bottom" xid="bottom1" height="55">
   <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="../01main/BottomBar.w?from=user"></div></div></div> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog2" title="提示" message="您确认要下载更新最新版本！" type="OKCancel" onOK="messageDialog2OK" style="top:50px;left:105px;"></span>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0.8">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content" xid="div5" style="width:90%;" align="center"><div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel2">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[模块选择]]></h4></div> 
   <div class="panel-body" xid="body1" align="left"><span component="$UI/system/components/justep/select/checkboxGroup" class="x-checkbox-group" xid="checkboxGroup1" bind-itemset="data1" bind-itemsetLabel='ref("module")' bind-itemsetValue='ref("id")'></span></div>
   <div class="panel-footer" xid="footer1"><div xid="div9"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col" xid="col30"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="取消" xid="button7" onClick="button7Click" style="width:50%;">
   <i xid="i7"></i>
   <span xid="span7">取消</span></a></div>
   <div class="x-col" xid="col38"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="确定" xid="button8" onClick="button8Click" style="width:50%;">
   <i xid="i8"></i>
   <span xid="span8">确定</span></a></div>
   </div></div></div></div></div></div></div>