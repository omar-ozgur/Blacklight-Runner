function Awake () {
		// Make the game run as fast as possible in the web player
		Application.targetFrameRate = 70;
		if(Application.loadedLevel != 7)
		{
				PlayerPrefs.SetInt("level1raw",0);
				PlayerPrefs.SetInt("level2raw",0);
				PlayerPrefs.SetInt("level3raw",0);
				PlayerPrefs.SetInt("level4raw",0);
				PlayerPrefs.SetInt("level5raw",0);

		}
	}