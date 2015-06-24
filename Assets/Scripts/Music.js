#pragma strict

var music : AudioClip;
var musicMenu : AudioClip;

function Awake()
{
    DontDestroyOnLoad (transform.gameObject);
}

function Update () 
{
	if(MusicToggle.toggleTxt == false)
	{
		transform.audio.Stop();
	}
	
	if(MusicToggle.toggleTxt == true)
	{
		if(!transform.audio.isPlaying)
		{
			transform.audio.Play();
		}
	}
	
	if(Application.loadedLevel < LevelName.level1)
	{
		transform.GetComponent(AudioSource).audio.clip = musicMenu;
	}
	
	else if(Application.loadedLevel >= LevelName.level1)
	{
			transform.GetComponent(AudioSource).audio.clip = music;
	}
}