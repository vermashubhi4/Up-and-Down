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
var speed=100;

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
var lastKey=[right,right];

function isin(x1,y1,x2,y2)
{
  console.log("isin x:",snakex);
  console.log("isin y:",snakey);
  if(x2>=x1 && y2>=y1)
  {
    if(x2<=x1+th && y2<=y1+th)
    {
      clearInterval(timer);

      console.log("Game Over");
      die();
    }
  }

}

window.onkeydown=function whichKey(event){
 key = event.keyCode;
if(timer!=-1){
  if(key==left && lastKey[0]!=right)
  {
    lastKey[1]=lastKey[0];
    lastKey[0]=key;
    dx=-15;
    dy=0;
    clearInterval(timer);
    move();
    timer=setInterval(move,speed);
  }
   if(key==up && lastKey[0]!=down)
   {
     lastKey[1]=lastKey[0];
     lastKey[0]=key;
     dy=-15;
     dx=0;
     clearInterval(timer);
     move();
     timer=setInterval(move,speed);

   }
    if(key==right && lastKey[0]!=left)
    {
      lastKey[1]=lastKey[0];
      lastKey[0]=key;
      dx=15;
      dy=0;

    }
     if(key==down && lastKey[0]!=up)
     {
       lastKey[1]=lastKey[0];
       lastKey[0]=key;
       dy=15;
       dx=0;
       clearInterval(timer);
       move();
       timer=setInterval(move,speed);

     }
     if(key==space)
     {
       console.log("space\n");
      if(timer==0)
       {
         console.log("spacex");
         timer=setInterval(move,speed);
         clearInterval(timer);
         move();
         timer=setInterval(move,speed);
       }
       else {
          console.log("spacey");
         clearInterval(timer);
         timer=0;
       }
       lastKey[1]=lastKey[0];
       lastKey[0]=key;
     }
   }
}

function move(){
  var i;
   ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
   console.log("move x:",snakex);
   console.log("move y: ",snakey);
   snakex[0]=snakex[0]+dx;
   snakey[0]=snakey[0]+dy;
  if(snakex[0]>canvas.width-15)
  {
   snakex[0]=0;
  }
  if(snakey[0]>canvas.height-15)
  {
     snakey[0]=0;
  }
  if(snakex[0]<0 )
  {
    snakex[0]=canvas.width-15;
  }
  if(snakex[snakex.length-1]<0)
  {
    ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
  }
  if(snakey[0]<0)
  {
     snakey[0]=canvas.height-15;
  }
//Setting color of snake to green
  ctx.fillStyle="#148F77";
  ctx.fillRect(snakex[0],snakey[0],th,th);
//Setting color of snake's stipes
if(lastKey[0]==up || lastKey[0]==down || lastKey[0]==space || lastKey[1]==up || lastKey[1]==down)
  {
  ctx.fillStyle="#282c34";
  ctx.fillRect(snakex[0],snakey[0],th,2);
  }
  if(lastKey[0]==right || lastKey[0]==left || lastKey[0]==space ||  lastKey[1]==left || lastKey[1]==right)
  {
      ctx.fillStyle="#282c34";
      ctx.fillRect(snakex[0],snakey[0],2,th);
  }
if((snakex[0]>=foodx && snakex[0]<=foodx+foodth && snakey[0]>=foody && snakey[0]<=foody+foodth)
  ||(snakex[0]+th>=foodx && snakey[0]+th>=foody && snakex[0]+th<=foodx+foodth && snakey[0]<=foody+foodth)
  ||(snakex[0]>=foodx && snakey[0]+th>=foody && snakex[0]<=foodx+foodth && snakey[0]+th<=foody+foodth)
  ||( snakex[0]+th>=foodx && snakex[0]+th<=foodx+foodth && snakey[0]+th>=foody && snakey[0]+th<=foody+foodth)
  )
 {
     eat();
     // console.log(snakex);
     // console.log(snakey)
 }

 if(snakex.length>=4)
 {
   for(i=4;i<snakex.length;i++)
   {
     isin(snakex[i],snakey[i],snakex[0],snakey[0]);
   }
 }

 ctx.fillStyle="#148F77";
 ctx.fillRect(snakex[0],snakey[0],th,th);
 for(i=snakex.length-1;i>0;i--)
 {
     snakex[i]=snakex[i-1];
     snakey[i]=snakey[i-1];

   ctx.fillStyle="#148F77";
   ctx.fillRect(snakex[i],snakey[i],th,th);
   if(lastKey[0]==up || lastKey[0]==down || lastKey[0]==space || lastKey[1]==up || lastKey[1]==down )
     {
     ctx.fillStyle="#282c34";
     ctx.fillRect(snakex[i],snakey[i],th,2);
     }
     if(lastKey[0]==right || lastKey[0]==left || lastKey[0]==space ||lastKey[1]==left || lastKey[1]==right)
     {
         ctx.fillStyle="#282c34";
         ctx.fillRect(snakex[i],snakey[i],2,th);
     }

 }

if(snakex.length==2){eat();}
}

function eat()
{
  count=count+100;
  score.innerHTML=count;
//  console.log("eat");

  snakex.push(snakex[snakex.length-1]-15);
  snakey.push(snakey[snakey.length-1]);

  //console.log(snakex.length);

  ctx.clearRect(foodx,foody,foodth,foodth);
  foodx=Math.floor(Math.random()*(730));
  foody=Math.floor(Math.random()*(500));

  ctx.fillStyle="#D32802";
  ctx.fillRect(foodx,foody,foodth,foodth);

}

// function isin(x1,y1,x2,y2)
// {
//   if(x1<=x2 && x2<=x1+th && y1<=y2 && y2<=y1+th)
//   {
//     die();
//   }
// }

function die()
{
  console.log("die x: ",snakex);
  console.log("die y: ",snakey);
  clearInterval(timer);
  timer=-1;
  ctx.fillStyle="Red";
  ctx.font="60px Arial";
  ctx.fillText("Game Over",canvas.width/2,canvas.height/2);
}
