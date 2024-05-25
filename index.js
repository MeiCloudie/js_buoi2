// Tương tác với thẻ html thông qua id

// Thay đổi nội dung của thẻ
// Câu lệnh DOM (Data Object Model)
let theH1 = document.getElementById("title")
console.log(theH1)
theH1.innerHTML = "Hello Mei"

// Thực hiện viết câu lệnh DOM tới thẻ h2 có id demo và thay đổi nội dung thành OMG
let theH2 = (document.getElementById("demo").innerHTML = "OMG")

// Tương tác với thẻ h2 có id demo để đổi màu nền
document.getElementById("demo").style.backgroundColor = "red"

// Thực hiện gọi tới thẻ h1 có id title và thay đổi màu nền thành màu đen
// Tiếp theo là màu chữ trắng và sẽ có thêm paddin 10px
theH1.style.backgroundColor = "black"
theH1.style.color = "white"
theH1.style.padding = "10px"

// Tương tác với thẻ img
document.getElementById("hinhAnh").src =
  "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
