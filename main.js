let initial_price = document.querySelector("#initial-price");
//console.log(initial_price);

let quantity_stocks = document.querySelector("#quantity-stocks");
//console.log(quantity_stocks);

let current_price = document.querySelector("#current-price");
//console.log(current_price);

let click_btn = document.querySelector("#show-button");

let res = document.querySelector(".greeting");

// let show_result = document.getElementById("outpt-text");
// console.log(show_result);
//console.log(click_btn);

//console.log(show_result);

click_btn.addEventListener("click", clickHandlerFun);

function clickHandlerFun() {
  let temp_ip = Number(initial_price.value);
  console.log(temp_ip);

  let temp_qty = Number(quantity_stocks.value);
  console.log(temp_qty);

  let temp_curr = Number(current_price.value);
  console.log(temp_curr);

  calculateProfitAndLoss(temp_ip, temp_qty, temp_curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;
    let lossPercent = lossPercentage.toFixed(2);
    res.style.display = "block";
    res.style.backgroundColor = "#F32424";
    res.innerText = `Hey! the loss is ${loss} and the percent is ${lossPercent}% 😥`;
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;
    let profitPercent = profitPercentage.toFixed(2);
    res.style.display = "block";
    res.style.backgroundColor = "#3EC70B";
    res.innerText = `Hey! the profit is ${profit} and the percent is ${profitPercent}% 😇`;
  } else {
    // let res = document.querySelector(".greeting");
    // console.log(res);
    res.style.backgroundColor = "#fff";
    res.innerText = "No pain no gain, no gain no pain.";

    // console.log(show_result);
    // if (show_result != null) {
    //   show_result.style.display = "block";
    //   show_result.style.backgroundColor = "#fff";
    // show_result.innerText = "No pain";
    //   console.log("Sandeeep");
    // } else {
    //   console.log("Null represent here");
    // }
  }
}
