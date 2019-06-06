var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");

var offsetW=20;
var offsetH=40;
canvas.width=window.innerWidth-offsetW;
canvas.height=window.innerHeight-offsetH;

var width=canvas.width;
var height=canvas.height;
console.log(canvas.width, canvas.height);
var x=5,y=5,th=15;
var dx=15,dy=0;

var left=37,up=38,right=39,down=40,space=32,s=83;
var key;
var timer;
var speed=100;

var foodx,foody,foodth=15;
var snakex=[x];
var snakey=[y];
var count=0;
var score=document.getElementById('score');

var audio = new Audio('bgmusic.mp3');
var myVar,elems;

//Setting timer
var hoursLabel =document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var vartimer;

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  hoursLabel.innerHTML =pad(parseInt(totalSeconds/3600));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


//var modal=document.querySelectorAll('.modal');
//init();
//modal addEventListener
window.addEventListener('DOMContentLoaded', function() {
     elems = document.querySelectorAll('.modal');
     var instances = M.Modal.init(elems, {
      opacity:1,
      inDuration:100,
      outDuration:100,
      backdrop: 'static',
        keyboard: false,
        preventScrolling:true
    });
    // var instance = M.Modal.getInstance(elems);
    // instance.open();
  });

  $(function() {

     $('#btn').click(function() {
       $('#modal1').modal('hide');
      });
  });

function dismiss()
{

  myVar=setTimeout(checkmusic,100);
  timer=setInterval(move,speed);
  vartimer=setInterval(setTime, 1000);
  namespan.innerHTML=document.getElementById('fname').value;
  //Generatingsnake's head
  ctx.fillStyle="#CAEC67";
  ctx.fillRect(snakex[0],snakey[0],th,th);
  ctx.fillStyle="#282c34";
  ctx.fillRect(snakex[0],snakey[0],2,th);
  //timer=setInterval(move,speed);

  //Generating food for the first time

  foodx=Math.floor(Math.random()*(canvas.width-15));
  foody=Math.floor(Math.random()*(canvas.height-15));
    while(isin(snakex[0],snakey[0],foodx,foody)){
      foodx=Math.floor(Math.random()*(canvas.width-15));
      foody=Math.floor(Math.random()*(canvas.height-15));
  }
  ctx.fillStyle="#DC7633";
  ctx.fillRect(foodx,foody,foodth,foodth);

}

  var lastKey=[right,right];
//check's which key is pressed
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
    //clearTimeout(myVar);
    move();
    timer=setInterval(move,speed);
    //myVar=setTimeout(checkmusic,100);
  }
   if(key==up && lastKey[0]!=down )
   {
     lastKey[1]=lastKey[0];
     lastKey[0]=key;
     dy=-15;
     dx=0;
     clearInterval(timer);
     //clearTimeout(myVar);
     move();
     timer=setInterval(move,speed);
     //myVar=setTimeout(checkmusic,100);

   }
    if(key==right && lastKey[0]!=left )
    {
      lastKey[1]=lastKey[0];
      lastKey[0]=key;
      dx=15;
      dy=0;
      clearInterval(timer);
      //clearTimeout(myVar);
      move();
      timer=setInterval(move,speed);
      //myVar=setTimeout(checkmusic,100);
    }
     if(key==down && lastKey[0]!=up )
     {
       lastKey[1]=lastKey[0];
       lastKey[0]=key;
       dy=15;
       dx=0;
       clearInterval(timer);
       //clearTimeout(myVar);
       move();
       timer=setInterval(move,speed);
       //myVar=setTimeout(checkmusic,100);
     }
     if(key==space)
     {
       //console.log("space\n");
      if(timer==0)
       {
        // console.log("spacex");
         timer=setInterval(move,speed);
         clearInterval(timer);
         clearTimeout(myVar)
         move();
         timer=setInterval(move,speed);
         myVar= setTimeout(checkmusic,100);
         vartimer=setInterval(setTime, 1000);
       }
       else {
        //  console.log("spacey");
         clearInterval(timer);
         timer=0;
         clearInterval(vartimer);
         vartimer=0;
         clearTimeout(myVar);
         audio.pause();
       }
       lastKey[1]=lastKey[0];
       lastKey[0]=key;
     }

   }
}

