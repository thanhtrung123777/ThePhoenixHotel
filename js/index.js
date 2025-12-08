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
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.item-' + i).classList.add('active')
    }
    else {
        i++
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(${width * -1 * i}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.item-' + i).classList.add('active')
    }
})

const left = document.querySelector('.btn-left')
left.addEventListener('click', function () {
    if (i == 0) {
        i = length - 1
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(${width * -1 * i}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.item-' + i).classList.add('active')
    }
    else {
        i--
        let width = imgs[0].offsetWidth
        listImgs.style.transform = `translateX(${width * -1 * i}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.item-' + i).classList.add('active')
    }
})


const btns = document.querySelectorAll('.topic div')
let img = document.querySelector('.show-pics img')
let topic = document.querySelector('.introduce-room h2')
let para = document.querySelector('.introduce-room p')
btns[0].addEventListener('click', function () {
    img.src = 'img/Capell-Bangkok-Riverfront-011.png'
    topic.textContent = 'ROOM'
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    document.querySelector('.hr').classList.remove('hr')
    document.querySelector('.btn1').classList.add('hr')
})
btns[1].addEventListener('click', function () {
    img.src = 'img/Capella-Bangkok-Courtyard-Suite-g01 1.png'
    topic.textContent = 'SUITES'
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    document.querySelector('.hr').classList.remove('hr')
    document.querySelector('.btn2').classList.add('hr')
})
btns[2].addEventListener('click', function () {
    img.src = 'img/Capella-Bangkok-Villa-01a 1.png'
    topic.textContent = 'VILLA'
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    document.querySelector('.hr').classList.remove('hr')
    document.querySelector('.btn3').classList.add('hr')
})
