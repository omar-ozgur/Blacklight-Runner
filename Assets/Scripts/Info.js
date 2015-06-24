#pragma strict

var button : GUIStyle;
static var font : Font;
private var wide : int;
private var high : int;


function OnGUI () 
{
	 button.font = font;
	 high = Screen.height/5;
	 wide = Screen.width/2;
     
     GUI.color = new Color(0,0,0,0); //0.5f in c#
     if(GUI.RepeatButton (Rect ((Screen.width-wide)/4.5, Screen.height/3.5, wide, high), ""))
     {
     	Application.LoadLevel(LevelName.about);
     }
          
     if(GUI.RepeatButton (Rect ((Screen.width-wide)/4.5, Screen.height/2, Screen.width/1.5, high), ""))
     {
     	Application.LoadLevel(LevelName.credits);
     }
          
     if(GUI.RepeatButton (Rect ((Screen.width-wide)/4.5, Screen.height/1.43, wide, high), ""))
     {
     	Application.LoadLevel(LevelName.help);
     }
     
     GUI.color = Color.white;
}