#pragma strict

var music : Transform;

function Awake()
{
	if(Counter.count > 0)
	{
		Destroy(transform.gameObject);
	}
}

function Start () 
{
	if(Counter.count == 0)
	{
		Instantiate(music, transform.position, transform.rotation);
		Counter.count += 1;
	}
}