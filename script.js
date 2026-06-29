// create 16x16 grid of divs
const grid = document.querySelector(".gridContainer");
for(let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const tile = document.createElement("div");
        tile.setAttribute("class", "tile");
        row.appendChild(tile);
    }
}