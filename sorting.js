import selection from './sorting-algorithms/selection-sort.js';
import bubble from './sorting-algorithms/bubble-sort.js';

const sleep_time = {
    1 : 600,
    2 : 400,
    3 : 200,
    4 : 50,
}

let size = localStorage.getItem("size") ? localStorage.getItem("size") : 50;

const generate_array_btn = document.getElementById("generate-array");
generate_array_btn.addEventListener("click", generate_array);

function generate_array() {
    document.getElementById("array-bars").innerHTML = "";
    const array = [];
    for (var i = 0; i < size; i++) {
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

$(function() {
    $('#array-size-btn').on('click', function() {
        var input_size = $('#array-size').val();
        localStorage.setItem("size", input_size);
        window.location.reload();
        generate_array();
    })
})

let array = generate_array();

$(function(){
    $('#run-btn').on('click', function() {
        let algo = $('#algo-options').val();
        let speed = $('#speed').val();
        let order = $('#order').val();
        console.log(algo, speed, order);
        if (algo === 'bubble') {
            bubble_sort(array, sleep_time[speed], order);
        }else if (algo === 'selection') {
            selection_sort(array, sleep_time[speed], order);
        }
    })
})

function iframe_creation(src) {
    const container = document.querySelector(".container");
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    container.appendChild(iframe);
}

function selection_sort(array, time, order) {
    iframe_creation('https://en.wikipedia.org/wiki/Selection_sort')
    selection(array, time, order);
}

function bubble_sort(array, time, order) {
    iframe_creation('https://en.wikipedia.org/wiki/Bubble_sort')
    bubble(array, time, order);
}

function redix_sort(array, time, order) {
    iframe_creation('https://en..wikipedia.org/wiki/Bubble_sort');
    redix(array, time, order);
}
