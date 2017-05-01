
///////*******  PLAYER OBJECTS  ******/////////
	
var andre = { //foods that andre can eat
	name: 'Andre',
	andreDisease: 'Celiac\'s disease',
	
	//disease
		/* 	info = playername with disease name and quick description of what they can't eat
		disease = info on what the disease does to the body, symptoms, cause
		foodimg = the images of all the food they can eat
		symptoms = description of the food the diseased cannot eat, and info on how many people are afflicted
		*/
		info: 'Andre has Celiacs disease, which makes digesting gluten, found in wheat products, really hard.',
		disease: 'Celiac disease is a lifelong (chronic) condition that occurs when gluten triggers an abnormal immune system response that damages the small intestine. Your small intestine is lined with tiny, finger-shaped tissues called villi. The villi create a large surface that absorbs vitamins, sugars, and other nutrients as food passes through the small intestine. When a person who has celiac disease eats gluten, the villi flatten out and the intestinal lining becomes damaged. This decreases the area that can absorb nutrients.',
		food: '<img src = "../images/food/bread.svg" class = "food" alt = "bread"> <img src = "../images/food/tomato.svg" class = "food" alt = "tomato">' +
			'<p>People with Celiacs disease have to avoid gluten, which is is in pasta, breads, pastries, crackers and a lot of breakfast cereals. For people on strict gluten-free diets, they cannot eat any fried foods with breading, candy bards, soups, potato chips or salad dressings. </p>',
		who: 'Celiac disease is hereditary, meaning that it runs in families. People with a first-degree relative with celiac disease (parent, child, sibling) have a 1 in 10 risk of developing celiac disease. <br><br> Symptoms include iron deficiency, lactose intolerance, infertility, nervous system disorders and gall bladder malfunction.',
		source: 'from the <a href = "https://celiac.org/celiac-disease/understanding-celiac-disease-2/what-is-celiac-disease/" target = "_blank">Celiac Disease foundation</a>',
		
	//foods
		icecream: true,	
		coffee: true,
		fish: true,
		fruit: true,
		nuts: true,
		vegetable: true,
		bread: false,
		tomato: false,
	
	//player svg code
	svg: '<svg version="1.1" id="andre-player" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve" class = "active"><g id="andre"> <ellipse class="head" cx="54.5" cy="62.4" rx="36.7" ry="34.7"/><circle class="eye" cx="39.6" cy="64" r="3.8"/><circle class="eye" cx="68.6" cy="64" r="3.8"/><path class="eye" d="M39.6,60.2c2.1,0,3.8,1.7,3.8,3.8c0,2.1-1.7,0-3.8,0s-3.8,2.1-3.8,0C35.8,61.9,37.5,60.2,39.6,60.2z"/><path class="eye" d="M68.6,60.2c2.1,0,3.8,1.7,3.8,3.8c0,2.1-1.7,0-3.8,0s-3.8,2.1-3.8,0C64.8,61.9,66.5,60.2,68.6,60.2z"/><path class="nose" d="M59.2,76.8c0,0-5.3,0-5.5-2s1-4.2,1-4.2"/><path class="mouth" d="M37.9,79.4c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V79.4z"><animate id = "back-to-smile" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M37.9,79.4c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V79.4z" /> <animate id = "smile-to-small" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M45.8,83.3c0,0,2.8,1.2,7.4,1.3c5,0,8.4-2.1,8.4-2.1H44.9L45.8,83.3z" /> <animate id = "small-to-sad" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M47.7,82.4c2.3-0.4,2.3-0.6,5.5-0.6c4,0,9.5,2.4,9.2,1.8c-2.2-4.3-17.4-3.3-17.7-0.3 C44.7,83.5,46.2,82.8,47.7,82.4z" /> </path><ellipse class="cheek" cx="32.5" cy="73.8" rx="3.6" ry="3.3"/><ellipse class="cheek" cx="70.6" cy="80.3" rx="3.6" ry="3.3"/><path class="hair" d="M18.4,69.5c0,0,2.3-20,17.4-24.9c10.4-3.3,23.5-5.4,37.5-0.4S90,64.9,90.7,68.8s6.7-13,4.9-22.9 s-8.1-35.4-44.1-35s-41,29.1-41,34.6c-0.1,6.5-1.2,18.4,8,24.6"/></g></svg>'
};

