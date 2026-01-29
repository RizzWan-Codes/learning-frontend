import TodoManager from "./TodoManager.js";
const manager = new TodoManager();

const list = document.getElementById("list");
const message = document.getElementById("message");
const input = document.getElementById("input");
const addBtn = document.getElementById("add");
let editingId = null;

function render () {
    list.innerHTML = "";

    let todoArr = manager.todos;
    console.log(todoArr);

    todoArr.forEach ( todo => {
        const li = document.createElement("li");

        if (editingId === todo.id) {
            
            const editInput = document.createElement("input");
            editInput.value = todo.text;
            editInput.dataset.id = todo.id;

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.dataset.id = todo.id;

            saveBtn.addEventListener("click", function () {
                manager.renameTodo(this.dataset.id, editInput.value);
                editingId = null;
                render();
            });

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.dataset.id = todo.id;

            cancelBtn.addEventListener("click", function () {
                editingId = null;
                render();
            });

            li.appendChild(editInput);
            li.appendChild(saveBtn);
            li.appendChild(cancelBtn);
        }
        
        
        else {
            const textSpan = document.createElement("span");
            textSpan.textContent = todo.text;
            li.appendChild(textSpan);

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "edit";
            editBtn.dataset.id = todo.id;

            editBtn.addEventListener("click", function () {
                editingId = todo.id;
                render();
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete";
            deleteBtn.dataset.id = todo.id;

            deleteBtn.addEventListener("click", function () {
                manager.deleteTodo(todo.id);
                render();
            })

            const completeBtn = document.createElement("button");
            completeBtn.textContent = "☑️";
            completeBtn.dataset.id = todo.id;

            completeBtn.addEventListener("click", function () {
                manager.toggleTodo(this.dataset.id);
                render();
            });

            if (todo.completed) {
                li.className = "completed";
            } else {
                li.className = "not-completed";
            }


            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            li.appendChild(completeBtn);
    }
    list.appendChild(li);
});

let completedCount = todoArr.filter(t => t.completed).length;
let notCompletedCount = todoArr.filter(t => !t.completed).length;
let arrlen = todoArr.length;

if (arrlen === 0) {
    message.textContent = "No Todos Available!"
    } else if (completedCount == arrlen) {
    message.textContent = "All Todos Done. Relax..."
    } else {
        message.textContent = `${completedCount}/${arrlen} todos Completed`;
    }

addBtn.addEventListener("click", function () {
    
    const text = input.value.trim();
    if (text === "") return;

    manager.addTodo(text);
    input.value = "";
    render();
});

}

render();

