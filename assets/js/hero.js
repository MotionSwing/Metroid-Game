// var hero = $("#samus");
var hero = document.querySelector("#samus");

document.addEventListener('keydown', function(event){
	console.log(`${event.key} (${event.keyCode})`);
	switch (event.key.toLowerCase()) {
		case "q":
		case "7":
		case "Home":
			hero.classList.remove('morph');
			hero.classList.add('angle-up-left');
			break;
		case "e":
		case "9":
		case "PageUp":
			hero.classList.remove('morph');
			hero.classList.add('angle-up-right');
			break;
		case "z":
		case "1":
		case "End":
			hero.classList.remove('morph');
			hero.classList.add('angle-down-left');
			break;
		case "c":
		case "3":
		case "PageDown":
			hero.classList.remove('morph');
			hero.classList.add('angle-down-right');
			break;
		case "a":
		case "4":
		case "ArrowLeft":
			hero.classList.remove('run-right', 'pause');
			hero.classList.add('run-left');
			break;
		case "d":
		case "6":
		case "ArrowRight":
			hero.classList.remove('run-left', 'pause');
			hero.classList.add('run-right');
			break;
		case "s":
		case "2":
		case "ArrowDown":
			hero.classList.add('morph');
			break;
		case "8":
		case "w":
			hero.classList.add('jump');
			break;
		case "5":
			hero.className = '';
			hero.classList.add('pause');
			break;
	};
});

document.addEventListener('keyup', function(event) {
	console.log(`keyup: ${event.key} (${event.keyCode})`);
	switch (event.key.toLowerCase()) {
		case "q":
		case "7":
		case "Home":
			hero.classList.remove('angle-up-left');
			break;
		case "e":
		case "9":
		case "PageUp":
			hero.classList.remove('angle-up-right');
			break;
		case "z":
		case "1":
		case "End":
			hero.classList.remove('angle-down-left');
			break;
		case "c":
		case "3":
		case "PageDown":
			hero.classList.remove('angle-down-right');
			break;
		case "a":
		case "4":
		case "ArrowLeft":
			hero.classList.add('pause');
			break;
		case "d":
		case "6":
		case "ArrowRight":
			hero.classList.add('pause');
			break;
		case "s":
		case "ArrowDown":
			hero.classList.remove('morph');
			break;
		case "8":
		case "w":
			hero.classList.remove('jump');
			break;
	};
});