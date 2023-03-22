const btn = document.querySelector("#btn")
const closebtn = document.querySelector("#closebtn")
const link = document.querySelectorAll(".alink")
const list = document.querySelector(".nav_links")
const resTxt = document.querySelector("#result_text")
const subBtn = document.querySelector("#sub_btn")
const input_text = document.querySelectorAll(".input_box")

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
    document.querySelector('.project'),
    document.querySelector('.contact')
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

// const resTxt = document.querySelector("#result_text")
// const subBtn = document.querySelector("#sub_btn")
// const input_text = document.querySelectorAll(".input_box")

subBtn.addEventListener('click',()=>{
    if(input_text[0].value == '' || input_text[1].value == '' || input_text[2].value == ''){
        resTxt.classList.add('red')
        resTxt.innerHTML = "Plese Enter All Values"

        setTimeout(()=>{
            resTxt.innerHTML = ""
            resTxt.classList.remove('green')
            resTxt.classList.remove('red')
        },5500)
    }
    else{
        resTxt.classList.add('green')
    resTxt.innerHTML = "Message Sent successfully !"

    input_text.forEach(e => e.value = '')
    setTimeout(()=>{
        resTxt.innerHTML = ""
        resTxt.classList.remove('green')
        resTxt.classList.remove('red')
    },3500)
    }
})