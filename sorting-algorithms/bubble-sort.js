function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function animate(arr, i, j) {
    let array_bars = document.getElementById("array-bars");
        array_bars.innerHTML = "";
        arr.forEach(element => {
            let bar = document.createElement("div");
            bar.setAttribute("class", "bar");
            bar.setAttribute("id", `${element}`);
            if (element === arr[i] || element === arr[j]) {
                bar.style.backgroundColor = "green";
                bar.style.boxShadow = "0 0 20px green";
            } else {
                bar.style.backgroundColor = "white";
            }
            bar.style.height = `${element}px`;
            bar.style.width = "25px";
            bar.style.margin = "2px";
            bar.style.display = "inline-block";
            
            array_bars.appendChild(bar);
        });
}


let bubble = async(arr, time, order) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (order === 'asc') {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    await animate(arr, j, j + 1);
                    await sleep(time);
                }
            }else {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    await animate(arr, j, j + 1);
                    await sleep(time);
                }
            }
            
        }
    }
    return arr;
};

export default bubble;