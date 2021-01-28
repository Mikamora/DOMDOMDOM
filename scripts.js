document.addEventListener("DOMContentLoaded", function () {
    let colorArray = ["blue", "green", "brown", "crimson", "turqoise", "lightgrey", "black"];
    let boxNumber = 1;
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    button.className = "col-12"
    let row = document.createElement("div");
    row.className = "row";
    let container = document.createElement("div");
    container.className = "container";

    document.body.appendChild(button);
    document.body.appendChild(container);
    container.appendChild(row);

    button.addEventListener("click", function () {
        let box = document.createElement("div");
        box.className = "boxes";
        box.id = boxNumber;
        boxNumber++;
        row.appendChild(box);
        let idStr = box.id;
        let prevSibling = document.getElementById(idStr).previousSibling;
        box.addEventListener("mouseenter", function () {
            event.target.textContent = idStr;
        })
        box.addEventListener("mouseleave", function () {
            event.target.textContent = "";
        })
        box.addEventListener("click", function () {
            box.style.background = colorArray[Math.floor(Math.random() * colorArray.length)];
        })
        box.addEventListener("dblclick", function () {
            let nextSibling = document.getElementById(idStr).nextSibling;
            let prevSibling = document.getElementById(idStr).previousSibling;
            if (nextSibling == null || prevSibling == null) {
                alert("oopsie! Doesn't exist....");
                return;
            } else {

                if (idStr % 2 == 0) {
                    nextSibling.parentNode.removeChild(nextSibling);
                } else {
                    prevSibling.parentNode.removeChild(prevSibling);
                }
            }
        })

    })


})