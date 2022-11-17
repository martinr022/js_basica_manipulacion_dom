/*
function conseguirTipoDeSubscripcion(subscripcion){
    if(subscripcion=="free"){
        console.log("su tipo de subcipcion es free por un mes");
       return;
    }

    if(subscripcion=="basic"){
        console.log("es subcripcion basica por 6 meses");
        return;
    }

    if(subscripcion=="expert"){
        console.log("tiene acceso por un año a su subcripcion");
        return;
    }

    if(subscripcion=="none"){
        console.log("no tiene subscripcion");
        return;
    }
    console.warn("eso no existe")
}

conseguirTipoDeSubscripcion("free");
*/

let tipoDeSubscripcion={
   free:"es libree",
   basic:"es basica",
   expert:"es expert"

}

function conseguirTipoDeSubscripcion(subscripcion){
    if(tipoDeSubscripcion[subscripcion]){
        console.log(tipoDeSubscripcion[subscripcion]);
       return;
    }
    console.warn("esa opcion no existe");
};

conseguirTipoDeSubscripcion("free");