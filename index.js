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

// Tương tác thêm một số class vào trong thẻ html
let classTheH3 = document.getElementById("title_2").className
console.log(classTheH3)
document.getElementById("title_2").className =
  classTheH3 + " bg-black text-white" // "a" + "b" => "ab" => lưu ý cần có khoảng cách

// Cách ghi nhanh hơn bằng toán tử +=
// document.getElementById("title_2").className += " bg-black text-white"

// Tương tác với thẻ input
let hoTen = (document.getElementById("hoTen").value = "MeiCloudie")
console.log(hoTen)

// Sự kiện click

// document.getElementById("btnBaiTap1").onclick = function () {
//   console.log("Hello tôi là nút button")
//   let email = document.getElementById("email").value
//   let matKhau = document.getElementById("matKhau").value
//   console.log(email)
//   console.log(matKhau)
// }

document.querySelector(".container .btn-dark").onclick = function () {
  console.log("Hello tôi là nút button")
  // Tương tác lấy dữ liệu người dùng
  let email = document.getElementById("email").value
  let matKhau = document.getElementById("matKhau").value
  console.log(email)
  console.log(matKhau)
}

// Yêu cầu bài tập bật tắt bóng đèn
// Thực hiện xây dựng 2 chức năng click dành cho nút bật đèn và tắt đèn
// Khi người dùng bấm vào nút tắt đèn,thực hiện cho bóng đèn tắt đi (thay đổi ở thẻ img)
// Khi người dùng bấm vào nút bật đèn, thực hiện cho bóng đèn sáng
// Sau khi hoàn thành 2 chức năng, tối ưu lại phần code để bảo trì và sửa lỗi cho tốt (khi sử dụng dom cho một thẻ nhiều lần, nên tạo biến lưu trữ)
let hinhBongDen = document.getElementById("hinhBongDen")
let btnBatDen = document.getElementById("btnBatDen")
let btnTatDen = document.getElementById("btnTatDen")

btnTatDen.onclick = function () {
  console.log("Nút tắt đèn")
  hinhBongDen.src = "./img/pic_bulboff.gif"
  let btnTatDenClass = btnTatDen.className
  btnTatDen.className = btnTatDenClass + " disabled"
  btnBatDen.className = "btn btn-primary"
}

btnBatDen.onclick = function () {
  console.log("Nút bật đèn")
  hinhBongDen.src = "./img/pic_bulbon.gif"
  let btnBatDenClass = btnBatDen.className
  btnBatDen.className = btnBatDenClass + " disabled"
  btnTatDen.className = "btn btn-danger"
}

hinhBongDen.onmouseenter = function () {
  console.log("Tôi đang ở trong vùng của img")
  hinhBongDen.src = "./img/pic_bulbon.gif"
}

hinhBongDen.onmouseleave = function () {
  console.log("Tôi đã đi khỏi vùng của img")
  hinhBongDen.src = "./img/pic_bulboff.gif"
}

hinhBongDen.onmousemove = function () {
  console.log("tôi là onmousemove")
}

document.querySelector(".btn-warning").onclick = function () {
  document.querySelector("body").classList.toggle("dark") // => toggle như nút bật tắt
  //   document.getElementById("demo3").classList.add("mauChuDo") // => kiểm tra có rồi thì ko thêm
  //   document.getElementById("demo3").className += " mauChuDo" // => duplicate
  //   document.getElementById("demo3").classList.remove("hehe") // => xoá class đó
}

// Tương tác tạo thẻ html thông qua JS
let theImg = document.createElement("img")
console.log(theImg)
theImg.src =
  "https://popsimg.akamaized.net/api/v2/containers/file2/cms_topic/doraemons9_05_seriesdetailimagemobile-80424f74d030-1609395371290-iZgELVcX.png?v=0"
theImg.className = "h-100 w-100"
document.getElementById("demoCreateElement").appendChild(theImg)

let phepTinh = 3 + 4 + 10 * 30
let srcImg =
  "https://i.pinimg.com/736x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg"
let hoTenPokemon = "Pikachu"

// Sử dụng một số chuỗi html
// Kỹ thuật string template (ES6)
document.getElementById("demo3").innerHTML += `
<div class="card" style="width: 18rem;">
<img src="${srcImg}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${hoTenPokemon}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
// Thực hiện viết DOM tới thẻ div vừa tạo ra và thay đổi nội dung
document.getElementById("card-body").classList.add("bg-danger")