var colin = { //foods that andre can eat
	name: 'Colin',
	andreDisease: 'Food Allergies',
	
	//disease
		/* 	info = playername with disease name and quick description of what they can't eat
		disease = info on what the disease does to the body, symptoms, cause
		foodimg = the images of all the food they can eat
		symptoms = description of the food the diseased cannot eat, and info on how many people are afflicted
		*/
		info: 'Colin has the three most common food allergies, nuts, fish and dairy: eating the wrong food could seriously hurt him.',
		disease: 'The job of the body’s immune system is to identify and destroy germs (such as bacteria or viruses) that make you sick. A food allergy results when the immune system mistakenly targets a harmless food protein – an allergen – as a threat and attacks it. Your immune system produces abnormally large amounts of an antibody called immunoglobulin E — IgE for short. IgE antibodies fight the “enemy” food allergens by releasing histamine and other chemicals, which trigger the symptoms of an allergic reaction. ',
		food: '<img src = "../images/food/nuts.svg" class = "food" alt = "nuts"> <img src = "../images/food/fish.svg" class = "food" alt = "fish"><img src = "../images/food/ice-cream.svg" class = "food" alt = "icecream">' +
			'<p>Other common food allergies include soy, wheat, corn, gelatin, meat and seeds. Sometimes foods do not seem like they would be allergic, such as coffee. For someone with a diary allergy, we have to be careful to not to use creamer.</p>',
		who: '1 in 13 kids have a food allergy, and it affects 15 million people in America. Some mild symptoms include hives, vomiting, diarrhea, sneezing and stomach pain. Some more sever reactions include obstructed breathing, turning blue and loss of consciousness.',
		source: 'from the <a href = "https://www.foodallergy.org//" target = "_blank">Food Allergy Research and Education</a>',
		
	//foods
		icecream: false,	
		coffee: true,
		fish: false,
		fruit: true,
		nuts: false,
		vegetable: true,
		bread: true,
		tomato: true,
	
	//player svg code
	svg: '<svg version="1.1" id="colin-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve">'+
			'<g id="colin">'+
				'<ellipse class="head" cx="53.5" cy="54.1" rx="36.7" ry="34.7"/>'+
				'<circle class="eye" cx="38.6" cy="55.6" r="3.8"/>'+
				'<circle class="eye" cx="67.6" cy="55.6" r="3.8"/>'+
				'<path class="eye" d="M38.6,51.8c2.1,0,3.8,1.7,3.8,3.8s-2.1,0-4.1,0s-3.5,2.1-3.5,0S36.5,51.8,38.6,51.8z"/>'+
				'<path class="eye" d="M67.6,51.8c2.1,0,3.8,1.7,3.8,3.8s-1.5,0.3-3.6,0.3s-4,1.8-4-0.3S65.5,51.8,67.6,51.8z"/>'+
				'<path class="nose" d="M58.1,68.4c0,0-5.3,0-5.5-2s1-4.2,1-4.2"/>'+
				'<path class="mouth" d="M36.9,71.1c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V71.1z">'+
					'<animate id = "back-to-smile" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M36.9,71.1c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V71.1z" /> '+
					'<animate id = "smile-to-small" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M42.4,77.2c0,0,1,3.6,8.5,4.2s12.6-3.8,12.6-3.8l-21.3-1.1L42.4,77.2z" /> '+
					'<animate id = "small-to-sad" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M43.1,76.7c2.6,3.5,5.9-1.6,11.2-1.3c6.2,0.3,10,3.3,9.8,1.7c-0.4-5.3-16.2-7.5-21.3-1.1 C42.7,76.3,42.9,76.5,43.1,76.7z" /> '+
				'</path>'+
				'<ellipse class="cheek" cx="31.5" cy="65.5" rx="3.6" ry="3.3"/>'+
				'<ellipse class="cheek" cx="69.6" cy="72" rx="3.6" ry="3.3"/>'+
				'<path class="hair" d="M38.6,37.1c0,0,2.8,8.1,6.8,8.6c0,0-1.5-3.4-0.6-5.3c0.4-0.8,3.7,4.6,7.9,5.5c0.6,0.1-3.7-3.8-2.5-5.5 c0.4-0.5,9.3,5.2,15,5.4c0.7,0-0.1-3.7-1.4-5.3c-0.5-0.6,9.4-0.9,16,9.2c4.1,6.2,9.5,11.6,9.5,11.6s1.8-2.8,2.3-8.2 c0.8-7.8-0.5-12-3-17.3c-2.3-4.9-8-18.8-33.3-19S19.5,33.1,17.8,36.6s-6,8.6-3.2,19.5c1.6,6.3,3.6,6.7,3.6,6.7 c0.3-3.5,0.9-8,3.6-11s9.1-4.2,11.3-7C34.9,42.6,38.6,37.1,38.6,37.1z"/>'+
			'</g>'+
		'</svg>'
	
};

