let userInput=document.querySelector("#task");
let btn=document.querySelector("#submit");
let valid=document.querySelector("#validate");
let ul=document.querySelector("ul");
let div=document.querySelector("div");
let clearbtn=document.querySelector("#clear");
btn.addEventListener("click",()=>{
    // div.appendChild(ul);
    if(userInput.value!=""){
        let li=document.createElement("li");
        let check=document.createElement("input");
        check.setAttribute("type","checkbox");
        li.style.listStyleType="none";
        li.style.backgroundColor="aliceblue";
        li.style.marginTop="9px";
        li.style.marginBottom="5px";
        li.style.borderRadius="12px";
        li.style.padding="13px";
        li.style.width="156px";
        li.style.textAlign="center";
        li.innerText="  "+userInput.value;
        li.prepend(check);
        ul.append(li);
        userInput.value=""
        valid.innerText="";
        clearbtn.addEventListener("click",()=>{
            li.remove()
        })
    }
    else{
       valid.innerHTML="*please enter a task";
       valid.setAttribute("class","red"); 
    }
    
    
})

