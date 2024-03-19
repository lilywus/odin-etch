const container = document.querySelector("#container");

window.onload = drawGrid(16);

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let i = 0; i < size; i++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("box");
            gridBox.style.width = (400 / size) + "px";
            gridBox.style.height = (400 / size) + "px";
            row.appendChild(gridBox);
        }
    }

    document.querySelectorAll(".box").forEach( item => {
        item.addEventListener("mouseover", event => {
            let currColor = window.getComputedStyle(item).getPropertyValue("background-color");
            let alpha = parseFloat(currColor.slice(18, 21));
            let newColor = "";

            if (currColor == "rgb(255, 255, 255)") newColor = "rgba(0, 147, 145, 0.1)";
            else {
                if ((alpha > 0.9) || (isNaN(alpha))) {
                    alpha = 1;
                }
                else {
                    alpha += 0.1;
                }
                newColor = "rgba(0, 147, 145, " + alpha + ")";
                console.log(newColor);
            }
            item.style.backgroundColor = newColor;
        })
    })
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", event => {
    let gridSize = prompt("How big should the grid be?\nPlease input a number 1-100");
    if ((gridSize < 1) || (gridSize > 101)) {
        alert("Invalid grid size, please input a number 1-100");
    }
    else {
        container.innerHTML = "";
        drawGrid(gridSize);
    }
})