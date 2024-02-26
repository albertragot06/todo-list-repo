const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    if(inputBox.value === '') {
        alert("Enter something!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    saveData();
    inputBox.value = "";
    } 
);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showTasks();
