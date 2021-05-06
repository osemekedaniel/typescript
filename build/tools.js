"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = exports.log = void 0;
exports.log = (output) => {
    console.log(output);
};
class TODO {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.TODO = TODO;
;
/*export function formatTodo(todo:any):
TODO {
    return {userId: todo.userId, id: todo.id, title:todo.title, completed:todo.completed}
}
const fetch= require("node-fetch")
export class apiservice {
    getTodo(url:string):Promise<TODO[]>{
    return fetch(`https://jsonplaceholder.typicode.com/todos/${url}`)
        .then((res: { json: () => any; }) => res.json())
        .then((res: any[]) => res.map((todo:any[])=> formatTodo(todo)));
   
}

}
*/ 
//# sourceMappingURL=tools.js.map