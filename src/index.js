import "./index.css";

window.onload = function () {
  const taskField = document.querySelector("#taskField");
  const addTaskBtn = document.querySelector("#addTaskBtn");
  const allTasksParent = document.querySelector("#allTasks");

  taskField.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      createNewTask(allTasksParent, event.target.value);
      this.value = "";
    }
  });
};

function createNewTask(parent, task) {
  let col = create({ class: "col-sm-3" });

  let singleTask = create({ class: "single-task" });

  let singleTaskP = create("p");
  singleTaskP.innerHTML = task;
  singleTask.appendChild(singleTaskP);

  col.appendChild(singleTask);
  parent.appendChild(col);
}
