document.addEventListener("keydown", function(event){
    console.log(event.key);

    playsound(event.key);
})

function playsound(event)
{
    if(event=='w')
    {
        document.getElementById("w").play();
    }
    if(event=='a')
    {
        document.getElementById("a").play();
    }
    if(event=='s')
    {
        document.getElementById("s").play();
    }
    if(event=='d')
    {
        document.getElementById("d").play();
    }
    if(event=='j')
    {
        document.getElementById("j").play();
    }
    if(event=='k')
    {
        document.getElementById("k").play();
    }if(event=='l')
    {
        document.getElementById("l").play();
    }

}
