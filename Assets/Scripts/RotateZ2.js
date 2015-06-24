#pragma strict

function Update () 
{
    transform.Rotate(0, 0, 60*Time.deltaTime, Space.World);
}