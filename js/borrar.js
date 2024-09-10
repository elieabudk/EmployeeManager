const nombre = "hola"
const apellido = "Pérez"

const datosFalsos = {
    empleados: [
      {
        id: 100245478,
        nombre: "Juan",
        apellido: "Pérez",
        correo: "juan.perez@example.com",
        telefono: "+1234567890",
        cargo: "Gerente"
      },
      {
        id: 100245479,
        nombre: "Ana",
        apellido: "Gómez",
        correo: "ana.gomez@example.com",
        telefono: "+1234567891",
        cargo: "Desarrollador"
      }]
    }

    let arregloDatos = datosFalsos["empleados"]
    //console.log(arregloDatos)

    // let buscar = "Juan"
    // let buscar2 = "Pérez"
    // for (let i = 0; i < arregloDatos.length; i++) {
    //     if(buscar === arregloDatos[i].nombre && buscar2 === arregloDatos[i].apellido){
    //         //console.log(arregloDatos[i]);
    //         console.log("Encontrado", buscar, buscar2)
    //         console.log("Infrmación: ", arregloDatos[i])
    //     }
    // }

    let buscar = "Juan"
    let buscar2 = "Pérez"
for (let propiedad of datosFalsos["empleados"]){
    //console.log(propiedad)
    if(propiedad.nombre === buscar && propiedad.apellido === buscar2){
        console.log("dato encontrado", buscar, apellido)
        console.log("Datos usuario: ", propiedad)
    }
}


function buscarEmpleado(nombre, apellido) {
    for (let i = 0; i < datosFalsos.empleados.length; i++) {
        let propiedad = datosFalsos.empleados[i];
        if (propiedad.nombre === nombre && propiedad.apellido === apellido) {
            console.log("dato encontrado", nombre, apellido);
            console.log("Datos usuario: ", propiedad);
        }
    }
}

// Uso de la función
buscarEmpleado("Juan", "Pérez");


//datosFalsos.empleado.push(datosTotales)
//console.log(datosFalsos)


