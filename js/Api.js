async function obtenerDatosEmpleados() {
    try {
        const url = 'https://alejandrochapi94.github.io/empleados/db_empleaados.json';

    const datos = await fetch(url)
    const response = await datos.json()
    return response
    }catch (error){
        alert("error al obtener datos de api")

    }
    
}

async function almacenarEnLocalStorage(datos){
    localStorage.setItem('empleados', JSON.stringify(datos));
}

async function main(){
    const datos = await obtenerDatosEmpleados()
    if (datos){

        await almacenarEnLocalStorage(datos); 
    }
    else{
        alert("error en los datos")
    }
}

//Clase principal
class Llamada_Api{
    //Constructor

    //Atributos

    //Métodos
    async dato_api(){
        
            //Ejecuta la función main del archivo Api.js
            await main();
    
    }

}

//Función main que controla todo el programa de este archivo
async function main_api(){

    const objeto_api = new Llamada_Api()
    await objeto_api.dato_api()
}
    
export { main_api }



// este archivo toma los datos de la api y los almacena en el local storage
