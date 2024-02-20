 type="text/javascript">
    alert("Đây là một thông báo!");
// var sopi = 3.14;
    
//     function dientich_hinhtron(radius) {
//         console.log(sopi*radius*radius);
    
//         if (true)
//         {
//             var thongbao = ' (diện tích hình tròn)';
//         }
//         console.log(thongbao);
//     }
    
//     dientich_hinhtron(5);


var course = 1;
if (course == 1) {
   document.write("HTML Tutorial");
} else if (course == 2) {
   document.write("CSS Tutorial");
} else {
   document.write("JavaScript Tutorial");
}

function myFunction() {
   for (i = 0; i <= 70000; i++) {
      if (i == 5) {
         continue;                         //Khởi tạo vòng lặp mới luôn
      }
      document.write(i + "<br >");
      if (i >=7) {
           break;                          //Thoát lặp nếu i >=7
       }
   }
 }
 myFunction();