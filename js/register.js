$(function(){
	var register = {
		init:function(){
			this.contentBox = $('.contentBox');
			this.phone = this.contentBox.find('.phone');
			this.email = this.contentBox.find('.email');
			this.bgBox = this.contentBox.find('.bgBox');
			this.ul = this.contentBox.find('.aniBox ul');

			this.inputs = this.contentBox.find('.inp');
			this.inputBox = this.contentBox.find('.inpBox');
			this.tips = this.contentBox.find('.inputTips');

			this.aa1 = false;
			this.aa2 = false;
			this.aa3 = false;
			this.aa4 = false;

			this.bb1 = false;
			this.bb2 = false;
			this.bb3 = false;
			this.bb4 = false;
			this.bb5 = false;

			this.clickPE();
			this.inputFocus();

			this.phonezhanghao();
			this.phonemima();		
			this.phoneCopymima();

			this.emailzhanghao();
			this.emailmima();
			this.emailCopymima();
			this.phonezhanghaoc();

			this.imgPush();
			this.imgPush1();
			this.yanzhengChange();	
			this.yanzhengChange1();

			

			this.iDelete();
			this.pZhuCe();
			this.pZhuCeEmail();
		},
		//phone和email注册的点击事件
		clickPE:function(){
			var that = this;
			this.phone.click(function(){
				that.bgBox.css("left",0);
				that.ul.stop(true).animate({left:0},500);
			});
			this.email.click(function(){
				that.bgBox.css("left",258);
				that.ul.stop(true).animate({left:-600},500);
			});
		},

		//各个框的点击事件
		inputFocus:function(){
			var that = this;
			this.inputs.click(function(){
				//that.tips.eq( that.inputs.index( $(this) ) ).hide(500);
				$(this).find(".inputTips").hide(500);
				that.inputs.removeClass('focusclass');
				$(this).removeClass('trueclass');
				$(this).addClass('focusclass');
			});
			
		},

		
			//var phoneReg = /^1[3-8]\d{9}$/;
			//var pwdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
			//var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;	
		//账号判断
		phonezhanghao:function(){
			
			var that = this;
			this.inputs.eq(0).find('#p_phone').blur(function(){
				$.ajax({
					url:"css/user.json",
					success:function(result){
						var txt = that.inputs.eq(0).find('#p_phone').val();
						var phoneReg = /^1[3-8]\d{9}$/;
						if( phoneReg.test(txt)==true){
							if( result[txt] ){
								//用户名已存在
								that.inputs.eq(0).removeClass('trueclass');
								that.tips.eq(0).html("<i>×</i>用户名已存在").show(500);
								that.aa1 = false;
							}else{
								//都正确
								that.tips.eq(0).hide(500);
								that.inputs.eq(0).addClass('trueclass');
								that.aa1 = true;			
							}
						}else{
							//格式不对
							that.inputs.eq(0).removeClass('trueclass');
							that.tips.eq(0).html("<i>×</i>请输入正确的手机格式").show(500);
							that.aa1 = false;
						}
					}
				});
			});
		},
		//给i绑定删除事件
		iDelete:function(){
			this.inputs.on("click","i",function(){
				$(this).parent().hide(500);
			})
		},
		//密码的验证
		phonemima:function(){
			var that = this;
			this.inputs.eq(1).find('#p_password').blur(function(){
				
				var txt = that.inputs.eq(1).find('#p_password').val();
				var pwdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
							
				if( pwdReg.test(txt)==true){
					
					//都正确
					that.tips.eq(1).hide(500);
					that.inputs.eq(1).addClass('trueclass');
					that.aa2 =true;	
								
				}else{
					//格式不对
					that.inputs.eq(1).removeClass('trueclass');
					that.tips.eq(1).html("<i>×</i>请输入正确的密码格式").show(500);
					that.aa2 = false;
				}
				
			});
		},
		//重复密码
		phoneCopymima:function(){
			var that = this;
			this.inputs.eq(2).find('#p_checkPassword').blur(function(){
				
				var txt = that.inputs.eq(1).find('#p_password').val();
				var txt1 = that.inputs.eq(2).find('#p_checkPassword').val();					
				if( txt1.length>=6 && txt1.length<=20 && txt1 == txt){				
					//都正确
					that.tips.eq(2).hide(500);
					that.inputs.eq(2).addClass('trueclass');	
					that.aa3 = true;
								
				}else{
					//格式不对
					that.inputs.eq(2).removeClass('trueclass');
					that.tips.eq(2).html("<i>×</i>重复密码不正确").show(500);
					that.aa3 = false;
				}
				
			});
		},
		//邮箱账号
		emailzhanghao:function(){

			var that = this;
			this.inputs.eq(5).find('#e_email').blur(function(){
				
				$.ajax({
					url:"css/user.json",
					success:function(result){
						var txt = that.inputs.eq(5).find('#e_email').val();
						
						
						var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
						if( emailReg.test(txt)==true){
							if( result[txt] ){
								//用户名已存在
								that.inputs.eq(5).removeClass('trueclass');
								that.tips.eq(3).html("<i>×</i>用户名已存在").show(500);
								that.bb1 =false;
							}else{
								//都正确
								that.tips.eq(3).hide(500);
								that.inputs.eq(5).addClass('trueclass');	
								that.bb1 =true;		
							}
						}else{
							//格式不对
							that.inputs.eq(5).removeClass('trueclass');
							that.tips.eq(3).html("<i>×</i>请输入正确的邮箱格式").show(500);
							that.bb1 =false;
						}
					}
				});
			});
		},
		//密码的验证
		emailmima:function(){
			var that = this;
			this.inputs.eq(6).find('#e_password').blur(function(){
				
				var txt = that.inputs.eq(6).find('#e_password').val();
				var pwdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
							
				if( pwdReg.test(txt)==true){
					
					//都正确
					that.tips.eq(4).hide(500);
					that.inputs.eq(6).addClass('trueclass');	
					that.bb2 = true;
								
				}else{
					//格式不对
					that.inputs.eq(6).removeClass('trueclass');
					that.tips.eq(4).html("<i>×</i>请输入正确的密码格式").show(500);
					that.bb2 =false;
				}
				
			});
		},
		//重复密码
		emailCopymima:function(){
			var that = this;
			this.inputs.eq(7).find('#e_checkPassword').blur(function(){
				
				var txt = that.inputs.eq(6).find('#e_password').val();
				var txt1 = that.inputs.eq(7).find('#e_checkPassword').val();					
				if( txt1.length>=6 && txt1.length<=20 && txt1 == txt){				
					//都正确
					that.tips.eq(5).hide(500);
					that.inputs.eq(7).addClass('trueclass');	
					that.bb3 =true;
								
				}else{
					//格式不对
					that.inputs.eq(7).removeClass('trueclass');
					that.tips.eq(5).html("<i>×</i>重复密码不正确").show(500);
					that.bb3 = false;
				}
				
			});
		},
		//邮箱部分的手机验证
		phonezhanghaoc:function(){
			var that = this;
			this.inputs.eq(8).find('#e_phone').blur(function(){
				$.ajax({
					url:"css/user.json",
					success:function(result){
						var txt = that.inputs.eq(8).find('#e_phone').val();
						
						var phoneReg = /^1[3-8]\d{9}$/;
						var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
						if( phoneReg.test(txt)==true){
							if( result[txt] ){
								//用户名已存在
								that.inputs.eq(8).removeClass('trueclass');
								that.tips.eq(6).html("<i>×</i>手机已被注册").show(500);
								that.bb5 = false;
							}else{
								//都正确
								that.tips.eq(6).hide(500);
								that.inputs.eq(8).addClass('trueclass');
								that.bb5 = true;
							}
						}else{
							//格式不对
							that.inputs.eq(8).removeClass('trueclass');
							that.tips.eq(6).html("<i>×</i>请输入正确的手机格式").show(500);
							that.bb5 = false;
						}
					}
				});
			});
		},
		////点击更换邮箱验证码图片
		yanzhengChange:function(){
			var that = this;
			var change = $('.e-changeAnother');
			change.click(function(){
				that.imgPush();
			});
		},

		//随机产生数字,并加到img中
		imgPush:function(){
			var a = $('.e-checkBoxCode img');
			var numRan = Math.floor( Math.random()*20 );
			$.getJSON("css/yanzhengma.json",function(result){
				a.attr("src",result[numRan].img);
				a.data("num",result[numRan].num)
			})
		},
		////点击手机更换验证码图片
		yanzhengChange1:function(){
			var that = this;
			var change = $('.changeAnother');
			change.click(function(){
				
				that.imgPush1();
			});
		},

		//随机产生数字,并加到img中
		imgPush1:function(){
			var a = $('.checkBoxCode img');
			var numRan = Math.floor( Math.random()*20 );
			$.getJSON("css/yanzhengma.json",function(result){
				a.attr("src",result[numRan].img);
				a.data("num",result[numRan].num);

			})
		},
		//验证手机验证码
		yanzhengmaPhone:function(){


			var shuru = $('#p_checkCode').val();
			var shiji = $('.checkBoxCode img').data("num");
			//console.log($('.checkBoxCode img'));
			if( shuru == shiji){
				this.aa4 =true;
			}else{
				this.aa4 =false;
			}
		},
		//点击手机注册
		pZhuCe:function(){
			var a = $('.p_zhuceBtn');
			var that = this;
			a.click(function(){
				that.yanzhengmaPhone();
				if(that.aa1 ==true&&that.aa2 ==true&&that.aa3 ==true&&that.aa4 ==true){
					//console.log("手机注册成功");
				}
			})
		},
		//验证邮箱验证码
		yanzhengmaEmail:function(){


			var shuru = $('#e_checkCode').val();
			var shiji = $('.e-checkBoxCode img').data("num");
			//console.log($('.checkBoxCode img'));
			if( shuru == shiji){
				this.bb4 =true;
			}else{
				this.bb4 =false;
			}
		},
		//点击邮箱注册
		pZhuCeEmail:function(){
			var a = $('.e_zhuceBtn');
			var that = this;
			a.click(function(){
				that.yanzhengmaEmail();
				console.log(1)
				if(that.bb1 ==true&&that.bb2 ==true&&that.bb3 ==true&&that.bb4 ==true&&that.bb5 ==true){
					//console.log("邮箱注册成功");
				}
			})
		}
		
	}
	register.init();
})