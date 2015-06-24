#pragma strict

static var count = 0;

function Awake()
{
	if (GameObject.Find("TimerCounter") != null)
	{
		Destroy(transform.gameObject);
	}
    DontDestroyOnLoad (transform.gameObject);
    
}