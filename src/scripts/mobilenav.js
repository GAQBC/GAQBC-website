let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let nav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", function () {
    nav.classList.add("expanded")
});

close.addEventListener("click", function () {
    nav.classList.remove("expanded")
})

document.onclick = function(e) {
    if (nav.className.includes("expanded")) {
        let classes = String(e.target.className);
        let nodename = String(e.target.nodeName);
        console.log(nodename);
        if (classes) {
            if (!classes.includes("mobile-") && !(["BUTTON", "svg", "line", "path"].includes(nodename))) {
                nav.classList.remove("expanded");
            }
        }
    }
}