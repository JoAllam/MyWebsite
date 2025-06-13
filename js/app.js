document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu").addEventListener("click", () => {
        let list = document.getElementById("links");
        let state = getComputedStyle(list).display;
        if(state == "none") {
            list.style.display = "flex";
        }
        else if (state == "flex") {
            list.style.display = "none";
        }
    })
})

