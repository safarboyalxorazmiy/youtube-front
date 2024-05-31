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

// .onclick

let liArray = document.querySelectorAll("li") // [li, li, li]
liArray.forEach(li => {
    li.onclick = function() {
        // Hammasidan olib tashlash
        liArray.forEach(li => {
            li.classList.remove("active");
        })

        // bittasiga qo'shish
        li.classList.add("active");
    }
});

// React + Backend