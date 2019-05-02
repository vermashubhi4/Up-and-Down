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

var left=37,up=38,right=39,down=40,space=32;
var key;
var timer;
var speed=50;

var foodx,foody,foodth=15;
var snakex=[x];
var snakey=[y];
var count=0;
var score=document.getElementById('score');


ctx.fillStyle="#148F77";
ctx.fillRect(snakex[0],snakey[0],th,th);
ctx.fillStyle="#282c34";
ctx.fillRect(snakex[0],snakey[0],2,th);
timer=setInterval(move,speed);

foodx=Math.floor(Math.random()*(1320));
foody=Math.floor(Math.random()*(580));

ctx.fillStyle="#D32802";
ctx.fillRect(foodx,foody,foodth,foodth);
var lastKey=left;

function isin(x1,y1,x2,y2)
{
  if(x2>=x1 && y2>=y1)
  {
    if(x2<=x1+th && y2<=y1+th)
    {
      clearInterval(timer);
      console.log("Game Over");
    }
  }

}

window.onkeydown=function whichKey(event){
 key = event.keyCode;

  if(key==left && lastKey!=right)
  {
    // if(lastKey==space)
    // {
    //   timer=setInterval(move,speed);
    // }
    lastKey=key;
    dx=-15;
    dy=0;
  }
   if(key==up && lastKey!=down)
   {
     // if(lastKey==space)
     // {
     //   timer=setInterval(move,speed);
     // }
     lastKey=key;
     dy=-15;
     dx=0;

   }
    if(key==right && lastKey!=left)
    {
      // if(lastKey==space)
      // {
      //   timer=setInterval(move,speed);
      // }
      lastKey=key;
      dx=15;
      dy=0;

    }
     if(key==down && lastKey!=up)
     {
       // if(lastKey==space)
       // {
       //   timer=setInterval(move,speed);
       // }
        lastKey=key;
       dy=15;
       dx=0;

     }
     if(key==space)
     {

       if(timer==0)
       {
         timer=setInterval(move,speed);
       }
       else {
         clearInterval(timer);
         timer=0;
       }
       lastKey=key;

     }
}

function move(){
  var i;

  //count=count+1;
  //console.log(x,y,key);
//  if(count!=1)
   ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);

   snakex[0]=snakex[0]+dx;
   snakey[0]=snakey[0]+dy;
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
    // console.log("x ax",snakex);
    // console.log("x ay",snakey);
    //ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
    snakex[0]=canvas.width;
    // console.log("x bx",snakex);
    // console.log("x by",snakey);
  }
  if(snakex[snakex.length-1]<0)
  {
    ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
  }
  if(snakey[0]<0)
  {
    // console.log("y ax",snakex);
    // console.log("y ay",snakey);
    //ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
     snakey[0]=canvas.height;

     // console.log("y bx",snakex);
     // console.log("y by",snakey);
  }

  ctx.fillStyle="#148F77";
  ctx.fillRect(snakex[0],snakey[0],th,th);

if(lastKey==up || lastKey==down || lastKey==space)
  {
  ctx.fillStyle="#282c34";
  ctx.fillRect(snakex[0],snakey[0],5,5);
  }
  if(lastKey==right || lastKey==left || lastKey==space)
  {
      ctx.fillStyle="#282c34";
      ctx.fillRect(snakex[0],snakey[0],5,5);
  }
if((snakex[0]>=foodx && snakex[0]<=foodx+foodth && snakey[0]>=foody && snakey[0]<=foody+foodth)
  ||(snakex[0]+th>=foodx && snakey[0]+th>=foody && snakex[0]+th<=foodx+foodth && snakey[0]<=foody+foodth)
  ||(snakex[0]>=foodx && snakey[0]+th>=foody && snakex[0]<=foodx+foodth && snakey[0]+th<=foody+foodth)
  ||( snakex[0]+th>=foodx && snakex[0]+th<=foodx+foodth && snakey[0]+th>=foody && snakey[0]+th<=foody+foodth)
  )
 {
     eat();
     console.log(snakex);
     console.log(snakey)
 }

 if(snakex.length>=4)
 {
   for(i=4;i<snakex.length;i++)
   {
     isin(snakex[i],snakey[i],snakex[0],snakey[0]);
   }
 }
 // snakex[0]=snakex[0]+dx;
 // snakey[0]=snakey[0]+dy;
 ctx.fillStyle="#148F77";
 ctx.fillRect(snakex[0],snakey[0],th,th);
 for(i=snakex.length-1;i>0;i--)
 {
   // console.log(snakex);
   // console.log(snakey)
   console.log(i);
     snakex[i]=snakex[i-1];
     snakey[i]=snakey[i-1];
   ctx.fillStyle="#148F77";
   ctx.fillRect(snakex[i],snakey[i],th,th);
   if(lastKey==up || lastKey==down || lastKey==space)
     {
     ctx.fillStyle="#282c34";
     ctx.fillRect(snakex[i],snakey[i],5,5);
     }
     if(lastKey==right || lastKey==left || lastKey==space)
     {
         ctx.fillStyle="#282c34";
         ctx.fillRect(snakex[i],snakey[i],5,5);
     }
      console.log(i);
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

  console.log(snakex.length);
  //console.log(snakex);
  //console.log(snakey);

  //console.log(snakex[snakex.length-1]);
  //console.log(snakex[snakey.length-1]);
  //index=index+1;
  ctx.clearRect(foodx,foody,foodth,foodth);
  foodx=Math.floor(Math.random()*(730));
  foody=Math.floor(Math.random()*(500));
  //console.log(foodx,foody);
  ctx.fillStyle="#D32802";
  ctx.fillRect(foodx,foody,foodth,foodth);
  /*ctx.fillStyle="#f13a62";
  ctx.fillRect(snakex[index],snakey[index],th,th);*/
}

function isin(x1,y1,x2,y2)
{
  if(x1<=x2 && x2<=x1+th && y1<=y2 && y2<=y1+th)
  {
    die();
  }
}

function die()
{
  clearInterval(timer);
  timer=0;
  ctx.fillStyle="Red";
  ctx.font="60px Arial";
  ctx.fillText("Game Over",camvas.width/2,canvas.height/2);
}
