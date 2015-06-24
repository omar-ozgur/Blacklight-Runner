#pragma strict

var style : GUIStyle;

function OnGUI()
{
    GUI.Label (Rect (Screen.width/2 - Screen.width/4, Screen.height/1.5, Screen.width/2, Screen.width), "Total Deaths: "+PlayerPrefs.GetInt("totalDeaths"), style);
	style.fontSize = Screen.width/16;
}