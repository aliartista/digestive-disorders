var i = 0;


var playerinfo = [
	'Hi, I\'m Andre! I love playing soccer (I\'m the goalie!) and eating Snickers! I also have Celiac\'s disease, which makes it hard for me to eat some foods. I like to eat healthy and safe, so that I can play soccer all the time!',
	'Hello, I am Keiko. I am really good at playing the violin, and I love hanging out with my Papi who make me spring rolls, my favorite! I also have acid reflux, but my Papi knows what foods not to cook to keep me safe!',
	'Hiya, I\'m Colin: I have the top three most common food allergies. Diary, nuts and seafood. Good thing I don\'t like any of them! My favorite foods are apples and strawberries!',
	'Hola, I am Maria. Lots of my friends like empanadas, but I don\'t. My favorite food is fiesta chicken with rice, which always makes my tummy happy. I have Chrons disease, so keeping my tummy safe is important.',
	'Hello! My name is Priya, and I LOVE soccer. Sometimes it\'s hard to play soccer because I\'m too tired since I have cancer. However, if I eat healthy foods I feel better.'
	];
	
var andreFood = { //foods that andre can eat
	icecream: true,	
	coffee: true,
	fish: true,
	fruit: true,
	nuts: true,
	vegetable: true,
	bread: false	
};

	
////////////*********   FEEDING: DRAG EVENT   ***********/////////////////	
var item = '';
$('#icecream').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#icecream';
		}
});
$('#coffee').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#coffee';
		}
});
$('#fish').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#fish';
		}
});
$('#fruit').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#fruit';
		}
});
$('#nuts').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#nuts';
		}
});
$('#vegetable').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#vegetable';
		}
});
$('#bread').draggable({
	revert: 'invalid',
	drag: function() { 
			item = '#bread';
		}
});

//////////************  FEEDING: DROP EVENT  ************///////////////
$('#droppable').droppable(
	{
		drop: function( event, ui ) {
			$(item).velocity({
				scaleX: 0,
				scaleY: 0
			});	
			
			switch (item)  {
				case '#icecream':
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.icecream == true) {
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
				case '#coffee':
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.coffee == true) {
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
				case '#fish':
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.fish == true) { 
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
				case '#fruit':
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.fruit == true) {
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
				case '#nuts':
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.nuts == true) {
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
				case '#vegetable':	
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.vegetable == true) {
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
				case '#bread':
					$(item).velocity({ scaleX: 0, scaleY: 0 });
					if (andreFood.bread == true) { 
						happyTummy(); 
						goodFood();}
					else { madTummy(); 
						badFood();}
					break;
			};
		}
	});

	
	
	
	
	
	
////////////////*************   DIGESTIVE SYSTEM REACTION  ***********///////////////////

	function madTummy() {
//function madTummy() { //animates a bright green digestive system
	//changing the colors! Yay!
	$('.r-line-fill').velocity ({duration: 500, fill: '#009900', stroke: '#006600'})
		.delay(250).velocity({duration: 500, fill: '#4dff4d'})
		.delay(250).velocity({duration: 500, fill: '#009900'})
		.delay(250).velocity({duration: 500, fill: '#4dff4d'})
		.delay(250).velocity({duration: 500, fill: '#009900'})
		.velocity({fill: '#D6322F', stroke: '#AF2024'});
	$('.y-line-fill').velocity ({duration: 500, fill: '#669900', stroke: '#446600'})
		.delay(250).velocity({duration: 500, fill: '#99e600'})
		.delay(250).velocity({duration: 500, fill: '#669900'})
		.delay(250).velocity({duration: 500, fill: '#99e600'})
		.delay(250).velocity({duration: 500, fill: '#669900'})
		.velocity({fill: '#F39237', stroke: '#E47425'});
	$('.r-fill').velocity ({duration: 500, fill: '#336f2a'})
		.delay(2500).velocity({duration: 500, fill: '#C54127'});
	$('.y-fill').velocity ({duration: 500, fill: '#669900'})
		.delay(250).velocity({duration: 500, fill: '#99e600'})
		.delay(250).velocity({duration: 500, fill: '#669900'})
		.delay(250).velocity({duration: 500, fill: '#99e600'})
		.delay(250).velocity({duration: 500, fill: '#669900'})
		.velocity({fill: '#F39237'});
	$('.o-fill').velocity ({duration: 500, fill: '#449438'})
		.delay(250).velocity({duration: 500, fill: '#00cc00'})
		.delay(250).velocity({duration: 500, fill: '#449438'})
		.delay(250).velocity({duration: 500, fill: '#00cc00'})
		.delay(250).velocity({duration: 500, fill: '#449438'})
		.velocity({fill: '#F1603D'});
	$('.o-fill-2').velocity ({duration: 500, fill: '#446600'})
		.delay(2500).velocity({fill: '#E47425'});
	$('.o-line').velocity ({duration: 500, stroke: '#446600'})
		.delay(2500).velocity({duration: 500, stroke: '#E47425'});
	$('.r-line').velocity ({duration: 500, stroke: '#336f2a'})
		.delay(2500).velocity({duration: 500, stroke: '#C54127'});

	//scaling and translating shapes! ooooo!	
	for (i = 0; i < 4; i++) {
		$('#digestive-system').velocity({duration: 3, scaleX: 1.1, scaleY: .9});
		$('#digestive-system').velocity({duration: 3, scaleX: .9, scaleY: 1.1});
	}
	$('#digestive-system').velocity({duration: 1, scaleX: 1, scaleY: 1});
};