var keiko = {
	name: 'Keiko',
	andreDisease: 'Acid Reflux',
	
	//disease
		/* 	info = playername with disease name and quick description of what they can't eat
		disease = info on what the disease does to the body, symptoms, cause
		foodimg = the images of all the food they can eat
		symptoms = description of the food the diseased cannot eat, and info on how many people are afflicted
		*/
		info: 'Keiko suffers from the severe form of the common condition, acid reflux, also called gastroesophageal reflux disease (GERD).',
		disease: 'Gastroesophageal refers to the stomach and the esophagus. Reflux refers to the back-flow of acidic or non-acidic stomach contents into the esophagus. There is no known single cause of GERD. It occurs when the esophageal defenses are overwhelmed by stomach contents that reflux into the esophagus. A band of muscles at the junction of the stomach and esophagus called the lower esophageal sphincter (LES) normally acts, in conjunction with the diaphragm, as a barrier to prevent reflux of stomach contents into the esophagus. If that barrier is relaxed at inappropriate times or is otherwise compromised, reflux occurs.',
		food: '<img src = "../images/food/tomato.svg" class = "food" alt = "tomato"> <img src = "../images/food/coffee.svg" class = "food" alt = "coffee">' +
			'<p>Other foods that can cause acid reflux include high fat foods, especially fried foods, cirtus, chocolate, mint, garlic, onions and spicy foods.</p>',
		who: 'About 60% of Americans experience GERD at some point. Symptoms vary from each person to person: some common ones include constant and consisten heartburn, pain when swallowing, chronic sore throat, bad breath, inflammation of the gums or constant belching.',
		source: 'from the <a href = "http://www.aboutgerd.org/signs-and-symptoms-overview.html" target = "_blank">International Foundation for Functional Gastrointestinal Disorders</a>',
		
	//foods
		icecream: true,	
		coffee: false,
		fish: true,
		fruit: true,
		nuts: true,
		vegetable: true,
		bread: true,
		tomato: false,
		
	svg: '<svg version="1.1" id="keiko-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve"><g id="keiko">' +
			'<ellipse class="head" cx="53.1" cy="56.1" rx="36.7" ry="34.7"/>' +
			'<circle class="eye" cx="38.3" cy="57.6" r="3.8"/>' +
			'<circle class="eye" cx="67.3" cy="57.6" r="3.8"/>' +
			'<path class="eye" d="M38.3,53.8c2.1,0,3.8,1.7,3.8,3.8s-1.7,0-3.8,0s-3.8,2.1-3.8,0S36.2,53.8,38.3,53.8z"/>' +
			'<path class="eye" d="M67.3,53.8c2.1,0,3.8,1.7,3.8,3.8s-1.7-0.5-3.8-0.5s-3.8,2.6-3.8,0.5S65.2,53.8,67.3,53.8z"/>' +			
			'<path class="nose" d="M52.3,70.4c0,0,5.3,0,5.5-2s-1-4.2-1-4.2"/>' +
			'<path class="mouth" d="M36.5,73.1c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V73.1z">' +
				'<animate id = "back-to-smile" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M36.5,73.1c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8l-19.6-8.4V73.1z" /> '+
				'<animate id = "smile-to-small" fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M42.7,78.9c0,0,1.1,3.5,8.6,3.9s12.4-4.2,12.4-4.2l-21.3-0.3L42.7,78.9z" /> '+
				'<animate id = "small-to-sad" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M42.7,79.9c0.8,0.7,3.5-2.7,10.4-2.8c6.4-0.1,11.2,4,10.7,2.5c-2-6.1-15.5-7.6-21.3-0.3 C42.3,79.4,42.5,79.7,42.7,79.9z" /> '+	
			'</path>' +
			'<ellipse class="cheek" cx="31.1" cy="67.5" rx="3.6" ry="3.3"/>' +
			'<ellipse class="cheek" cx="69.2" cy="74" rx="3.6" ry="3.3"/>' +
			'<path class="hair" d="M24.1,51c0,0,2.8-0.4,6.7-0.7c0.3,0,0.2-4.9,0.6-4.9c0.5,0,1.1,4.7,1.3,4.7c1-0.1,2.2-0.2,3.3-0.3 c0.6,0,0.6-8.1,1.2-8.2c0.6,0,1.8,8,2.5,7.9c4.1-0.3,8.9-0.5,14-0.6c16.6-0.3,28.5,3,28.5,3s2.1,16,0.3,25.2s-2.9,13.7-2.9,13.7 c3.9,0.7,16.1-0.8,18.3-3.5c3.1-10,1.1-39.4-1.6-45.8c-4-9.2-11.9-23.1-36.6-23.9c-1.4,0-4.5,2.3-5.4,2.5c-0.7,0.2-1-2.5-6.1-2 C25,20.4,16.1,32.8,12,42.8C7.5,53.7,9,82,10,86.3c0.5,2.1,18.6,4.5,18.6,4.5S20,67.6,24.1,51z"/>' +
		'</g></svg>'
};

