// app.js
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("form-todolist");
    const taskInput = document.getElementById("input-todolist");
    const taskList = document.getElementById("list-todolist");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const taskText = taskInput.value.trim();
      
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
    
    taskList.addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
        const taskItem = event.target.parentNode;
        removeTask(taskItem);
      }
    });

    function addTask(taskText) {

      const taskItem = document.createElement("div");
      taskItem.className = "form-check ";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-check-input";
      checkbox.style.cssText="scale:1.4";
      
      const taskLabel = document.createElement("label");
      taskLabel.textContent = taskText;
      taskLabel.className = "form-check-label ml-1";
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-link btn-sm";
      
      taskItem.classList.add("task-item");
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(deleteButton);
      
      taskList.appendChild(taskItem);
    }
    
    function removeTask(taskItem) {
      taskList.removeChild(taskItem);
    }
  });
  