const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Adding task
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something...!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        //cross symbol. 
        span.innerHTML = "\u00d7";  
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

// to tick the done task and to remove task from the list
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }   
},false);

// save the data on the browser's window.
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();