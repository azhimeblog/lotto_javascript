function toCelsius(fahrenheit) {

    let value = (fahrenheit - 32) * 5 / 9;
    return "อุณภมิที่คุณระบุเป็นแบบ Celsius คือ " + value.toFixed(2) + " ํC"
}

function display(elementid, value) {
    document.getElementById(elementid).innerHTML = value
}


function toFaharenheit(celsius) {
    let value = (celsius * 9) / 5 + 32
    return "อุณภมิที่คุณระบุเป็นแบบ Faharenheit คือ " + value.toFixed(2) + " ํF"
}

function display(elementid, value) {
    document.getElementById(elementid).innerHTML = value
}


display("fa", toCelsius(120))
display("cd", toFaharenheit(120))