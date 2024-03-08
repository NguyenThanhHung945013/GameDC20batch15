function veduongthangg() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 100);
            ctx.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}

function veduongtronn() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.arc(95,50,40,0,2*Math.PI, false);
            ctx.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function vevanbann() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.font = "30px Arial";
            ctx.fillText("Hello World",10,50);
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function gradientt() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
        var grd = ctx.createLinearGradient(0,0,200,0);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,150,80);
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function shadowonshapee() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

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
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}

function linecapp() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            // butt line cap (first line)
            ctx.beginPath();
            ctx.moveTo(20,20);
            ctx.lineTo(20,200);
            ctx.lineWidth = 25;
            ctx.strokeStyle = '#ff0000';
            ctx.lineCap = 'butt';
            ctx.stroke();

        // round line cap (second line)
            ctx.beginPath();
            ctx.moveTo(80,20);
            ctx.lineTo(80,200);
            ctx.lineWidth = 25;
            ctx.strokeStyle = '#ff0000';
            ctx.lineCap = 'round';
            ctx.stroke();

            // square line cap (third line)
            ctx.beginPath();
            ctx.moveTo(120,20);
            ctx.lineTo(120,200);
            ctx.lineWidth = 25;
            ctx.strokeStyle = '#ff0000';
            ctx.lineCap = 'square';
            ctx.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}

function linejoinn() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

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
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function DrawingBezierCurvess() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

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
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}


function DrawingCurvess() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

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
        ctx.arc(300, 100, 90, 0, 2*Math.PI); // Tọa độ tâm (300,100), bán kính 90
        ctx.strokeStyle = 'salmon' // Màu của đường
        ctx.lineWidth = 3; //Độ rộng
        ctx.stroke();
        // Cung tròn 2
        ctx.beginPath();
        ctx.arc(500, 100, 90, 0, Math.PI); // Tọa độ tâm (500,100), bán kính 90
        ctx.strokeStyle = 'seagreen'; // Màu của đường
        ctx.lineWidth = 5; //Độ rộng
        ctx.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}


function DrawingComplexLiness() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
        // Starting point
        var startX = 50;
        var startY = 100;

        // Draw complex lines
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        // Line segment
        ctx.lineTo(100, 50);

        // Quadratic Bezier curve
        ctx.quadraticCurveTo(150, 75, 200, 50);

        // Cubic Bezier curve
        ctx.bezierCurveTo(250, 25, 300, 75, 350, 50);

        // Line segment
        ctx.lineTo(400, 100);

        // Line segment
        ctx.lineTo(50, 100);

        ctx.lineWidth = 2;
        ctx.strokeStyle = 'purple';
        ctx.stroke();
        ctx.closePath();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}


function Rectangleas() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var context = c.getContext("2d");
        if (context) {
            context.beginPath();
            context.rect(188, 50, 200, 100);
            context.fillStyle = 'yellow';
            context.fill();
            context.lineWidth = 7;
            context.strokeStyle = 'black';
            context.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}


function quadraticCurveToo() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var context = c.getContext("2d");
        if (context) {
            context.beginPath();
            context.moveTo(188, 150);
            context.quadraticCurveTo(288, 0, 388, 150);
            context.lineWidth = 10;
      
            // line color
            context.strokeStyle = 'black';
            context.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}


// function Drawimage(): void {
//     var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

//     if (c) {
//         var ctx = c.getContext("2d");
//         if (ctx) {
//             var imageObj = new Image();
//             imageObj.onload = function() {
//                 ctx.drawImage(imageObj, 69, 50);
//             };
//             imageObj.src = "./image/Drawimage.jpg";
//         } else {
//             console.error("Context không được hỗ trợ");
//         }
//     } else {
//         console.error("Không tìm thấy phần tử Canvas");
//     }
// }
