const container = document.querySelector(".container");
const size = 16;

for (i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (j = 0; j < size; j++) {
        const cell = document.createElement("span");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}

function onHover() {
    this.classList.add("active");
}

const cells = document.querySelectorAll(".cell");
console.log(cells);
cells.forEach(cell => cell.addEventListener("mouseenter", onHover));