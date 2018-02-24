var metroid = {
	health: 100,
	point_value: 100,
	spawn: function(count){
		var maxMetroids = count || 1;
		for (var i = 0; i < maxMetroids; i++) {
			metroid.create_metroid();
		}
	},
	create_metroid: function(){
		var enemy_div = document.createElement("div");
		enemy_div.className = 'metroid delay-' + Math.floor(Math.random()*10) + ' pos-' + Math.floor(Math.random()*3);
		enemy_div.setAttribute('data-value', '+' + metroid.point_value);
		
		// Destroy metroid and add to score (mouse)
		enemy_div.addEventListener('mousedown', function(e){
			soundManager.pop_sound.play();
			game.increaseScore(metroid.point_value);
			this.classList.add("score");

			setTimeout(function() {
				enemy_div.remove();
			}, 1000);
		});

		// Destroy metroid and add to score (touch)
		enemy_div.addEventListener('touchstart', function(e){
			e.preventDefault();
			var touch = e.touches;
			soundManager.pop_sound.play();
			game.increaseScore(metroid.point_value);
			this.classList.add("score");

			setTimeout(function() {
				enemy_div.remove();
			}, 1000);
		});
		document.body.appendChild(enemy_div);
	}
}