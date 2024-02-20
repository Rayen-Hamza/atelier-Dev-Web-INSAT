let list=document.getElementById("list");


    Object.values(list.children).forEach(child=>{
        console.log(child.innerHTML)
    });


    Object.values(list.children).forEach(element =>{
        element.addEventListener("click",()=>{
            let randomColor=Math.floor(Math.random()*16777215);
            let hexcode="#"+randomColor.toString(16);
            console.log(hexcode);
            element.style.color=hexcode;
        })
    })
