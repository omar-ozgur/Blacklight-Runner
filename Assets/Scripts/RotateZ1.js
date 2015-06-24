#pragma strict

function Update () 
{
    transform.Rotate(0, 0, 20*Time.deltaTime, Space.World);
}