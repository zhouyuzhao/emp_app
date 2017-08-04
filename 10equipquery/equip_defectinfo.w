<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:21px;top:88px;"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="ID" onCustomRefresh="data1CustomRefresh"><column label="ID" name="ID" type="String" xid="xid1"></column>
  <column label="设备名称：" name="equipmentname" type="String" xid="xid2"></column>
  <column label="缺陷状态：" name="recordstatusname" type="String" xid="xid3"></column>
  <column label="公司代码：" name="companyid" type="String" xid="xid4"></column>
  <column label="状态颜色：" name="recordstatuscolor" type="String" xid="xid5"></column>
  <column label="缺陷报告人：" name="reportername" type="String" xid="xid6"></column>
  <column label="报告日期：" name="reportdate" type="String" xid="xid10"></column>
  <column label="缺陷描述：" name="defectlinfo" type="String" xid="xid7"></column>
  <column label="缺陷单编号：" name="reportcode" type="String" xid="xid8"></column>
  <column label="记录ID：" name="recordid" type="String" xid="xid9"></column>
  <column label="缺陷部位" name="defectposition" type="String" xid="xid11"></column>
  <column label="机组" name="unitname" type="String" xid="xid12"></column>
  <column label="缺陷等级" name="defectlevelname" type="String" xid="xid13"></column>
  <column label="设备ID" name="objectid" type="String" xid="xid15"></column>
  <column label="检修专业" name="plangroupname" type="String" xid="xid18"></column>
  <column label="缺陷状态" name="recordstatus" type="String" xid="xid20"></column>
  <column name="recordid" type="String" xid="xid14"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div2">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i6"></i>
    <span class="x-pull-down-label" xid="span13">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div3"><div xid="div1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1" limit="4" autoLoad="true">
   <ul class="x-list-template x-min-height" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="x-min-height" componentname="li(html)" id="undefined_li1">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" bind-click="row1Click">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25 x-col-center" xid="col4" style="text-align:center;"><span xid="span6"><![CDATA[缺陷编号：]]></span></div>
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output1" bind-ref="ref('reportcode')"></div></div>
   <div class="x-col" xid="col6" style="text-align:center;"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output2" style="font-weight:bold;font-size:16px;" bind-ref="ref('recordstatusname')" bind-style="{'color' : $object.val(&quot;recordstatuscolor&quot;)  != null ? $object.val(&quot;recordstatuscolor&quot;) : null}"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25 x-col-center" xid="col7" style="text-align:center;"><span xid="span10"><![CDATA[设备名称：]]></span></div>
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output3" bind-ref="ref('equipmentname')" style="font-weight:bold;"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25 x-col-center" xid="col10" style="text-align:center;"><span xid="span11"><![CDATA[缺陷描述：]]></span></div>
   <div class="x-col" xid="col11"><p xid="p2" bind-text=' $object.val("defectlinfo")'></p></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25 x-col-center" xid="col13" style="text-align:center;"><span xid="span12"><![CDATA[报告人：]]></span></div>
   <div class="x-col x-col-20 x-col-center" xid="col14"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output4" bind-ref="ref('reportername')"></div></div>
   <div class="x-col" xid="col15"><div component="$UI/system/components/justep/output/output" class="x-output x-report" xid="output5" bind-ref="ref('reportdate')" style="color:#FF0000;"></div></div></div></div>
   </div>
  <hr xid="hr1" class="hr1"></hr></li></ul> </div></div></div>
   <div class="x-content-center x-pull-up" xid="div4">
   <span class="x-pull-up-label" xid="span14">加载更多...</span></div></div></div>
   </div></div>