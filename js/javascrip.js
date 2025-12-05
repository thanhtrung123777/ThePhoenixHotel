
//search
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchPicker");

function searchItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  const allH = document.querySelectorAll(".hien > div");

  if (!keyword) {
    allH.forEach(div => div.style.display = "");
    return;
  }

  allH.forEach(div => {
    const text = div.querySelector("div[class^='nd']").innerText.toLowerCase();
    if (text.includes(keyword)) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  });
}

searchBtn.addEventListener("click", searchItems);
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") searchItems();
});

//....slideshow..

document.querySelectorAll('.slider, .slider2, .slider3, .slider4, .slider5, .slider6, .slider7').forEach(slider => {
    const slides = slider.querySelectorAll('img');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((img, i) => img.classList.toggle('active', i === index));
    }

    slider.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    slider.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});

// .........
const checkboxes = document.querySelectorAll('.chon input[type="checkbox"]');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    console.log(cb.name, cb.value, cb.checked); 
  });
});
// .........
