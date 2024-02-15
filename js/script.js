document.getElementById('resetButton').onclick = clearForm;

function clearForm () {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';    
}