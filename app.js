let name = prompt("ใส่ชื่อของคุณ:")
document.getElementById("name").innerHTML = name

let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ:")
document.getElementById("lotternumber").innerHTML = lotto_number
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)