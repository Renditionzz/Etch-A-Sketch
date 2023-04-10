/*
    Goal: Create a 16x16 grid of square divs

    for each row
        create a row div
        for each column
            create a column div
            add column div to row div
    display row divs
*/
const container = document.createElement("div");
container.classList.add("container");
function createGrid(number){
    for (let row = 0; row < number; row++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let column = 0; column < number; column++){
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column");
            columnDiv.addEventListener("mouseover", changeColor);
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
    document.body.appendChild(container);
}

function resetGrid(number){
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
    createGrid(number);
}
/*
    Goal: Generate a random color
    for each color (r,g,b)
        Generate a number between 0 and 255
        add to array
        return array
*/
function randomColorValue(){
    let randomColor = [0,0,0];
    for (let color = 0; color < 3; color++){
        const colorValue = Math.round(Math.random() * 255);
        randomColor[color] = colorValue;
    }
    return `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
}
function changeColor(){
    color = randomColorValue();
    this.style["background-color"] = color;
}


createGrid(16);



const button = document.querySelector("button");
button.addEventListener("click", resizeGrid);

function resizeGrid(){
    const size = parseInt(prompt("Enter the size of the grid you'd like:"));
    if (size >= 16 && size <= 100){
        return resetGrid(size);
    }
    return alert("Incorrect value, please try again!");
}