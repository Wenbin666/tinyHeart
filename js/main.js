var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeigh;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;
var mom;
var baby;
var wave;
var halo;

var mx;
var my;

var babyTail=[];
var babyEye =[];
var babyBody=[];

var data;

var bigTail=[];
var bigEye =[];
var bigBodyOra=[];
var bigBodyBlue=[];

var dust;
var dustPic=[];

document.body.onload = game;
function game()
{
	init();
	lastTime = Date.now();
	deltaTime=0;
	gameloop();
}

function init()
{
	//获得canvas context
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);


	bgPic.src = "./src/background.jpg";
	canWidth = can1.width;
	canHeigh = can1.height;
	ane =new aneObj();
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();
		
	mom=new momObj();
	mom.init();
	
	baby=new babyObj();
	baby.init();		

	mx=canWidth*0.5;
	my=canHeigh*0.5;

	for(var i=0; i<8; i ++ )
	{
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
	
	for(var i=0; i<2; i++)
	{
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i + ".png";
	}
	
	for(var i=0; i<20; i++ )
	{
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	}
	
	for(var i=0; i<8;i++ )
	{
		bigTail[i]= new Image();
		bigTail[i].src = "./src/bigTail" + i + ".png";
	}
	for(var i=0; i<2;i++ )
	{
		bigEye[i]= new Image();
		bigEye[i].src = "./src/bigEye" + i + ".png";
	}
	
	data = new dataObj();	

	for(var i=0; i<8 ;i ++ )
	{
		bigBodyOra[i] = new Image();
		bigBodyBlue[i] = new Image();
		bigBodyOra[i].src = "./src/bigSwim" + i + ".png";
		bigBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}
        
	for(var i=0 ;i <7 ; i++ )
	{
   		dustPic[i] = new Image();
		dustPic[i].src = "./src/dust" + i + ".png";
	}
   
        ctx1.font  = "30px Verdana";
	ctx1.textAlign = "center";

        wave = new waveObj();
	wave.init();
	
	halo =new haloObj();
	halo.init();
	dust = new dustObj();
	dust.init();
}

function gameloop()
{
	window.requestAnimFrame(gameloop);//setInterval, setTimeout 
	var now = Date.now();
	deltaTime = now -lastTime;
	lastTime = now;
	if(deltaTime >40 ) deltaTime = 40;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeigh);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();	
}

function onMouseMove(e)
{
	if(!data.gameOver)
        {
	  
		if(e.offsetX||e.layerX)
		{
			mx=e.offSetX == undefined? e.layerX:e.offSetX;
			my=e.offSetY == undefined? e.layerY:e.offSetY;
		
		}
	}
}


















