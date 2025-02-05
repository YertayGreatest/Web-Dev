// todolistscript.js
// elements we interact with
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const todoList = document.querySelector('.todo-list');



addButton.addEventListener('click', addTask);
inputField.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      addTask();
    }
});



//inital tasks
const existingTodoItems = document.querySelectorAll('.todo-item');

existingTodoItems.forEach(todoItem => {
    const deleteButton = todoItem.querySelector('.delete-btn');
    const checkbox = todoItem.querySelector('input[type="checkbox"]');
    const taskSpan = todoItem.querySelector('span');

    deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    checkbox.addEventListener('change', () => {
        taskSpan.classList.toggle('completed');
    });
});



//add task function
function addTask() {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        todoItem.appendChild(checkbox);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        todoItem.appendChild(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = '🗑';
        todoItem.appendChild(deleteButton);


        todoList.appendChild(todoItem);
        inputField.value = '';


        
        //for deleting
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });



        checkbox.addEventListener('change', () => {
            taskSpan.classList.toggle('completed');
        });
    }
}