var style : GUIStyle;

function OnGUI()
{
    if(GUI.Button (Rect (Screen.width/2 - Screen.width/4, Screen.height/1.23 - Screen.height/100, Screen.width/2, Screen.height/8), "High Scores", style))
    {
    	Application.LoadLevel(18);
    }
    	style.fontSize = Screen.width/20;

}