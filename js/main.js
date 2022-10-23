const background = document.getElementsByClassName("background")[0];
const crossCount = 7;
const catppuccinFilters = [
	// theme: https://github.com/catppuccin/catppuccin (mocha palette)
	// filters generated with https://codepen.io/sosuke/pen/Pjoqqp

	// if you do something like this, don't forget to remove the semicolons from the end
	// (because it fucked me in the ass)
	"invert(84%) sepia(7%) saturate(1375%) hue-rotate(279deg) brightness(101%) contrast(92%)",
	"invert(74%) sepia(43%) saturate(977%) hue-rotate(202deg) brightness(99%) contrast(95%)",
	"invert(84%) sepia(48%) saturate(2054%) hue-rotate(292deg) brightness(96%) contrast(98%)",
	"invert(96%) sepia(93%) saturate(2839%) hue-rotate(299deg) brightness(98%) contrast(99%)",
	"invert(92%) sepia(12%) saturate(1107%) hue-rotate(331deg) brightness(104%) contrast(95%)",
	"invert(88%) sepia(33%) saturate(408%) hue-rotate(57deg) brightness(96%) contrast(85%)",
	"invert(92%) sepia(15%) saturate(805%) hue-rotate(107deg) brightness(93%) contrast(89%)",
	"invert(62%) sepia(55%) saturate(452%) hue-rotate(186deg) brightness(102%) contrast(96%)",
	"invert(72%) sepia(12%) saturate(1196%) hue-rotate(196deg) brightness(103%) contrast(99%)",
];

function getScreenSize() {
	return {
		w: window.innerWidth,
		h: window.innerHeight
	}
}

function generateRandomBetween(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function generateBackground() {
	const screenSize = getScreenSize();
	
	for (let i = 0; i < crossCount; i++) {
		let crossElement = document.createElement('img');
		crossElement.src = "assets/x.svg";
		crossElement.style.position = "absolute";

		crossElement.style.top = `${generateRandomBetween(screenSize.h / 2 - screenSize.h, screenSize.h / 2 + screenSize.h)}px`;
		crossElement.style.left = `${generateRandomBetween(screenSize.w / 2 - screenSize.w, screenSize.w / 2 + screenSize.w)}px`;
		crossElement.style.transform = `rotate(${generateRandomBetween(0, 360)}deg) scale(${generateRandomBetween(0, 10) / 10})`;
		crossElement.style.filter = catppuccinFilters[generateRandomBetween(0, catppuccinFilters.length)];

		background.appendChild(crossElement);
	}
}

generateBackground()
