// for continue break, function
function myFunction() {
    document.write(" for break and continue");
    for (var i_1 = 0; i_1 <= 70000; i_1++) {
        if (i_1 == 5) {
            continue;
        }
        document.write(i_1 + "<br >");
        if (i_1 >= 7) {
            break;
        }
    }
}
myFunction();
// if else
var course = 1;
function text() {
    document.write(" if else");
    if (course == 1) {
        document.write("HTML Tutorial");
    }
    else if (course == 2) {
        document.write("CSS Tutorial");
    }
    else {
        document.write("JavaScript Tutorial");
    }
}
text();
// switch case
function swittext() {
    document.write(" switch case");
    var day = 2;
    switch (day) {
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
        case 3:
            document.write("Wednesday");
            break;
        default:
            document.write("Another day");
    }
}
swittext();
//while 
document.write(" while");
var i = 0;
while (i <= 5) {
    document.write(i + "<br >");
    i++;
}
// do while
document.write("  Do while");
var i = 20;
do {
    document.write(i + "<br >");
    i++;
} while (i <= 25);
if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    alert('Trình duyệt của bạn hỗ trợ Storage');
}
else {
    //Nếu không hỗ trợ
    alert('Trình duyệt của bạn không hỗ trợ Storage');
}
