import { validacion, datos, bandera } from "./validacion_campos.js";
import { Datos_local } from "./localsto.js";

document.getElementById("Agregar").addEventListener("click", async function() {

    console.log("antes de validacion")
    validacion()

    console.log("despues de validacion")
    //verificado
    if (bandera){

        const datos_localstorage = new Datos_local
        console.log("Datos LocalStorage", datos_localstorage)
        //verificado
        const datos1 = await datos_localstorage.Download()
        //console.log("Objeto antes de guardar",datos1)
        datos1.empleados.push(datos)
        //console.log("Objeto después de guardar",datos1)

        const subir_localstorage = new Datos_local
        
        await subir_localstorage.Update(datos1)
        
    }

})



