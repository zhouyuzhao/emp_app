define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Button = require("$UI/system/components/justep/button/button");
	require("cordova!com.justep.cordova.plugin.iFlytek");
	var interim = false;
	var Model = function(){
		this.callParent();
	};
	//作业安全
	Model.prototype.button1Click = function(event){
		if(interim){
			navigator.speech.startSpeaking("作业安全，安全生产必须牢记树立红线意识。");
		}
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		$(this.getElementByXid('div4')).slideUp();
		$(this.getElementByXid('div5')).slideUp();
		$(this.getElementByXid('div3')).slideToggle();
	};
	//应急知识
	Model.prototype.button2Click = function(event){
		if(interim){
			navigator.speech.startSpeaking("应急知识。");
		}
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		$(this.getElementByXid('div3')).slideUp();
		$(this.getElementByXid('div5')).slideUp();
		$(this.getElementByXid('div4')).slideToggle();
	};
	//承包合作
	Model.prototype.button3Click = function(event){
		if(interim){
			navigator.speech.startSpeaking("承包合作，安全才能共赢，匠心方有未来。");
		}
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		$(this.getElementByXid('div3')).slideUp();
		$(this.getElementByXid('div4')).slideUp();
		$(this.getElementByXid('div5')).slideToggle();
	};
	//急救
	Model.prototype.button8Click = function(event) {
		var me = this;
		if(interim){
			navigator.speech.startSpeaking("急救。");
		}
		var name = ["急救流程","心肺复苏", "止血包扎", "烧烫触电", "骨折搬运","淹溺气梗","中暑昏迷","有限空间","食物中毒","动物咬伤"];
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		if (parentNode) {
		for(var i=0;i<name.length;i++){
		
			var flag = {
				"xid" : "btn"+i,
				"label" : name[i],
				"parentNode" : parentNode,
				"class" : "btn x-purple butt",
			};
			var button = new Button(flag);
			button.on("onClick", function(event) {
					var name = event.source.get('label');
					if(interim){
						navigator.speech.startSpeaking(name+"。");
					}
					me.toShow(name);
			});
			}
		}
	};
	//逃生
	Model.prototype.button9Click = function(event){
		var me = this;
		if(interim){
			navigator.speech.startSpeaking("逃生。迅速撤离、保持体力、科学自护、及时报警、冷静分析、坚定信念。不恋财、不拥堵、不盲从、不慌张。");
		}
		var name = [ "火场", "结绳", "地震", "车内" ];
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		if (parentNode) {
		for(var i=0;i<name.length;i++){
			var flag = {
				"xid" : "btn"+i,
				"label" :name[i],
				"parentNode" : parentNode,
				"class" : "btn x-purple butt"
			};
			var button = new Button(flag);
			button.on("onClick", function(event) {
					var name = event.source.get('label');
					if(interim){
						navigator.speech.startSpeaking(name+"。");
					}
					me.toShow(name);
			});
			}
		}
	};
	//灭火
	Model.prototype.button10Click = function(event){
		var me = this;
		if(interim){
			navigator.speech.startSpeaking("灭火。");
		}
		var name = [ "灭火5阶段","起初灭火", "煤气泄漏", "灭火器", "煤气灭火","补救禁忌","生产设备火灾","特种库火灾"];
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		if (parentNode) {
		for(var i=0;i<name.length;i++){
		
			var flag = {
				"xid" : "btn"+i,
				"label" : name[i],
				"parentNode" : parentNode,
				"class" : "btn x-purple butt"
			};
			var button = new Button(flag);
			button.on("onClick", function(event) {
					var name = event.source.get('label');
					if(interim){
						navigator.speech.startSpeaking(name+"。");
					}
					me.toShow(name);
			});
			}
		}
	};
	//备忘
	Model.prototype.button11Click = function(event){
		var me = this;
		if(interim){
			navigator.speech.startSpeaking("备忘。有备无患、思则有备、居安思危。");
		}
		var name = [ "手机安全注意事项", "交通事故保险知识", "家庭爆炸品", "交通违章","常见有毒食物","常用电话"];
		var parentNode = this.getElementByXid("div10");
		parentNode.innerHTML = "";
		if (parentNode) {
		for(var i=0;i<name.length;i++){
		
			var flag = {
				"xid" : "btn"+i,
				"label" : name[i],
				"parentNode" : parentNode,
				"class" : "btn x-purple butt"
			};
			var button = new Button(flag);
			button.on("onClick", function(event) {
					var name = event.source.get('label');
					if(interim){
						navigator.speech.startSpeaking(name+"。");
					}
					me.toShow(name);
			});
			}
		}
	};
	//语音开关
	Model.prototype.toggle1Change = function(event){
		var value=this.comp("toggle1").get("value");
		if(value){
			interim = true;
		}else{
			interim = false;
		}
	};
	//工作票补充规定
	Model.prototype.button4Click = function(event){
		var name = event.source.get('label');
		if(interim){
			navigator.speech.startSpeaking(name+"。");
		}
		this.toShow(name);
	};
	//高风险作业简要说明
	Model.prototype.button5Click = function(event){
		var name = event.source.get('label');
		if(interim){
			navigator.speech.startSpeaking(name+"。");
		}
		this.toShow(name);
	};
	//检修工作任务单
	Model.prototype.button6Click = function(event){
		var name = event.source.get('label');
		if(interim){
			navigator.speech.startSpeaking(name+"。");
		}
		this.toShow(name);
	};
	//事故事件分级处理
	Model.prototype.button7Click = function(event){
		var name = event.source.get('label');
		if(interim){
			navigator.speech.startSpeaking(name+"。");
		}
		this.toShow(name);
	};
	//资格预审所需资料
	Model.prototype.button12Click = function(event){
		if(interim){
			navigator.speech.startSpeaking("资格预审所需资料。");
		}
	};
	//主要风险及控制措施
	Model.prototype.button13Click = function(event){
		if(interim){
			navigator.speech.startSpeaking("主要风险及控制措施。");
		}
	};
	//相关安全奖惩规定
	Model.prototype.button14Click = function(event){
		if(interim){ 
			navigator.speech.startSpeaking("相关安全奖惩规定。");
		}
	};
	//跳转
	Model.prototype.toShow = function(name){
		var windowDialog = this.comp("windowDialog1")
		windowDialog.set({title:name})
		windowDialog.open({data:name});
	}
	
	Model.prototype.button15Click = function(event){
		this.close();
	};
	

	
	Model.prototype.modelParamsReceive = function(event){
		this.button2Click(event);
	};
	

	
	return Model;
});