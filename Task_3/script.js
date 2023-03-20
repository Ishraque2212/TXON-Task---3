document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask input').value.length == 0) {
        alert("Kindly enter a task to continue...");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span class="taskname">${document.querySelector('#newTask input').value}</span>
          <button class="done">
            <p>✓</p>
          </button>
          <button class="delete">
            <p>&#9249;</p>
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      `;
        document.querySelector('#newTask input').value = "";
    }

    var current_task = document.querySelectorAll('.delete');
    for (var i = 0; i < current_task.length; i++) {
        current_task[i].onclick = function () {
            this.parentElement.remove();
            console.log("Deleted");
        }
    }

    var tasks = document.querySelectorAll('.task');
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].querySelector('.done').onclick = function () {
            this.parentElement.querySelector('.taskname').style.color = 'green';
            this.parentElement.querySelector('.taskname').style.outlineColor = 'green';
            console.log("Clicked");
        }
    }
}
