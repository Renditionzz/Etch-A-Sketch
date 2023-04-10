/*
    Goal: Create a 16x16 grid of square divs

    for each row
        create a row div
        for each column
            create a column div
            add column div to row div
    display row divs
*/

function createGrid(number){
    const container = document.createElement("div");
    container.classList.add("container");
    for (let row = 0; row < number; row++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let column = 0; column < number; column++){
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column");
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
    document.body.appendChild(container);
}

createGrid(16);