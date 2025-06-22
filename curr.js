// const dropdown=document.querySelectorAll(".drop select")


// //for print code
// // for(code in countryList)
// // {
// //     console.log(code,countryList[code])
// // }
// for( let select of dropdown){
//     for(code in countryList){
//         let newop=document.createElement("option")
//         newop.innerText=code;
//         newop.value=code;
//         if(select.name==="From"&&code==="USD")
//           {
//             newop.selected="selected"
        
//           }
//           else if(select.name==="TO"&&code==="INR")
//             {
//               newop.selected="selected"
          
//             }

          
//         select.append(newop);
//     }

// }const select = document.querySelector("select");

// select.addEventListener("change", (evt) => {
//     update(evt.target);
// });

// const update = (ele) => {
//     console.log("Selected value:", ele.value);
// }
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{base}/{target}.json"

const dropdowns = document.querySelectorAll(".drop select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "From" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "To" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
    // console.log(element)
     let currCode = element.value;
    //  console.log(currCode)
     let countryCode = countryList[currCode];
     
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };

  btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    let amount=document.querySelector(".amount input")
    let amtval=amount.value;
    // console.log(amtval)
    if(amtval === ""){
        amtval=1;
        amountvalue="1";
    }
    console.log(fromCurr.value,toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;


    let response=await fetch(URL)
    console.log(response)

    // updateExchangeRate();
  });
