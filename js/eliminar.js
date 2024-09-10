import { Datos_local } from "./localsto.js"


document.getElementById("buscar").addEventListener("click", async function(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value

    const datos_local = new Datos_local
    const datos_descargados = await datos_local.Download()
    console.log(datos_descargados)
    const etiqueta = document.getElementById("empleado")
    etiqueta.textContent = ""
    
    let bandera = false
    for (let i = 0; i < datos_descargados.empleados.length; i++){
        
        if(nombre == datos_descargados.empleados[i].nombre && apellido == datos_descargados.empleados[i].apellido){
            
            const empleado = datos_descargados.empleados[i];
            etiqueta.innerHTML = `
                <p><strong>ID:</strong> ${empleado.id}</p>
                <p><strong>Nombre:</strong> ${empleado.nombre}</p>
                <p><strong>Apellido:</strong> ${empleado.apellido}</p>
                <p><strong>Correo:</strong> ${empleado.correo}</p>
                <p><strong>Teléfono:</strong> ${empleado.telefono}</p>
                <p><strong>Cargo:</strong> ${empleado.cargo}</p>
            `;
                bandera = true
               
            
        }
        
    }

    if (bandera== false){
        alert("el empleado no existe")
    }

/*
    document.getElementById("nombre").textContent=""
    document.getElementById("apellido").textContent=""
*/
    
})

document.getElementById("eliminar").addEventListener("click", async function(){
    const datos_local = new Datos_local();
    const datos_descargados = await datos_local.Download();
    
    // Reemplazar los datos del empleado existente

    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    for (let i = 0; i < datos_descargados.empleados.length; i++) {
        
        if (datos_descargados.empleados[i].nombre == nombre && datos_descargados.empleados[i].apellido == apellido ) {
            
            datos_descargados.empleados.splice(i, 1); // Eliminar el objeto del array

            const datos_update = new Datos_local();
            const datos_subir = await datos_update.Update(datos_descargados);
            alert("empleado eliminado con exito");

            break;
        }
    }
})