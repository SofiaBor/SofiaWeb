$(document).ready(function () {	

	var currentTime = 0;
	
	var interval;	
	$('#go_stop').on('click',function(e){
		b_text = $(this).text();
		if(b_text == 'GO'){
			interval = setInterval(ticktimer,1000);			
			$(this).text('STOP');
		}else if(b_text == 'STOP'){
			$(this).text('GO');
			clearInterval(interval);
		}		
	});
	
	$('#reset').on('click',function(e){
		clearInterval(interval);
		$('#timer_screen').text('00:00');
		currentTime = 0;
	});

	function ticktimer(){
		minutes = parseInt(currentTime/60);
		seconds = currentTime % 60;
		console.log(minutes);
		console.log(seconds);
		currentTime++;
		$('#timer_screen').text( (minutes < 10 ? "0" : "") + minutes +":" + (seconds < 10 ? "0" : "") + seconds );
	}	
	
});

