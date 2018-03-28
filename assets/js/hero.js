var hero = $("#samus");

$(document).keydown(function(event) {
	// console.log(event.key);
	switch (event.key.toLowerCase()) {
		case "q":case "7":case "Home":
			hero.addClass('angle-up-left');
			break;
		case "e":case "9":case "PageUp":
			hero.addClass('angle-up-right');
			break;
		case "z":case "1":case "End":
			hero.addClass('angle-down-left');
			break;
		case "c":case "3":case "PageDown":
			hero.addClass('angle-down-right');
			break;
		case "a":case "4":case "ArrowLeft":
			hero.removeClass('run-right pause').addClass('run-left');
			break;
		case "d":case "6":case "ArrowRight":
			hero.removeClass('run-left pause').addClass('run-right');
			break;
		case "s":case "5":case "ArrowDown":
			hero.addClass('morph');
			break;
		case " ":
			// hero.addClass('jump');
			break;
	}
});

$(document).keyup(function(event){
	switch (event.key.toLowerCase()) {
		case "a":case "4":case "ArrowLeft":
			hero.addClass('pause');
			break;
		case "d":case "6":case "ArrowRight":
			hero.addClass('pause');
			break;
		case "q":case "7":case "Home":
			hero.removeClass('angle-up-left');
			break;
		case "e":case "9":case "PageUp":
			hero.removeClass('angle-up-right');
			break;
		case "z":case "1":case "End":
			hero.removeClass('angle-down-left');
			break;
		case "c":case "3":case "PageDown":
			hero.removeClass('angle-down-right');
			break;
		case "s":case "5":case "ArrowDown":
			hero.removeClass('morph');
			break;
		case " ":
			// hero.removeClass('jump');
			break;
	}
});
