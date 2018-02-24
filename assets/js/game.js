var game = {
	title : "Metroid",
	score : 0,
	start: function(){
		metroid.spawn(Math.floor(Math.random() * 4));
	},
	increaseScore: function(amount) {
		game.score += amount;
		var score_holder = document.querySelector('.scoreholder');
		score_holder.style.display = 'inline-block';
		score_holder.textContent = "Score: " + game.score;
		score_holder.classList.add("bloom");

		setTimeout(function(){
			score_holder.classList.remove("bloom");
		}, 1000)
	}
}

document.onkeyup = function(event){
	if (event.key.toLowerCase() === "m"){
		metroid.spawn(2);
	}
};
