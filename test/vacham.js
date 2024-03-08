var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

var nhanvat = {
    x: 100,
    y: 500
}

setInterval(start, 100);

function start() {
    context.clearRect(0, 0, 300, 600);
    context.fillStyle = "red";
    context.fillRect(nhanvat.x, nhanvat.y, 25, 25);
    xulyvacham();
}

function xulyvacham() {
    if (nhanvat.x <= 0 || nhanvat.x + 25 >= 300 || nhanvat.y <= 0 || nhanvat.y + 25 >= 600) {
        gameOver();
    }
}

function gameOver() {
    console.log("Bạn đã thua");
}

document.addEventListener("keydown", key => {
    switch (key.keyCode) {
        case 37:
            if (nhanvat.x > 0)
                nhanvat.x -= 5;
            break;
        case 38:
            nhanvat.y -= 5;
            break;
        case 39:
            if (nhanvat.x + 25 < 300)
                nhanvat.x += 5;
            break;
        case 40:
            nhanvat.y += 5;
            break;

    }
});
