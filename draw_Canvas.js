function veduongthang() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 100);
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function veduongtron() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI, );
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function vevanban() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {


            var x = 150;

            // Drawing Basic Text
            ctx.font = "30px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText("Hello, World!", x, 50);

            // Styling Text
            ctx.font = "bold 30px Arial";
            ctx.fillStyle = "red";

            // Positioning Text
            x += 10; // Increase x-coordinate for spacing
            ctx.fillText("Positioned Text", x, 150);

            // Shadows on Text
            x += 10; // Increase x-coordinate for spacing
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.fillText("Text with Shadows", x, 250);

            // Text Stroke
            x += 10; // Increase x-coordinate for spacing
            ctx.lineWidth = 2;
            ctx.strokeStyle = "green";
            ctx.strokeText("Text with Stroke", x, 350);

            // Text Align
            x += 10; // Increase x-coordinate for spacing
            ctx.textAlign = "center";
            ctx.fillStyle = "purple";
            ctx.fillText("Centered Text", x, 450);

            // Text Baseline
            x += 10; // Increase x-coordinate for spacing
            ctx.textBaseline = "bottom";
            ctx.fillStyle = "orange";
            ctx.fillText("Text with Bottom Baseline", x, 550);
 
             // Draw text with all the properties
            //  ctx.fillText("Styled Text with Shadows", 50, 100);
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function gradient() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            var grd = ctx.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            grd.addColorStop(1, "white");
            // Fill with gradient
            ctx.fillStyle = grd;
            ctx.fillRect(10, 10, 150, 80);
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function shadowonshape() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
           
            ctx.shadowColor = "black";
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 6;
            ctx.shadowOffsetY = 6;
            ctx.shadowColor = "orange";
            ctx.strokeRect(25, 25, 200, 200);
            ctx.shadowColor = "green";
            ctx.strokeRect(50, 50, 200, 200);
            ctx.shadowColor = "blue";
            ctx.strokeRect(75, 75, 200, 200);
            ctx.shadowColor = "red";
            ctx.strokeRect(100, 100, 200, 200);
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function linecap() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            // butt line cap (first line)
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.lineTo(20, 200);
            ctx.lineWidth = 25;
            ctx.strokeStyle = '#ff0000';
            ctx.lineCap = 'butt';
            ctx.stroke();
            // round line cap (second line)
            ctx.beginPath();
            ctx.moveTo(80, 20);
            ctx.lineTo(80, 200);
            ctx.lineWidth = 25;
            ctx.strokeStyle = '#ff0000';
            ctx.lineCap = 'round';
            ctx.stroke();
            // square line cap (third line)
            ctx.beginPath();
            ctx.moveTo(120, 20);
            ctx.lineTo(120, 200);
            ctx.lineWidth = 25;
            ctx.strokeStyle = '#ff0000';
            ctx.lineCap = 'square';
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function linejoin() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            var lStart = 50;
            var lEnd = 200;
            var yStart = 20;
            ctx.beginPath();
            ctx.lineWidth = 25;
            // Use a bevel corner.
            ctx.lineJoin = "bevel";
            ctx.moveTo(50, 20);
            ctx.lineTo(150, 20);
            ctx.lineTo(150, 120);
            ctx.stroke();
            // Use a round corner.             
            ctx.beginPath();
            ctx.lineJoin = "round";
            ctx.moveTo(50, 140);
            ctx.lineTo(150, 140);
            ctx.lineTo(150, 260);
            ctx.stroke();
            // Use a miter.      
            ctx.beginPath();
            ctx.lineJoin = "miter";
            ctx.moveTo(50, 280);
            ctx.lineTo(150, 280);
            ctx.lineTo(150, 400);
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function DrawingBezierCurves() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            // Starting point
            var startX = 50;
            var startY = 100;
            // Control points
            var controlPoint1X = 100;
            var controlPoint1Y = 50;
            var controlPoint2X = 200;
            var controlPoint2Y = 150;
            // Ending point
            var endX = 250;
            var endY = 100;
            // Draw a Bezier curve
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, endX, endY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.closePath();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function DrawingCurves() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            // Cung tròn 1
            ctx.beginPath();
            ctx.arc(100, 100, 90, Math.PI, 0); // Tọa độ tâm (100,100), bán kính 90
            ctx.strokeStyle = 'steelblue'; // Màu của đường
            ctx.lineWidth = 5; //Độ rộng
            ctx.stroke();
            // Hình tròn
            ctx.beginPath();
            ctx.arc(300, 100, 90, 0, 2 * Math.PI); // Tọa độ tâm (300,100), bán kính 90
            ctx.strokeStyle = 'salmon'; // Màu của đường
            ctx.lineWidth = 3; //Độ rộng
            ctx.stroke();
            // Cung tròn 2
            ctx.beginPath();
            ctx.arc(500, 100, 90, 0, Math.PI); // Tọa độ tâm (500,100), bán kính 90
            ctx.strokeStyle = 'seagreen'; // Màu của đường
            ctx.lineWidth = 5; //Độ rộng
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function DrawingComplexLines() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            // Starting point
            var startX = 50;
            var startY = 100;
            // Khởi tạo các biến startX và startY đại diện cho tọa độ bắt đầu của đường vẽ.
           
            // Draw complex lines
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            // Line segment
            ctx.lineTo(100, 50);
            // Vẽ một đoạn thẳng từ điểm bắt đầu đến điểm có tọa độ (100, 50).
            
            // Quadratic Bezier curve
            ctx.quadraticCurveTo(150, 75, 200, 50);
            // Vẽ một đường cong Bézier bậc 2 (quadratic Bezier) với điểm kiểm soát là (150, 75) và điểm kết thúc là (200, 50).
            
            // Cubic Bezier curve
            ctx.bezierCurveTo(250, 25, 300, 75, 350, 50);
            // Vẽ một đường cong Bézier bậc 3 (cubic Bezier) với hai điểm kiểm soát và một điểm kết thúc.
           
            // // Line segment
            ctx.lineTo(400, 100);
            //Vẽ một đoạn thẳng từ điểm kết thúc trước đó đến điểm có tọa độ (400, 100).
            
            // Line segment
            ctx.lineTo(50, 100);
            //  Vẽ một đoạn thẳng từ điểm hiện tại đến điểm bắt đầu để đóng hình.
             ctx.lineWidth = 2;
             ctx.strokeStyle = 'purple';
            ctx.stroke();
            ctx.closePath();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function Rectangles() {
    clearCanvas();
    var c = ctx.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.rect(188, 50, 200, 100);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.lineWidth = 7;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function quadraticCurveTo() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(188, 150);
            ctx.quadraticCurveTo(288, 0, 388, 150);
            ctx.lineWidth = 10;
            // line color
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function draw() {
   clearCanvas();
    const ctx = document.getElementById("myCanvas").getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    //   context.drawImage(imageObj, x, y, width, height);
      ctx.beginPath();
      ctx.moveTo(30, 96);
      ctx.lineTo(70, 66);
      ctx.lineTo(103, 76);
      ctx.lineTo(170, 15);
      ctx.stroke();
    };
    img.src = "./image/img.jpg";
  }

  // Thêm lệnh xóa canvas
function clearCanvas() {
    
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.clearRect(0, 0, c.width, c.height);
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}







function pattern() {
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            // Tạo một hình ảnh
    const img = new Image();
    img.src = "./image/img.jpg";

    // Tạo một mẫu với hình ảnh
    const pattern = ctx.createPattern(img, "repeat");
    
    // Sử dụng mẫu để vẽ hình chữ nhật
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 500, 500);
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}

downloadIMG();
function saveAndrestore() {
    // downloadIMG();
    clearCanvas();
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
          // Vẽ một hình chữ nhật màu xanh
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 50, 50);

    // Lưu trạng thái hiện tại của canvas
    ctx.save();

    // Đổi màu và vẽ một hình chữ nhật màu đỏ ở vị trí khác
    ctx.fillStyle = "red";
    ctx.fillRect(100, 10, 50, 50);

    // Khôi phục lại trạng thái đã lưu (quay về hình chữ nhật màu xanh)
    ctx.restore();

    // Vẽ một hình chữ nhật màu xanh khác ở vị trí khác
    ctx.fillRect(200, 10, 50, 50);
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}



function downloadIMG() {
    
    var c = document.getElementById("myCanvas");
    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
         // Create a temporary link element
         var dataURL = c.toDataURL('image/png'); // Change 'image/png' to 'image/jpeg' if needed
         var link = document.createElement('a');
         link.href = dataURL;
         link.download = 'canvas_image.png'; // Change the filename as needed
 
         // Trigger the click event on the link to download the image
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
        }
        else {
            console.error("Context không được hỗ trợ");
        }
    }
    else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}

