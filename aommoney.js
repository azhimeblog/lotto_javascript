var years = 365;
var month = 30;
var days = 1;


function showdeposit() {
    let money = document.getElementById("youdeposit").value;
    swal("เงินฝากของคุณคือ", money + "  บาท");

    return money
}



function typedeposit() {

    let days = document.getElementById("typeofdeposit").value

    if (days <= 1) {
        swal("ประเภทที่คุณเลือกคือ", " แบบรายวัน ");
    } else {
        swal("ประเภทที่คุณเลือกคือ", " xxxxx ");
    }
}

function display(elementid, money) {
    document.getElementById(elementid).innerHTML = money
}