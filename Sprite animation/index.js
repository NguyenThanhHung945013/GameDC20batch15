
// chiều dài và chiều rộng của  Canvas
var canvasWidth = 1500;
var canvasHeight = 300;

// chiều dài và chiều cao của ảnh  spritesheet
var spriteWidth = 864;
var spriteHeight = 280;

// Có 2 hàng và 8 cột trong ảnh sprite sheet
var rows = 2;
var cols = 8;

// Hàng thứ 0 (đầu tiên) dành cho chuyển động bên phải
var trackRight = 0;

// Hàng thứ 1 (thứ hai) dành cho chuyển động sang trái (đếm chỉ số từ 0)
var trackLeft = 1;

// Để có được chiều rộng của một sprite chúng ta chia chiều rộng của sprite cho số cols
//vì tất cả các sprite đều có chiều rộng và chiều cao bằng nhau
var width = spriteWidth / cols;

// Tương tự với chiều cao ta chia chiều cao cho số hàng
var height = spriteHeight / rows;

// Mỗi hàng chứa 8 khung và khi bắt đầu chúng ta sẽ hiển thị khung đầu tiên (giả sử chỉ số từ 0)
var curFrame = 0;

// Tổng khung hình là 8
var frameCount = 8;

// tọa độ x và y để hiển thị sprite
var x = 0;
var y = 0;

// tọa độ x và y của khung vẽ để lấy khung đơn
var srcX = 0;
var srcY = 0;

//theo dõi chuyển động sang trái và viết
var left = false;

// Giả sử lúc đầu nhân vật sẽ di chuyển sang phải
var right = true;

//Tốc độ chuyển động
var speed = 12;

// Lấy id canvas
var canvas = document.getElementById('canvas');

//thiết lập chiều rộng và chiều cao của canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Thiết lập bối cảnh cho canvas
var ctx = canvas.getContext("2d");

//Tạo một đối tượng Image cho nhân vật của chúng ta
var character = new Image();

//Đặt nguồn cho file ảnh 
character.src = '../image/character.png';
function draw() {
    //Updating the frame 
    updateFrame();
    //Drawing the image 
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}
setInterval(draw, 100);

function updateFrame() {
    //Updating the frame index 
    curFrame = ++curFrame % frameCount;

    //Tính tọa độ x cho spritesheet
    srcX = curFrame * width;
    //Xóa khung vẽ
    
    ctx.clearRect(x, y, width, height);
    //nếu left là true và ký tự chưa tới cạnh trái
    if (left && x > 0) {
        //tính srcY 
        srcY = trackLeft * height;
        //giảm tọa độ x
        x -= speed;
    }
    //nếu bên phải là đúng và ký tự chưa đến cạnh phải
    if (right && x < canvasWidth - width) {
        // tính tọa độ y cho spritesheet
        srcY = trackRight * height;
        // tăng tọa độ x
        x += speed;
    }
}

//left right
function moveLeft() {
    left = true;
    right = false;
}
function moveRight() {
    left = false;
    right = true;
}

