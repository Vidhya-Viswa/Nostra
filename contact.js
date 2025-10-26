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

