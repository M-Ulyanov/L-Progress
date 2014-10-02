(function($) {
	jQuery.fn.lprogress = function(options){

		// Параметры по умолчанию
		var defaults = $.extend({}, {
		loadReady : false,
		startValue: 0,
		maxValue: 100,
		animateSpeed : 1000,
		decimals: 0,
		}, options);
		
		// Глобальные переменные
		var globalStep = 0,
			self = this;

		console.log(defaults)

		
		return this.each(function() {
		
			// Переменные	
			var progress = $(this),
				line = $('<div class="inner-progress">'),
				buttonstep = $('.progressbar-step'),
				numberPercent = $('<span class="number-percent">');
				
			//	Вставка элементов в Dom
			$(progress).addClass('progressbar').append(line);
			$(line).append(numberPercent);

			// Установка начального значения
			$(line).css('width', defaults.startValue + '%');

			// Функция автозагрузки
			if(defaults.loadReady){
				$(line).animate({
					width: '100%'
				}, defaults.animateSpeed);

				$(line).find(numberPercent).animate({ 
					num: defaults.maxValue,
				}, 
				{ duration: defaults.animateSpeed,
					    step: function (num){
					        this.innerHTML = (num).toFixed(defaults.decimals) + '%'
	    			}
				});
			};

			if(defaults.startValue != 0){
				
			}

			
			// При клике на элементы управления
			$('.progressbar-step').on('click', function(event){
				var dataStep = parseInt($(this).attr('data-step')),
				dataInit = $(this).attr('data-init'),
				elem = $('#' + dataInit).find('.inner-progress');

				if(defaults.startValue != 0 && globalStep == 0){
					console.log(defaults.startValue)
					globalStep = defaults.startValue;
				}
				
				globalStep += dataStep;

				if(globalStep > defaults.maxValue)
					globalStep = defaults.maxValue;
				
				// Анимация полоски и чисел	
				$(elem).stop(true).animate({
					width: globalStep + '%',
				}, defaults.animateSpeed);

				$(elem).find(numberPercent).stop(true).animate({ 
					num: globalStep
				}, 
				{ duration: defaults.animateSpeed,
					    step: function (num){
					        this.innerHTML = (num).toFixed(defaults.decimals) + '%'
	    			}
				});
			});
			
		});
	}
})(jQuery);




