// let firsBtn=document.getElementById("hint")
let firsBtn = document.querySelector(".btn")

firsBtn.style.color = "red";
let tempDiv = document.querySelectorAll(".temp")
let celciusLabel = document.getElementById("celciusLabel")
celciusLabel.innerHTML = "Derece"
celciusLabel.innerText = "Derece :"
celciusLabel.textContent = "Derece...:"


// tempDiv.innerHTML=`<h1 id="title" onclick="this.innerHTML = 'Merhaba Dünya' ; this.style.color = 'red' " >Hello World!</h1>
// <h2>hellooooo</h2>
// <button onclick="handleTemp()" class="btn" id="hint">This is a simple paragraph.</button>`
let newDiv = document.createElement("div")
newDiv.classList.add("temp")

let newLabel = document.createElement("label");
newLabel.textContent = "kelvin...:"

let newInput = document.createElement("input")
newInput.type = "number";
newInput.name = "kelvin";
newInput.setAttribute("id", "kelvin");

tempDiv[0].appendChild(newLabel)
tempDiv[0].appendChild(newInput)

tempDiv[0].insertAdjacentElement("afterend", newDiv)
let inputCelcius = document.getElementById("temp")

function handleTemp(params) {
    let valeuKelvin = newInput.value;
    let valeuCelcius = inputCelcius.value;
    console.log(valeuCelcius, valeuKelvin)
    newInput.value = Number(valeuCelcius) + 273.5;
}


newInput.addEventListener("input", converter);
inputCelcius.addEventListener("input", converter);

function converter(e) {
    console.log(e.target.value)
    if (e.target.name === "celcius") {

        newInput.value =e.target.value ? Number(e.target.value) + 273.5 :"";

    } else {
        inputCelcius.value = e.target.value ? Number(e.target.value) - 273.5:"";
    }


}




