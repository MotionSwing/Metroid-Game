const metroid = {
	health: 100,
	point_value: 100,
	spawn: function(count){
		const maxMetroids = count || 1;
		for (var i = 0; i < maxMetroids; i++) {
			metroid.create_metroid();
		}
	},
	create_metroid: function(){
		const enemy_div = document.createElement("div");
		enemy_div.className = 'metroid delay-' + Math.floor(Math.random()*10) + ' pos-' + Math.floor(Math.random()*3);
		enemy_div.setAttribute('data-value', '+' + metroid.point_value);

		// Destroy metroid and add to score (mouse)
		enemy_div.addEventListener('mousedown', function(e){

			// Play sound when metroid is clicked
			soundManager.pop_sound.play();

			// Increase player's score
			game.increaseScore(metroid.point_value);

			// Display the score increment value instead of the metroid (i.e. +100)
			this.classList.add("score");

			// Remove the metroid from the DOM after 1 second
			setTimeout(function() {
				enemy_div.remove();
			}, 1000);
		});

		// Destroy metroid and add to score (touch)
		enemy_div.addEventListener('touchstart', function(e){
			e.preventDefault();

			// Capture the touches (not used)
			const touch = e.touches;

			// Play sound when metroid is clicked
			soundManager.pop_sound.play();

			// Increase player's score
			game.increaseScore(metroid.point_value);

			// Display the score increment value instead of the metroid (i.e. +100)
			this.classList.add("score");

			// Remove the metroid from the DOM after 1 second
			setTimeout(function() {
				enemy_div.remove();
			}, 1000);
		});
		document.body.appendChild(enemy_div);
	}
};
