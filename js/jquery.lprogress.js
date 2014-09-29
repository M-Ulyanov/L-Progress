(function($) {
	jQuery.fn.lprogress = function(options){
		var defaults = $.extend({}, {
		loadReady : false,
		animateSpeed : 600,
		}, options);
		
		//
		var globalStep = 0;
		
		return this.each(function() {
		
			// Переменные	
			var progress = $(this),
				line = $('<div class="inner-progress">'),
				percentage = $('<span class="percentage ">'),
				initAnimate = true,
				buttonstep = $('.progressbar-step');
				
			//	
			$(progress).addClass('progressbar').append(line);

			//
			if(defaults.loadReady){
				$(line).animate({
					width: '100%'
				}, defaults.animateSpeed)};
			
			//
			$('.progressbar-step').on('click', function(event){
					var dataStep = parseInt($(this).attr('data-step')),
					dataInit = $(this).attr('data-init'),
					elem = $('#' + dataInit).find('.inner-progress'),
					
					globalStep += dataStep;
					
				$(elem).animate({
					width: globalStep + '%',
				}, defaults.animateSpeed);
			});
			
		});
	}
})(jQuery);




