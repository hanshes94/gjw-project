$(function(){
	var login = {
		init:function(){
			this.contentBox = $('.contentBox');
			this.inputs = this.contentBox.find('.inp');
			this.inputBox = this.contentBox.find('.inpBox');
			this.subTxt = this.contentBox.find('.subTxt');
			this.userData = {};
			this.inputFocus();
			this.subTxtClick();
			this.txtChange();
			this.imgPush();
			this.yanzhengChange();
		},

		//三个输入框的聚焦,失去焦点事件
		inputFocus:function(){
			var that = this;
			this.inputs.focus(function(){
				that.inputBox.eq( that.inputs.index( $(this) ) ).addClass('focusclass');
			});
			this.inputs.blur(function(){
				that.inputBox.eq( that.inputs.index( $(this) ) ).removeClass('focusclass');
			});
		},

		//点击登录
		subTxtClick:function(){
			var that = this;
			this.subTxt.on('click',function(){
				//var phoneReg = /^1[3-8]\d{9}$/;
				//var pwdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
				//var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
				
				//that.userAjax( "css/user.json" , that.zhanghao );

				$.ajax({
					url:"css/user.json",
					success:function(result){
						var txt = that.inputs.eq(0).val();
						var pwd = that.inputs.eq(1).val();
						var yanzheng = that.inputs.eq(2).val();
						var num = that.inputs.eq(2).next().data('num');
						var userPassTan = that.contentBox.find(".userPassTan");
						var checkBox = that.contentBox.find(".tick input")[0];//容易忘记要转成js对象
						if(result[txt]){
							if(pwd == ""){//密码不为空
								userPassTan.stop(true).show(500);
							}else if( pwd != result[txt] ){//密码不正确
								userPassTan.stop(true).show(500);
							}else if( yanzheng == num ){//用户名和密码都正确
								//console.log("都对了")
								if( checkBox.checked == true ){
									that.userData = {
										username:txt,
										password:pwd
									} 
									that.setCookie();
									
								}
								
							}

						}else{
							var userTan = that.contentBox.find(".userTan");
							userTan.stop(true).show(500);
						}	
					}
				})


			})
		},

		//输入关闭  
		txtChange:function(){
			var userTan = this.contentBox.find(".userTan");
			var userPassTan = this.contentBox.find(".userPassTan");
			var passclose = userPassTan.find('i');
			var close = userTan.find('i');

			this.inputs.eq(0).on('input porpertychange',function(){
				userTan.stop(true).hide(500);
			});
			this.inputs.eq(1).on('input porpertychange',function(){
				userPassTan.stop(true).hide(500);
			});
			close.click(function(){
				 userTan.stop(true).hide(500);
			});
			passclose.click(function(){
				 userPassTan.stop(true).hide(500);
			});
		},
		//点击更换验证码图片
		yanzhengChange:function(){
			var that = this;
			var change = $('.checkBox a');
			change.click(function(){
				that.imgPush();
			});
		},

		//随机产生数字,并加到img中
		imgPush:function(){
			var a = $('.checkBox img');
			var numRan = Math.floor( Math.random()*20 );
			$.getJSON("css/yanzhengma.json",function(result){
				a.attr("src",result[numRan].img);
				a.data("num",result[numRan].num)
			})
		},
		setCookie:function(){
			 $.cookie( "userData" , JSON.stringify(this.userData ) ,{expires:365,path:'/'})
		},
		getCookie:function(){
			this.userData = $.cookie('userData')||"{}";
			this.userData = JSON.parse( this.userData );
		}


		/*
		//调用ajax
		userAjax:function(url,success){
			
			$.ajax({
				url:url,
				success:success
			});
		},
		//账号处理
		zhanghao:function(result){
			console.log(result);
			var that = this
			var txt = that.inputs.eq(0).val();
			console.log(txt)
		}*/
	}


	login.init();
})