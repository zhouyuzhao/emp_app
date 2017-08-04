<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:70px;top:312px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="iD"><column name="iD" type="String" xid="xid2"></column>
  <column name="teamMajor" type="String" xid="xid1"></column>
  <data xid="default1">[{&quot;iD&quot;:&quot;1&quot;,&quot;teamMajor&quot;:&quot;false&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#eee;"> 
      <div class="x-panel-content" xid="content1"><div xid="div4" style="z-index:99;position:absolute;background-color:#eee;height:216px;width:100%;left:0;top:27px;display:none;">
   <div xid="div5" style="background-color:#f8f6f6;margin-right:5%;margin-left:5%;width:90%;margin-top:20px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;">
     <div class="x-col" xid="col4">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
       <label class="x-label" xid="label1">开始时间：</label>
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3" dataType="Date" format="yyyy-MM-dd"></input></div> </div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;">
     <div class="x-col" xid="col5">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
       <label class="x-label" xid="label2">结束时间：</label>
       <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input4" dataType="Date"></input></div> </div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col3"><label xid="label4"><![CDATA[类别：]]></label></div>
   <div class="x-col" xid="col6"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio1" label="班组" name="teamMajor" bind-ref="data1.ref('teamMajor')" checkedValue="true"></span></div>
   <div class="x-col" xid="col7"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio2" label="专业" checked="true" name="teamMajor" bind-ref="data1.ref('teamMajor')" checkedValue="false"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="取消" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">取消</span></a></div>
   <div class="x-col" xid="col2" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确定" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">确定</span></a></div>
   </div>
  </div> </div><div xid="main" class="main" style="height:100%;width:100%;"></div>
  <div xid="div3" style="text-align:center;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button7" style="margin-top:10px;width:300px;" onClick="button7Click" label="查询条件设置">
    <i xid="i7"></i>
    <span xid="span8">查询条件设置</span></a> </div></div>
  </div> 
</div>