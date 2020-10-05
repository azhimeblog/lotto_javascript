var years = 1;
var month = 30;
var days = 365;

var money = document.getElementById("youdeposit").value;

if (money <= 0) {
    swal("โปรดใส่เงิน ที่คุณจะเริ่มฝาก");
} else {
    swal("เงินฝากของคุณคือ", money + "  บาท");
}


var yearof = document.getElementById("yeardeposit").value;
if (yearof <= 0) {
    swal("โปรดระบุปีของคุณ");
} else {
    swal("จำนวนที่คุณเลือกจากฝากคือ ", yearof + "  ปี");
}


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