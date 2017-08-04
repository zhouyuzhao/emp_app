<?xml version="1.0" encoding="UTF-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:302px;top:187px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="mediaData" idColumn="filePath" autoNew="true"><column label="服务器返回的ID" name="ID" type="String" xid="xid1"></column>
  <column label="路径" name="filePath" type="String" xid="xid1"></column>
  <column label="名称" name="fileName" type="String" xid="xid2"></column>
  <column label="时间" name="createDate" type="String" xid="xid3"></column>
  <column label="录音时长" name="Len" type="String" xid="xid4"></column>
  <column label="文件后缀" name="Suffix" type="String" xid="xid8"></column>
  <column label="上传文件ID" name="ID" type="String" xid="xid9"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="information" idColumn="itemid"><column label="项目ID" name="itemid" type="String" xid="xid12"></column>
  <column label="设备名称" name="equipname" type="String" xid="xid7"></column>
  <column label="项目名称" name="itemname" type="String" xid="xid6"></column>
  <column label="记录ID" name="recordid" type="String" xid="xid5"></column>
  <column label="标准值" name="standvalue" type="String" xid="xid13"></column>
  <column label="单位" name="dataunit" type="String" xid="xid14"></column>
  <column label="上限" name="upperdanval" type="String" xid="xid15"></column>
  <column label="下限" name="lowerdanval" type="String" xid="xid16"></column>
  <column label="巡检值" name="resultvalue" type="String" xid="xid17"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column name="ID" type="String" xid="xid11"></column>
  <column label="巡检结果" name="value" type="String" xid="xid10"></column></div></div> 
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="record" opacity="0.9">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="height:332px;width:250px;" align="center"><div xid="div5" align="center" style="padding:15px 15px 15px 15px;"><img src="$UI/emp_app/images/record.png" alt="" xid="image1" style="width:100%;"></img></div>
  <div xid="div7" style="padding:15px 15px 15px 15px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="recordTime" style="color:#FF0000;font-weight:bold;font-size:x-large;"></div></div>
  <div xid="div8" class="center-block" align="center" style="padding:20px 20px 20px 20px;"><img alt="" xid="image2" style="width:75px;" bind-click="image2Click" src="$UI/emp_app/images/stop.png"></img></div></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="play" opacity="0.9">
   <div class="x-popOver-overlay" xid="div3"></div>
   <div class="x-popOver-content" xid="div4" style="height:238px;width:195px;" align="center"><div xid="div9" align="center" style="padding:10px 10px 10px 10px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="playTime"></div></div>
  <div xid="div10" align="center" style="padding:20px 20px 20px 20px;"><img src="$UI/emp_app/images/stop.png" alt="" xid="image3"></img></div></div></div>
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="巡检记录">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">巡检记录</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="closebtn"  onClick="closebtnClick">
   <i xid="i6" class="icon-android-close"></i></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1">
  <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" style="font-weight:bold;color:#000080;text-align:center;font-size:16px;" bind-text='$model.information.val("equipname")+"―"+ $model.information.val("itemname")'></div><div component="$UI/system/components/justep/row/row" class="x-row x-row1" xid="row1">
   <div class="x-col x-col1" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="height:30px;">
   <label class="x-label" xid="label5" style="text-align:center;width:70px;"><![CDATA[标准值：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="standardvalue" bind-ref="information.ref('standvalue')" style="text-align:left;font-weight:bold;"></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col x-col1" xid="col5"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5" style="height:30px;">
   <label class="x-label" xid="label6" style="width:70px;background-color:transparent;width:70px;text-align:center;"><![CDATA[单位：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="dataunit" bind-ref="information.ref('dataunit')" style="text-align:left;"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row x-top" xid="row4">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6" style="height:30px;">
   <label class="x-label" xid="label7" style="width:70px;text-align:center;"><![CDATA[上限：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="upperlimit" bind-ref="information.ref('upperdanval')" style="text-align:left;"></div></div></div>
   <div class="x-col" xid="col11"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7" style="height:30px;">
   <label class="x-label" xid="label8" style="width:70px;text-align:right;"><![CDATA[下限：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="lowerlimit" bind-ref="information.ref('lowerdanval')" style="text-align:left;"></div></div></div>
   </div>
  </div>
  <div xid="div2">
  <div xid="div13" class="div13" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;display:none;"><div component="$UI/system/components/justep/row/row" class="x-row x-row6" xid="row6">
   <div class="x-col x-col6" xid="col4"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit" xid="labelEdit1" style="height:60px;width:98%;">
   <label class="x-label" xid="label1" style="margin-left:5px;"><![CDATA[巡检结果：]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="cheackvalue" style="font-family:微软雅黑;color:#008000;font-size:24px;font-weight:bold;height:50px;width:80;" dataType="Float"></input></div></div>
   </div></div><div xid="div15" class="div15" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;display:none;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col x-col6" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit" xid="labelEdit3" style="height:60px;">
   <label class="x-label" xid="label3"><![CDATA[巡检结果：]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" bind-options="data1" bind-optionsValue="value"></select></div></div>
   </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7"><div class="x-col" xid="col12"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit" xid="labelEdit2" style="height:60px;width:99%;">
   <label class="x-label fa fa-feed" xid="label2" bind-click="label2Click" style="padding-right:22px;margin-left:5px;"><![CDATA[说明：]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="remark" style="font-family:微软雅黑;font-size:16px;font-weight:bold;width:80;"></textarea></div></div>
  </div>
  
  </div>
  <div xid="div6"><div xid="div11" style="float:left;width:25%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="width:144px;">
   <div class="x-col x-col-33" xid="col1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="照相" xid="photo" onClick="photoClick">
   <i xid="i1"></i>
   <span xid="span1">照相</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="width:144px;">
   <div class="x-col x-col-33" xid="col6"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="录像" xid="video" onClick="videoClick">
   <i xid="i2"></i>
   <span xid="span2">录像</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="width:144px;">
   <div class="x-col x-col-33" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="录音" xid="audio" onClick="audioClick">
   <i xid="i3"></i>
   <span xid="span3">录音</span></a></div>
   </div></div>
  <div xid="div12" style="float:right;width:73%;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="mediaData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row x-row8" xid="row8">
   <div class="x-col x-col-80" xid="col20" bind-click="playClick"><div component="$UI/system/components/justep/output/output" class="x-output" xid="filename" bind-ref="ref('fileName')" style="font-size:16px;"></div></div>
   <div class="x-col x-col-fixed" xid="col21" style="text-align:center;margin-top:10px;width:auto;"><i xid="dele" style="color:red;font-size:20px;" class="fa fa-trash" bind-click="deleClick"></i></div>
   </div>
  </li></ul> </div></div>
  </div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col x-col-center" xid="col23" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green" label="提交" xid="submitbtn" style="width:90%;" onClick="submitbtnClick">
   <i xid="i7"></i>
   <span xid="span7">提交</span></a></div>
   </div></div></div>
  </div>