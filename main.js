const newDiv = document.createElement("div");
const container = document.querySelector(".container");
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
