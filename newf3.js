const btn = document.querySelector("#btn")
const closebtn = document.querySelector("#closebtn")
const link = document.querySelectorAll(".alink")
const list = document.querySelector(".nav_links")

btn.addEventListener('click', () => {
    closebtn.style.display = "block"
    btn.style.display = "none"
    list.style.width = '250px'
    link.forEach(e => {
        e.style.display = 'block'
    })
})

closebtn.addEventListener('click', () => {
    btn.style.display = "block"
    closebtn.style.display = "none"
    list.style.width = '0px'
    link.forEach(e => {
        e.style.display = 'none'
    })
})

const closenav = [
    document.querySelector('.sec'),
    document.querySelector('.skills')
]

closenav.forEach(e => {
    e.addEventListener('click', () => {
        btn.style.display = "block"
        closebtn.style.display = "none"
        list.style.width = '0px'
        link.forEach(e => {
            e.style.display = 'none'
        })
    })
})