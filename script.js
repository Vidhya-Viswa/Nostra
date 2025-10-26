var offerBar = document.querySelector(".offer_bar")

document.getElementById("offer_close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    })

var sideNavMenu = document.getElementById("side_navbar_activates")
var sidenavbar = document.querySelector(".side_navbar")

sideNavMenu.addEventListener("click",

    function () {
        sidenavbar.style.marginLeft = "0px"
    })

document.getElementById("side_navbar_close").addEventListener("click",
    () => {

        document.querySelector(".side_navbar").style.marginLeft = "-60%"

    })

var sliderleftbutton = document.getElementById("slider_left_activates")
var sliderrightbutton = document.getElementById("slider_right_activates")
var sliderimage = document.querySelector(".slider_image_container")
var slidermargin = 0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

    function () {

        slidermargin = slidermargin + 100

        if (slidermargin > 200) {
            slidermargin = 0
            sliderimage.style.marginLeft = 0;
        }

        else {
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }

    })

sliderleftbutton.addEventListener("click",

    function () {

        if (slidermargin == 0) {
            slidermargin = 200
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }

        else {
            slidermargin = slidermargin - 100
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }

    })

var likebuttons = document.querySelectorAll(".like_button")

likebuttons.forEach((btn) => {

    btn.addEventListener("click",
        function (e) {

        const isBlackHeart = e.target.src.toLowerCase().includes("black_heart")

        e.target.src = isBlackHeart ? "./Red_Heart.png" : "./Black_Heart.png"

    })
})

window.addEventListener("scroll", 
    function () {

    var elements = this.document.querySelectorAll(".initial_scroll")

    elements.forEach((el) => {

        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()
        console.log(windowHeight)
        console.log(elbound.top) 

        if (windowHeight > elbound.top - 100) {
            console.log("Hi")
            el.classList.remove("reveal_scroll")
        }

    })
})


