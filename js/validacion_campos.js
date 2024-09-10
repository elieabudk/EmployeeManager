//Función de verificación
function vacio(campo,mensaje){
    if (campo ==""){

        alert(`${mensaje}`)
    }
}

function letras(campo, mensaje){
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ]+$/.test(campo)) {
        alert(`${mensaje}`)
    } 
}
let bandera = true;
let datos = {};

function validacion(){

    
    
        bandera = true; // Reset bandera to true on each click

        const dato_id = document.getElementById("num_id").value;
        // Validación cuando el usuario ha terminado de editar
        //enlace que envia al backend
        //Verifica si está vacío
        vacio(dato_id , " el campo id no puede estar vacio ")
           
            
        if (!/^\d+$/.test(dato_id)) {
            alert('El id solo puede contener números');
            bandera = false;
        } 

        const nombre = document.getElementById("nombre").value
        // Validación cuando el usuario ha terminado de editar
         //Verifica si está vacío
         vacio(nombre , " el nombre no puede estar vacio ")
         
         letras(nombre, " el nombre solo puede contener letras")

         const apellido = document.getElementById("apellido").value
        // Validación cuando el usuario ha terminado de editar
         //Verifica si está vacío
         vacio(apellido , " el apellido no puede estar vacio ")
         
         letras(apellido, " el apellido solo puede contener letras")  

         const correo = document.getElementById("correo").value
        // Validación cuando el usuario ha terminado de editar
         //Verifica si está vacío
         vacio(correo , " el correo no puede estar vacio ")
    
         if (!/@/.test(correo)) {
            alert('el correo esta incorrecto');
            bandera = false;
        }
        const telefono = document.getElementById("telefono").value
        // Validación cuando el usuario ha terminado de editar
         //Verifica si está vacío
         vacio(telefono , " el telefono no puede estar vacio ")
    
         if (!/^\d+$/.test(telefono)) {
            alert('El telefono solo puede contener números');
            bandera = false;
        } 
        const cargo = document.getElementById("cargo").value
        // Validación cuando el usuario ha terminado de editar
         //Verifica si está vacío
         vacio(cargo , " el cargo no puede estar vacio ")
    
         letras(cargo, " el cargo solo puede contener letras")

       
         if (bandera) {
            datos = {
                id: dato_id,
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                telefono: telefono,
                cargo: cargo
            }
            

        } else {
            console.log("Datos no válidos, no se guardaron.");
        }
    
    
    
}


export { validacion, datos, bandera }