function happyTummy() {
//function happyTummy() { //jumps up and down a little 
	//scaling and translating shapes! ooooo!	
	for (i = 0; i < 2; i++) {
		$('#digestive-system').velocity({duration: 3, scaleX: 1.05, scaleY: .95});
		$('#digestive-system').velocity({duration: 3, scaleX: .95, scaleY: 1.05});
	}
	$('#digestive-system').velocity({duration: 1, scaleX: 1, scaleY: 1});
};






//////////////***********  HEALTH BAR  *********/////////////////

var healthBarWidth = 205;
var feelsState = 3; //the state of the feels, ranging from 1 to 5
var prevFeelsState; //compare state before health event to new state to see if a new state needs to be done
var end = ''; //win vs lose

function goodFood() { //if the child eats food that is ok for them, it adds to the health bar
	if((healthBarWidth+50) < 425) { 
		healthBarWidth += 50; 
		$('.health-total').velocity({width: healthBarWidth}, 500);
		
		prevFeelsState = feelsState; 
		
		if (healthBarWidth > 328) { feelsState = 5; } //check if the healthevent changed the state
			else if (healthBarWidth > 246) { feelsState = 4; }
			else if (healthBarWidth > 165) { feelsState = 3; }		
			else if (healthBarWidth > 83) { feelsState = 2; }
			else if (healthBarWidth > 0) { feelsState = 1; }		
		
		if (prevFeelsState != feelsState) { updateTheFeels(feelsState); }

	}
	else {
		end = 'win'
		endGame(end);
	}
};

function badFood() { //if the child eats food that is bad for their diet, it subtracts from the health bar
	if((healthBarWidth-60) > 0) { 
		healthBarWidth -= 150; 
		$('.health-total').velocity({width: healthBarWidth}, 500);
		
		prevFeelsState = feelsState; 
		
		if (healthBarWidth > 328) { feelsState = 5; } //check if the healthevent changed the state
			else if (healthBarWidth > 246) { feelsState = 4; }
			else if (healthBarWidth > 165) { feelsState = 3; }		
			else if (healthBarWidth > 83) { feelsState = 2; }
			else if (healthBarWidth > 0) { feelsState = 1; }		
		
		if (prevFeelsState != feelsState) { updateTheFeels(feelsState); }

	}
	else {
		end = 'loss'
		endGame(end);
	}
};

function updateTheFeels(state) {	
	if (state == 5) { 
		$('#health-feel').addClass('animated bounceIn').text('Feelin\' great!');
		$('#main-player circle.eye').css('display', 'none');
		$('#main-player path.eye').css('display', 'inline');
	}
	else if (state == 4) { 
		$('#health-feel').addClass('animated bounceIn').text('Feelin\' good!'); 
		$('#main-player circle.eye').css('display', 'inline');
		$('#main-player path.eye').css('display', 'none');
	}
	else if (state == 3) { 
		document.getElementById('back-to-smile').beginElement();
			//$('#main-player .mouth').attr('d', 'M37.9,79.4c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V79.4z');
		$('#health-feel').addClass('animated bounceIn').text('We feel ok!');
		$('#main-player .cheek').velocity({duration: 3000, fill: '#DB4765', opacity: '.5'});
		$('#main-player .cheek').first().velocity({duration: 100, cx: '32.5', cy: '73.8'});
	}
	else if (state == 2)  { 
		document.getElementById('smile-to-small').beginElement();
			//$('#main-player .mouth').attr('d', 'M45.8,83.3c0,0,2.8,1.2,7.4,1.3c5,0,8.4-2.1,8.4-2.1H44.9L45.8,83.3z');
		$('#health-feel').addClass('animated bounceIn').text('Nauseous. Pukey. Upset-y.'); 
		$('#main-player .cheek').velocity({duration: 3000, fill: '#99CA7B', opacity: '.5'});
		$('#main-player .cheek').first().velocity({duration: 100, cx: '36.7', cy: '80.3'});
		$('#main-player circle.eye').css('display', 'inline');
		$('#main-player path.eye').css('display', 'none');
	}
	else if (state == 1)  { 
		document.getElementById('small-to-sad').beginElement();
			//$('#main-player .mouth').attr('d', 'M47.7,82.4c2.3-0.4,2.3-0.6,5.5-0.6c4,0,9.5,2.4,9.2,1.8c-2.2-4.3-17.4-3.3-17.7-0.3 C44.7,83.5,46.2,82.8,47.7,82.4z');
		$('#health-feel').addClass('animated bounceIn').text('You\'ve angered the tummy.'); 
		$('#main-player .cheek').velocity({duration: 3000, fill: '#e2c90b',  opacity: '.5'});
		$('#main-player circle.eye').css('display', 'none');
		$('#main-player path.eye').css('display', 'inline');
	}
	
	$('#health-feel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#health-feel').removeClass('animated bounceIn');});
	
}




///////////**********  END GAME  ************/////////////

function endGame(end) {
	if (end == 'win') {
		console.log('win');
	}
	else if (end == 'loss') {
		console.log('loss');
	}
	
}





