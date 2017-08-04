<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:400px;top:321px;" onLoad="modelLoad" onModelConstruct="modelModelConstruct">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="videoData" idColumn="fileName"><column label="路径" name="filePath" type="String" xid="xid9"></column>
  <column label="文件名称" name="fileName" type="String" xid="xid10"></column>
  <column label="创建时间" name="createData" type="String" xid="xid11"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="audioData" idColumn="fileName"><column label="路径" name="filePath" type="String" xid="xid1"></column>
  <column label="音频名字" name="fileName" type="String" xid="xid2"></column>
  <column label="创建时间" name="createTime" type="String" xid="xid3"></column>
  <column label="标题" name="title" type="String" xid="xid4"></column>
  <column label="长度" name="len" type="String" xid="xid5"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="photoData" idColumn="filePath"><column label="ID" name="id" type="String" xid="xid13"></column>
  <column label="路径" name="filePath" type="String" xid="xid6"></column>
  <column label="相片名称" name="fileName" type="String" xid="xid7"></column>
  <column label="创建时间" name="createTime" type="String" xid="xid8"></column></div>
  </div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="record" opacity="0.9">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="height:332px;width:250px;" align="center"><div xid="div5" align="center" style="padding:15px 15px 15px 15px;"><img src="record.gif" alt="" xid="image1" style="width:75px;"></img></div>
  <div xid="div7" style="padding:15px 15px 15px 15px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="recordTime"></div></div>
  <div xid="div8" class="center-block" align="center" style="padding:20px 20px 20px 20px;"><img alt="" xid="image2" style="width:75px;" bind-click="image2Click" src="stop.png"></img></div></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="play" opacity="0.9">
   <div class="x-popOver-overlay" xid="div3"></div>
   <div class="x-popOver-content" xid="div4" style="height:238px;width:195px;" align="center"><div xid="div9" align="center" style="padding:10px 10px 10px 10px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="playTime"></div></div>
  <div xid="div10" align="center" style="padding:20px 20px 20px 20px;"><img src="stop.png" alt="" xid="image3"></img></div></div></div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="功能点演示">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="唯一标识" xid="button7" icon="icon-ios7-lightbulb" onClick="button7Click">
   <i xid="i7" class="icon-ios7-lightbulb"></i>
   <span xid="span7">唯一标识</span></a></div>
   <div class="x-titlebar-title" xid="title1">功能点演示</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="扫一扫" xid="button6" icon="icon-ios7-keypad" onClick="button6Click">
   <i xid="i6" class="icon-ios7-keypad"></i>
   <span xid="span6">扫一扫</span></a>
  </div></div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col8"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" xid="button11" icon="icon-camera" label="照相" onClick="button11Click">
   <i xid="i11" class="icon-camera"></i>
   <span xid="span11">照相</span></a></div>
   <div class="x-col" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="录像" xid="button12" icon="icon-videocamera" onClick="button12Click">
   <i xid="i12" class="icon-videocamera"></i>
   <span xid="span12">录像</span></a></div>
   <div class="x-col" xid="col10"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="录音" xid="button13" icon="icon-ios7-mic" onClick="button13Click">
   <i xid="i13" class="icon-ios7-mic"></i>
   <span xid="span13">录音</span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="测试" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">测试</span></a></div>
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="开启视频" xid="button10" onClick="button10Click">
   <i xid="i10"></i>
   <span xid="span10">开启视频</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="插件播放" xid="button15" onClick="button15Click">
   <i xid="i15"></i>
   <span xid="span15">插件播放</span></a></div>
   <div class="x-col" xid="col6"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="访问摄像头" xid="button9" onClick="button9Click">
   <i xid="i9"></i>
   <span xid="span9">访问摄像头</span></a></div></div>
  <div xid="div6" style="height:234px;">
 <!--  <video id="video" width="640" height="480" autoplay></video> -->

  </div>
  </div>
  <div class="x-contents-content" xid="content3"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list2" data="photoData" bind-click="list2Click">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl2" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl2">
    <li xid="li2" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li2"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3" bind-text="label('filePath')"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref="ref('filePath')"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
   <label class="x-label" xid="label4" bind-text="label('fileName')"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output8" bind-ref="ref('fileName')"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="上传" xid="button8" onClick="button8Click">
   <i xid="i8"></i>
   <span xid="span8">上传</span></a></div>
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref('filePath')"></div></div>
   <div class="x-col" xid="col3"></div></div></li></ul> </div></div>
  <div class="x-contents-content" xid="content4"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list3" data="videoData" bind-click="list3Click">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl3" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl3">
    <li xid="li3" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li3"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label5" bind-text="label('fileName')"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output9" bind-ref="ref('fileName')"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6" bind-text="label('createData')"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output10" bind-ref="ref('createData')"></div></div>
  </li></ul> </div></div>
  <div class="x-contents-content" xid="content5"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" data="audioData" bind-click="list1Click">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1" bind-text="label('fileName')"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref="ref('fileName')"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2" bind-text="label('createTime')"></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref="ref('createTime')"></div></div></li></ul> </div></div></div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="首页" xid="button2" target="content2" icon="icon-android-contact">
   <i xid="i2" class="icon-android-contact"></i>
   <span xid="span2">首页</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="图片" xid="button3" target="content3" icon="icon-images">
   <i xid="i3" class="icon-images"></i>
   <span xid="span3">图片</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="视频" xid="button4" target="content4" icon="icon-ios7-film">
   <i xid="i4" class="icon-ios7-film"></i>
   <span xid="span4">视频</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="音频" xid="button5" target="content5" icon="icon-volume-high">
   <i xid="i5" class="icon-volume-high"></i>
   <span xid="span5">音频</span></a></div></div></div></div>