var maria = {
	name: 'Maria',
	andreDisease: 'Chrons Disease',
	
	//disease
		/* 	info = playername with disease name and quick description of what they can't eat
		disease = info on what the disease does to the body, symptoms, cause
		foodimg = the images of all the food they can eat
		symptoms = description of the food the diseased cannot eat, and info on how many people are afflicted
		*/
		info: 'Maria has Chrons disease, which means she has to eat easy-to-digest foods so she does not hurt her intestines.',
		disease: 'Crohn’s disease is a chronic inflammatory bowel disease (IBD) characterized by inflammation of the digestive, or gastrointestinal (GI) tract. In fact, Crohn’s can affect any part of the GI tract, from the mouth to the anus, but it is more commonly found at the end of the small intestine (the ileum) where it joins the beginning of the large intestine (or colon). Similar conditions include IBS, IBD and ulcerative colitis.',
		food: '<img src = "../images/food/vegetable.svg" class = "food" alt = "vegetable"> <img src = "../images/food/ice-cream.svg" class = "food" alt = "ice cream"><img src = "../images/food/nuts.svg" class = "food" alt = "nuts"><img src = "../images/food/coffee.svg" class = "food" alt = "coffee">' +
			'<p>People with inflamed intestines need to eat easy to digest food so that they do not hurt their intestines even more. They can only eat soft, cooked vegetables (so they are low fiber and not crunchy). They often become lactose intolerant since lactose is difficult to digest. Caffeine often hurts their stomach. Nuts are too crunchy and can cut the intestines. Fatty foods, such as french fries, are often too hard to digest also.</p>',
		who: 'About 700,000 Americans have Chrons disease, but approximately 1.6 million have some form of inflammatory bowel disease. Symptoms vary based on the severity of the disease, but they include constant diarrhea or constipation, stomach cramps and pain, urgent need for the restroom, fever, loss of appetite, weight loss and fatigue.',
		source: 'from the <a href = "http://www.crohnscolitisfoundation.org/" target = "_blank">Chrons and Colitis Foundation</a>',
		
	//foods
		icecream: false,	
		coffee: false,
		fish: true,
		fruit: true,
		nuts: false,
		vegetable: false,
		bread: true,
		tomato: true,
	
	svg: '<svg version="1.1" id="maria-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve"><g id="maria">' +
			'<ellipse class="head" cx="51.8" cy="55.7" rx="36.7" ry="34.7"/>' +
			'<circle class="eye" cx="37" cy="57.2" r="3.8"/>' +
			'<circle class="eye" cx="66" cy="57.2" r="3.8"/>' +
			'<path class="eye" d="M37,53.4c2.1,0,3.8,1.7,3.8,3.8s-1.7,0-3.8,0s-3.8,2.1-3.8,0S34.9,53.4,37,53.4z"/>' +
			'<path class="eye" d="M66,53.4c2.1,0,3.8,1.7,3.8,3.8s-1.7,0-3.8,0s-3.8,2.1-3.8,0S63.9,53.4,66,53.4z"/>' +
			'<path class="nose" d="M51,70c0,0,5.3,0,5.5-2s-1-4.2-1-4.2"/>' +
			'<path class="hair" d="M30.3,39.8c0,0,6.8,8.8,14.1,11s19.6,0,19.6,0s12.3-2.4,14.6,3.6c1.1,2.8,0,6.9,0,6.9s5.5-0.7,7.1-2.3 c1.5-1.7,2.6-2.9,2.6-2.9c-0.1,2.6-0.5,5.8-1.5,9.3c-2.1,7-6.6,12.4-9.4,15.9c4.5,0.2,9.1-1.5,10.9-2.3c4.4-1.9,7-6.6,7-6.7 c-0.1,0-3.2,6.3-3.2,6.3c3.1-0.1,5.4-5.4,6.9-9.8c5.6-15.9-3.7-39.3-21.3-46.2c-19.2-7.5-32.4-4-37-1.8s-7.6,5-7.6,5 s-2.3-1-7.8-0.3S10.8,45.8,8.8,54.4S6.3,77,8.6,80.2s7.3,5,7.3,5s-2.3-2.5-2.3-4.2s1.8,2.8,5.3,3.3s10.7,0.1,10.7,0.1 s-7.2-5.4-9.8-11.1c-2.6-5.6-5.3-13.9-4-19.9s7.7-10.2,8.6-10.7C25.7,41.9,30.3,39.8,30.3,39.8z"/>' +
			'<path class="mouth" d="M35.3,72.7c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8L35.2,72L35.3,72.7z">' +						
			'<animate id = "back-to-smile" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M35.3,72.7c0,0-0.3,3.7,6.5,6.9s13.1,0.8,13.1,0.8L35.2,72L35.3,72.7z" /> '+
			'<animate id = "smile-to-small" fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M41.8,77.5c0,0,1,3.6,8.5,4.2S62.8,78,62.8,78l-21.4-1.1L41.8,77.5z" /> '+
			'<animate id = "small-to-sad" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M42.7,79.9c0.8,0.7,3.5-2.7,10.4-2.8c6.4-0.1,11.2,4,10.7,2.5c-2-6.1-15.5-7.6-21.3-0.3 C42.3,79.4,42.5,79.7,42.7,79.9z" /> '+	
			'</path>' +
			'<ellipse class="cheek" cx="29.8" cy="67.1" rx="3.6" ry="3.3"/>' +
			'<ellipse class="cheek" cx="67.9" cy="73.6" rx="3.6" ry="3.3"/>' +
		'</g></svg>'
	
};

