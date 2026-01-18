const listImgs = document.querySelector('.list-imgs')
const imgs = document.querySelectorAll('.list-imgs img')
const length = imgs.length

let i = 0
const right = document.querySelector('.btn-right')
right.addEventListener('click', function () {
    if (i == length - 1) {
        i = 0
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(0px)`
    }
    else {
        i++
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(${width * -1 * i}px)`
    }
})

const left = document.querySelector('.btn-left')
left.addEventListener('click', function () {
    if (i == 0) {
        i = length - 1
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(${width * -1 * i}px)`
    }
    else {
        i--
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(${width * -1 * i}px)`
    }
})

//  MENU MOBILE
const burger = document.querySelector('.burger');
const menu = document.querySelector('.sticky-header');
const booking = document.getElementById('openBooking');
burger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active'); 
});
booking.addEventListener('click', () => {
    console.log("Mở phần lịch đặt thôi");
});

// ĐONG MỞ FORM ĐẶT PHÒNG
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closeBooking");
const bookingBox = document.getElementById("bookingBox");

openBtn.onclick = () => bookingBox.style.display = "flex";
closeBtn.onclick = () => bookingBox.style.display = "none";

const form = document.getElementById("bookingForm");
if (form) {
    form.onsubmit = function(e) {
        e.preventDefault(); 
        Swal.fire({
            title: 'Thành công!',
            text: 'Đã gửi thông tin đặt phòng!',
            icon: 'success',
            confirmButtonColor: '#1c483b'
        });
        bookingBox.style.display = "none";
    };
}
// SPINNER
document.querySelectorAll('.spinner').forEach(spinner => {
    const count = spinner.querySelector('.count');
    const up = spinner.querySelector('.up');
    const down = spinner.querySelector('.down');

    up.onclick = () => {
        count.textContent = Number(count.textContent) + 1;
    };

    down.onclick = () => {
        if (Number(count.textContent) > 0) {
            count.textContent = Number(count.textContent) - 1;
        }
    };
});

