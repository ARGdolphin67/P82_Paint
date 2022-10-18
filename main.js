var mouseEvent="empty";
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color="black";
width=1;
radius=5;

canvas.addEventListener["mousedown", my_mousedown];
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener["mousemove", my_mousemove];
function my_mousemove(e){
    current_postion_of_x = e.clientX - canvas.offsetLeft;
    current_postion_of_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
       console.log("current position of x and y coordinates=");
       console.log("x=" + current_postion_of_x + "y=" + current_postion_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width;
        ctx.arc(current_postion_of_x, current_postion_of_y, radius, 0, 2*Math.PI);
        console.log("X=" + last_postion_of_x + "Y=" + last_postion_of_y );
        ctx.moveTo(last_postion_of_x, last_postion_of_y);
        ctx.lineTo(current_postion_of_x, current_postion_of_y);
        ctx.stroke();
    }
    last_postion_of_x=current_postion_of_x;
    last_postion_of_y=current_postion_of_y;
}

canvas.addEventListener["mouseup", my_mouseup];
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener["mouseleave", my_mouseleave];
function my_mouseleave(e){
    mouseEvent="mouseLEAVE";
}