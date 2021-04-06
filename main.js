canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d") ;
var rover_width = 100;
var rover_height = 100;
var rover_x = 0;
var rover_y = 0;
var  bg_img_array = ["mars.jpg","mars_1.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg","mars_5.jpg"] ;
random_number = Math.floor(Math.random()*6) ;
console.log (random_number);
background_img = bg_img_array[random_number] ;
rover_img="rover.png";
function add() {
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_img;
    r_img=new Image();
    r_img.onload=uploadrover;
    r_img.src=rover_img
}
function uploadbg() {
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadrover() {
ctx.drawImage(r_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if (key_pressed=='37') {
        left();
        console.log("left key is pressed")
    }
    if (key_pressed=='38') {
        up();
        console.log("up key is pressed")
    }
    if (key_pressed=='39') {
        right();
        console.log("right key is pressed")
    }
    if (key_pressed=='40') {
        down();
        console.log("down key is pressed")
    }
}
function left() {
    if (rover_x>=0) {
        rover_x = rover_x-10;
        uploadbg();
        uploadrover();
    }
}
function right() {
    if (rover_x<=900) {
        rover_x = rover_x+10;
        uploadbg();
        uploadrover();
    }
}
function up() {
    if (rover_y>=0) {
        rover_y = rover_y-10;
        uploadbg();
        uploadrover();
    }
}
function down() {
    if (rover_y<=700) {
        rover_y = rover_y+10;
        uploadbg();
        uploadrover();
    }
}