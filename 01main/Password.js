define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
    var AJ = require("$UI/emp_app/common/util/Pajax");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.passBtnClick = function(event){
	     var self = this;
	     var sub =JSON.parse(localStorage.getItem('SUB'));
		if ($.trim(this.comp('oldpassword').val()) === "" ) {
			this.comp("messageDialog").show({
				"title" : "温馨提示",
				"message" : "请输入旧密码！"
			});return;
		}else if 
		($.trim(this.comp('newpassword').val()) === "") {
			this.comp("messageDialog").show({
				"title" : "温馨提示",
				"message" : "请输入新密码！"
			});return;
		}else if 
		($.trim(this.comp('affirmpassword').val()) === "") {
			this.comp("messageDialog").show({
				"title" : "温馨提示",
				"message" : "请输入确认密码！"
			});return;
		}else if
		 ($.trim(this.comp('affirmpassword').val())!== $.trim(this.comp('newpassword').val())) {
				this.comp("messageDialog").show({
				"title" : "温馨提示",
				"message" : "与输入的新密码不一致！"
			    });return;
			}
			var params =[sub.userid,sub.companyid,this.comp('oldpassword').val(),this.comp('newpassword').val()];
			AJ.RS({service:"Personnel",method:"updatePassword",scope:this,params:params,
				success:function(result){
				if (result.data.success==false){
				    self.comp("messageDialog").show({
				      "title" : "温馨提示",
				      "message" : result.data.message,
			     });
				}else{
				 self.comp("messageDialog").show({
				      "title" : "温馨提示",
				      "message" : "密码修改成功！"
			     });
				}
				}				
			});
	};

	return Model;
});