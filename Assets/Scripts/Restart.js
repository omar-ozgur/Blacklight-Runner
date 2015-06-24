#pragma strict

function Update () 
{
	if(Input.GetKeyDown("r"))
	{
		Application.LoadLevel(Application.loadedLevel);
	}
	
	if(Input.GetKeyDown("q"))
	{
		if(GameObject.Find("MusicManager"))
		{
			Destroy(GameObject.Find("MusicManager"));
		}
		Application.LoadLevel(LevelName.menu);
	}
}