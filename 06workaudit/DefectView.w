<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:244px;left:18px;top:83px;" onParamsReceive="modelParamsReceive" onActive="modelActive"> 
  </div>  
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="demoPopOver" opacity="0.8" direction="right-top" position="center" style="background-color:black;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="width:80%;margin-right:10%;margin-left:10%;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="height:60px;border-radius:10px  10px 0 0;background-color:#2fa4e7;">
     <div class="x-col" xid="col10" bind-text="'退回原因'" style="text-align:center;color:#FFFFFF;line-height:30px;font-size:18px;"></div></div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:#FFFFFF;height:150px;padding-top:5px;">
     <div class="x-col" xid="col1">
      <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea1" style="height:137px;"></textarea></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:#FFFFFF;height:60px;padding-top:8px;">
     <div class="x-col" xid="col16" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="返回" xid="returnBtn" onClick="returnBtnClick">
       <i xid="i4"></i>
       <span xid="span4">返回</span></a> </div> 
     <div class="x-col" xid="col13" style="text-align:center;">
      <a component="$UI/system/components/justep/button/button" class="btn x-green" label="确定" xid="enterBtn" onClick="enterBtnClick">
       <i xid="i4"></i>
       <span xid="span4">确定</span></a> </div> </div> 
  <div xid="InfoBox" style="width:70%;margin-right:15%;margin-left:15%;height:120px;position:absolute;display:none;z-index:99;top:75px;border-radius:5px;background-color:#ccc;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="height:50px;">
    <div class="x-col" xid="col25" style="text-align:center;font-size:16px;color:#000000;" bind-text='"温馨提醒"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="height:40px;font-size:20;">
    <div class="x-col" xid="col25" style="text-align:center;color:#000000;font-size:14px;" bind-text='"请填写退回原因!"'></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
    <div class="x-col" xid="col28" style="text-align:center;">
     <a component="$UI/system/components/justep/button/button" class="btn x-green" label="OK" xid="OkBtn" style="height:30px;text-align:center;line-height:15px;" onClick="OkBtnClick">
      <i xid="i6"></i>
      <span xid="span13">OK</span></a> </div> </div> </div></div> </div><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#f0f3f4;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar">
   <div xid="left1">
    </div> 
   <div class="x-titlebar-title flex2" xid="title1">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output" style="text-align:center;color:#FFFFFF;font-size:large;height:44px;width:279px;margin-top:-10px;"></div></div> 
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
  </div>
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col4" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" xid="goBtn" label="退回" style="width:80%;" onClick="goBtnClick">
   <i xid="i1"></i>
   <span xid="span1">退回</span></a></div>
   <div class="x-col" xid="col7" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" xid="passBtn" label="确认" style="width:80%;" onClick="passBtnClick">
   <i xid="i2"></i>
   <span xid="span2">确认</span></a></div>
   </div></div></div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="left:14px;top:126px;"></span></div>