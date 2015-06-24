#pragma strict

var style : GUIStyle;

function Update()
{
	if(ExtremeMode.toggleTxt == true)
	{
		Destroy(GameObject.Find("Checkpoint"));
	}
}

function OnGUI()
{
	style.fontSize = Screen.height/30;
	
     if(GUI.RepeatButton (Rect (1/Screen.width, 1/Screen.height, Screen.width/8.42, Screen.width/15), "Menu", style))
     {
     	Application.LoadLevel(LevelName.menu);
     }
}