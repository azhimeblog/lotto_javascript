var years = 1;
var month = 30;
var days = 365;


function showdeposit(money) {
    money = document.getElementById("youdeposit").value;
    if (money <= 0) {
        swal("โปรดใส่เงิน ที่คุณจะเริ่มฝาก");
    } else {
        swal("เงินฝากของคุณคือ", money + "  บาท");
    }
    return money + " บาท";
}

function yearsdeposit(yearof) {
    var yearof = document.getElementById("yeardeposit").value;

    if (yearof <= 0) {
        swal("โปรดระบุปีของคุณ");
    } else {
        swal("จำนวนที่คุณเลือกจากฝากคือ ", yearof + "  ปี");
    }

    return yearof + "  ปี";
}



function typedeposit(types) {

    var types = document.getElementById("typedeposit").value;

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

function sumary(money, yearof) {

    final = "เงินฝากของคุณคือ " + showdeposit(money) + " , จำนวนปีที่ฝากคือ " + yearsdeposit(yearof);
    document.getElementById("sum").innerHTML = final;
}