var priya = {
	name: 'Priya',
	andreDisease: 'Cancer',
	
	//disease
		/* 	info = playername with disease name and quick description of what they can't eat
		disease = info on what the disease does to the body, symptoms, cause
		foodimg = the images of all the food they can eat
		symptoms = description of the food the diseased cannot eat, and info on how many people are afflicted
		*/
		info: 'Priya has cancer so she has to eat very healthly, low sugar foods to keep herself strong and the cancer weak.',
		disease: 'Cancer is a disease in which abnormal cells divide uncontrollably and destroy body tissue. These can occur anywhere on or in the body, but the most common are breast cancer, prostate cancer, skin cancer (basal cell and melanomas) and colon cancer. It affects every part of your body. ',
		food: '<img src = "../images/food/fruit.svg" class = "food" alt = "fruit"> <img src = "../images/food/ice-cream.svg" class = "food" alt = "ice cream"><img src = "../images/food/coffee.svg" class = "food" alt = "coffee">' +
			'<p>Since cancer grows faster when it is fed sugar, a low sugar diet is often what cancer patients eat. They have to be strong for their treatment though, so they eat very healthy and avoid anything that could hurt their recovery, such as the caffeine in coffee.</p>',
		who: '1.6 million Americans are diagonosed with cancer every year. Symptoms vary based on the severity and type of the cancer. Many cancer patients have a very difficult time eating to maintain their strength and weight because there are so few foods they can eat and they often suffer from a lack of appetite or nasusea.',
		source: 'from the <a href = "https://www.cancer.org/cancer.html" target = "_blank">Cancer Organization</a>',
		
	//foods
		icecream: false,	
		coffee: false,
		fish: true,
		fruit: false,
		nuts: true,
		vegetable: true,
		bread: true,
		tomato: true,
		
	svg: '<svg version="1.1" id="priya-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve">' +
					'<g id="priya">' +
						'<ellipse transform="matrix(0.324 -0.9461 0.9461 0.324 -52.1488 76.2087)" class="hair" cx="27.3" cy="74.6" rx="11.4" ry="15.4"/>' +
						'<ellipse class="head" cx="54.5" cy="55.3" rx="36.7" ry="34.7"/>' +
						'<circle class="eye" cx="39.6" cy="56.9" r="3.8"/>' +
						'<circle class="eye" cx="68.6" cy="56.9" r="3.8"/>' +
						'<path class="eye" d="M39.6,53.1c2.1,0,3.8,1.7,3.8,3.8s-1.7,0-3.8,0s-3.8,2.1-3.8,0S37.5,53.1,39.6,53.1z"/>' +
						'<path class="eye" d="M68.6,53.1c2.1,0,3.8,1.7,3.8,3.8s-2-0.3-4.1-0.3s-3.5,2.4-3.5,0.3S66.5,53.1,68.6,53.1z"/>' +
						'<path class="nose" d="M53.7,69.7c0,0,5.3,0,5.5-2s-1-9.1-1-9.1"/>' +
						'<path class="mouth" d="M37.9,72.3c0,0-0.3,3.7,6.5,6.9S57.5,80,57.5,80l-19.6-8.4V72.3z">'+
							'<animate id = "back-to-smile" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M37.9,72.3c0,0-0.3,3.7,6.5,6.9S57.5,80,57.5,80l-19.6-8.4V72.3z" /> '+
							'<animate id = "smile-to-small" fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M45.3,78.6c0,0,1.1,3.5,8.6,3.9s12.4-4.2,12.4-4.2L45,78L45.3,78.6z" /> '+
							'<animate id = "small-to-sad" 	fill = "freeze" dur = "500ms" begin = "indefinite" attributeName = "d" to = "M45.3,78.6c1.2,1,3.1-1.8,9.9-2.1c6.2-0.3,12.2,3.1,11.2,1.8C62.8,73.7,48.4,73.7,45,78 C44.9,78.1,45.1,78.4,45.3,78.6z" /> '+	
							'</path>' +
						'<ellipse class="cheek" cx="32.5" cy="66.7" rx="3.6" ry="3.3"/>' +
						'<ellipse class="cheek" cx="70.6" cy="73.2" rx="3.6" ry="3.3"/>' +
						'<path class="hair" d="M27,50.9c0,0,5.7,0.9,14.9-1.4c9.2-2.3,14.5-10.6,14.5-10.6s6,8,11.5,10.3s15.9,2.9,15.9,2.9s-0.9,4.9,1.8,8.5 c2.7,3.6,3.9,4.7,3.9,4.7s5.8-7,4.1-19.9c-1.8-13-7.6-18.3-13.1-21.6s-16.9-6.9-21.4-6.9c-1.7,0-2.8,2.7-2.8,2.7s-1.6-2.7-3.6-2.7 c-5,0-12.5,0.5-18.8,3.7s-16.7,9.5-18.3,26.1c-0.9,9.6,3.2,18.6,3.2,18.6s5.8-2.8,6.8-6.8S27,50.9,27,50.9z"/>' +
					'</g></svg>'
}

