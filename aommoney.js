var years = 1;
var month = 30;
var days = 365;


function showdeposit(money) {
    money = document.getElementById("youdeposit").value;
    if (money == "โปรดใส่เงินของคุณ") {
        swal("โปรดใส่เงินที่คุณจะเริ่มฝาก");
    } else {
        swal("เงินฝากของคุณคือ", money + "  บาท");
    }
    return money;
}

function yearsdeposit(yearof) {
    yearof = document.getElementById("yeardeposit").value;

    if (yearof <= 0) {
        swal("โปรดระบุปีของคุณที่ต้องการฝากเงิน");
    } else {
        swal("จำนวนที่คุณเลือกจากฝากคือ ", yearof + "  ปี");
    }
    return yearof;
}



function typedeposit(types) {

    types = document.getElementById("typedeposit").value;

    if (types == "รายวัน") {
        swal("คุณเลือกแบบรายวัน");

    } else if (types == "รายเดือน") {
        swal("คุณเลือกแบบรายเดือน");
    } else if (types == "รายปี") {
        swal("คุณเลือกแบบรายปี");

    } else {
        swal("โปรเลือกประเภทการเก็บเงินของคุณ", "โดยพิมพ์เป็น รายวัน | รายเดือน | รายปี");
    }
    return types;

}

function interest(interestperyear) {
    interestperyear = document.getElementById("interestperyear").value / 100;
    interestx = parseFloat(interestperyear);

    if (interestperyear <= 0) {
        swal("ใส่จำนวนดอกเบี้ยที่คิดว่าจะได้ ต่อปี");
    } else {
        swal("ดอกเบื้ยของคุณคือ  " + interestperyear + " %");
    }
    return interestx;
}



function sumary(money, yearof, interestperyear) {

    final = "เงินฝากของคุณคือในปีนี้คือ " + (showdeposit(money) * 12) * 0.12;



    document.getElementById("sum").innerHTML = final;
}