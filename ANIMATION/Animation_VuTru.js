
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {

  sun.src = '../image/troi.jpg';
  moon.src = '../image/trang.jpg';
  earth.src = '../image/dat.jpg';
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgb(0 0 0 / 40%)";
  ctx.strokeStyle = "rgb(0 153 255 / 40%)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -15, -15, 30, 30); // Adjust the size

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -7, -7, 14, 14); // Adjust the size
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();
  
// Đặt vị trí hình ảnh tại trung tâm của canvas
var imageWidth = 150; // Chiều rộng của hình ảnh
var imageHeight = 150; // Chiều cao của hình ảnh
var imageX = (canvas.width - imageWidth) / 2; // Tính toán vị trí theo chiều ngang
var imageY = (canvas.height - imageHeight) / 2; // Tính toán vị trí theo chiều dọc

// Vẽ hình ảnh sun
ctx.drawImage(sun, imageX, imageY, imageWidth, imageHeight);

  window.requestAnimationFrame(draw);
}

init();
