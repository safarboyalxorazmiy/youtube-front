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

let page = "home";

let liArray = document.querySelectorAll("li") // [li, li, li]
liArray.forEach(li => {
    li.onclick = function() {
        // Hammasidan olib tashlash
        liArray.forEach(li => {
            li.classList.remove("active");
        })

        // bittasiga qo'shish
        li.classList.add("active");

        console.log(li.id);

        page = li.id;

        switch(page) {
            case "home": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Home bu</h1>`;
                break;
            }

            case "short": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Short bu</h1>`;
                break;
            }

            case "subscription": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Subscribtion bu</h1>`;
                break;
            }

            case "channel": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Channel bu</h1>`;
                break;
            }

            case "history": {
                document.querySelector("#root").innerHTML = 
                    `<h1>History bu</h1>`;
                break;
            }

            case "playlists": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Playlists bu</h1>`;
                break;
            }

            case "videos": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Playlists bu</h1>`;
                break;
            }

            case "later": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Later bu</h1>`;
                break;
            }

            case "like": {
                document.querySelector("#root").innerHTML = 
                    `<h1>Like bu</h1>`;
                break;
            }

            default: {
                document.querySelector("#root").innerHTML = 
                    `<h1>404 not found</h1>`;
            }
        }
    }
});

// React + Backend