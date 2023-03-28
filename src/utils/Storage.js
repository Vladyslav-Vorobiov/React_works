class Storage {
    #dbName = 'formData';
    id = 1;
    delay = 1000;

    constructor() {
        try {
            this.#getId();
        } catch (e) {
            console.warn(`An error has occurred. Details: ${e.message}`);
        }

    }

    async #getId() {
        try {
            const data = await this.getItems();
            if (!data) return;
            this.id = data.at(0).id + 1;
        } catch (e) {
            console.warn(`An error has occurred. Details: ${e.message}`);
        }
    }

    getItems() {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(
                        JSON.parse(localStorage.getItem(this.#dbName))
                    );
                }, this.delay
            );
        });
    }

    async getCurrentItem(id, todoList) {
        const todoItem = await todoList.findIndex((todoItem) => {
            return todoItem.id === id;
        });
        return todoItem;
    }

    saveDataToStorage(data) {
        localStorage.setItem(
            this.#dbName,
            JSON.stringify(data)
        );
    }

    async setItem(todoItem) {
        const localTodoItem = {...todoItem};

        if (typeof localTodoItem !== 'object') throw new Error('Should be an Object data type');

        const existingItems = await this.getItems();

        const dataToSave = existingItems ? existingItems : [];

        const currentTodo = {
            id: this.id,
            ...localTodoItem,
            completed: false
        };

        dataToSave.unshift(currentTodo);

        await this.saveDataToStorage(dataToSave);

        this.id += 1;
        return dataToSave;
    }

    async changeCompletedStatus(id, status) {

        const data = await this.getItems();
        const currentData = [...data];
        const currentItem = await this.getCurrentItem(id, data);

        currentData[currentItem].completed = status;

        await this.saveDataToStorage(currentData);

        return currentData;
    }

    async removeTodo(id) {

        const data = await this.getItems();
        const currentData = [...data];
        const currentItem = await this.getCurrentItem(id, data);

        currentData.splice(currentItem, 1);

        await this.saveDataToStorage(currentData);

        return currentData;
    }

    async saveEditedTodo({...values}) {
        const {id} = values;
        const data = await this.getItems();
        const currentData = [...data];
        const currentItem = await this.getCurrentItem(id, currentData);

        const editedItem = {
            ...values
        };

        currentData.splice(currentItem, 1, editedItem);

        await this.saveDataToStorage(currentData);

        return currentData;

    }

    clearStorage() {
        localStorage.removeItem(this.#dbName);
        this.id = 1;
    }
}

const StorageInstance = new Storage();
export default StorageInstance;