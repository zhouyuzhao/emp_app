<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#eee;"> 
      <div class="x-panel-content" xid="content1"><div xid="div4" style="width:100%;z-index:99;position:absolute;background-color:#eee;height:216px;display:none;">
   <div xid="div5" style="background-color:#f8f6f6;margin-right:5%;margin-left:5%;width:90%;margin-top:20px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;">
     <div class="x-col" xid="col4">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
       <label class="x-label" xid="label1">开始时间：</label>
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3" dataType="Date"></input></div> </div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;">
     <div class="x-col" xid="col5">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
       <label class="x-label" xid="label2">结束时间：</label>
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input4" dataType="Date" max="js:new Date()"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="取消" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">取消</span></a></div>
   <div class="x-col" xid="col2" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确定" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">确定</span></a></div>
   </div> 
    </div> </div><div xid="main" class="main" style="height:100%;width:100%;"></div>
  <div xid="div3" style="text-align:center;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="查询条件设置" xid="button7" style="width:300px;margin-top:10px;" onClick="button7Click">
    <i xid="i7"></i>
    <span xid="span8"></span></a> </div></div>
  </div> 
</div>