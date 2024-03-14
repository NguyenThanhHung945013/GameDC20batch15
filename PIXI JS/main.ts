// Import PixiJS
import { Application, Loader, Sprite } from 'pixi.js';

// Tạo một ứng dụng PixiJS
const app = new Application({ 
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb 
});

// Thêm canvas của ứng dụng vào body của tài liệu HTML
document.body.appendChild(app.view);

// Tạo một Loader instance
const loader = Loader.shared;

// Thêm các tài nguyên để tải
loader.add("bunny", "bunny.png");

// Thực hiện việc tải và gọi hàm setup khi hoàn thành
loader.load(setup);

function setup() {
    // Tạo một sprite từ texture đã load
    const bunny = new Sprite(loader.resources.bunny.texture);

    // Đặt vị trí của sprite
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    // Đặt anchor point của sprite vào trung tâm
    bunny.anchor.set(0.5);

    // Thêm sprite vào stage (cảnh)
    app.stage.addChild(bunny);

    // Tạo một animation loop
    app.ticker.add(delta => {
        // Quay sprite
        bunny.rotation += 0.1 * parseFloat(delta.toString());

    });
}
