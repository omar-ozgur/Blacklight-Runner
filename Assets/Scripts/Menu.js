#pragma strict

var button : GUIStyle;
static var font : Font;
private var wide : int;
private var high : int;

function Awake()
{
	Screen.showCursor = true;
	Screen.lockCursor = false;
}

function OnGUI () 
{
	 button.font = font;
	 high = Screen.height/5;
	 wide = Screen.width/2.2;
     
     GUI.color = new Color(0,0,0,0); //0.5f in c#
     if(GUI.RepeatButton (Rect ((Screen.width-wide)/2, Screen.height/1.75, wide, high), ""))
     {
     	Application.LoadLevel(LevelName.worldSelect);
     }
          
     if(GUI.RepeatButton (Rect ((Screen.width-wide)/1.4, Screen.height/1.2, Screen.width/4.5, Screen.height/10), ""))
     {
     	/*
     	PlayerPrefs.SetInt("level1", 0);
     	PlayerPrefs.SetInt("level2", 0);
     	PlayerPrefs.SetInt("level3", 0);
     	PlayerPrefs.SetInt("2unlocked", 0);
     	PlayerPrefs.SetInt("totalDeaths", 0);
     	PlayerPrefs.SetInt("extreme?", 0);
     	PlayerPrefs.SetInt("music?", 0);
     	PlayerPrefs.SetInt("3unlocked", 0);
     	*/
     	
     	Application.LoadLevel(LevelName.info);
     }
     GUI.color = Color.white;
}