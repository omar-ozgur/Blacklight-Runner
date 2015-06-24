#pragma strict

static var oldLevel : int;
static var oldDeaths : int;

function Update () 
{
	oldDeaths = Death.deathCount;

	if(Timer.level == 1)
	{
		oldLevel = 1;
	}
	
	else if(Timer.level == 2)
	{
		oldLevel = 2;
	}	
	
	else if(Timer.level == 3)
	{
		oldLevel = 3;
	}
	
	else if(Timer.level == 4)
	{
		oldLevel = 4;
	}
	
	else if(Timer.level == 5)
	{
		oldLevel = 5;
	}	
	
	else if(Timer.level == 6)
	{
		oldLevel = 6;
	}
	
	else if(Timer.level == 7)
	{
		oldLevel = 7;
	}
	
	else if(Timer.level == 8)
	{
		oldLevel = 8;
	}	
	
	else if(Timer.level == 9)
	{
		oldLevel = 9;
	}
	
	else if(Timer.level == 10)
	{
		oldLevel = 10;
	}
}