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

async function selection(arr, time, order) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      if (order === 'asc') {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[lowest]) {
            lowest = j
          }
        }
      }else {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] > arr[lowest]) {
            lowest = j
          }
        }
      }
      if (lowest !== i) {
        // Swap
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        await animate(arr, i, lowest);
        await sleep(time);
      }
    }
  }

export default selection;