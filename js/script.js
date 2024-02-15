document.getElementById('resetButton').onclick = clearForm;
document.getElementById('convertButton').onclick = calculation;
document.getElementById('tukarButton').onclick = tukarTemp;

var inputNilai = document.getElementById('inputSuhu');
var outputNilai = document.getElementById('outputSuhu');

let selector = 0;
let modulo = 0;

tempSelect = "Celsius Ke Fahrenheit";

function clearForm () {
    outputNilai.value = '';
    inputNilai.value = ''; 
}

function tukarTemp () {
    if (tukarTemp = true) {
        selector ++;
        modulo = selector % 2;
    }

    if (modulo == 0) {
        tempSelect = "Celsius Ke Fahrenheit";
        document.getElementById('labelInputSuhu').innerHTML = "Celsius (°C)";
        document.getElementById('labelOutputSuhu').innerHTML = "Fahrenheit (°F)";
        document.getElementById('keterangan').innerHTML = tempSelect;
        console.log("celsiusToFahrenheit")
    } else {
        tempSelect = "Fahrenheit Ke Celsius";
        document.getElementById('labelInputSuhu').innerHTML = "Fahrenheit (°F)";
        document.getElementById('labelOutputSuhu').innerHTML = "Celsius (°C)";
        document.getElementById('keterangan').innerHTML = tempSelect;
        console.log("fahrenheitToCelsius")
    }
} 

function calculation () {
    if (tempSelect == "Celsius Ke Fahrenheit") {
        let fahrenheitOut = (parseFloat((inputNilai.value *(9/5)) + 32));
        outputNilai.value = (parseFloat(fahrenheitOut));
        
    } else if (tempSelect == "Fahrenheit Ke Celsius") {
        let celsiusOut = (parseFloat((inputNilai.value - 32) * (5/9)));
        outputNilai.value = (parseFloat(celsiusOut));
    }
}