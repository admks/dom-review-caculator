// /*
// const myFirstDiv = document.querySelector(".temp")
// const myDiv = document.getElementById("main")
// const newP = document.createElement("p")
// //newP.innerHTML = "bu yeni paragraf"
// const content = document.createTextNode("Bu daha yeni bir paragraf")
// newP.appendChild(content)
// myDiv.appendChild(newP)
// myFirstDiv.insertAdjacentElement("afterbegin",newP )
// myFirstDiv.insertAdjacentHTML("afterend", '<h3>bu sonra gelen h3</h3>')

// const myH1 = document.querySelector("#main #title")
// function handleClick(nodeItem) {
//     console.log(myH1)
//     myH1.innerHTML = "Merhaba Dünya"
//     document.body.style.backgroundColor = "yellow";
//     nodeItem.style.color = "blue"
// }

// const myBtn = document.querySelector(".btn")

// let count = 0;
// let result = document.createElement("span")
// result.classList.add("counter")
// myBtn.insertAdjacentElement("afterend",result);

// myBtn.addEventListener("click", function (event) {
//     count +=1;
//     result.innerHTML = count;
//     //console.log(event.target)  // event.target => event'in sahibi eleman
//     myH1.innerHTML = "Merhaba Dünya"
// })
// */

// const input = document.getElementById("temp");
// const resultPara = document.querySelector("p#result")

// // versiyon-1
// // input.addEventListener("input", function (e) {
// //     console.log(e.target.value) // usül budur
// //     let inputVal = Number(e.target.value);
// //     //console.log(inputVal + 2);
// //     let kelvinVal = inputVal + 273.15 ;
// //     resultPara.innerHTML = `Kelvin değeri : ${kelvinVal}`;
// //     //console.log(input.value)  // bu da çalışır
// // })

// // versiyon-2
// input.oninput = function (e) {
//     console.log(e.target.value) // usül budur
//     let inputVal = Number(e.target.value);
//     //console.log(inputVal + 2);
//     let kelvinVal = inputVal + 273.15 ;
//     resultPara.innerHTML = `Kelvin değeri : ${kelvinVal}`;
// }

// // versiyon-1 alternatif yol, tavsiye edilen yol
// input.addEventListener("input", handleInput)

// function handleInput (e) {
//     console.log(e.target.value) // usül budur
//     let inputVal = Number(e.target.value);
//     //console.log(inputVal + 2);
//     let kelvinVal = inputVal + 273.15 ;
//     resultPara.innerHTML = `Kelvin değeri : ${kelvinVal}`;
//     //console.log(input.value)  // bu da çalışır
// }