////////*****   GLOBAL VARIABLES   *****//////////


$( document ).ready(function() {

	var i = 0;

	var activePlayer = colin; //determine who the active player is

	$('#main-player').prepend(activePlayer.svg); //add player to the page
	$('#player-name').text(activePlayer.name);
	
	
	var healthBarWidth = 205;
	var feelsState = 3; //the state of the feels, ranging from 1 to 5
	var prevFeelsState; //compare state before health event to new state to see if a new state needs to be done
	var end = ''; //win vs lose
	
	$('#keiko-svg').click(function() {
		activePlayer = keiko;
		resetGame();		
	});
	$('#andre-svg').click(function() {
		activePlayer = andre;
		resetGame();		
	});
	$('#colin-svg').click(function() {
		activePlayer = colin;
		resetGame();		
	});
	$('#maria-svg').click(function() {
		activePlayer = maria;
		resetGame();		
	});
	$('#priya-svg').click(function() {
		activePlayer = priya;
		resetGame();		
	});
	$('#replay').click(function() {
		$('#diseaseContent').toggle(500, 'swing');
		resetGame();
	});
	
	function resetGame() {
		$('#main-player svg').first().remove();
		$('#main-player').prepend(activePlayer.svg); //add player to the page
		$('#player-name').text(activePlayer.name);
		$('.food').css('left', '0');
		$('.food').css('top', '0');
		$('.food').velocity({scaleX: '1', scaleY: '1'});	
		healthBarWidth = 205;
		$('.health-total').velocity({width: healthBarWidth}, 500);
		feelsState = 3;
		prevFeelsState = 3;
		updateTheFeels(feelsState);
	}
	
	$('#close').on('click', function () {
				$('#diseaseContent').toggle(500, 'swing');		
			});
	
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
	$('#tomato').draggable({
		revert: 'invalid',
		drag: function() { 
				item = '#tomato';
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
						if (activePlayer.icecream == true) {
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#coffee':
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.coffee == true) {
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#fish':
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.fish == true) { 
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#fruit':
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.fruit == true) {
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#nuts':
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.nuts == true) {
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#vegetable':	
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.vegetable == true) {
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#bread':
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.bread == true) { 
							happyTummy(); 
							goodFood();}
						else { madTummy(); 
							badFood();}
						break;
					case '#tomato':
						$(item).velocity({ scaleX: 0, scaleY: 0 });
						if (activePlayer.tomato == true) {
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
	 //animates a bright green digestive system
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

	function goodFood() { //if the child eats food that is ok for them, it adds to the health bar
		if((healthBarWidth+50) < 425) { 
			healthBarWidth += 50; 
			$('.health-total').velocity({width: healthBarWidth}, 500);
			
			prevFeelsState = feelsState; 
			
			if (healthBarWidth > 360) { feelsState = 5; } //check if the healthevent changed the state
				else if (healthBarWidth > 270) { feelsState = 4; }
				else if (healthBarWidth > 180) { feelsState = 3; }		
				else if (healthBarWidth > 90) { feelsState = 2; }
				else if (healthBarWidth > 0) { feelsState = 1; }		
			
			if (prevFeelsState != feelsState) { updateTheFeels(feelsState); }

		}
	};

	function badFood() { //if the child eats food that is bad for their diet, it subtracts from the health bar
		if((healthBarWidth-60) > 0) { 
			healthBarWidth -= 90; 
			$('.health-total').velocity({width: healthBarWidth}, 500);
			
			prevFeelsState = feelsState; 
			
			if (healthBarWidth > 328) { feelsState = 5; } //check if the healthevent changed the state
				else if (healthBarWidth > 246) { feelsState = 4; }
				else if (healthBarWidth > 165) { feelsState = 3; }		
				else if (healthBarWidth > 83) { feelsState = 2; }
				else if (healthBarWidth > 0) { feelsState = 1; }		
			
			if (prevFeelsState != feelsState) { updateTheFeels(feelsState); }

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
			if (activePlayer == andre) {$('#main-player .cheek').first().velocity({duration: 100, cx: '32.5', cy: '73.8'});}
			if (activePlayer == colin) {$('#main-player .cheek').first().velocity({duration: 100, cx: '31.5', cy : '65.5'});}
			if (activePlayer == keiko) {$('#main-player .cheek').first().velocity({duration: 100, cx: '31.1', cy: '67.5'});}
			if (activePlayer == maria) {$('#main-player .cheek').first().velocity({duration: 100, cx: '29.8', cy: '67.1'});} 
			if (activePlayer == priya) {$('#main-player .cheek').first().velocity({duration: 100, cx: '32.5', cy: '66.7'});} 
		}
		else if (state == 2)  { 
			document.getElementById('smile-to-small').beginElement();
				//$('#main-player .mouth').attr('d', 'M45.8,83.3c0,0,2.8,1.2,7.4,1.3c5,0,8.4-2.1,8.4-2.1H44.9L45.8,83.3z');
			$('#health-feel').addClass('animated bounceIn').text('Nauseous. Pukey. Upset-y.'); 
			$('#main-player .cheek').velocity({duration: 3000, fill: '#99CA7B', opacity: '.5'});
			if (activePlayer == andre) {$('#main-player .cheek').first().velocity({duration: 100, cx: '36.7', cy: '80.3'});}
			if (activePlayer == colin) {$('#main-player .cheek').first().velocity({duration: 100, cx: '36.7', cy: '72.1'});}
			if (activePlayer == keiko) {$('#main-player .cheek').first().velocity({duration: 100, cx: '37', cy: '74'});}
			if (activePlayer == maria) {$('#main-player .cheek').first().velocity({duration: 100, cx: '34.7', cy: '72.8'});}
			if (activePlayer == priya) {$('#main-player .cheek').first().velocity({duration: 100, cx: '37.8', cy: '73.2'});} 
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
		if (state == 5) {
			end = 'win';
			endGame(end);
		}
		if (state == 1) {
			end = 'loss';
			endGame(end);
		}
	}




	///////////**********  END GAME  ************/////////////

	function endGame(end) {	
		//clear out previous win/loss info
		$('#winLoss').text('');
		$('#diseaseInfo').text('');
		$('#diseaseContentDisease').text('');
		$('#diseaseContentFood').text('');
		$('#diseaseContentWho').text('');
		$('#source').text('');
	
		if (end == 'win') {
			
			$('#diseaseContent').delay(2000).toggle();
			//disease content
			$('#winLoss').text('You win!');
			$('#diseaseInfo').append(activePlayer.info);
			$('#diseaseContentDisease').append(activePlayer.disease);
			$('#diseaseContentFood').append(activePlayer.food);
			$('#diseaseContentWho').append(activePlayer.who);
			$('#source').append(activePlayer.source);
		}
		else if (end == 'loss') {
			$('#diseaseContent').delay(2000).toggle(500, 'swing');
			
			//disease content		
			$('#winLoss').text('You lost!');
			$('#diseaseInfo').append(activePlayer.info);
			$('#diseaseContentDisease').append(activePlayer.disease);
			$('#diseaseContentFood').append(activePlayer.food);
			$('#diseaseContentWho').append(activePlayer.who);
			$('#source').append(activePlayer.source);
		}		
	}


}); //end document on load
