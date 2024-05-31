let ul = document.querySelector("ul");
ul.style.display = "none";

let isOpened = false;

let menuIcons = document.querySelectorAll(".menu-icon");
menuIcons[0].addEventListener("click", () => {
    document.querySelector("nav").style.left = "0";
    document.querySelector(".darker").style.display = "block";

    ul.style.display = "block";
    isOpened = true;
})

menuIcons[1].addEventListener("click", () => {
    if (isOpened == true) {
        // Yopish
        document.querySelector("nav").style.left = "-30%";
        document.querySelector(".darker").style.display = "none";

        ul.style.display = "none";
        isOpened = false;
    }
})