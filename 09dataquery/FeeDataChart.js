define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
    require("$UI/emp_app/common/util/echarts-all");
    require("cordova!cordova-plugin-dialogs");
    var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");   
	var strdate1 = "";
	var strdate2 = "";
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
	    var me=this;
		
		var date2 = new Date();//结束日期为当前日期
		var date1= justep.Date.decrease(new Date(), 5, 'm');//开始日期为当前日期-1年
		var data1=[];
		var data2=[];
		var data3=[];
		var data4=[];
		if(CU.isEmpty(strdate1)){
			strdate1=justep.Date.toString(date1,"yyyy-MM-dd");
		}
		if(CU.isEmpty(strdate2)){
			strdate2=justep.Date.toString(date2,"yyyy-MM-dd");
		}
		
		this.comp("input3").val(strdate1);
		this.comp("input4").val(strdate2);
		
	    var params=[CFG.companyid,strdate1,strdate2];
		AJ.RS({service:"StatisticsList",method:"queryRepairCostChartData",scope:this,params:params,
			success:function(result){
			if(!CU.isEmpty(result.data)&&result.data.length>0){
			    for(var i=0;i<result.data.length;i++){
			     var obj=result.data[i];
			     data1.push(obj.NAME);
			     data2.push(obj["合计"]);
			     data3.push(obj["物料费"]);
			     data4.push(obj["外委服务费"]);
			     }
			    }
			     var option= {
			    		 tooltip : {
			    			 trigger: 'axis'
			    		 },
			    		 title:{text:'维修费用统计(万元)',x:'center'},
			    		 legend: {
			    			 data:['合计','物料费','外委服务费'],
			    			 y:35
			    		 },
			    		 toolbox: {
			    			   show : true,
			    			   feature : {
			    				   //mark : {show: true},
			    				   //dataView : {show: true, readOnly: false},
			    				   magicType : {show: true, type: ['line', 'bar']},
			    				  //restore : {show: true},
			    				   //saveAsImage : {show: true}
			    			   }
			    		 },
			    		 grid:{x:30,y:60,x2:10,y2:60},
			    		 calculable : true,
			    		 xAxis : [
			    		          {
			    		        	  type: 'category',
			    		        	  data : data1
			    		          }
			    		          ],
			    		          yAxis : [
			    		                   {
			    		                	   type : 'value',
			    		                	   splitArea : {show : true}
			    		                   }
			    		                   ],
			    		  dataZoom : {
			    			  	type :'slider',
			                    show : true,
			                    realtime : true,
			                    start : 0,
			                    end : 50
			               },
			    		                   series : [
			    		                             {
			    		                            	 name:'合计',
			    		                            	 type:'bar',
			    		                            	 data:data2,
			    		                            	 itemStyle:{ normal: {label : {show: true, position: 'top'}}}
			    		                             },
			    		                             {
			    		                            	 name:'物料费',
			    		                            	 type:'bar',
			    		                            	 data:data3,
			    		                            	 itemStyle:{ normal: {label : {show: true, position: 'top'}}}
			    		                             },
			    		                             {
			    		                            	 name:'外委服务费',
			    		                            	 type:'bar',
			    		                            	 data:data4,
			    		                            	 itemStyle:{ normal: {label : {show: true, position: 'top'}}}
			    		                             }
			    		                             ]
			     };
			     var myChart = echarts.init(me.getElementByXid('main'));
			     myChart.setOption(option);
			     
			     
			    
			} 		
		});
	};

	Model.prototype.button7Click = function(event){
          $(this.getElementByXid('div4')).slideToggle();
	};

	Model.prototype.button1Click = function(event){
		strdate1 = this.comp("input3").val();
		strdate2 = this.comp("input4").val();
		if(CU.isEmpty(strdate1)){
			navigator.notification.alert("填写开始时间！",function(){},"提示","确定");
			return;
		}
		if(CU.isEmpty(strdate2)){
			navigator.notification.alert("填写结束时间！",function(){},"提示","确定");
			return;
		}
		this.modelLoad();
		$(this.getElementByXid('div4')).slideToggle();
	};

	Model.prototype.button2Click = function(event){
		$(this.getElementByXid('div4')).slideToggle();
	};

	return Model;
});