const anh1 = document.querySelector(".lockin .anh .left");
// ảnh giữa
const anh2 = document.querySelector(".lockin .anh .center");   
const anh3 = document.querySelector(".lockin .anh .right");
const anhContain = document.querySelector(".anh");

anh3.addEventListener("click", () =>{
    anh1.className = "left2";
    anh2.className = "left3";
    anh3.className = "center";
    anh3.src = "swimming-pool.png";

    const anh4 = document.createElement("img");
    anh4.src = "holiday-view-2339900_1280 1.png";
    anh4.className = "right2";
    

    anhContain.appendChild(anh4);
})


