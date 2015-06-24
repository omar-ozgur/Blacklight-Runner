#pragma strict

function Update () 
{
    transform.Rotate(-20*Time.deltaTime, 0, 0, Space.World);
}