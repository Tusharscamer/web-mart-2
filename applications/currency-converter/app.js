const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (const select of dropdowns) {
  for (const currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = select;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = select;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

const updateflag = (ele) => {
  let countryCode = countryList[ele.value];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = ele.parentElement.querySelector("img");
  img.src = newSrc;
};

const updateMsg = ()=>{

}

const updateExchangeRate = async ()=>{
  let amount = document.querySelector(".amount input");
  if(amount.value === "" || amount.value < 1){
    amount.value = 1;
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amount.value * rate;
  msg.innerText = `${amount.value} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}

btn.addEventListener('click',  (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

document.addEventListener("load", updateExchangeRate());
