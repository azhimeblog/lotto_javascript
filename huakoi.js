let round = prompt("คุณจะเล่นเกมนี้ ทายหัวก้อย กี่รอบ");
let score = 0;
for (i = 1; i <= round; i++) {
    var ans = prompt("คุณคิดว่าตานี้จะออก หัว  หรือ  ก้อย  ");
    var random_ans = ""
    if (Math.floor(Math.random() * 10) <= 4) {
        random_ans = "หัว";
    } else {
        random_ans = "ก้อย";
    }
    if (ans == random_ans) {
        score = score + 1;
        alert("คุณชนะได้คะแนนไป 1 คะแนน")
    } else {
        score = score;
        alert("คุณแพ้ลองอีกทีนะ")
    }
    document.getElementById("round").innerHTML = "คุณเล่นทั้งหมด  " + round + "   เกม"
    document.getElementById("ans").innerHTML += " <b>เกมที่ " + i + " </b>เกมนี้ออก  " + random_ans + " <br>"
    document.getElementById("result").innerHTML = "คะแนนที่คุณได้คือ   " + score + "   คะแนน"

}