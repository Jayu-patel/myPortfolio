const btn = document.querySelector("#btn")
const closebtn = document.querySelector("#closebtn")
const link = document.querySelectorAll(".alink")
const list = document.querySelector(".nav_links")
let n = 0
btn.addEventListener('click', () => {
    n = 1
    closebtn.style.display = "block"
    btn.style.display = "none"
    list.style.width = '200px'
    link.forEach(e => {
        e.style.display = 'block'
    })
})

closebtn.addEventListener('click', () => {
    n = 0
    btn.style.display = "block"
    closebtn.style.display = "none"
    list.style.width = '0px'
    link.forEach(e => {
        e.style.display = 'none'
    })
})

const closenav = [
    document.querySelector('.sec'),
    document.querySelector('.skills'),
    document.querySelector('.qualification'),
    document.querySelector('.project')
]

closenav.forEach(e => {
    e.addEventListener('click', () => {
        if(n == 0){
            return
        }
        console.log("ok")
        btn.style.display = "block"
        closebtn.style.display = "none"
        list.style.width = '0px'
        link.forEach(e => {
            e.style.display = 'none'
        })
    })
})