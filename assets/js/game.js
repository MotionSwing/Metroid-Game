const game = {
	title : "Metroid",
	score : 0,
	start: function(){
		// TODO: Update this to always launch between 1 and 3 metroids
		metroid.spawn(Math.floor(Math.random() * 4));
	},
	increaseScore: function(amount) {
		game.score += amount;
		const score_holder = document.querySelector('.scoreholder');
		score_holder.style.display = 'inline-block';
		score_holder.textContent = "Score: " + game.score;
		score_holder.classList.add("bloom");

		setTimeout(function(){
			score_holder.classList.remove("bloom");
		}, 1000);
	}
}

document.onkeyup = function(event){
	if (event.key.toLowerCase() === "m"){
		metroid.spawn(1);
		console.log('Metroid Launched');
	}
};
