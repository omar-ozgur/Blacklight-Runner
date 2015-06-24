

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Escape)) 
	{ 
		if(Application.loadedLevel != 1)
		{
			Application.LoadLevel(1);
		}
		if(Application.loadedLevel == 1)
		{
			Application.Quit();
		}
	}
}