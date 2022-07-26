document.querySelector('button').addEventListener('click', function (event) {
    console.log(event)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (evt) {
    console.log(evt);
})

input.addEventListener('keyup', function () {
    console.log("KEYUP");
})

window.addEventListener('keydown', function (e) {
    console.log(e.code);
    console.log(e.key);
})


window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})