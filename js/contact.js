

// CONTACT FORM VALIDATION AND SUBMISSION
    document.getElementById("submitBtn").addEventListener("click", function (e) 
    {
        e.preventDefault();

        let inputs = document.querySelectorAll(".i4mt input[required]");
        let msg = document.getElementById("msg");
        let valid = true;

        inputs.forEach(input => 
        {
            if (input.value.trim() === "")
            {
                valid = false;
                input.style.borderBottom = "2px solid red";
            }
            else
                input.style.borderBottom = "1px solid #000";
        });
        if (!valid) 
        {
            msg.innerText = "Vui lòng điền đầy đủ thông tin bắt buộc!";
            msg.style.color = "red";
        }
        else 
        {
        this.innerHTML = "ĐANG GỬI...";
        this.style.opacity = "0.5";
        setTimeout(() => 
            {
                this.innerHTML = "XONG";
                this.style.opacity = "1";
                msg.innerText = "Cảm ơn bạn đã liên hệ với chúng tôi!";
                msg.style.color = "#3fa300";
                document.querySelectorAll(".i4mt input").forEach(i => i.value = "");
            }, 500);
        }
    });

// ĐONG MỞ FORM ĐẶT PHÒNG
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closeBooking");
const bookingBox = document.getElementById("bookingBox");

openBtn.onclick = () => bookingBox.style.display = "flex";
closeBtn.onclick = () => bookingBox.style.display = "none";

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

