function arrow(a) {
    a = Number(a);
    const ele = document.getElementsByClassName("banner-background")?.[0];
    const bgprop = ele.getAttribute("src");
    let number = Number(bgprop.match(/\d/)?.[0]);
    let newNumber;
    if (number == 6 && a == 1) {
        newNumber = 1;
    } else if (number == 1 && a == -1) {
        newNumber = 6;
    } else {
        newNumber = number + a;
    }
    const dotsele = document.getElementsByClassName("banner-dots")?.[0];
    let dotsarray = Array(6).fill("<span class=\"dot\"></span>");
    dotsarray[newNumber - 1] = "<span class=\"dot dot-active\"></span>";
    dotsele.innerHTML = dotsarray.join("\n");
    ele.setAttribute("src", bgprop.replace(number, newNumber));
}

function leftarrow() {
    arrow(-1);
}
function rightarrow() {
    arrow(1);
}

document.getElementById("left-arrow").addEventListener('click', leftarrow);
document.getElementById("right-arrow").addEventListener('click', rightarrow);