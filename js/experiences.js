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


const burger = document.querySelector('.burger');
const menu = document.querySelector('.sticky-header');
burger.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active'); // đóng
    } else {
        menu.classList.add('active'); // mở
    }
});




