let submit = document.getElementById("submit");
let todolist=document.getElementById("todolist");

submit.addEventListener("click",()=>{
    let content=document.getElementById("content");
    let name=document.getElementById("name");
    
    let box=document.createElement("div");
    let item=document.createElement("div");
    item.textContent=name.value +" "+content.value;
    
    let btn=document.createElement("button");
    btn.className="col-0 btn btn-primary";
    btn.textContent="❌";
    btn.style.backgroundColor="white";
    btn.style.border="white";
    item.appendChild(btn);
    box.appendChild(item);
    todolist.appendChild(box);
    name.value=content.value="";

    btn.addEventListener("click",()=>{
        box.parentNode.removeChild(box);

    })
})
