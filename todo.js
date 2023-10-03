// document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskinput");
    const addTaskButton = document.getElementById("addtask");
    const taskList = document.getElementById("tasklist");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Prevent adding empty tasks

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete">X</span>
        `;

        // Add an event listener to delete the task when "X" is clicked
        // const deleteButton = li.querySelector(".delete");
        // deleteButton.addEventListener("click", function() {
        //     taskList.removeChild(li);
        // });

        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
            const taskSpan = li.querySelector("span");
            taskSpan.innerHTML = `<s>${taskSpan.textContent}</s>`;
            deleteButton .style.display = "none"; 
    
        });






        taskList.appendChild(li);
        taskInput.value = "";
    }

    // Add a task when the "Add" button is clicked
    addTaskButton.addEventListener("click", addTask);

    // Add a task when Enter key is pressed in the input field
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d1 = new Date();
    let day = weekday[d1.getDay()];

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d2 = new Date();
let namey = month[d2.getMonth()];

const d3 = new Date();
let date = d3.getDate();

const h1i=document.querySelector("h1");

    h1i.innerHTML=`
    <span>${day}</span>,
    <span>${date}</span>
    <span>${namey}</span>
    `;
    
