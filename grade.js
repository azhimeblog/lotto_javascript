let grade = prompt("ใส่คะแนนของคุณ")



if (grade >= 90) {
    document.getElementById("grade").innerHTML = "คะแนนขอบคุณ" + grade + "ได้เกรด A"
}
else if (grade >= 85) {
    document.getElementById("grade").innerHTML = "คะแนนขอบคุณ" + grade + "ได้เกรด B"
}
else if (grade >= 75) {
    document.getElementById("grade").innerHTML = "คะแนนขอบคุณ" + grade + "ได้เกรด C"
}
else if (grade >= 60) {
    document.getElementById("grade").innerHTML = "คะแนนขอบคุณ" + grade + "ได้เกรด D"
}
else {
    document.getElementById("grade").innerHTML = "คะแนนขอบคุณ" + grade + "ได้เกรด F ต่ำขนาดนี้ไปเรียนมาใหม่นะ"
}


for (var couter = 0;couter <5;couter++)
{
    document.getElementById("grade").innerHTML = "คะแนนขอบคุณ" + grade + "ได้เกรด F ต่ำขนาดนี้ไปเรียนมาใหม่นะ"+couter
}

