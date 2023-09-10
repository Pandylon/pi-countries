

const validation = (form) => {
    
    const errors = {}

    //* validation name

    if (!form.name) {
        errors.name = "Nombre de actividad vacío";
    }
    if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)) {
        errors.name = "Solo se permiten letras y espacios";
    } else {
        errors.name = "";
    }
    if (!form.duration) {
        errors.duration = "Nombre de actividad vacío";
        
    } else if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(form.duration)) {
        errors.duration = "Solo se permiten letras, números y espacios";
    } else {
        errors.duration = "";
    }
        
    //* validation difficulty
    if (!form.difficulty) {
        errors.difficulty = "Nivel de dificultad vacío";
    }
    if (!/^([1-5])$/.test(form.difficulty)) {
        errors.difficulty = "Solo se permiten números del 1 al 5";
    } else {
        errors.difficulty = "";
    }
    

    //* validation season 

    if (!form.season) {
        errors.season = "Campo vacío, por favor seleccione al menos uno";
    }
    if (form.season === "season") {
        errors.season = "Campo vacío, por favor seleccione al menos uno";
    }
    
    if (!form.countryName.length) {
        errors.countryName = "Campo vacío, por favor seleccione al menos uno";
    }
    

    
    
    return errors;
}

export default validation;
