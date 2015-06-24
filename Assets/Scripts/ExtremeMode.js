#pragma strict

static var toggleTxt : boolean = false;

function OnGUI () {
	GUI.skin.toggle.fontSize = Screen.height/40;
	GUI.skin.toggle.alignment = TextAnchor.UpperLeft;
	GUI.skin.toggle.imagePosition = ImagePosition.ImageAbove;
	var width = Screen.width/8;
	var height = Screen.height/10;
    toggleTxt = GUI.Toggle(Rect(Screen.width/1 - width, Screen.height - height/2.5, width, height), toggleTxt, "Extreme?");
}

function Update()
{
	if(toggleTxt == true)
	{
		PlayerPrefs.SetInt("extreme?", 1);
	}
	
	if(toggleTxt == false)
	{
		PlayerPrefs.SetInt("extreme?", 0);
	}
}

function Start()
{
	if(PlayerPrefs.GetInt("extreme?") == 1)
	{
		toggleTxt = true;
	}
	
	else if(PlayerPrefs.GetInt("extreme?") == 0)
	{
		toggleTxt = false;
	}
}