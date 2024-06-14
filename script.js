document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Pre-populate with 10 empty tasks
    for (let i = 0; i < 10; i++) {
        addTask('');
    }

    addTaskButton.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskLabel = document.createElement('input');
        taskLabel.type = 'text';
        taskLabel.value = taskText;
        taskLabel.placeholder = 'Empty';
        taskLabel.addEventListener('input', (e) => {
            taskLabel.value = e.target.value;
        });

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '🗑 Delete';
        deleteButton.addEventListener('click', deleteTask);

        taskActions.appendChild(checkbox);
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskLabel);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);
    }

    function deleteTask(event) {
        const taskItem = event.target.closest('.task-item');
        taskList.removeChild(taskItem);
    }

    function toggleTaskCompletion(event) {
        const taskItem = event.target.closest('.task-item');
        taskItem.classList.toggle('completed');
    }
});