<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:38px;top:329px;" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="demoPopOver" opacity="0.8" direction="right-top" position="center" style="background-color:black;">
   <div class="x-popOver-overlay" xid="div2"></div>
   <div class="x-popOver-content" xid="div2" style="width:80%;margin-right:10%;margin-left:10%;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="height:60px;border-radius:10px  10px 0 0;background-color:#2fa4e7;">
     <div class="x-col" xid="col13" bind-text="'退回原因'" style="text-align:center;color:#FFFFFF;line-height:30px;font-size:18px;"></div></div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:#FFFFFF;height:150px;padding-top:5px;">
     <div class="x-col" xid="col1">
      <textarea cols="5" rows="5" xid="textarea1" style="width:100%;background-color:#fafbfd;height:140px;"></textarea></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:#FFFFFF;height:60px;padding-top:8px;">
     <div class="x-col" xid="col16" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="返回" xid="returnBtn" onClick="returnBtnClick">
       <i xid="i6"></i>
       <span xid="span13">返回</span></a> </div> 
     <div class="x-col" xid="col13" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="确定" xid="enterBtn" onClick="enterBtnClick">
       <i xid="i6"></i>
       <span xid="span13">确定</span></a> </div> </div> 
  <div xid="InfoBox" style="width:70%;margin-right:15%;margin-left:15%;height:120px;position:absolute;display:none;z-index:99;top:75px;border-radius:5px;background-color:#ccc;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="height:50px;">
    <div class="x-col" xid="col22" style="text-align:center;color:#000000;font-size:16px;" bind-text='"温馨提醒"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="height:40px;font-size:16px;">
    <div class="x-col" xid="col25" style="text-align:center;color:#000000;font-size:14px;" bind-text='"请填写退回原因!"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
    <div class="x-col" xid="col28" style="text-align:center;">
     <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="OK" xid="OkBtn" style="height:30px;text-align:center;line-height:15px;" onClick="OkBtnClick">
      <i xid="i4"></i>
      <span xid="span4">OK</span></a> </div> </div> </div></div> </div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background-color:#f0f3f4;">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar">
     <div xid="left1">
      </div> 
     <div class="x-titlebar-title flex2" xid="title1">
      <div component="$UI/system/components/justep/output/output" class="x-output" xid="output" style="text-align:center;color:#FFFFFF;font-size:large;height:44px;margin-top:-10px;width:396px;"></div></div> 
     <div xid="right1"></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-android-close" onClick="button1Click">
   <i xid="i5" class="icon-android-close"></i>
   <span xid="span5"></span></a></div> </div> 
   <div class="x-panel-content" xid="content1">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
     <div class="x-col x-col-25" xid="col2" bind-text="'项目编号：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;border-radius:5px  0 0 0;border-style:solid none solid solid;"></div>
     <div class="x-col" xid="col3" style="border-style:solid inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-radius:0  5px 0 0;background-color:#FFFFFF;">
      <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" readonly="true" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;"></input></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
     <div class="x-col x-col-25" xid="col5" bind-text="'项目名称：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;text-align:center;line-height:35px;border-width:1px 1px 1px 1px;"></div>
     <div class="x-col" xid="col6" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;">
      <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
     <div class="x-col x-col-25" xid="col8" bind-text="'供应商：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;border-width:1px 1px 1px 1px;text-align:center;line-height:35px;"></div>
     <div class="x-col" xid="col9" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;">
      <input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
     <div class="x-col x-col-25" xid="col11" bind-text="'服务费用：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;border-width:1px 1px 1px 1px;text-align:center;line-height:35px;"></div>
     <div class="x-col" xid="col12" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;">
      <input component="$UI/system/components/justep/input/input" class="form-control" xid="input4" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
     <div class="x-col x-col-25" xid="col14" bind-text="'要求期限：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;border-width:1px 1px 1px 1px;text-align:center;line-height:35px;"></div>
     <div class="x-col" xid="col15" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;">
      <input component="$UI/system/components/justep/input/input" class="form-control" xid="input5" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
     <div class="x-col x-col-25" xid="col20" bind-text="'工单名称：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;border-width:1px 1px 1px 1px;text-align:center;line-height:35px;"></div>
     <div class="x-col" xid="col21" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;">
      <input component="$UI/system/components/justep/input/input" class="form-control" xid="input6" style="background-color:#FFFFFF;border:0px;height:30px;font-size:16px;" readonly="true"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
     <div class="x-col x-col-25" xid="col17" bind-text="'备注：'" style="border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none inset solid;border-width:1px 1px 1px 1px;text-align:center;line-height:35px;"></div>
     <div class="x-col" xid="col18" style="border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;background-color:#FFFFFF;">
      <textarea rows="5" xid="textarea3" style="width:100%;border-style:none none none none;padding-left:13px;font-size:16px;" readonly="true"></textarea></div> </div> 
     
    
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
     <div class="x-col" xid="col4" style="text-align:center;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-style:none none solid solid;border-width:1px 1px 1px 1px;text-align:center;line-height:35px;border-radius:0  0 0 5px;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="退回" xid="goBtn" style="width:109px;" onClick="goBtnClick">
       <i xid="i1"></i>
       <span xid="span1">退回</span></a> </div> 
     <div class="x-col" xid="col7" style="text-align:center;border-style:none inset inset none;border-width:1px 1px 1px 1px;border-color:#e6eaec #e6eaec #e6eaec #e6eaec;border-radius:0  0 5px 0;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="通过" xid="passBtn" style="width:115px;" onClick="passBtnClick">
       <i xid="i2"></i>
       <span xid="span2">通过</span></a> </div> </div> </div> </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="left:2px;top:112px;"></span></div>