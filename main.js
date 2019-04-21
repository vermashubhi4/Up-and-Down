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
var speed=70;

var foodx,foody,foodth=15;
var snakex=[x];
var snakey=[y];
var count=0;
var score=document.getElementById('score');


ctx.fillStyle="#f13a62";
ctx.fillRect(snakex[0],snakey[0],th,th);
timer=setInterval(move,speed);

foodx=Math.floor(Math.random()*(730));
foody=Math.floor(Math.random()*(500));

ctx.fillStyle="#D0D3D4";
ctx.fillRect(foodx,foody,foodth,foodth);
var lastKey=left;

window.onkeydown=function whichKey(event){
 key = event.keyCode;

  if(key==left && lastKey!=right)
  {
    lastKey=key;
    dx=-15;
    dy=0;
  }
   if(key==up && lastKey!=down)
   {
     lastKey=key;
     dy=-15;
     dx=0;
   }
    if(key==right && lastKey!=left)
    {
      lastKey=key;
      dx=15;
      dy=0;
    }
     if(key==down && lastKey!=up)
     {
        lastKey=key;
       dy=15;
       dx=0;
     }
}

function move(){
  var i;
  //count=count+1;
  //console.log(x,y,key);
//  if(count!=1)
   ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);

  if(snakex[0]>canvas.width)
  {
   snakex[0]=0;
  }
  if(snakey[0]>canvas.height)
  {
     snakey[0]=0;
  }
  if(snakex[0]<0 )
  {
    console.log("x ax",snakex);
    console.log("x ay",snakey);
    //ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
    snakex[0]=canvas.width;
    console.log("x bx",snakex);
    console.log("x by",snakey);
  }
  if(snakex[snakex.length-1]<0)
  {
    ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
  }
  if(snakey[0]<0)
  {
    console.log("y ax",snakex);
    console.log("y ay",snakey);
    //ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
     snakey[0]=canvas.height;

     console.log("y bx",snakex);
     console.log("y by",snakey);
  }


if((snakex[0]>=foodx && snakex[0]<=foodx+foodth && snakey[0]>=foody && snakey[0]<=foody+foodth)
  ||(snakex[0]+th>=foodx && snakey[0]+th>=foody && snakex[0]+th<=foodx+foodth && snakey[0]<=foody+foodth)
  ||(snakex[0]>=foodx && snakey[0]+th>=foody && snakex[0]<=foodx+foodth && snakey[0]+th<=foody+foodth)
  ||( snakex[0]+th>=foodx && snakex[0]+th<=foodx+foodth && snakey[0]+th>=foody && snakey[0]+th<=foody+foodth)
  )
 {
     eat();
 }
 snakex[0]=snakex[0]+dx;
 snakey[0]=snakey[0]+dy;
 ctx.fillStyle="#f13a62";
 ctx.fillRect(snakex[0],snakey[0],th,th);

 for(i=snakex.length-1;i>0;i--)
 {
   snakex[i]=snakex[i-1];
   snakey[i]=snakey[i-1];
   ctx.fillStyle="#f13a62";
   ctx.fillRect(snakex[i],snakey[i],th,th);
 }

}
//var c=0;
function eat()
{
  count=count+100;
  score.innerHTML=count;
  console.log("eat");

//  console.log(foodx,foody,foodx+foodth,foody+foodth);
//  console.log(x,y,x+th,y+th);
  snakex.push(snakex[snakex.length-1]-15);
  snakey.push(snakey[snakey.length-1]);
  console.log(snakex);
  console.log(snakey);
  //console.log(snakex[snakex.length-1]);
  //console.log(snakex[snakey.length-1]);
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
