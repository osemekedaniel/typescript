"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
const data = fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => response.json())
    .then((json) => console.log(json));
//Object.assign(TODO,data.json)
/*import {apiService} from './apiservice'

let me = new apiService();
me.getTodo(1,1,"delectus aut autem",false);*/
//# sourceMappingURL=index.js.map