import {log,TODO} from './tools'; 
const fetch = require('node-fetch');


const data = fetch(`https://jsonplaceholder.typicode.com/todos`)
.then((response: {json: () => any;}) => response.json())
.then((json:any) => console.log(json));




    












/*import {apiService} from './apiservice'

let me = new apiService();
me.getTodo(1,1,"delectus aut autem",false);*/

