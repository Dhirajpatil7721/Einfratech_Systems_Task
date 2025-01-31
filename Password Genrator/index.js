let genrate = document.getElementById("genrate")
let display = document.getElementById("genrateinp")
let copy = document.getElementById("copy")
let len8 = document.getElementById("len8")
let len10 = document.getElementById("len10")
let upper = document.getElementById("upper")
let lower = document.getElementById("lower")
let char = document.getElementById("char")


const bird = document.getElementById("bird");
VANTA.BIRDS({
    el: "#bird",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 3.00
});

genrate.addEventListener('click', () => {
    let len = 8;

    if (len10.checked) len = 12;

    let charat = '';

    if (upper.checked) charat += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lower.checked) charat += 'abcdefghijklmnopqrstuvwxyz'
    if (char.checked) charat += '!@#$%^&*()_-+=<>?'

    if (charat === '') {
        alert("Please select at least one character type")
        return;
    }

    let pass = '';

    for (i = 0; i < len; i++) {
        pass += charat.charAt(Math.floor(Math.random() * charat.length));
    }
    display.value = pass
})

const copytxt = () => {
    if (display.value === '') {
        alert("No Text")
    }
    else {

        display.select();
        display.setSelectionRange(0, 99999);

        document.execCommand("copy");

        alert("Copied: " + display.value);
    }
}
