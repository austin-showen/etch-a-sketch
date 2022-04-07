const container = document.querySelector(".container");
const startSize = 16;

function draw(size) {
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
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseenter", onHover));
}

function onHover() {
    this.classList.add("active");
}

function reset() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.remove("active"));
    let newSize = 101;
    while (newSize > 100 || newSize < 1) {
        newSize = prompt("Enter a new grid size between 1 and 100.")
    }
    draw(newSize);
}

draw(startSize);



const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset)