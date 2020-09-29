let qrt = prompt("ใส่จำนวนสินค้าของคุณ");
let sum = 0

for (var i = 1; i <= qrt; i++) {
    let item_name = prompt("ชื่อเมนู")
    let item_price = prompt("ราคาของสินค้าเมนูที่" + i)
    let item_qrt = prompt("สั่งกี่ชิ้นครับ")

    sum = sum + (parseInt(item_price) * parseInt(item_qrt))

    document.getElementById("price-list").innerHTML += " รายการสินค้าชิ้นที่ " + i + item_name + ":" + item_price + "  บาท" + "      สั่งทั้งหมด   " + item_qrt + "  ชิ้น " + "<br>"

    document.getElementById("sum").innerHTML = "ราคารวม  " + sum + " บาท"
}