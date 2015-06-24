var deathStyle : GUIStyle;
var timeStyle : GUIStyle;

private var guiTime : int;

static var startTime : int;
static var time : int;
static var minutes :int;
static var seconds : int;

static var textTime : String;

static var level = 0;
private var prevLevel : int;

static var highScore;

function Awake()
{
	if(Application.loadedLevel == LevelName.level1)
	{
		level = 1;
	}
	
	else if(Application.loadedLevel == LevelName.level2)
	{
		level = 2;
	}

	else if(Application.loadedLevel == LevelName.level3)
	{
		level = 3;
	} 
	
	else if(Application.loadedLevel == LevelName.level4)
	{
		level = 4;
	} 
	
	else if(Application.loadedLevel == LevelName.level5)
	{
		level = 5;
	} 
	
	else if(Application.loadedLevel == LevelName.level6)
	{
		level = 6;
	} 
	
	else if(Application.loadedLevel == LevelName.level7)
	{
		level = 7;
	} 
	
	else if(Application.loadedLevel == LevelName.level8)
	{
		level = 8;
	} 
	
	else if(Application.loadedLevel == LevelName.level9)
	{
		level = 9;
	} 
	
	else if(Application.loadedLevel == LevelName.level10)
	{
		level = 10;
	}
	
	DontDestroyOnLoad (transform.gameObject);
	
	if(level == 1)
	{
		highScore = PlayerPrefs.GetInt("level1");
	}
	else if(level == 2)
	{
		highScore = PlayerPrefs.GetInt("level2");
	}
	else if(level == 3)
	{
		highScore = PlayerPrefs.GetInt("level3");
	}
	else if(level == 4)
	{
		highScore = PlayerPrefs.GetInt("level4");
	}
	else if(level == 5)
	{
		highScore = PlayerPrefs.GetInt("level5");
	}
	else if(level == 6)
	{
		highScore = PlayerPrefs.GetInt("level6");
	}
	else if(level == 7)
	{
		highScore = PlayerPrefs.GetInt("level7");
	}
	else if(level == 8)
	{
		highScore = PlayerPrefs.GetInt("level8");
	}
	else if(level == 9)
	{
		highScore = PlayerPrefs.GetInt("level9");
	}
	else if(level == 10)
	{
		highScore = PlayerPrefs.GetInt("level10");
	}
}

function Update()
{   
		guiTime = Time.time - startTime;
	
	    minutes = guiTime / 60;
	    seconds = guiTime % 60;
	    
	    textTime = String.Format ("{0:00}:{1:00}", minutes, seconds); 
	    
	    if(DestroyTimer.reset)
		{
			startTime = Time.time;
			DestroyTimer.reset = false;
		}
		
}


function OnLevelDidLoad()
{
	startTime = Time.time;
}


function OnGUI()
{
		deathStyle.fontSize = Screen.height/35;
		timeStyle.fontSize = Screen.height/35;
								
		GUI.Label (Rect((Screen.width/3.7), (1/Screen.height), 500, 50), "Deaths: "+Death.deathCount, deathStyle);
		GUI.Label (Rect((Screen.width/7), (1/Screen.height), 500, 50), "Time: "+textTime, timeStyle);
		GUI.Label (Rect((Screen.width/1.12), (1/Screen.height), 500, 50), "Level: "+level, deathStyle);	
		GUI.Label (Rect((Screen.width/2.65), (1/Screen.height), 500, 50), "High Score: "+highScore, deathStyle);		
}