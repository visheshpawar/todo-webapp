const inputbox= document.getElementById("ibox");
const listcontainer = document.getElementById("lico");
function addtask()
{
    if (inputbox.value=='')
    {
        alert("field cannot be empty");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
}
listcontainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");   
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false);