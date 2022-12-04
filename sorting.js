import selection from './sorting-algorithms/selection-sort.js';
import bubble from './sorting-algorithms/bubble-sort.js';

const generate_array_btn = document.getElementById("generate-array");
generate_array_btn.addEventListener("click", generate_array);

function generate_array() {
    document.getElementById("array-bars").innerHTML = "";
    const array = [];
    for (var i = 0; i < 50; i++) {
    array.push(Math.floor(Math.random() * 300));
    }
    display_bars(array);
    return array;
}

function display_bars(array) {
    let array_bars = document.getElementById("array-bars");
    array.forEach(element => {
        let bar = document.createElement("div");
        bar.setAttribute("class", "bar");
        bar.setAttribute("id", `${element}`);
        bar.style.backgroundColor = "white";
        bar.style.height = `${element}px`;
        bar.style.width = "25px";
        bar.style.margin = "2px";
        bar.style.display = "inline-block";
        array_bars.appendChild(bar);
    });
}

let array = generate_array();

function iframe_creation(src) {
    const container = document.querySelector(".container");
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    container.appendChild(iframe);
}

function selection_sort() {
    iframe_creation('https://en.wikipedia.org/wiki/Selection_sort')
    selection(array);
}

function bubble_sort() {
    iframe_creation('https://en.wikipedia.org/wiki/Bubble_sort')
    bubble(array);
}

const selection_sort_btn = document.getElementById("selection");
selection_sort_btn.addEventListener("click", selection_sort);

const bubble_sort_btn = document.getElementById("bubble");
bubble_sort_btn.addEventListener("click", bubble_sort);