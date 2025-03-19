var on_btn = document.getElementById("on");
var off_btn = document.getElementById("off");
var img = document.getElementById("bulb");

function bulb_on() {
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjIqomV_U0yzzlg3NlB5qtbYCJQRj3AulUA&s";
}

function bulb_off() {
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrcU6GJVLebRTGXGmaVjT-51Hbkqht9fSiIwa2n-gtTywzFR_hlGchcBpKA-n8gOGyBY&usqp=CAU";
}
