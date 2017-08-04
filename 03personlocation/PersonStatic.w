<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:236px;top:290px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data3" idColumn="ID"><column label="id" name="ID" type="String" xid="xid5"></column>
  <column label="安全区去编号" name="AREACODE" type="String" xid="xid7"></column>
  <column label="安全区名称" name="AREANAME" type="String" xid="xid8"></column>
  <column label="安全区人数" name="PERSONNELNUM" type="Integer" xid="xid9"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="人员定位"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
             
          </div>  
          <div class="x-titlebar-title">人员定位</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-android-close" onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-android-close" />  
              <span></span> 
            </a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="height:100%;float:left;width:auto;">
  <div xid="div11" style="padding-top:10px;"><span xid="personnum" style="color:#FF0000;font-size:large;margin-left:10px;"></span>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data3">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row" style="float:left;width:40%;margin-left:25px;margin-top:10px;" bind-click="rowClick">
   <div class="x-col" xid="col1" style="border-style:solid solid solid solid;border-width:thin thin thin thin;border-radius: 10px;box-shadow: 5px 5px 5px #888888;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref('AREACODE')" style="text-align:center;font-family:微软雅黑;font-weight:bold;color:#000000;"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref="ref('AREANAME')" style="text-align:center;font-family:微软雅黑;color:#000000;"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" style="text-align:center;color:#FF0000;font-weight:bold;font-size:20px;" bind-text=' $object.val("PERSONNELNUM") +"人"'></div>
  </div>
   </div>
  </li></ul> 
  </div></div>
  </div>
   <div class="x-panel-bottom" xid="bottom1" height="55">
    <div component="$UI/system/components/justep/windowContainer/windowContainer"
		class="x-window-container" xid="windowContainer2" src="../01main/BottomBar.w"></div>
   </div>
  </div> 
 <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog" style="left:262px;top:183px;" status="normal" width="80%" height="50%" src="$UI/emp_app/03personlocation/Personinfo.w"></span></div>
 