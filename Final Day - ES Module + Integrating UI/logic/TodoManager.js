import Todo, {generateId} from "./Todo.js";

export default class TodoManager {
    constructor() {
        const rawData = JSON.parse(localStorage.getItem("todoArr")) || [];

        this.todos = rawArrayToClassInstance(rawData);
    }

    save () {
        localStorage.setItem("todoArr", JSON.stringify(this.todos));
    }

    addTodo (text) {
        const newTodo = new Todo(generateId(), text, false);
        this.todos.push(newTodo);
        this.save();
    }

    deleteTodo (id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.save();
    }

    toggleTodo (id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) return;

        todo.toggle();
        this.save();
    }

      renameTodo(id, newText) {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) return;
    todo.rename(newText);

    this.save();
  }

    getAllTodos () {
        return this.todos; 
    }
}

function rawArrayToClassInstance (rawData) {
    return rawData.map(item => new Todo(item.id, item.text, item.completed));
}