function buildGrid(size) {
    const grid = document.querySelector(".gridContainer");
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            const tile = document.createElement("div");
            tile.setAttribute("class", "tile");
            row.appendChild(tile);
        }
    }
    // hover tile fill colour
    const tileList = document.querySelectorAll(".tile");
    for (const tile of tileList) {
        tile.addEventListener("mouseenter", () => {
            tile.classList.add("hovered");
        });
    }
}

function promptGridSize() {
    const gridSize = prompt("Enter number of squares per side (max 100):");
    return gridSize;
}

function deleteGrid() {
    const grid = document.querySelector(".gridContainer");
    grid.replaceChildren();
}

function resizeGrid(size) {
    deleteGrid();
    buildGrid(size);
}

const gridResizeBtn = document.querySelector("#gridResizeBtn");
gridResizeBtn.addEventListener("click", () => {
    let size = 0;
        do {
            size = promptGridSize();
            if (size <= 0 || size > 100){
                alert("Size must be between 1-100.");
            }
        } while (size <= 0 || size > 100);
        resizeGrid(size);
});

buildGrid(16);

