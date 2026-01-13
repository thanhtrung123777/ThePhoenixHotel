//ĐÁNH GIÁ
const ratings = {
    google: 4.7,
    tripadvisor: 4.6,
    booking: 9.3 / 2,
    expedia: 9.6 / 2,
    trip: 9.3 / 2
  };

  const values = Object.values(ratings);
  const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);

  document.querySelector(".score").innerHTML = avg + "<span>/5</span>";

//SLIDE DỊCH VỤ
const track = document.querySelector('.anh_dv');
const imgs = document.querySelectorAll('.anh_dv img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;
const visible = 3;
const step = 480; 
const max = imgs.length - visible;

next.onclick = () => {
    if (index < max) {
        index++;
        move();
    }
};

prev.onclick = () => {
    if (index > 0) {
        index--;
        move();
    }
};

function move() {
    track.style.transform = `translateX(-${index * step}px)`;
}

// ĐONG MỞ FORM ĐẶT PHÒNG
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closeBooking");
const bookingBox = document.getElementById("bookingBox");

openBtn.onclick = () => bookingBox.style.display = "flex";
closeBtn.onclick = () => bookingBox.style.display = "none";
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
const form = document.getElementById("bookingForm");

form.onsubmit = function(e) {
    e.preventDefault(); 

    alert("Đã gửi thông tin đặt phòng!");

    bookingBox.style.display = "none";
};

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
// SEARCH
let input = document.querySelector("#searchPicker");
let main = document.querySelector(".main");
let items = main.children;

input.addEventListener("input", () => {
  let keyword = input.value.toLowerCase().trim();

  Array.from(items).forEach(item => {
    let text = item.innerText.toLowerCase();

    if (text.includes(keyword)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});