#pragma strict
var waitTime : float;
function Awake () 
{
	Application.LoadLevel((Application.loadedLevel) + 1);
}

//function Wait()
//{
//	Time.timeScale = 99.9;
//	yield WaitForSeconds(waitTime);
//	Time.timeScale = 1.0;
//	Application.LoadLevel((Application.loadedLevel) + 1);
//}