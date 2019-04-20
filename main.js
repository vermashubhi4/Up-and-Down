var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");

var offset=40;
canvas.width=window.innerWidth-offset;
canvas.height=window.innerHeight-offset;

var width=canvas.width;
var height=canvas.height;
console.log(canvas.width, canvas.height);
var x=5,y=5,th=15;
var dx=15,dy=0;

var left=37,up=38,right=39,down=40;
var key;
var timer;
var speed=100;

var foodx,foody,foodth=15;
var snakex=[x];
var snakey=[y];
var index=0;
var arrlen;


ctx.fillStyle="#f13a62";
ctx.fillRect(snakex[0],snakey[0],th,th);
setInterval(move,speed);
//min = Math.ceil(20);
//max = Math.floor(750);
foodx=Math.floor(Math.random()*(730));

//min = Math.ceil(20);
//max = Math.floor(580);
foody=Math.floor(Math.random()*(500));

//console.log(foodx,foody);
ctx.fillStyle="#D0D3D4";
ctx.fillRect(foodx,foody,foodth,foodth);
var lastKey=0;

window.onkeydown=function whichKey(event){
 key = event.keyCode;

  if(key==left && lastKey!=right)
  {
     //clearInterval(timer);
    //console.log("left");
    lastKey=key;
    dx=-15;
    dy=0;
    //timer=setInterval(move,speed,dx,dy);
    //move();
  }
   if(key==up && lastKey!=down)
   {
     //clearInterval(timer);
     //console.log("up");
     lastKey=key;
     dy=-15;
     dx=0;
     //timer=setInterval(move,speed,dx,dy);
     //move();
   }
    if(key==right && lastKey!=left)
    {
      //clearInterval(timer);
      //console.log("right");
      lastKey=key;
      dx=15;
      dy=0;
      //timer=setInterval(move,speed,dx,dy);
      //move(dx,dy);
    }
     if(key==down && lastKey!=up)
     {
        //clearInterval(timer);
        lastKey=key;
       dy=15;
       dx=0;
       //console.log("down");
       //timer=setInterval(move,speed,dx,dy);
     }
}

function move(){
  var i;
  //console.log(x,y,key);
  ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
  if(snakex[0]>=canvas.width)
  {
    //console.log("ax",snakex);
    //console.log("ay",snakey);
   snakex[0]=1;
   //ctx.fillStyle="#f13a62";
   //ctx.fillRect(snakex[0],snakey[0],th,th);
   //console.log("bx",snakex);
   //console.log("by",snakey);
  }
  if(snakey[0]>=canvas.height)
  {
    //console.log(snakey);
    //console.log(snakex);
     snakey[0]=1;
  }
  if(snakex[0]<=0)
  {
    snakex[0]=canvas.width;
  }
  if(snakey[0]<=0)
  {
     snakey[0]=canvas.height;
  }

  /*for(i=snakex.length;i>0;i--)
  {
    snakex[i]=snakex[i-1];
    snakey[i]=snakey[i-1];
  }*/
  //ctx.fillStyle="#f13a62";
  //ctx.fillRect(snakex[0],snakey[0],th,th);
  //snakex[0]=snakex[0]+dx;
  // snakey[0]=snakey[0]+dy;
  //console.log("cx",snakex);
  //console.log("cy",snakey);
  //ctx.clearRect(snakex[0],snakey[0],th,th);
  // ctx.fillStyle="#f13a62";
  // ctx.fillRect(snakex[0],snakey[0],th,th);
  for(i=snakex.length-1;i>=0;i--){

    if(i==0)
    {
      snakex[i]=snakex[i]+dx;
      snakey[i]=snakey[i]+dy;
    }
    else{
    snakex[i]=snakex[i-1];
    snakey[i]=snakey[i-1];}
    //console.log("x",snakex[i]);
    //console.log("y",snakey[i]);
    ctx.fillStyle="#f13a62";
    ctx.fillRect(snakex[i],snakey[i],th,th);
  }


/*if((x+th>=foodx && x+th<=foodx+foodth && y+th>=foody && y+th<=foody+foodth)
|| (x+th>=foody && x+th<=foody+foodth && y+th>=foodx && y+th<=foody+foodth)
|| (x>=foodx && x<=foodx+foodth && y>=foody && y<=foody+foodth)
|| (x>=foody && x<=foody+foodth && y>=foodx && y<=foody+foodth))*/


if((snakex[0]>=foodx && snakex[0]<=foodx+foodth) && (snakey[0]>=foody && snakey[0]<=foody+foodth))
 {
   //console.log("eat1");
   //console.log(foodx,foody,foodx+foodth,foody+foodth);
   //console.log(x,y,x+th,y+th);
     eat();
 }
if(snakex[0]+th>=foodx && snakey[0]+th>=foody && snakex[0]+th<=foodx+foodth && snakey[0]<=foody+foodth)
{
  //console.log("eat2");
  //console.log(foodx,foody,foodx+foodth,foody+foodth);
  //console.log(x,y,x+th,y+th);
    eat();
}
if(snakex[0]>=foodx && snakey[0]+th>=foody && snakex[0]<=foodx+foodth && snakey[0]+th<=foody+foodth)
{
  //console.log("eat3");
  //console.log(foodx,foody,foodx+foodth,foody+foodth);
  //console.log(x,y,x+th,y+th);
    eat();
}
if( snakex[0]+th>=foodx && snakex[0]+th<=foodx+foodth && snakey[0]+th>=foody && snakey[0]+th<=foody+foodth)
{
  //console.log("eat4");
  //console.log(foodx,foody,foodx+foodth,foody+foodth);
  //console.log(x,y,x+th,y+th);
    eat();
}

}

function eat()
{
  console.log("eat");
//  console.log(foodx,foody,foodx+foodth,foody+foodth);
//  console.log(x,y,x+th,y+th);
  snakex.push(snakex[snakex.length-1]-15);
  snakey.push(snakex[snakex.length-1]);
  console.log(snakex[snakex.length-1]);
  console.log(snakex[snakey.length-1]);
  //index=index+1;
  ctx.clearRect(foodx,foody,foodth,foodth);
  foodx=Math.floor(Math.random()*(730));
  foody=Math.floor(Math.random()*(500));
  //console.log(foodx,foody);
  ctx.fillStyle="#D0D3D4";
  ctx.fillRect(foodx,foody,foodth,foodth);
  /*ctx.fillStyle="#f13a62";
  ctx.fillRect(snakex[index],snakey[index],th,th);*/
}
