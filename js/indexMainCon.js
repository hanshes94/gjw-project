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

	gifShow.init();
})