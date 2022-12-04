function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        const bar1 = document.getElementById(`${arr[i]}`);
        const bar2 = document.getElementById(`${arr[lowest]}`);
        bar1, bar2 = bar2, bar1;
      }
    }
    // const array_bars = document.getElementById("array-bars");
    // document.getElementById("array-bars").innerHTML = "";
    // arr.forEach(element => {
    //     const bar = document.createElement("div");
    //     bar.style.backgroundColor = "greenyellow";
    //     bar.style.height = `${element}px`;
    //     bar.style.width = "10px";
    //     bar.style.margin = "2px";
    //     bar.style.display = "inline-block";
    //     bar.style.boxShadow = "0 0 20px greenyellow";
    //     array_bars.appendChild(bar);
    // });
  }

export default selection;