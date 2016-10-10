$(function(){
	var other = {
		init:function(){
			this.navLeft = $('.navLeft');

			this.navShow();
		},
		navShow:function(){	
			var a = this.navLeft.find('.menu');
			this.navLeft.hover(function(){
				a.show();
			},function(){
				a.hide();
			})

		}
	}
	other.init();
})