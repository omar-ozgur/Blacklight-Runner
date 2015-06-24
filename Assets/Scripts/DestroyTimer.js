#pragma strict

static var reset = true;

function Start () 
{
	if(GameObject.FindGameObjectWithTag("timer"))
	{
		Destroy(GameObject.FindGameObjectWithTag("timer"));
		TimerCounter.count = 0;
	}
	
	if(Application.loadedLevel == LevelName.menu)
	{
		reset = true;
	}
	
	Death.deathCount = 0;
}

