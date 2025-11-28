// search.js
const items = [
  "Breakfast buffet",
  "Sea food",
  "Vietnamese food",
  "International cuisine",
  "Beverage",
  "Dessert",
  "Soup"
];

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchPicker");
const resultDiv = document.getElementById("result");

function searchItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  if (!keyword) {
    resultDiv.innerHTML = "<p>Hãy nhập từ khóa để tìm!</p>";
    return;
  }

  const results = items.filter(item => item.toLowerCase().includes(keyword));

  if (results.length > 0) {
    resultDiv.innerHTML = "<ul>" + results.map(r => "<li>" + r + "</li>").join("") + "</ul>";
  } else {
    resultDiv.innerHTML = "<p>Không tìm thấy kết quả nào!</p>";
  }
}

searchBtn.addEventListener("click", searchItems);
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchItems();
  }
});
//....


// .........
const checkboxes = document.querySelectorAll('.chon input[type="checkbox"]');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    console.log(cb.name, cb.value, cb.checked); 
  });
});
// .........