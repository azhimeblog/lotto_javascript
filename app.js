//let name = prompt("ใส่ชื่อของคุณ:")
//document.getElementById("name").innerHTML = name

let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ:")
let final_number = Math.floor(Math.random() * 10)

document.getElementById("lotternumber").innerHTML = lotto_number
document.getElementById("result").innerHTML = final_number


if (lotto_number == final_number) {
    document.getElementById("final").innerHTML = "คุณถูกรางวัล"
}
else {
    document.getElementById("final").innerHTML = "แย่จังไม่ถูกรางวัล"
}