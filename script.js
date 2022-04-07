const container = document.querySelector(".container");
let size = 16;

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