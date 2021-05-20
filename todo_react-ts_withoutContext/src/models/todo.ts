class Todo {
    id: Date
    name: string;
    constructor(text:string){
        this.id = new Date()
        this.name = text
    }
}
export default Todo