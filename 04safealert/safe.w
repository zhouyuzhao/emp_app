<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:6px;left:161px;height:auto;" onParamsReceive="modelParamsReceive"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="公共安全提醒信息">
   <div class="x-titlebar-left" xid="left1"><span component="$UI/system/components/justep/button/toggle" class="x-toggle x-edit" xid="toggle1" onChange="toggle1Change" style="font-size:large;" ON="开" OFF="关"></span></div>
   <div class="x-titlebar-title" xid="title1">公共安全提醒信息</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button15" icon="linear linear-fileadd" onClick="button15Click">
   <i xid="i15" class="linear linear-fileadd"></i>
   <span xid="span15"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1" style="position:fixed;">
  
  
  <div xid="div1" style="height:100%;width:20%;border-width:thin thin thin thin;border-style:ridge ridge ridge ridge;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="应急处置卡" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2">应急处置卡</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="作业安全" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">作业安全</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="承包合作" xid="button3" onClick="button3Click">
   <i xid="i3"></i>
   <span xid="span3">承包合作</span></a></div>
   </div></div>
  <div xid="div2" style="position:absolute;height:100%;top:0px;width:80%;left:20%;"><div xid="div4" class="div4" style="display:none;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col14"><a component="$UI/system/components/justep/button/button" class="btn btn-icon-bottom x-reds" label="急救" xid="button8" onClick="button8Click" icon="linear linear-diamond">
   <i xid="i8" class="linear linear-diamond"></i>
   <span xid="span8">急救</span></a></div>
   <div class="x-col" xid="col15"><a component="$UI/system/components/justep/button/button" class="btn btn-icon-bottom x-reds" label="逃生" xid="button9" onClick="button9Click" icon="linear linear-diamond">
   <i xid="i9" class="linear linear-diamond"></i>
   <span xid="span9">逃生</span></a></div>
   <div class="x-col" xid="col16"><a component="$UI/system/components/justep/button/button" class="btn btn-icon-bottom x-reds" label="灭火" xid="button10" onClick="button10Click" icon="linear linear-diamond">
   <i xid="i10" class="linear linear-diamond"></i>
   <span xid="span10">灭火</span></a></div>
  <div class="x-col" xid="col17"><a component="$UI/system/components/justep/button/button" class="btn btn-icon-bottom x-reds" label="备忘" xid="button11" onClick="button11Click" icon="linear linear-diamond">
   <i xid="i11" class="linear linear-diamond"></i>
   <span xid="span11">备忘</span></a></div></div>
  <hr xid="hr1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></hr></div><div xid="div3" class="div3" align="center"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10"><a component="$UI/system/components/justep/button/button" class="btn x-reds" label="工作票补充规定" xid="button4" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span4">工作票补充规定</span></a></div>
   <div class="x-col" xid="col11"><a component="$UI/system/components/justep/button/button" class="btn x-reds" label="高风险作业简要说明" xid="button5" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span5">高风险作业简要说明</span></a></div>
   <div class="x-col" xid="col12"><a component="$UI/system/components/justep/button/button" class="btn x-reds" label="检修工作任务单" xid="button6" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span6">检修工作任务单</span></a></div>
  <div class="x-col" xid="col13"><a component="$UI/system/components/justep/button/button" class="btn x-reds" label="事故事件分级处理" xid="button7" onClick="button7Click">
   <i xid="i7"></i>
   <span xid="span7">事故事件分级处理</span></a></div></div></div>
  
  <div xid="div5" style="display:none;" class="div5"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col18"><a component="$UI/system/components/justep/button/button" class="btn btn-default x-reds" label="资格预审所需资料" xid="button12" onClick="button12Click">
   <i xid="i12"></i>
   <span xid="span12">资格预审所需资料</span></a></div>
   <div class="x-col" xid="col19"><a component="$UI/system/components/justep/button/button" class="btn btn-default x-reds" label="主要风险及控制措施" xid="button13" onClick="button13Click">
   <i xid="i13"></i>
   <span xid="span13">主要风险及控制措施</span></a></div>
   <div class="x-col" xid="col20"><a component="$UI/system/components/justep/button/button" class="btn btn-default x-reds" label="相关安全奖惩规定" xid="button14" onClick="button14Click">
   <i xid="i14"></i>
   <span xid="span14">相关安全奖惩规定</span></a></div></div></div>
  <div xid="div10"></div></div></div>
   </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/emp_app/04safealert/show.w" showTitle="true" title="工作票补充规定"></span></div>