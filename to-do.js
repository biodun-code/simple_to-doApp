document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      const taskTextSpan = document.createElement("span");
      const deleteButton = document.createElement("button");

      taskTextSpan.textContent = taskText;
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");

      li.appendChild(taskTextSpan);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";

      li.addEventListener("click", function () {
        this.classList.toggle("completed");
      });

      deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        taskList.removeChild(li);
      });
    }
  });
});
