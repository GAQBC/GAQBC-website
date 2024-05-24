function hide(a) { 
    let opacity = Number(window.getComputedStyle(a).getPropertyValue("opacity")); 
    if (opacity > 0) { 
        opacity = opacity - 0.1; 
        a.style.opacity = opacity 
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
    let id = setInterval(() => hide(a), 200);
}

function arrow(a) {
    a = Number(a);
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
    ele.setAttribute("src", invisele.getAttribute("src"));
}

setInterval(() => {
    arrow();
  }, 3000);