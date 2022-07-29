/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */

class Drawing 
{
    constructor() 
    {
        this.color = "white";
        this.listColor = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
    }

    /*
        function
            create grid
        input:
            el -> element parent
            rows -> nombre de lignes
            cols -> nombre de colonnes
        output:
            one
    */
    pixelArt(el, rows, cols) 
    {
        let tabl = document.createElement("table");
    
        //create coloring board
        for (let i = 0; i < rows; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < cols; j++) {
                let col = document.createElement("td");
                col.className="drawing white";
                row.appendChild(col);
            }
            tabl.appendChild(row);
        }
        let row = document.createElement("tr");
        let color = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
        
        //create color palette
        for (let j = 0; j < cols; j++) 
        {
            let col = document.createElement("td");
            col.className="color "+color[j];
            row.appendChild(col);
        }
        tabl.appendChild(row);
        
        //add table to element
        let element = document.getElementById(el);
        element.appendChild(tabl);
    }

    /*
        function
            change color
        input:
            el -> element
        output:
            none
    */
    pickColor(el) 
    {
        let color = el.className;
        this.color = color.substring(6);
    }

    /*
        function
            add event listener to cell
        input:
            none
        output:
            none
    */
    setEvent() 
    {
        //add event listener to cell drawing. update color
        let drawings = document.getElementsByClassName("drawing");
        for (let i = 0; i < drawings.length; i++) {
            drawings[i].addEventListener("dragover", function(e) {
                e.target.className = "drawing "+grid.color;
            });
            drawings[i].addEventListener("dragstart", function(e) {
                e.target.className = "drawing "+grid.color;
            });
        }

        //recover color to cell color and update Drawing.color
        let colors = document.getElementsByClassName("color");
        for (let i = 0; i < colors.length; i++) 
        {
            colors[i].addEventListener("click", function(e) 
            {
                grid.pickColor(e.target);
            })
        }
    }
}

// main
let grid = new Drawing ();
grid.pixelArt("grid", 10, 10);
grid.setEvent();