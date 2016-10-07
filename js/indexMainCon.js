$(function(){
	/*gif展示区*/
	var gifShow = {
		init:function(){
			this.gifShowBox = $('.gifShowBox');
			this.showDiv = this.gifShowBox.find('.showDiv');
			this.spans = this.showDiv.find('span');
			this.ul = this.showDiv.find('ul');

			this.index = 1;
			this.ul.css({
				left: -993
			});
			this.showDivMouseHover();
			this.rightClick();
			this.leftClick();
		},
		//鼠标移入移除出
		showDivMouseHover:function(){
			var that = this;
			this.showDiv.hover(function(){
				that.spans.show();
			},function(){
				that.spans.hide();
			});
		},
		//点击右侧按钮
		rightClick:function(){
			var that = this;
			this.spans.eq(1).click(function(){
				that.index++;
				that.index %= 4;
				that.changePos();
			});
		},
		//点击左侧按钮
		leftClick:function(){
			var that = this;
			this.spans.eq(0).click(function(){
				that.index--;
				that.changePos();
			});
		},
		//改变那位置
		changePos:function(){
			var that = this;

			this.ul.stop(true,true).animate({
				left: -993*that.index
			},function(){
				if(that.index >= 3 ){
					that.ul.css({
						left: -993
					});
					that.index = 1;
				}
				if(that.index <= 0){
					that.ul.css({
						left: -993*2
					});
					that.index = 2;
				}
			});
		}
	}

	/*限时促销区*/
	var timeShow = {
		init:function(){
			
			this.day = 0;
			this.hour = 0;
			this.minute = 0;
			this.sec = 0;


			this.initData();
		},
		initData: function(){
			var that = this;
			$.getJSON( 'css/index.json', function(result){
				var timeShowPro = result.product;
				//对数据进行处理

				setInterval(function(){
					var content = "";
					for(var key in timeShowPro){
							//第一次是101
							that.calDate(timeShowPro[key].date);
							content += '<dl class="dlborderL0">'
									+	'<dt><a href="#"><img src="'+ timeShowPro[key].img +'"></a></dt>'
									+	'<dd>'
									+		'<p class="title">'+ timeShowPro[key].title +'</p>'
									+		'<p class="pro-price">￥<span class="pro-price-txt">'+ timeShowPro[key].price +'</span></p>'
									+		'<div class="timeBox">'
									+			'剩余:<span class="day">'+ that.day +'</span>天<span class="hour">'+ that.hour+'</span>小时<span class="minute">'+ that.minute +'</span>分<span class="sec">'+ that.sec+'</span>&nbsp;秒'
									+		'</div>'
									+	'</dd>'
									+	'</dl>';

						}		
					 $('.timeShow-con').html(content);
				},1000);
			} )
		},
		//计算倒计时
		calDate:function(date){
			var that = this;
			//console.log(date);
			setInterval(function(){
				var cuxiaoDate = new Date( date );
				var nowDate = new Date();
				var chaTime = cuxiaoDate.getTime() - nowDate.getTime();
				//60 60 24 
				that.day = parseInt( chaTime / ( 1000*60*60*24 ) );
				that.hour = parseInt( ( chaTime - that.day*1000*60*60*24 ) / (1000*60*60) );
				that.minute = parseInt( ( chaTime - that.day*1000*60*60*24 - that.hour*1000*60*60 ) / (1000*60));
				that.sec =  parseInt( ( chaTime - that.day*1000*60*60*24 - that.hour*1000*60*60 - that.minute*1000*60) / 1000);
				//console.log(that.day);
				/*console.log(that.hour);
				console.log(that.minute);*/
				//console.log(that.sec);
				
			},1000)
		}
	}

	/*推荐区*/
	var buyRecommed = {
		init:function(){
			this.img = $('.buyRecommed-pro dl dt');
			this.buyRecommedBot = $('.buyRecommed-bot');
			this.tips1 = this.buyRecommedBot.find('.tips1');
			this.tips2 = this.buyRecommedBot.find('.tips2');
			this.tips3 = this.buyRecommedBot.find('.tips3');
			this.tips4 = this.buyRecommedBot.find('.tips4');
			this.tips5 = this.buyRecommedBot.find('.tips5');
			this.tips6 = this.buyRecommedBot.find('.tips6');
			this.initData();
			this.imgHover();
		},
		//推荐区数据
		initData:function(){
			var that = this;
			$.getJSON('css/index.json',function(result){
				var data = result.tuijian;
				that.buyRecommedBot.find('.img1').attr("src",data.img1);
				that.buyRecommedBot.find('.img2').attr("src",data.img2);
				that.tips1.find('p').html(data.center[201].title);
				that.tips1.find('span').html(data.center[201].price);
				that.tips1.next().find('img').attr("src",data.center[201].img);
				that.tips2.find('p').html(data.center[202].title);
				that.tips2.find('span').html(data.center[202].price);
				that.tips2.next().find('img').attr("src",data.center[202].img);
				that.tips3.find('p').html(data.center[203].title);
				that.tips3.find('span').html(data.center[203].price);
				that.tips3.next().find('img').attr("src",data.center[203].img);
				that.tips4.find('p').html(data.center[204].title);
				that.tips4.find('span').html(data.center[204].price);
				that.tips4.next().find('img').attr("src",data.center[204].img);
				that.tips5.find('p').html(data.center[205].title);
				that.tips5.find('span').html(data.center[205].price);
				that.tips5.next().find('img').attr("src",data.center[205].img);
				that.tips6.find('p').html(data.center[206].title);
				that.tips6.find('span').html(data.center[206].price);
				that.tips6.next().find('img').attr("src",data.center[206].img);
			})
		},
		imgHover:function(){
			var that = this;
			this.img.hover(function(){
				$(this).find('img').stop(true).animate({
					left: 55
				},200);
			},function(){
				$(this).find('img').stop(true).animate({
					left: 67
				},200);
			})
		}
	}

	/*楼层轮播*/
	/*1楼*/
	var floor1carousel = {
		init:function(){
			this.firstFloor = $('.firstFloor');
			this.topCarou = $('.firstFloor .topCarou');
			this.showDiv = this.topCarou.find('.carou');
			this.spans = this.showDiv.find('span');
			this.ul = this.showDiv.find('ul');
			this.circlesli = $('.firstFloor .carou .circle li');

			this.index = 1;
			this.num = 0;

			this.ul.css({
				left: -440
			});
			
			this.timer = 0;

			this.initData();
			this.rightClick();
			this.leftClick();
			this.autoplay();
			this.mouseHover();
			this.circlesliHover();
		},
		//初始化数据
		initData:function(){
			var that = this;
			$.getJSON('css/index.json',function(result){
				var data = result.floor.first;
				that.firstFloor.find('.ff1').attr("src",data.img1);
				that.firstFloor.find('.ff2').attr("src",data.img2);
				that.firstFloor.find('.ff3').attr("src",data.img3);
				that.firstFloor.find('.ff4').attr("src",data.img4);
				that.firstFloor.find('.ff5').attr("src",data.img5);
				that.firstFloor.find('.ff6').attr("src",data.img6);
				that.firstFloor.find('.ff7').attr("src",data.img7);
				that.firstFloor.find('.ff8').attr("src",data.img8);
				that.firstFloor.find('.clone1').attr("src",data.lunboimg2);
				that.firstFloor.find('.clone2').attr("src",data.lunboimg1);
				that.firstFloor.find('.lunboimg1').attr("src",data.lunboimg1);
				that.firstFloor.find('.lunboimg2').attr("src",data.lunboimg2);
			})
		},
		//自动轮播
		autoplay:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			},2000)
		},
		//点击右侧按钮
		rightClick:function(){
			var that = this;
			this.spans.eq(1).click(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//点击左侧按钮
		leftClick:function(){
			var that = this;
			this.spans.eq(0).click(function(){
				that.index--;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//改变位置
		changePos:function(){
			var that = this;
			this.circlesli.eq(that.num).addClass('liactive').siblings().removeClass('liactive');
			this.ul.stop(true,true).animate({
				left: -440*that.index
			},function(){
				if(that.index >= 3 ){
					that.ul.css({
						left: -440
					});
					that.index = 1;
				}
				if(that.index <= 0){
					that.ul.css({
						left: -440*2
					});
					that.index = 2;
				}
			});
		},
		//控制暂停
		mouseHover:function(){
			var that = this;
			this.showDiv.hover(function(){
				clearInterval(that.timer)
			},function(){
				that.autoplay();
			});
		},
		//鼠标滑入小圆圈
		circlesliHover:function(){
			var that = this;
			this.circlesli.hover(function(){
				$(this).addClass('liactive').siblings().removeClass('liactive');
				that.num = $(this).index();
				that.index = that.num + 1;
				that.changePos();
			},function(){
				//啥也没有
			});
		}
	}

	/*2楼*/
	var floor2carousel = {
		init:function(){
			this.secondFloor = $('.secondFloor');
			this.topCarou = $('.secondFloor .topCarou');
			this.showDiv = this.topCarou.find('.carou');
			this.spans = this.showDiv.find('span');
			this.ul = this.showDiv.find('ul');
			this.circlesli = $('.secondFloor .carou .circle li');

			this.index = 1;
			this.num = 0;

			this.ul.css({
				left: -440
			});
			
			this.timer = 0;

			this.initData();
			this.rightClick();
			this.leftClick();
			this.autoplay();
			this.mouseHover();
			this.circlesliHover();
		},
		//初始化数据
		initData:function(){
			var that = this;
			$.getJSON('css/index.json',function(result){
				var data = result.floor.second;
				that.secondFloor.find('.ff1').attr("src",data.img1);
				that.secondFloor.find('.ff2').attr("src",data.img2);
				that.secondFloor.find('.ff3').attr("src",data.img3);
				that.secondFloor.find('.ff4').attr("src",data.img4);
				that.secondFloor.find('.ff5').attr("src",data.img5);
				that.secondFloor.find('.ff6').attr("src",data.img6);
				that.secondFloor.find('.ff7').attr("src",data.img7);
				that.secondFloor.find('.ff8').attr("src",data.img8);
				that.secondFloor.find('.clone1').attr("src",data.lunboimg2);
				that.secondFloor.find('.clone2').attr("src",data.lunboimg1);
				that.secondFloor.find('.lunboimg1').attr("src",data.lunboimg1);
				that.secondFloor.find('.lunboimg2').attr("src",data.lunboimg2);
			})
		},
		//自动轮播
		autoplay:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			},2000)
		},
		//点击右侧按钮
		rightClick:function(){
			var that = this;
			this.spans.eq(1).click(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//点击左侧按钮
		leftClick:function(){
			var that = this;
			this.spans.eq(0).click(function(){
				that.index--;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//改变位置
		changePos:function(){
			var that = this;
			this.circlesli.eq(that.num).addClass('liactive').siblings().removeClass('liactive');
			this.ul.stop(true,true).animate({
				left: -440*that.index
			},function(){
				if(that.index >= 3 ){
					that.ul.css({
						left: -440
					});
					that.index = 1;
				}
				if(that.index <= 0){
					that.ul.css({
						left: -440*2
					});
					that.index = 2;
				}
			});
		},
		//控制暂停
		mouseHover:function(){
			var that = this;
			this.showDiv.hover(function(){
				clearInterval(that.timer)
			},function(){
				that.autoplay();
			});
		},
		//鼠标滑入小圆圈
		circlesliHover:function(){
			var that = this;
			this.circlesli.hover(function(){
				$(this).addClass('liactive').siblings().removeClass('liactive');
				that.num = $(this).index();
				that.index = that.num + 1;
				that.changePos();
			},function(){
				//啥也没有
			});
		}
	}

	/*3楼*/
	var floor3carousel = {
		init:function(){
			this.thirdFloor = $('.thirdFloor');
			this.topCarou = $('.thirdFloor .topCarou');
			this.showDiv = this.topCarou.find('.carou');
			this.spans = this.showDiv.find('span');
			this.ul = this.showDiv.find('ul');
			this.circlesli = $('.thirdFloor .carou .circle li');

			this.index = 1;
			this.num = 0;

			this.ul.css({
				left: -440
			});
			
			this.timer = 0;

			this.initData();
			this.rightClick();
			this.leftClick();
			this.autoplay();
			this.mouseHover();
			this.circlesliHover();
		},
		//初始化数据
		initData:function(){
			var that = this;
			$.getJSON('css/index.json',function(result){
				var data = result.floor.third;
				that.thirdFloor.find('.ff1').attr("src",data.img1);
				that.thirdFloor.find('.ff2').attr("src",data.img2);
				that.thirdFloor.find('.ff3').attr("src",data.img3);
				that.thirdFloor.find('.ff4').attr("src",data.img4);
				that.thirdFloor.find('.ff5').attr("src",data.img5);
				that.thirdFloor.find('.ff6').attr("src",data.img6);
				that.thirdFloor.find('.ff7').attr("src",data.img7);
				that.thirdFloor.find('.ff8').attr("src",data.img8);
				that.thirdFloor.find('.clone1').attr("src",data.lunboimg2);
				that.thirdFloor.find('.clone2').attr("src",data.lunboimg1);
				that.thirdFloor.find('.lunboimg1').attr("src",data.lunboimg1);
				that.thirdFloor.find('.lunboimg2').attr("src",data.lunboimg2);
			})
		},
		//自动轮播
		autoplay:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			},2000)
		},
		//点击右侧按钮
		rightClick:function(){
			var that = this;
			this.spans.eq(1).click(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//点击左侧按钮
		leftClick:function(){
			var that = this;
			this.spans.eq(0).click(function(){
				that.index--;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//改变位置
		changePos:function(){
			var that = this;
			this.circlesli.eq(that.num).addClass('liactive').siblings().removeClass('liactive');
			this.ul.stop(true,true).animate({
				left: -440*that.index
			},function(){
				if(that.index >= 3 ){
					that.ul.css({
						left: -440
					});
					that.index = 1;
				}
				if(that.index <= 0){
					that.ul.css({
						left: -440*2
					});
					that.index = 2;
				}
			});
		},
		//控制暂停
		mouseHover:function(){
			var that = this;
			this.showDiv.hover(function(){
				clearInterval(that.timer)
			},function(){
				that.autoplay();
			});
		},
		//鼠标滑入小圆圈
		circlesliHover:function(){
			var that = this;
			this.circlesli.hover(function(){
				$(this).addClass('liactive').siblings().removeClass('liactive');
				that.num = $(this).index();
				that.index = that.num + 1;
				that.changePos();
			},function(){
				//啥也没有
			});
		}
	}

	/*4楼*/
	var floor4carousel = {
		init:function(){
			this.forthFloor = $('.forthFloor');
			this.topCarou = $('.forthFloor .topCarou');
			this.showDiv = this.topCarou.find('.carou');
			this.spans = this.showDiv.find('span');
			this.ul = this.showDiv.find('ul');
			this.circlesli = $('.forthFloor .carou .circle li');

			this.index = 1;
			this.num = 0;

			this.ul.css({
				left: -440
			});
			
			this.timer = 0;

			this.initData();
			this.rightClick();
			this.leftClick();
			this.autoplay();
			this.mouseHover();
			this.circlesliHover();
		},
		//初始化数据
		initData:function(){
			var that = this;
			$.getJSON('css/index.json',function(result){
				var data = result.floor.forth;
				that.forthFloor.find('.ff1').attr("src",data.img1);
				that.forthFloor.find('.ff2').attr("src",data.img2);
				that.forthFloor.find('.ff3').attr("src",data.img3);
				that.forthFloor.find('.ff4').attr("src",data.img4);
				that.forthFloor.find('.ff5').attr("src",data.img5);
				that.forthFloor.find('.ff6').attr("src",data.img6);
				that.forthFloor.find('.ff7').attr("src",data.img7);
				that.forthFloor.find('.ff8').attr("src",data.img8);
				that.forthFloor.find('.clone1').attr("src",data.lunboimg2);
				that.forthFloor.find('.clone2').attr("src",data.lunboimg1);
				that.forthFloor.find('.lunboimg1').attr("src",data.lunboimg1);
				that.forthFloor.find('.lunboimg2').attr("src",data.lunboimg2);
			})
		},
		//自动轮播
		autoplay:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			},2000)
		},
		//点击右侧按钮
		rightClick:function(){
			var that = this;
			this.spans.eq(1).click(function(){
				that.index++;
				that.index %= 4;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//点击左侧按钮
		leftClick:function(){
			var that = this;
			this.spans.eq(0).click(function(){
				that.index--;
				that.num = that.num==0 ? 1: 0;
				that.changePos();
			});
		},
		//改变位置
		changePos:function(){
			var that = this;
			this.circlesli.eq(that.num).addClass('liactive').siblings().removeClass('liactive');
			this.ul.stop(true,true).animate({
				left: -440*that.index
			},function(){
				if(that.index >= 3 ){
					that.ul.css({
						left: -440
					});
					that.index = 1;
				}
				if(that.index <= 0){
					that.ul.css({
						left: -440*2
					});
					that.index = 2;
				}
			});
		},
		//控制暂停
		mouseHover:function(){
			var that = this;
			this.showDiv.hover(function(){
				clearInterval(that.timer)
			},function(){
				that.autoplay();
			});
		},
		//鼠标滑入小圆圈
		circlesliHover:function(){
			var that = this;
			this.circlesli.hover(function(){
				$(this).addClass('liactive').siblings().removeClass('liactive');
				that.num = $(this).index();
				that.index = that.num + 1;
				that.changePos();
			},function(){
				//啥也没有
			});
		}
	}

	/*5楼*/
	var floor5 = {
		init:function(){
			this.imgs = $('.fifthFloor a img');
			var that = this;
			$.getJSON("css/index.json",function(result){
				var data = result.floor.fifth;
				$.each(data,function(index,n){
					that.imgs.eq(index).attr('src',n);	
				})
			})
		}
	}

	/*6楼*/
	var floor6 = {
		init:function(){
			this.sixthFloor = $('.sixthFloor');
			this.floorBot = this.sixthFloor.find('.floor-bot');
			this.as = this.floorBot.find('a');
			this.imgs = this.as.find('img');

			this.initData();
			this.mouseHover();
		},
		//数据
		initData:function(){
			var that = this;
			$.getJSON("css/index.json",function(result){
				var data = result.floor.sixth;
				$.each(data,function(index,n){
					that.imgs.eq(index).attr('src',n);	
				})
			})
		},
		//鼠标滑过滑出
		mouseHover:function(){
			this.as.hover(function(){
				$(this).find('img').stop(true).animate({
					left: -152
				},500);
			},function(){
				$(this).find('img').stop(true).animate({
					left: 0
				},500);
			});
		}
	}


	buyRecommed.init();
	timeShow.init();
	gifShow.init();
	floor1carousel.init();
	floor2carousel.init();
	floor3carousel.init();
	floor4carousel.init();
	floor5.init();
	floor6.init();
})