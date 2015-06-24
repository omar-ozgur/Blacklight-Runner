var style : GUIStyle;

function OnGUI()
{
	style.fontSize = Screen.width/20;
    if(GUI.Button (Rect (Screen.width/2 - Screen.width/4, Screen.height/7, Screen.width/2, Screen.height/8), "Level 1 Scores", style))
    {
    	Application.LoadLevel(13);
    }
    if(GUI.Button (Rect (Screen.width/2 - Screen.width/4, Screen.height/3.5, Screen.width/2, Screen.height/8), "Level 2 Scores", style))
    {
    	Application.LoadLevel(14);
    }
        if(GUI.Button (Rect (Screen.width/2 - Screen.width/4, Screen.height/2 - Screen.height/15, Screen.width/2, Screen.height/8), "Level 3 Scores", style))
    {
    	Application.LoadLevel(15);
    }
            if(GUI.Button (Rect (Screen.width/2 - Screen.width/4, Screen.height/1.7, Screen.width/2, Screen.height/8), "Level 4 Scores", style))
    {
    	Application.LoadLevel(16);
    }
            if(GUI.Button (Rect (Screen.width/2 - Screen.width/4, Screen.height/1.35, Screen.width/2, Screen.height/8), "Level 5 Scores", style))
    {
    	Application.LoadLevel(17);
    }
}