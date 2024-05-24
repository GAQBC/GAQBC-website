/** function hide(a) { 
    let opacity = Number(window.getComputedStyle(a).getPropertyValue("opacity")); 
    if (opacity > 0) { 
        opacity = opacity - 0.1; 
        a.setAttribute("style", "opacity: " + String(opacity) + ";");
    }
}

function show(a) { 
    let opacity = Number(window.getComputedStyle(a).getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        a.style.opacity = opacity 
    }
}

async function hideFull(a) {
    let b = 0;
    let interval = setInterval(
        function () {
            b += 1;
            if (b === 10) {
                clearInterval(interval)
            } else {
                hide(a)
            }
    }, 200);
}

async function showFull(a) {
    let b = 0;
    let interval = setInterval(
        function () {
            b += 1;
            if (b === 10) {
                clearInterval(interval)
            } else {
                show(a)
            }
    }, 200);
} **/

// maybe i'll get this to work

function arrow() {
    const ele = document.getElementsByClassName("banner-background")?.[0];
    const bgprop = ele.getAttribute("src");
    let number = Number(bgprop.match(/\d/)?.[0]);
    let newNumber;
    if (number == 6) {
        newNumber = 1;
    } else {
        newNumber = number + 1;
    }
    const invisele = document.getElementById(String("slide" + newNumber));
    // await hideFull(ele);
    ele.setAttribute("src", invisele.getAttribute("src"));
    // await showFull(ele);
}

setInterval(() => arrow(), 3000);