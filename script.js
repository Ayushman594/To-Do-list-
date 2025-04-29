let userInput=document.querySelector("#task");
let btn=document.querySelector("#submit");
let valid=document.querySelector("#validate");
let div=document.querySelector("div");
let clearbtn=document.querySelector("#clear");

//This code creates click event so that user can input text and adds to the to do list
btn.addEventListener("click",()=>{
    if(userInput.value!=""){
        //code for creating lists
        let li=document.createElement("li");

        //code for creating checkboxes
        let check=document.createElement("input");
        check.setAttribute("type","checkbox");
        
        
          //Code For creating and styling Edit Button
          let edit=document.createElement("button");
          edit.innerText="Edit";
          edit.setAttribute("class","edit");
  
        
        //code for creating and styling delete button
        let del=document.createElement("button");
        del.innerText="Delete";
        del.setAttribute("class","delete");


        //Styling list
        li.setAttribute("class","listyle");

        //This code handles userInput and add to the list
        li.innerText= ' ' + userInput.value;
        li.style.overflow="auto";
        
        //This code is used for displaying date and time to each list items added
        let time=new Date();
        let displaytime=document.createElement("h6");
        displaytime.innerText=`Task added at  ${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}`;
        displaytime.style.color="white";
        displaytime.style.marginTop="20px";

        //This code prepends checkbox to the list items
        li.prepend(check);

        
        
        //This code appends list items to make to-do list and also displays date and time
        div.append(displaytime);
        div.append(li);


        //This code appends edit and delete button to the list items
        
        div.append(edit);
        div.append(del);
        
      
        //Code for editing list items
        edit.addEventListener("click",()=>{
            let editedvalue=prompt(`Enter a New Task`);
            if(editedvalue!="" && editedvalue!=null){
            li.innerText=" "+ editedvalue;
            li.prepend(check);
            }
        })

        //Code for deleting list items one by one
        del.addEventListener("click",()=>{
            edit.remove();
            del.remove();
            displaytime.remove();
            li.remove();
        })

        //code for removing all list items using clear all button
        clearbtn.addEventListener("click",()=>{
            edit.remove();
            del.remove();
            displaytime.remove();
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

