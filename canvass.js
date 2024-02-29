let canvas= document.querySelector("Canvas");
let c =canvas.getContext('2d');
    function duongthang(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();
    }

    function hinhtron(){
        var c = document.getElementById("Canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
    }

    function vanban(){
        var c = document.getElementById("can");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Hello World",10,50);
    }

    function gradiant(){
        var c = document.getElementById("vass");
        var ctx = c.getContext("2d");
        // Create gradient
        var grd = ctx.createLinearGradient(0,0,200,0);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,150,80);
    }

    function shaddowonshape(){
        if (canvas.getContext) 
        {
            var ctx = canvas.getContext('2d');
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
    }