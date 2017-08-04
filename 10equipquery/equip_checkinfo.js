define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/emp_app/common/util/echarts-all");
	require("cordova!cordova-plugin-dialogs");
	var CU = require("$UI/emp_app/common/util/CommonUtil");
	var AJ = require("$UI/emp_app/common/util/Pajax");
	var CFG = require("$UI/emp_app/common/util/Config");
	
	var equipid = "";//设备ID
	var strDate1 = "";//开始时间
	var strDate2 = "";//结束时间
	var itemid = "";//机组ID
	var Model = function(){
		this.callParent();
	};
	//切换表格数据
	Model.prototype.radio1Change = function(event){
		$(".div2").show();
		$(".div6").hide();
	};
	//切换趋势图
	Model.prototype.radio2Change = function(event){
		$(".div6").show();
		$(".div2").hide();
	};

	Model.prototype.modelParamsReceive = function(event){
		var me = this;
		equipid = event.params.objectId;
		var selectId2 = this.getIDByXID("select2"); 
		var data2 = this.comp("data2");
		var params = [equipid];
		//巡检项目下拉列表数据
		AJ.RS({service:"Others",method:"queryItemsByEquipID",scope:this,params:params,
			success:function(result){
				data2.loadData(result.data);
				if(data2.count()<1){
					CU.hint("未查询到巡检数据！");
					return;
				}
				var row = data2.getFirstRow();//第一行
				data2.each(function(param){
					var itemId = param.row.val('ID');
					if(itemId == row.val("ID")){
						itemid = itemId;
						$("#"+selectId2+" option[value='"+param.row.val('ID')+"']").attr("selected",true);	
					}
				});
				me.queryCheckData(row.val("ID"));
			}				
		});
		
	};

	//取数据
	Model.prototype.queryCheckData = function(itemid){
		var me = this;
		var data3 = this.comp("data3");
		//将日期写到输入框中
		var currentDate = justep.Date.toString(new Date(),"yyyy-MM-dd");
		var monthStartDate=currentDate.substring(0,currentDate.length-2)+"01";
		this.comp("input3").val(monthStartDate);
		this.comp("input4").val(currentDate);
		
		var recodeDate=[];
		var resultValue=[];
		var lowerDanval;
		var upperDanval;
		var dataUnit;
		var itemId = itemid;
		if(CU.isEmpty(strDate1)){
			strDate1 = monthStartDate;
			//strDate1 = "2016-07-01";
		}
		if(CU.isEmpty(strDate2)){
			strDate2 = currentDate;
			//strDate2 = "2016-08-01";
		}
		var params = [equipid,itemId,strDate1,strDate2];
			AJ.RS({service:"Others",method:"queryCheckData",scope:this,params:params,
			success:function(result){
				var ISNORMAL ="";
				data3=me.comp("data3");
				data3.clear();
				var data = result.data;
				//console.log(JSON.stringify(data));
				for(var i=0;i<data.length;i++){
					var obj=data[i];
					lowerDanval = Number(obj.LOWERDANVAL);
					upperDanval = Number(obj.UPPERDANVAL);
					dataUnit = obj.DATAUNIT;
					recodeDate.push(obj.RECODEDATE);
					resultValue.push(Number(obj.RESULTVALUE));
					data[i].CUSTOM1 == "-1"?ISNORMAL="异常":ISNORMAL="正常";
					//alert(data[i].ISNORMAL);
					data3.newData({
						index : 0,
						defaultValues : [{
							"ITEMID" : data[i].ITEMID,
							"RECODEDATE" : data[i].RECODEDATE,
							"ID" : data[i].ID,
							"DATAUNIT" : data[i].DATAUNIT,
							"ITEMNAME" : data[i].ITEMNAME,
							"LOWERDANVAL" : data[i].LOWERDANVAL,
							"UPPERDANVAL" : data[i].UPPERDANVAL,
							"RESULTVALUE" :data[i].RESULTVALUE,
							"ISNORMAL" :ISNORMAL
						}]
					});
				}
				if(data3.count()<1){
					$(".div6").empty();
					return;
				}
				//折线图
				var option = {
					title : {
					// text: '折线图'
					},
					tooltip : {
						trigger : 'axis'
					},
					legend : {
						data : []
					},
					grid : {
						x : 55,
						y : 22,
						x2 : 33,
						y2 : 80
					},
					calculable : true,
					xAxis : [ {
						type : 'category',
						boundaryGap : false,
						data : recodeDate,
						axisLabel : {
							interval : 0,
							formatter : function(val) {
								return val.split(" ").join("\n");
							}
						}
					} ],
					yAxis : [ {
						type : 'value',
						axisLabel : {
							formatter : '{value}'+dataUnit
						}
					} ],
					dataZoom : {
						type : 'slider',
						show : true,
						realtime : true,
						height:40,
						start : 0,
						end : 100
					},
					series : [ {
						name : '显示数据',
						type : 'line',
						data : resultValue,
						markPoint : {
							data : [ {
								type : 'max',
								name : '最大值'
							}, {
								type : 'min',
								name : '最小值'
							} ]
						},

						markLine : {
							data : [
							        [
							         {name: '下限起点', value: lowerDanval,xAxis: -1, yAxis: lowerDanval},
							         {name: '下限终点', value: lowerDanval,xAxis: 10, yAxis: lowerDanval}
							        ],
							        [
							         {name: '上限起点', value: upperDanval,xAxis: -1, yAxis: upperDanval},
							         {name: '上限终点', value: upperDanval,xAxis: 10, yAxis: upperDanval}
							        ]
							        ]
							       
						},
					}, ]
				};
				var myChart = echarts.init(me.getElementByXid('div6'));
				myChart.setOption(option);
				
			}				
		});
	};
	//下拉列表选择
	Model.prototype.select2Change = function(event){
		itemid = event.value;
		this.queryCheckData(itemid);
	};
	//打开调整时间
	Model.prototype.button1Click = function(event){
		$(this.getElementByXid('div4')).slideToggle();
	};
	
	//取消
	Model.prototype.button2Click = function(event){
		$(this.getElementByXid('div4')).slideToggle();
	};
	//确定
	Model.prototype.button3Click = function(event){
		strDate1 = this.comp("input3").val();
		strDate2 = this.comp("input4").val();
		if(CU.isEmpty(strDate1)){
			navigator.notification.alert("填写开始时间！",function(){},"提示","确定");
			return;
		}
		if(CU.isEmpty(strDate2)){
			navigator.notification.alert("填写结束时间！",function(){},"提示","确定");
			return;
		}
		$(this.getElementByXid('div4')).slideToggle();
		this.queryCheckData(itemid);
	};
	//点击行
	Model.prototype.dataTables3RowClick = function(event){
		var row = this.comp("data3").getCurrentRow();
		justep.Shell.showPage(require.toUrl('$UI/emp_app/02equipcheck/CheckItemView.w'),{id:row.val("ID"),value:"equipqurry"});
	};

	return Model;
});