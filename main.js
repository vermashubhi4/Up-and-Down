var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");

var offset=40;
canvas.width=window.innerWidth-offset;
canvas.height=window.innerHeight-offset;

var width=canvas.width;
var height=canvas.height;

var x=200,y=100,th=7;
var dx=10,dy=0;
ctx.fillStyle="#f13a62";
ctx.fillRect(x,y,th,th);

var left=37,up=38,right=39,down=40;


window.onkeydown=function whichKey(event){
var key = event.keyCode;
  if(key==left)
  {
    console.log("left");
    //dx=-1;
    //dy=0;
    //move();
  }
   if(key==up)
   {
     console.log("up");
     //dy=-1;
     //dx=0;
     //move();
   }
    if(key==right)
    {
      console.log("right");
      dx=1;
      dy=0;
      move(dx,dy);
    }
     if(key==down)
     {
       console.log("down");
       dy=1;
       dx=0;
     }
}
setInterval(move,1000,dx,dy);
function move(dx,dy){
  ctx.clearRect(x,y,th,th);
  if(x==width)
   x=30;
  if(y==height)
   y=30;

  ctx.fillStyle="#f13a62";
  x=x+dx;
  y=y+dy;
  ctx.fillRect(x,y,th,th);

}
