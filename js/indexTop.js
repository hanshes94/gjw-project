/*顶端二维码*/
$(function(){
	//购酒网顶端代码
	var top = {
		init:function(){
			//顶端左侧
			this.topBox = $('.topBox');
			this.topFocusUs = this.topBox.find('.topFocusUs');
			this.top2DCode = this.topBox.find('.top2DCode');
			this.erweima02 = this.topFocusUs.find('.icon-erweima02');
			this.icon11 = this.topFocusUs.find('.icon-icon11');

			//顶端右侧
			this.userCenter = this.topBox.find(".userCenter");
			this.icon12 = this.topBox.find('.icon-icon12');
			this.userjsBox =  this.topBox.find('.user-jsBox');
			this.userCenterC = this.topBox.find('.userCenterC')
 
			//二位码移除的1秒延时器
			this.timer = 0;

			this.topFocusUsHover();
			this.userCenterHover();
		},
		//鼠标滑过滑出  顶部的关注
		topFocusUsHover:function(){
			var that = this;
			this.topFocusUs.hover(function(){		
				that.erweima02.addClass('top-iconz');//旋转的类
				that.icon11.addClass('top-iconz');
				that.topFocusUs.css({
					color:'#c40000',
					backgroundColor: 'white'
				});
				clearTimeout(that.timer);
				that.top2DCode.stop(true).show();
			},function(){
				that.erweima02.removeClass('top-iconz');
				that.icon11.removeClass('top-iconz');
				that.topFocusUs.css({
					color:'#656565',
					backgroundColor: ''
				});
				that.timer = setTimeout(function(){//一秒后消失
					that.top2DCode.stop(true).hide();
				}, 1000)		
			})
		},
		//用户中心鼠标滑过
		userCenterHover:function(){
			var that = this;
			this.userCenter.hover(function(){
				that.icon12.addClass('top-iconz');
				that.userjsBox.show();
				that.userCenterC.css({
					backgroundColor:"#fff",
					boxShadow: '0 0 1px rgba(0,0,0,0.3)'
				})
			},function(){
				that.icon12.removeClass('top-iconz');
				that.userjsBox.hide();
				that.userCenterC.css({
					backgroundColor:"",
					boxShadow:''
				})
			})
		}

	}
	top.init();

});