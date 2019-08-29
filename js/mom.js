var momObj = function()
{
	this.x;
	this.y;
	this.angle;

	this.bigTailTimer = 0;
	this.bigTailCount = 0;

	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 1000;	

	this.bigBodyCount = 0;
		
}
momObj.prototype.init=function()
{

	this.angle=0;	
	this.x =canWidth*0.5;
	this.y =canHeigh*0.5;
	
}
momObj.prototype.draw=function()
{

	this.x =  lerpDistance(mx,this.x,0.98);
	this.y =  lerpDistance(my,this.y,0.98);
		
	var deltaY = my -this.y;
	var deltaX = mx -this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);

	this.bigTailTimer +=deltaTime;
	if(this.bigTailTimer > 50)
	{
		this.bigTailTimer %= 50;
		this.bigTailCount = (this.bigTailCount+1) % 8;

	}
	
	this.bigEyeTimer += deltaTime;
	if(this.bigEyeTimer > this.bigEyeInterval)	
	{
		this.bigEyeTimer %= this.bigEyeInterval;
		this.bigEyeCount = (this.bigEyeCount +1) % 2;
		if(this.bigEyeCount == 0 )
                {
			this.bigEyeInterval = Math.random()*1500 + 2000;
		}
		else
		{
			this.bigEyeInterval = 200;
		}

	}
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	
	var bigBodyCount = this.bigBodyCount;
	if(data.double == 1)
	{
		ctx1.drawImage(bigBodyOra[bigBodyCount],
		-bigBodyOra[bigBodyCount].width*0.5,
		-bigBodyOra[bigBodyCount].height*0.5);
	}
	else
	{
		ctx1.drawImage(bigBodyBlue[bigBodyCount],
		-bigBodyBlue[bigBodyCount].width*0.5,
		-bigBodyBlue[bigBodyCount].height*0.5);
	}
	var bigTailCount = this.bigTailCount;
	ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width*0.5+30,
	-bigTail[bigTailCount].height*0.5);

	var bigEyeCount = this.bigEyeCount;
	ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,
	-bigEye[bigEyeCount].height*0.5);
	ctx1.restore();
}
