var hero = $("#samus");

document.onkeydown = function(event){
	console.log(event.key);

	if (event.key.toLowerCase() === "q" || event.key.toLowerCase() === "7" || event.key.toLowerCase() === "Home"){
		hero.addClass('angle-up-left');
	}

	if (event.key.toLowerCase() === "e" || event.key.toLowerCase() === "9" || event.key.toLowerCase() === "PageUp"){
		hero.addClass('angle-up-right');
	}

	if (event.key.toLowerCase() === "z" || event.key.toLowerCase() === "1" || event.key.toLowerCase() === "End"){
		hero.addClass('angle-down-left');
	}

	if (event.key.toLowerCase() === "c" || event.key.toLowerCase() === "3" || event.key.toLowerCase() === "PageDown"){
		hero.addClass('angle-down-right');
	}
	if (event.key.toLowerCase() === "a" || event.key.toLowerCase() === "4" || event.key.toLowerCase() === "ArrowLeft"){
		hero.addClass('run-left');
	}

	if (event.key.toLowerCase() === "d" || event.key.toLowerCase() === "6" || event.key.toLowerCase() === "ArrowRight"){
		hero.addClass('run-right');
	}

	if (event.key.toLowerCase() === "x" || event.key.toLowerCase() === "2" || event.key.toLowerCase() === "ArrowDown"){
		hero.addClass('morph');

		document.onkeydown = function(event){
			if (event.key.toLowerCase() === "c" || event.key.toLowerCase() === "3" || event.key.toLowerCase() === "PageDown"){
				hero.addClass('run-right');
			}
			if (event.key.toLowerCase() === "z" || event.key.toLowerCase() === "1" || event.key.toLowerCase() === "End"){
				hero.addClass('run-left');
			}
		};
		document.onkeyup = function(event){
			hero.removeClass("run-right run-left");
		};
		// hero.addClass('morph');
	}

	if (event.key.toLowerCase() === " "){
		hero.addClass('jump');
	}
};

document.onkeyup = function(event){
	hero.removeClass();
	// $("#samus").css('background-image','url(assets/images/samus/SamusFront.gif)');
};