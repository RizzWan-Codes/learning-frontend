class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    toggle () {
        if (this.completed === false) {
            this.completed = true;
        } else {
            this.completed = false;
        }
    }

    rename(newText) {
        if (newText === "") throw new Error("Todo Cannot Be Empty Bitch!");

        this.text = newText;
    }

    toJSON() {
        return {
            id: this.id,
            text: this.text,
            completed: this.completed
        };
    }
}

module.exports = { Todo };

const t1 = new Todo(1, "Learn OOP");
t1.toggle();
t1.rename("OOP basics DONE!");

console.log(t1.toJSON());

console.log(t1.text);

t1.toggle();
t1.rename("Shut your ass!")

console.log(t1.toJSON());