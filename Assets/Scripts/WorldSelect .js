#pragma strict

var button : GUIStyle;
static var font : Font;
private var wide : int;
private var high : int;

function Start()
{
	if(PlayerPrefs.GetInt("2unlocked") == 1 && GameObject.FindWithTag("2lock"))
	{
		Destroy(GameObject.FindWithTag("2lock").gameObject);
	}
	
	if(PlayerPrefs.GetInt("3unlocked") == 1 && GameObject.FindWithTag("3lock"))
	{
		Destroy(GameObject.FindWithTag("3lock").gameObject);
	}
	
	if(PlayerPrefs.GetInt("4unlocked") == 1 && GameObject.FindWithTag("4lock"))
	{
		Destroy(GameObject.FindWithTag("4lock").gameObject);
	}
		if(PlayerPrefs.GetInt("5unlocked") == 1 && GameObject.FindWithTag("5lock"))
	{
		Destroy(GameObject.FindWithTag("5lock").gameObject);
	}
		if(PlayerPrefs.GetInt("6unlocked") == 1 && GameObject.FindWithTag("6lock"))
	{
		Destroy(GameObject.FindWithTag("6lock").gameObject);
	}
		if(PlayerPrefs.GetInt("7unlocked") == 1 && GameObject.FindWithTag("7lock"))
	{
		Destroy(GameObject.FindWithTag("7lock").gameObject);
	}
		if(PlayerPrefs.GetInt("8unlocked") == 1 && GameObject.FindWithTag("8lock"))
	{
		Destroy(GameObject.FindWithTag("8lock").gameObject);
	}
		if(PlayerPrefs.GetInt("9unlocked") == 1 && GameObject.FindWithTag("9lock"))
	{
		Destroy(GameObject.FindWithTag("9lock").gameObject);
	}
		if(PlayerPrefs.GetInt("10unlocked") == 1 && GameObject.FindWithTag("10lock"))
	{
		Destroy(GameObject.FindWithTag("10lock").gameObject);
	}
}

function OnGUI () 
{
	 button.font = font;
	 high = Screen.height/7.23;
	 wide = Screen.width/20;
     
     GUI.color = new Color(0,0,0,0); //0.5f in c#
     
     if(GUI.RepeatButton (Rect ((Screen.width)/4 - wide, Screen.height/1.9 - high, wide*2, high*2), ""))
     {
     	Application.LoadLevel(LevelName.level1);
     }
         
     if(GUI.RepeatButton (Rect ((Screen.width)/2.72 - wide, Screen.height/1.9 - high, wide*2, high*2), ""))
     {
     	if(PlayerPrefs.GetInt("2unlocked") == 1)
     	{
     	Application.LoadLevel(LevelName.level2);
     	}
     }

     if(GUI.RepeatButton (Rect ((Screen.width)/2.05 - wide, Screen.height/1.9 - high, wide*2, high*2), ""))
     {
     	if(PlayerPrefs.GetInt("3unlocked") == 1)
     	{
     	Application.LoadLevel(LevelName.level3);
     	}
     }
     if(GUI.RepeatButton (Rect ((Screen.width)/1.66 - wide, Screen.height/1.9 - high, wide*2, high*2), ""))
     {
     	if(PlayerPrefs.GetInt("4unlocked") == 1)
     	{
     	Application.LoadLevel(LevelName.level4);
     	}
     }
     
     if(GUI.RepeatButton (Rect ((Screen.width)/1.39 - wide, Screen.height/1.9 - high, wide*2, high*2), ""))
     {
     	if(PlayerPrefs.GetInt("5unlocked") == 1)
     	{
     	Application.LoadLevel(LevelName.level5);
     	}
     }     
     
//     if(GUI.RepeatButton (Rect ((Screen.width)/7.5, Screen.height/1.55, wide, high), ""))
//     {
//     	if(PlayerPrefs.GetInt("6unlocked") == 1)
//     	{
//     	//Application.LoadLevel(LevelName.level6);
//     	}
//     }
//     
//     if(GUI.RepeatButton (Rect ((Screen.width)/3.45, Screen.height/1.55, wide, high), ""))
//     {
//     	if(PlayerPrefs.GetInt("7unlocked") == 1)
//     	{
//     	//Application.LoadLevel(LevelName.level7);
//     	}
//     }
//     
//     if(GUI.RepeatButton (Rect ((Screen.width)/2.25, Screen.height/1.55, wide, high), ""))
//     {
//     	if(PlayerPrefs.GetInt("8unlocked") == 1)
//     	{
//     	//Application.LoadLevel(LevelName.level8);
//     	}
//     }
//     
//     if(GUI.RepeatButton (Rect ((Screen.width)/1.69, Screen.height/1.55, wide, high), ""))
//     {
//     	if(PlayerPrefs.GetInt("9unlocked") == 1)
//     	{
//     	//Application.LoadLevel(LevelName.level9);
//     	}
//     }
//     
//     if(GUI.RepeatButton (Rect ((Screen.width)/1.34, Screen.height/1.55, 75, high), ""))
//     {
//     	if(PlayerPrefs.GetInt("10unlocked") == 1)
//     	{
//     	//Application.LoadLevel(LevelName.level10);
//     	}
//     }
}