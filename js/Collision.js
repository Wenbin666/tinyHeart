function momFruitsCollision()
{
	if(!data.gameOver)
	{
		
		for(var i =0; i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if (l <900)
				{
					//fruit eaten
					fruit.dead(i);
					mom.bigBodyCount++;
					if(mom.bigBodyCount>7)
						mom.bigBodyCount = 7;
					data.fruitNum++;
					if(fruit.fruitType[i]=="blue")//blue
					{
						data.double = 2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
					
				}
			
			}
		}
	}
}

function momBabyCollision()
{
	if(data.fruitNum >0&& !data.gameOver)
        {
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l <900)
		{
			baby.babyBodyCount = 0;	
			mom.bigBodyCount = 0;
			data.addScore();
			halo.born(baby.x, baby.y);
		}
	}
}
