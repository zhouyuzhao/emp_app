<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="width:157px;top:219px;left:133px;height:auto;" onParamsReceive="modelParamsReceive">
  <div component="$UI/system/components/justep/data/data"  xid="mediaData" idColumn="id" >
  <column label="服务器返回的ID" name="id" type="String" xid="xid1"></column>
  <column label="名称" name="originalname" type="String" xid="xid2"></column>
  <column label="时间" name="uploadtime" type="String" xid="xid3"></column>
  <column label="录音时长" name="custom5" type="String" xid="xid4"></column>
  <column label="文件后缀" name="filesuffixname" type="String" xid="xid8"></column>
  </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="itemRdData" idColumn="RECORDID">
  <column label="记录ID" name="RECORDID" type="String" xid="xid5"></column>
  <column label="项目ID" name="ITEMID" type="String" xid="xid12"></column>
  <column label="设备名称" name="EQUIPNAME" type="String" xid="xid7"></column>
  <column label="项目名称" name="ITEMNAME" type="String" xid="xid6"></column>
  <column label="标准值" name="STANDVALUE" type="String" xid="xid13"></column>
  <column label="单位" name="DATAUNIT" type="String" xid="xid14"></column>
  <column label="上限" name="UPPERDANVAL" type="String" xid="xid15"></column>
  <column label="下限" name="LOWERDANVAL" type="String" xid="xid16"></column>
  <column label="检查结果" name="RESULTVALUE" type="String" xid="xid10"></column>
  <column label="巡检说明" name="REMARK" type="String" xid="xid11"></column>
  <column label="巡检点ID" name="AREAID" type="String" xid="xid33"></column>
  <rule xid="rule2">
   <col name="value" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default1">$row.val(&quot;RESULTVALUE&quot;) + $row.val(&quot;DATAUNIT&quot;)</expr></calculate> </col> </rule>
  <column name="CUSTOM1" type="String" xid="xid34"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="ID"><column label="ID" name="ID" type="String" xid="xid9"></column>
  <column name="viewnum" type="String" xid="xid17"></column>
  <column name="keyword" type="String" xid="xid18"></column>
  <column name="sourcefieldname" type="String" xid="xid19"></column>
  <column name="sourcetablename" type="String" xid="xid20"></column>
  <column name="sourcerecordkey" type="String" xid="xid21"></column>
  <column name="id" type="String" xid="xid22"></column>
  <column name="companyid" type="String" xid="xid23"></column>
  <column name="title" type="String" xid="xid24"></column>
  <column name="filesize" type="String" xid="xid25"></column>
  <column name="filesuffix" type="String" xid="xid26"></column>
  <column name="filesuffixname" type="String" xid="xid27"></column>
  <column name="filetypename" type="String" xid="xid28"></column>
  <column name="uploadtime" type="String" xid="xid29"></column>
  <column name="downloadnum" type="String" xid="xid30"></column>
  <column name="filetype" type="String" xid="xid31"></column>
  <column name="originalname" type="String" xid="xid32"></column>
  <rule xid="rule1"></rule></div></div> 
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="record" opacity="0.9">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="height:332px;width:250px;" align="center"><div xid="div5" align="center" style="padding:15px 15px 15px 15px;"><img src="$UI/emp_app/images/record.png" alt="" xid="image1" style="width:100%;"></img></div>
  <div xid="div7" style="padding:15px 15px 15px 15px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="recordTime"></div></div>
  <div xid="div8" class="center-block" align="center" style="padding:20px 20px 20px 20px;"><img alt="" xid="image2" style="width:75px;" bind-click="image2Click" src="$UI/emp_app/images/stop.png"></img></div></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="play" opacity="0.9">
   <div class="x-popOver-overlay" xid="div3"></div>
   <div class="x-popOver-content" xid="div4" style="height:238px;width:195px;" align="center"><div xid="div9" align="center" style="padding:10px 10px 10px 10px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="playTime"></div></div>
  <div xid="div10" align="center" style="padding:20px 20px 20px 20px;"><img src="$UI/emp_app/images/stop.png" alt="" xid="image3"></img></div></div></div>
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="巡检记录信息">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">巡检记录信息</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="closebtn" onClick="closebtnClick">
   <i xid="i1" class="icon-android-close"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1"><div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" style="font-weight:bold;color:#000080;text-align:center;font-size:16px;" bind-text=' $model.itemRdData.val("EQUIPNAME")+"―"+ $model.itemRdData.val("ITEMNAME")' bind-ref="itemRdData.ref('EQUIPNAME')"></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="height:30px;">
   
   <label class="x-label" xid="label5" style="text-align:center;width:70px;"><![CDATA[标准值：]]></label><div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="standardvalue" bind-ref="itemRdData.ref('STANDVALUE')" style="text-align:left;font-weight:bold;"></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5" style="height:30px;">
   <label class="x-label" xid="label6" style="background-color:transparent;width:70px;text-align:right;"><![CDATA[单位：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="dataunit" bind-ref="itemRdData.ref('DATAUNIT')" style="text-align:left;"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6" style="height:30px;">
   <label class="x-label" xid="label7" style="text-align:right;width:68px;"><![CDATA[上限：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="upperlimit" bind-ref="itemRdData.ref('UPPERDANVAL')" style="text-align:left;"></div></div></div>
   <div class="x-col" xid="col11"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7" style="height:30px;">
   <label class="x-label" xid="label8" style="width:70px;text-align:right;"><![CDATA[下限：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="lowerlimit" bind-ref="itemRdData.ref('LOWERDANVAL')" style="text-align:left;"></div></div></div>
   </div>
  </div>
  <div xid="div2" style="margin-left:10px;"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1" style="height:30px;width:97%;">
   <label class="x-label" xid="label1" style="text-align:center;width:80px;"><![CDATA[巡检结果：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit"  xid="cheackvalue"   style="text-align:left;font-weight:bold;font-family:微软雅黑;font-size:24px;width:511px;color:#008000;" bind-text='$model.itemRdData.val("DATAUNIT") == null ? $model.itemRdData.val("RESULTVALUE"):$model.itemRdData.val("RESULTVALUE")+ $model.itemRdData.val("DATAUNIT")' bind-style="{'color' :   $model.itemRdData.val(&quot;CUSTOM1&quot;) =='-1'? 'red' :'#008000'}"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2" style="width:97%;">
   <label class="x-label" xid="label2" style="text-align:center;width:80px;"><![CDATA[巡检说明：]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea1" bind-ref="itemRdData.ref('REMARK')" readonly="true" style="height:100px;"></textarea></div></div>
  <div xid="div6"><div xid="div12" style="float:right;width:100%;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" bind-click="row8Click" style="float:left;width:25%;">
   <div class="x-col" xid="col20" bind-load="col20Load"><i xid="picbtn" style="color:green;font-size:50px;" bind-css="$object.val(&quot;filesuffixname&quot;)=='JPG'?'fa fa-photo':$object.val(&quot;filesuffixname&quot;)=='MP4'?'fa fa-video-camera':'fa fa-volume-up'"></i></div>
   </div>
  </li></ul> </div></div>
  </div>
  </div>
   </div>
  </div>