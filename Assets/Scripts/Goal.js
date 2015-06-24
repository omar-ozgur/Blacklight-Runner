#pragma strict

static var score : int;
private var minutes : int;
private var seconds : int;
static var time : float;
private var deathCount : int;

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "player")
	{
		Score();
		Application.LoadLevel(LevelName.score);
	}
}

function Score()
{
	minutes = Timer.minutes;
	seconds = Timer.seconds;
	deathCount = Death.deathCount;
	time = ((minutes * 60) + seconds + (30 * deathCount));
	score = (Mathf.Pow((1/1.001), time)) * 1000000;
	
	if(Timer.level == 1)
	{
		PlayerPrefs.SetInt("2unlocked",1);
		
		PlayerPrefs.SetInt("level1raw",score);

		if(score > PlayerPrefs.GetInt("level1"))
		{
			PlayerPrefs.SetInt("level1",score);
		}
	}
	
	else if(Timer.level == 2)
	{
	PlayerPrefs.SetInt("3unlocked",1);
			PlayerPrefs.SetInt("level2raw",score);

	
		if(score > PlayerPrefs.GetInt("level2"))
		{
			PlayerPrefs.SetInt("level2",score);
		}	
	}
	
	else if(Timer.level == 3)
	{
	PlayerPrefs.SetInt("4unlocked",1);
			PlayerPrefs.SetInt("level3raw",score);


	
		if(score > PlayerPrefs.GetInt("level3"))
		{
			PlayerPrefs.SetInt("level3",score);
		}	
	}
	
	else if(Timer.level == 4)
	{
	PlayerPrefs.SetInt("5unlocked",1);
			PlayerPrefs.SetInt("level4raw",score);

	
		if(score > PlayerPrefs.GetInt("level4"))
		{
			PlayerPrefs.SetInt("level4",score);
		}	
	}
	
	else if(Timer.level == 5)
	{
	PlayerPrefs.SetInt("6unlocked",1);
			PlayerPrefs.SetInt("level5raw",score);

	
		if(score > PlayerPrefs.GetInt("level5"))
		{
			PlayerPrefs.SetInt("level5",score);
		}	
	}
	
	else if(Timer.level == 6)
	{
	PlayerPrefs.SetInt("7unlocked",1);
	
		if(score > PlayerPrefs.GetInt("level6"))
		{
			PlayerPrefs.SetInt("level6",score);
		}	
	}
	
	else if(Timer.level == 7)
	{
	PlayerPrefs.SetInt("8unlocked",1);
	
		if(score > PlayerPrefs.GetInt("level7"))
		{
			PlayerPrefs.SetInt("level7",score);
		}	
	}
	
	else if(Timer.level == 8)
	{
	PlayerPrefs.SetInt("9unlocked",1);
	
		if(score > PlayerPrefs.GetInt("level8"))
		{
			PlayerPrefs.SetInt("level8",score);
		}	
	}
	
	else if(Timer.level == 9)
	{
	PlayerPrefs.SetInt("10unlocked",1);
	
		if(score > PlayerPrefs.GetInt("level9"))
		{
			PlayerPrefs.SetInt("level9",score);
		}	
	}
	
	else if(Timer.level == 10)
	{
		if(score > PlayerPrefs.GetInt("level10"))
		{
			PlayerPrefs.SetInt("level10",score);
		}	
	}
}