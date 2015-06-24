#pragma strict

function Update () 
{
	if(Time.timeScale == 99.9)
	{
    transform.Rotate(0, 1*Time.deltaTime, 0, Space.World);
    }
    else
    {
    transform.Rotate(0, 100*Time.deltaTime, 0, Space.World);
    }
}