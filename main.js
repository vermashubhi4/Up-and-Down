var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");

var offset=40;
canvas.width=window.innerWidth-offset;
canvas.height=window.innerHeight-offset;

var width=canvas.width;
var height=canvas.height;
console.log(canvas.width, canvas.height);
var x=5,y=5,th=15;
var dx=5,dy=0;
ctx.fillStyle="#f13a62";
ctx.fillRect(x,y,th,th);

var left=37,up=38,right=39,down=40;
var key;
var timer;
var speed=0;

window.onkeydown=function whichKey(event){
 key = event.keyCode;

  if(key==left)
  {
      dy=0;
     clearInterval(timer);
    console.log("left");
    dx=-3;
    dy=0;
    timer=setInterval(move,speed,dx,dy);
    //move();
  }
   if(key==up)
   {
     dx=0;
     clearInterval(timer);
     console.log("up");
     dy=-3;
     dx=0;
     timer=setInterval(move,speed,dx,dy);
     //move();
   }
    if(key==right)
    {
        dy=0;
      clearInterval(timer);
      console.log("right");
      dx=3;
      dy=0;
      timer=setInterval(move,speed,dx,dy);
      //move(dx,dy);
    }
     if(key==down)
     {
       dx=0;
        clearInterval(timer);
       dy=3;
       dx=0;

       console.log("down");
       timer=setInterval(move,speed,dx,dy);
     }
}
function move(mx,my){
  console.log(x,y,key);
  ctx.clearRect(x,y,th,th);
  if(x>=canvas.width)
  {
   x=20;
  }
  if(y>=height)
  {
     y=5;
  }
  if(x<=0)
  {
    x=canvas.width;
  }
  if(y<=0)
  {
     y=canvas.height;
  }

  ctx.fillStyle="#f13a62";
  x=x+mx;
  y=y+my;
  ctx.fillRect(x,y,th,th);

}
