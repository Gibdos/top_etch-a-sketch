const newDiv = document.createElement("div");
const container = document.querySelector(".container");
const tileNumber = document.querySelector("#tile-number");
const btnStartGame = document.querySelector("#start-game");
newDiv.className = "playfield";

for (i = 0; i < 100; i++) {
	container.appendChild(newDiv.cloneNode(true));
}

const etcher = document.querySelectorAll(".playfield");

etcher.forEach((e) => {
	e.addEventListener("mouseover", () => {
		e.style.backgroundColor = "black";
	});
});

function startGame() {
	if (tileNumber.value < 1 || tileNumber.value > 50) {
		alert("The number of tiles must be between 1 and 50!");
	} else {
		document.documentElement.style.setProperty(
			`--tileNumber`,
			tileNumber.value
		);
		container.innerHTML = "";
		for (i = 0; i < tileNumber.value * tileNumber.value; i++) {
			container.appendChild(newDiv.cloneNode(true));
		}
		const etcher = document.querySelectorAll(".playfield");
		etcher.forEach((e) => {
			e.addEventListener("mouseover", () => {
				e.style.backgroundColor = "black";
			});
		});
	}
}
