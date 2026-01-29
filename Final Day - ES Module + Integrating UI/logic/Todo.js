export default class Todo {
    constructor(id = generateId(), text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    toggle () {
        this.completed = !this.completed;
    }

    rename (newText) {
        this.text = newText;
    }
}

export function generateId () {
    return crypto.randomUUID();
}