
var offerBar = document.querySelector(".offer_bar")

document.getElementById("offer_close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    })

var sideNavMenu = document.querySelector(".navbar_menu")
var sidenavbar = document.querySelector(".side_navbar")

sideNavMenu.addEventListener("click",

    function () {
        sidenavbar.style.marginLeft = "0px"
    })

document.getElementById("side_navbar_close").addEventListener("click",

    () => {
        document.querySelector(".side_navbar").style.marginLeft = "-60%"
    })

var container = document.querySelector(".products")



products.forEach((product) => {

    var createItem = document.createElement("div")
    createItem.classList.add("product")

    createItem.innerHTML = ` <img style="width: 20vw;" src="${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

var filterList = []
var tags = document.getElementsByName("tags")

console.log(tags)

tags.forEach((tag) => {

    tag.addEventListener("change", (e) => {

        if (e.target.checked) {
            filterList.push(e.target.value)
            console.log(filterList)
            update()
        }

        else {
            filterList = filterList.filter(item => item !== e.target.value);
            update()
        }

    })

})

function update() {

    var productList = document.querySelectorAll(".product")

    for (var i = 0; i < productList.length; i++) {

        var check = false
        var product = productList[i]

        console.log(product)
        var temp = product.querySelector("tags").innerHTML

        console.log("elemen" + temp)

        const tempFilterArray = temp.split(',');

        console.log("tempfilterarray" + tempFilterArray)
        console.log("filterlist" + filterList)

        filterList.forEach((j) => {
            tempFilterArray.forEach((i) => {
                if (j == i) {
                    check = true
                }

            })

        })

        if (!check && filterList.length > 0) {
            product.style.display = "none"
        }

        else {
            product.style.display = "block"
        }

    };

}
