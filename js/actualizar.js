import { Datos_local } from "./localsto.js"
import { validacion, datos, bandera } from "./validacion_campos.js"




document.getElementById("buscar").addEventListener("click", async function(){
    const nombre = document.getElementById("nombre_buscar").value
    const apellido = document.getElementById("apellido_buscar").value

    const datos_local = new Datos_local
    const datos_descargados = await datos_local.Download()
    console.log(typeof datos_descargados)
    
    const id_input = document.getElementById("num_id")
    id_input.textContent = ""
    
    const nombre1 = document.getElementById("nombre")
    nombre1.textContent = ""

    const apellido1 = document.getElementById("apellido")
    apellido1.textContent = ""

    const correo = document.getElementById("correo")
    correo.textContent = ""

    const telefono = document.getElementById("telefono")
    telefono.textContent = ""

    const cargo = document.getElementById("cargo")
    cargo.textContent = ""
    
    let bandera1 = false
    for (let i = 0; i < datos_descargados.empleados.length; i++){
        
        if(nombre == datos_descargados.empleados[i].nombre && apellido == datos_descargados.empleados[i].apellido){
            
            const empleado = datos_descargados.empleados[i];
            
            id_input.value = empleado.id
            nombre1.value=empleado.nombre
            apellido1.value=empleado.apellido
            correo.value=empleado.correo
            telefono.value=empleado.telefono
            cargo.value=empleado.cargo


            

            bandera1 = true
   
        }
        
    }

    if (bandera1== false){
        alert("el empleado no existe")
    }

   
})

document.getElementById("actualizar").addEventListener("click", async function(){
    /*
    const id_input = document.getElementById("num_id").value
    
    
    const nombre1 = document.getElementById("nombre1").value
    

    const apellido1 = document.getElementById("apellido1").value
    

    const correo = document.getElementById("correo").value
   

    const telefono = document.getElementById("telefono").value
    
    const cargo = document.getElementById("cargo").value
*/
/*
    const datos = {
        id: id_input,
        nombre: nombre1,
        apellido: apellido1,
        correo: correo,
        telefono: telefono,
        cargo: cargo
    }
        */

    validacion()
    if (bandera){

        const datos_local = new Datos_local();
        const datos_descargados = await datos_local.Download();
        console.log("datos, des",datos_descargados)
        // Reemplazar los datos del empleado existente
        for (let i = 0; i < datos_descargados.empleados.length; i++) {
            console.log(datos_descargados.empleados[i].id)
            if (datos_descargados.empleados[i].id == datos.id) {
                console.log("paso 3")
                datos_descargados.empleados[i] = datos;
                const datos_update = new Datos_local();
                const datos_subir = await datos_update.Update(datos_descargados);
                console.log(datos_subir);
    /*
                document.getElementById("num_id").value =""
                document.getElementById("nombre").value=""
                document.getElementById("apellido").value=""
                document.getElementById("correo").value=""
                document.getElementById("telefono").value=""
                document.getElementById("cargo").value=""
    */
    
                break;
            }
        }
    }

});