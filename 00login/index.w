<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window"
	component="$UI/system/components/justep/window/window" design="device:m;">
	<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog" style="left:13px;top:415px;"></span><div component="$UI/system/components/justep/model/model" xid="model"
		style="height:auto;left:390px;top:161px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="dataID"><column label="ID" name="dataID" type="String" xid="xid1"></column>
  <column label="巡检点名称" name="AREANAME" type="String" xid="xid2"></column>
  <column label="巡检点ID" name="ID" type="String" xid="xid3"></column>
  <column label="区域ID" name="AREACODE" type="String" xid="xid4"></column>
  <column label="总数" name="ALLITEMNO" type="Integer" xid="xid6"></column>
  <column label="已巡检数" name="CHECKEDNO" type="Integer" xid="xid7"></column>
  <column label="任务ID" name="TASKID" type="String" xid="xid10"></column>
  <data xid="default2">[]</data></div></div>
		
	<div component="$UI/system/components/justep/contents/contents"
		class="x-contents x-full" active="0" xid="pages" swipe="false">
		<div class="x-contents-content" xid="main">
			<div component="$UI/system/components/justep/windowContainer/windowContainer"
				class="x-window-container" xid="windowContainer1" src="./Login.w"></div>
		</div>
	</div>
</div>