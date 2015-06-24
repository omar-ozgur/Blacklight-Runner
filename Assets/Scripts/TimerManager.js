#pragma strict

var timer : Transform;

function Awake()
{
	if(TimerCounter.count > 0)
	{
		Destroy(transform.gameObject);
	}
}

function Start () 
{
	if(TimerCounter.count == 0)
	{
		Instantiate(timer, transform.position, transform.rotation);
		TimerCounter.count += 1;
	}
}