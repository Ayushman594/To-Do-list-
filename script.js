let userInput=document.querySelector("#task");
let btn=document.querySelector("#submit");
let valid=document.querySelector("#validate");
let ul=document.querySelector("ul");
let div=document.querySelector("div");
let clearbtn=document.querySelector("#clear");

//This code creates click event so that user can input text and adds to the to do list
btn.addEventListener("click",()=>{
    // div.appendChild(ul);
    if(userInput.value!=""){
        //code for creating lists
        let li=document.createElement("li");

        //code for Creating checkboxes
        let check=document.createElement("input");
        check.setAttribute("type","checkbox");
        
          //Code For creating and styling Edit Button
          let edit=document.createElement("button");
          edit.innerText="Edit";
          edit.style.fontSize="13px";
          edit.style.backgroundColor="blue";
          edit.style.color="white";
          edit.style.padding="5px";
          edit.style.border="none";
          edit.style.width="55px";
          edit.style.marginLeft="65px";
          edit.style.borderRadius="20px";
  

        //code for creating and styling delete button
        let del=document.createElement("button");
        del.innerText="Delete";
        del.style.fontSize="13px";
        del.style.marginLeft="20px";
        del.style.height="28px";
        del.style.color="white";
        del.style.width="55px";
        del.style.border="none";
        del.style.borderRadius="20px";
        del.style.backgroundColor="red";
        del.style.padding="5px";


      

        //Styling list
        li.style.listStyleType="none";
        li.style.backgroundColor="aliceblue";
        li.style.marginTop="9px";
        li.style.marginBottom="5px";
        li.style.borderRadius="12px";
        li.style.padding="11px";
        li.style.width="300px";

        //This code handles userInput and add to the list
        li.innerText="  "+userInput.value;

        //This code prepends checkbox to the list items
        li.prepend(check);

        //This code appends edit and delete button to the list items
        li.append(edit);
        li.append(del);

        //This code appends list items to make to-do list
        ul.append(li);
        
        //Code for editing list items
        edit.addEventListener("click",()=>{
            let editedvalue=prompt(`Enter a New Task`);
            if(editedvalue!="" && editedvalue!=null){
            li.innerText=" "+ editedvalue;
            li.prepend(check);
            li.append(edit);
            li.append(del);
            }
        })

        //Code for deleting list items one by one
        del.addEventListener("click",()=>{
            li.remove();
        })
        //code for removing all list items using clear all button
        clearbtn.addEventListener("click",()=>{
            li.remove();
        })
        //Code that clears input screen
        userInput.value="";

        //This code clears the error displayed
        valid.innerText="";
        
    }
    //This code displays error if user doesn't enter any task but still clicks on Add to list button
    else{
       valid.innerHTML="*please enter a task";
       valid.setAttribute("class","red"); 
    }
    
    
})

