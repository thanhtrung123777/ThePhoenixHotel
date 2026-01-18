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


// FILTER
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".hi1, .hi2, .hi3");

  const checkboxes = document.querySelectorAll(".chon input[type='checkbox']");

  checkboxes.forEach(cb => cb.addEventListener("change", filterItems));

  function filterItems() {
    const filters = {
      establishment: getChecked("establishment"),
      meal: getChecked("meal"),
      dish: getChecked("dish"),
      price: getChecked("price"),
      amenities: getChecked("amenities"),
    };

    items.forEach(item => {
      let visible = true;

      for (let key in filters) {
        if (filters[key].length === 0) continue;

        const data = (item.dataset[key] || "").split("|");

        if (!filters[key].some(v => data.includes(v))) {
          visible = false;
          break;
        }
      }

      item.style.display = visible ? "" : "none";
    });
  }

  function getChecked(name) {
    return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
      .map(cb => cb.value);
  }
});


// GẬP / MỞ MENU LỌC
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



//XEM TẤT CẢ
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".modal .close");

  document.querySelectorAll(".show-all").forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  });

  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  const applyBtn = document.querySelector(".modal .apply");
  const resetBtn = document.querySelector(".modal .reset");
  const searchInput = document.querySelector(".search_b");
  const checkboxes = document.querySelectorAll('.modal-content input[type="checkbox"]');
  const sections = document.querySelectorAll(".hi1, .hi2, .hi3");
  resetBtn.addEventListener("click", () => {
    checkboxes.forEach(cb => cb.checked = false);
    searchInput.value = "";

    checkboxes.forEach(cb => {
      cb.parentElement.style.display = "block";
    });

    sections.forEach(sec => sec.style.display = "block");
  });
  applyBtn.addEventListener("click", () => {
    const selected = [...checkboxes]
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());
    if (selected.length === 0) {
      sections.forEach(sec => sec.style.display = "block");
      closeModal();
      return;
    }

    sections.forEach(section => {
      const dishData = section.dataset.dish || "";
      const dishList = dishData.split("|").map(d => d.trim());

      const match = selected.some(dish => dishList.includes(dish));
      section.style.display = match ? "block" : "none";
    });

    closeModal();
  });
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    checkboxes.forEach(cb => {
      const text = cb.parentElement.textContent.toLowerCase();
      cb.parentElement.style.display = text.includes(keyword)
        ? "block"
        : "none";
    });
  });

});


//ACTIVE CHO MENU
const page = location.pathname.split("/").pop() || "home.html";
  document.querySelectorAll(".sticky-header a").forEach(a => {
    if (a.getAttribute("href") === page) {
      a.classList.add("active");
    }
  });

// ĐONG MỞ FORM ĐẶT PHÒNG
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closeBooking");
const bookingBox = document.getElementById("bookingBox");

openBtn.onclick = () => bookingBox.style.display = "flex";
closeBtn.onclick = () => bookingBox.style.display = "none";

// SPINNER
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

// LỌC
const filterBtn = document.querySelector('.filter-toggle');
const filterBox = document.querySelector('.chon');

filterBtn.onclick = (e) => {
  e.stopPropagation();
  filterBox.classList.toggle('active');
};

document.onclick = (e) => {
  if (!filterBox.contains(e.target) && !filterBtn.contains(e.target)) {
    filterBox.classList.remove('active');
  }
};

// CUỘN
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.hi1, .hi2, .hi3').forEach(el => observer.observe(el));
});

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
// NÚT ĐẶT BÀN
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#datBanBtn");
  
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Thông báo',
        text: 'Đặt bàn thành công!',
        icon: 'success',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#1c483b',
        customClass: {
          popup: 'my-mobile-popup'
        }
      });
    });
  }
});
//GIỚI THIỆU
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.gthieu');
    const nextBtn = document.querySelector('.gth-next');
    const prevBtn = document.querySelector('.gth-prev');
    let currentIndex = 0;
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    function changeSlide(direction) {
        slides[currentIndex].classList.remove('active');

        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % slides.length;
        } else {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }

        slides[currentIndex].classList.add('active');
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeSlide('next');
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeSlide('prev');
        });
    }
});
