/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */
function PixelArt(el, rows, cols) {
    // write logic to create pixel art grid.
    let tabl = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("td");
            col.className="white";
            col.idName="drawing";
            row.appendChild(col);
        }
        tabl.appendChild(row);
    }
    let row = document.createElement("tr");
    let color = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
    for (let j = 0; j < cols; j++) 
    {
        let col = document.createElement("td");
        col.className=color[j];
        col.idName="color";
        row.appendChild(col);
    }
    tabl.appendChild(row);
    
    let element = document.getElementById(el);
    element.appendChild(tabl);
}

function changeColor(el) {
    let color = el.className;
    let drawing = document.getElementById("drawing");
    drawing.className = color;
}