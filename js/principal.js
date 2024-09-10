//Importamos la función main que llama datos de la API
console.log("principal")
import { main_api } from './Api.js';



//Lamada a la función main principal
if (localStorage.length === 0) {
    main_api()
}

