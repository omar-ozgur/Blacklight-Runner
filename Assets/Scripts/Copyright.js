#pragma strict

var style : GUIStyle;

function OnGUI()
{
	style.fontSize = Screen.height/45;
	var width = Screen.width/1.6;
	var height = Screen.height/6;
	GUI.color = Color.white;
	GUI.Label (Rect (1/Screen.width, Screen.height - height/5, width, height), "© Copyright Omar Ozgur, 2012. All rights reserved", style);
}