//responsible for movement of snake.
function move(){

  var i;
   ctx.clearRect(snakex[snakex.length-1],snakey[snakey.length-1],th,th);
   snakex[0]=snakex[0]+dx;
   snakey[0]=snakey[0]+dy;

   //Condtions to handle snake when it enters any of the 4 boundaries.
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
  ctx.fillStyle="#CAEC67";
  ctx.fillRect(snakex[0],snakey[0],th,th);
//Setting color of snake's stripes
if(lastKey[0]==up || lastKey[0]==down || lastKey[0]==space || lastKey[1]==up || lastKey[1]==down || lastKey[1]==space)
  {
  ctx.fillStyle="#282c34";
  ctx.fillRect(snakex[0],snakey[0],th,2);
  }
  if(lastKey[0]==right || lastKey[0]==left || lastKey[0]==space ||  lastKey[1]==left || lastKey[1]==right || lastKey[1]==space)
  {
      ctx.fillStyle="#282c34";
      ctx.fillRect(snakex[0],snakey[0],2,th);
  }

  //calls eat();
if((snakex[0]>=foodx && snakex[0]<=foodx+foodth && snakey[0]>=foody && snakey[0]<=foody+foodth)
  ||(snakex[0]+th>=foodx && snakey[0]+th>=foody && snakex[0]+th<=foodx+foodth && snakey[0]<=foody+foodth)
  ||(snakex[0]>=foodx && snakey[0]+th>=foody && snakex[0]<=foodx+foodth && snakey[0]+th<=foody+foodth)
  ||( snakex[0]+th>=foodx && snakex[0]+th<=foodx+foodth && snakey[0]+th>=foody && snakey[0]+th<=foody+foodth)
  )
 {
     eat();
 }


var m,n;
//calls isin to check if snake's head doesn't eat its body
 if(snakex.length>=4)
 {
   for(i=4;i<snakex.length;i++)
   {
      m=snakex[i];
      n=snakey[i];
     if(isin(m,n,snakex[0],snakey[0]))
     {
       console.log(snakex[i],snakey[i]);
       die(i);
       break;
     }
   }
 }
//putting snake's head on screen
 ctx.fillStyle="#CAEC67";
 ctx.fillRect(snakex[0],snakey[0],th,th);
 //putting snake's body on screen
 for(i=snakex.length-1;i>0;i--)
 {
     snakex[i]=snakex[i-1];
     snakey[i]=snakey[i-1];

   ctx.fillStyle="#CAEC67";
   ctx.fillRect(snakex[i],snakey[i],th,th);
   if(lastKey[0]==up || lastKey[0]==down || lastKey[0]==space || lastKey[1]==up || lastKey[1]==down || lastKey[1]==space)
     {
     ctx.fillStyle="#282c34";
     ctx.fillRect(snakex[i],snakey[i],th,2);
     }
     if(lastKey[0]==right || lastKey[0]==left || lastKey[0]==space ||lastKey[1]==left || lastKey[1]==right ||  lastKey[1]==space)
     {
         ctx.fillStyle="#282c34";
         ctx.fillRect(snakex[i],snakey[i],2,th);
     }

 }
//jugaad
if(snakex.length==2){eat();}//this was added so that snake's body grows on first eat also

}

//Checks if snake's head touches its own body
//x2 & y2 are snake's head's coordinates
function isin(x1,y1,x2,y2)
{
  if(x2>=x1 && y2>=y1 && x2<x1+th && y2<y1+th )
  {
      clearInterval(timer);
       // console.log("x:",x1,x2,x1+th);
       // console.log("y:",y1,y2,y1+th);
      return 1;

  }

}
//Eating food
function eat()
{

  count=count+100;//Increasing score byy 100 each time snake eats
  score.innerHTML=count;//setting the score equal to count to be displayed on screen


  if(count%1500==0 && speed>30)
   speed=speed-10;

  snakex.push(snakex[snakex.length-1]-15);//pushing new value to snakex holding x values of snake's body
  snakey.push(snakey[snakey.length-1]);//pushing new value to snakey holding y values of snake's body


  ctx.clearRect(foodx,foody,foodth,foodth);//Removes food once eaten
  //Generating new food
  foodx=Math.floor(Math.random()*(730));
  foody=Math.floor(Math.random()*(500));
  for(i=0;i<=snakex.length;i++)
  {
  if(isin(snakex[i],snakey[i],foodx,foody)){
    foodx=Math.floor(Math.random()*(canvas.width-15));
    foody=Math.floor(Math.random()*(canvas.height-15));
    break;
 }
}
  ctx.fillStyle="#DC7633";
  ctx.fillRect(foodx,foody,foodth,foodth);

}
$(function() {

   $('#btn1').click(function() {
     $('#modal2').modal('hide');
    });
});

// function reset()
// {
//   init();
// }

//End Game
function die(i)
{

  $(window).ready(function(){
      $("#modal2").modal('show');
  });
  yourscore.innerHTML=count;
  clearInterval(timer);
  clearTimeout(myVar);
  audio.pause();
  timer=-1;


  // ctx.fillStyle="Red";
  // ctx.font="100px Comic Sans";
  // ctx.fillText("Game Over",width/2-200,height/2);
}

function checkmusic()
{
  console.log(audio.readyState);
  if(audio.readyState==4){
    console.log("in audio");
  audio.play();
  }
  else {
    setTimeout(checkmusic,1000)
  }
  //audio.loop=true;}
  // clearTimeout(myVar);
}


function init() {
  location.reload();
}
