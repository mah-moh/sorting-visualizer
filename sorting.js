import selection from './sorting-algorithms/selection-sort.js';

const generate_array_btn = document.getElementById("generate-array");
generate_array_btn.addEventListener("click", generate_array);

function generate_array() {
    document.getElementById("array-bars").innerHTML = "";
    const array = [];
    for (var i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 500));
    }

    let array_bars = document.getElementById("array-bars");
    array.forEach(element => {
        let bar = document.createElement("div");
        bar.setAttribute("id", `${element}`);
        bar.style.backgroundColor = "red";
        bar.style.height = `${element}px`;
        bar.style.width = "10px";
        bar.style.margin = "2px";
        bar.style.display = "inline-block";
        bar.style.boxShadow = "0 0 20px red";
        array_bars.appendChild(bar);
    });

    return array;
}

let array = generate_array();

const selection_sort_btn = document.getElementById("selection");
selection_sort_btn.addEventListener("click", () => selection(array));
