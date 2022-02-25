const newDiv = document.createElement("div");
const container = document.querySelector(".container");
const tileNumber = document.querySelector("#tile-number");
const btnStartGame = document.querySelector("#start-game");
newDiv.className = "playfield";
newDiv.setAttribute("style", "background-color: rgba(0, 0, 0, 0.0);");

for (i = 0; i < 100; i++) {
	container.appendChild(newDiv.cloneNode(true));
}

const etcher = document.querySelectorAll(".playfield");

etcher.forEach((e) => {
	e.addEventListener("mouseover", () => {
		let currentOpacity = parseFloat(e.getAttribute("style").slice(-5, -2));
		let newOpacity = currentOpacity + 0.1;
		e.style.backgroundColor = "rgba(0, 0, 0, " + newOpacity + ")";
	});
});

function startGame() {
	let tileNumerRounded = Math.floor(tileNumber.value);
	if (tileNumerRounded < 1 || tileNumerRounded > 100) {
		alert("The number of tiles must be between 1 and 100!");
	} else {
		document.documentElement.style.setProperty(
			`--tileNumber`,
			tileNumerRounded
		);
		container.innerHTML = "";
		for (i = 0; i < tileNumerRounded * tileNumerRounded; i++) {
			container.appendChild(newDiv.cloneNode(true));
		}
		const etcher = document.querySelectorAll(".playfield");
		etcher.forEach((e) => {
			e.addEventListener("mouseover", () => {
				let currentOpacity = parseFloat(e.getAttribute("style").slice(-5, -2));
				let newOpacity = currentOpacity + 0.1;
				e.style.backgroundColor = "rgba(0, 0, 0, " + newOpacity + ")";
			});
		});
	}
}
