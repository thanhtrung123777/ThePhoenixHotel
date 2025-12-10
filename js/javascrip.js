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
