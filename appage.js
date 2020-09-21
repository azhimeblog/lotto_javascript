var age = prompt("กรอกอายุของคุณ")
if (age > 13) {
    console.log(age);
    document.getElementById("content").innerHTML = "คุณอายุเกิน 13 ปี อายุของคุณคือ" + age
    document.getElementById("content").innerHTML = " <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rUWOZ3HQ3Y4\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"

}