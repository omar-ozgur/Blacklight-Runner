#pragma strict

static var toggleTxt : boolean = true;
var music : Transform;

function OnGUI () {
	GUI.skin.toggle.fontSize = Screen.height/20;
	GUI.skin.toggle.alignment = TextAnchor.UpperLeft;
	GUI.skin.toggle.imagePosition = ImagePosition.ImageAbove;
	var width = Screen.width/8;
	var height = Screen.height/10;
    toggleTxt = GUI.Toggle(Rect(Screen.width/1 - width/1, Screen.height - height/1.5, width, height), toggleTxt, "Music");
}

function Update()
{
	if(toggleTxt == true)
	{
		PlayerPrefs.SetInt("music?", 0);
	}
	
	if(toggleTxt == false)
	{
		PlayerPrefs.SetInt("music?", 1);
	}
}

function Start()
{
	if(PlayerPrefs.GetInt("music?") == 0)
	{
		toggleTxt = true;
	}
	
	else if(PlayerPrefs.GetInt("music?") == 1)
	{
		toggleTxt = false;
	}
}