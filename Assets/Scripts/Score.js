var fontStyle : GUIStyle;
var timeStyle : GUIStyle;
var scoreStyle : GUIStyle;
var restartStyle : GUIStyle;
var levelStyle : GUIStyle;

private var deaths : int;
private var highScore : int;

function Start()
{
if(OldLevel.oldLevel == 1)
	{
		highScore = PlayerPrefs.GetInt("level1");
	}
	
	else if(OldLevel.oldLevel == 2)
	{
		highScore = PlayerPrefs.GetInt("level2");
	}
	
	else if(OldLevel.oldLevel == 3)
	{
		highScore = PlayerPrefs.GetInt("level3");
	}
	
	else if(OldLevel.oldLevel == 4)
	{
		highScore = PlayerPrefs.GetInt("level4");
	}
	
	else if(OldLevel.oldLevel == 5)
	{
		highScore = PlayerPrefs.GetInt("level5");
	}
	
	else if(OldLevel.oldLevel == 6)
	{
		highScore = PlayerPrefs.GetInt("level6");
	}
	
	else if(OldLevel.oldLevel == 7)
	{
		highScore = PlayerPrefs.GetInt("level7");
	}
	
	else if(OldLevel.oldLevel == 8)
	{
		highScore = PlayerPrefs.GetInt("level8");
	}

	else if(OldLevel.oldLevel == 9)
	{
		highScore = PlayerPrefs.GetInt("level9");
	}
	
	else if(OldLevel.oldLevel == 10)
	{
		highScore = PlayerPrefs.GetInt("level10");
	}
}

function OnGUI()
{
	deaths = Death.deathCount;
		
	GUI.color = Color.white;
	var y = Screen.height/2.5;
	var x = Screen.width/0.8;
	fontStyle.fontSize = Screen.height/15;
	timeStyle.fontSize = Screen.height/15;
	scoreStyle.fontSize = Screen.height/10;
	restartStyle.fontSize = Screen.height/8;
	
	GUI.Label (Rect(((Screen.width/2)-(x/2)), ((Screen.height/2)-(14*y/15)), x, y), "Deaths: "+OldLevel.oldDeaths, fontStyle);
	GUI.Label (Rect(((Screen.width/2)-(x/2)), ((Screen.height/2)-(2*y/3)), x, y), "Time: "+Timer.textTime, timeStyle);
	GUI.Label (Rect(((Screen.width/2)-(x/2)), ((Screen.height/2)-(y/2.6)), x, y), "Score: "+Goal.score, scoreStyle);
	GUI.Label (Rect(((Screen.width/2)-(x/2)), ((Screen.height/2)-(y/50)), x, y), "High Score: "+highScore , restartStyle);
		
}