$(function(){
	var images = ['assets/img/main__screen1.jpg', 
			      'assets/img/main__screen2.jpg', 
			      'assets/img/main__screen3.jpg'];
	var block = $('.intro');
	var current = 0

	
	function changeColor(){
		current = (current + 1) % images.length;
		let img = images[current];

		block.animate({'opacity':'0'},300,function(){
			$(this).css(  {'background': 'url('+ img +') ',
								'background-position': 'center center', 
								'background-size': 'cover',
								'background-repeat': 'no-repeat'} );
			$(this).animate({'opacity':'1'},300);
		});
		
	}

	setInterval(changeColor, 5000);
})