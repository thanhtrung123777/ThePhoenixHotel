// SEARCH
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchPicker");

function searchItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  const allH = document.querySelectorAll(".hien > div");

  if (!keyword) {
    allH.forEach(div => div.style.display = "flex");
    return;
  }

  allH.forEach(div => {
    const text = div.querySelector("h2").innerText.toLowerCase();
    div.style.display = text.includes(keyword) ? "flex" : "none";
  });
}

searchBtn.addEventListener("click", searchItems);
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchItems();
});


// SLIDESHOW
document.querySelectorAll('.slider, .slider2, .slider3, .slider4, .slider5, .slider6, .slider7')
.forEach(slider => {

  const slides = slider.querySelectorAll('img');
  const nextBtn = slider.querySelector('.next');
  const prevBtn = slider.querySelector('.prev');
  let index = 0;

  function show(i) {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
  }

  nextBtn.onclick = () => {
    index = (index + 1) % slides.length;
    show(index);
  };

  prevBtn.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  };
});


// BOOKING 
document.querySelectorAll(".book").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Bạn đã book thành công!");
  });
});


// FILTER
const filters = document.querySelectorAll('.container input[type="checkbox"]');
const items = document.querySelectorAll('.hien > div');

filters.forEach(filter => {
  filter.addEventListener('change', applyFilters);
});

function applyFilters() {
  const selected = {
    establishment: getCheckedValues('establishment'),
    meal: getCheckedValues('meal'),
    dish: getCheckedValues('dish'),
    price: getCheckedValues('price'),
    amenities: getCheckedValues('amenities')
  };

  items.forEach(item => {
    let show = true;
    for (let key in selected) {
      if (selected[key].length > 0) {
        const val = item.dataset[key];
        if (!selected[key].includes(val)) show = false;
      }
    }
    item.style.display = show ? "flex" : "none";
  });
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    .map(i => i.value);
}
// GẬP / MỞ

document.querySelectorAll(".chon > div > p").forEach(title => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");

    title.parentElement
      .querySelectorAll("ul")
      .forEach(ul => ul.classList.toggle("hide"));
  });
});



// XEM THÊM
document.querySelectorAll(".show-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const moreList = btn.previousElementSibling;

    if (!moreList || !moreList.classList.contains("more")) return;

    const isOpen = moreList.style.display === "block";

    moreList.style.display = isOpen ? "none" : "block";
    btn.classList.toggle("active");

    btn.querySelector("span").innerText = isOpen ? "Xem thêm" : "Thu gọn";
  });
});



//xem tất cả
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


document.querySelectorAll(".show-all").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

document.querySelector(".close").onclick = closeModal;
overlay.onclick = closeModal;

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

//active cho menu
const page = location.pathname.split("/").pop() || "home.html";
  document.querySelectorAll(".sticky-header a").forEach(a => {
    if (a.getAttribute("href") === page) {
      a.classList.add("active");
    }
  });
/* mở / đóng booking */
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closeBooking");
const bookingBox = document.getElementById("bookingBox");

openBtn.onclick = () => bookingBox.style.display = "flex";
closeBtn.onclick = () => bookingBox.style.display = "none";

/* spinner ▲ ▼ */
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

