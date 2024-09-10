class Datos_local{

    async Download(){
        const datos_descargados = await localStorage.getItem("empleados")
        const obj_datos = JSON.parse(datos_descargados)
        return obj_datos

    }

    async Update(datos){
        const datos_subidos = await localStorage.setItem("empleados", JSON.stringify(datos))
        alert("guardado exitoso")
    }
    

}

export { Datos_local }