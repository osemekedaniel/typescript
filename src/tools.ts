
import * as request from "request";



 export const log = (output:any):void => {

    console.log(output);
}
export class TODO{
    userId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor(userId:number,id:number,title:string,completed:boolean = true){
        this.userId= userId;
        this.id= id;
        this.title= title;
        this.completed= completed;
    }
};


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