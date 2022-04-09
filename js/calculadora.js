window.addEventListener('load', ()=>{ /* Escuchamos cuando se carga el documento */
    
    /* Creamos dos constantes y nos guardamos los elementos que necesitamos */
    const display = document.querySelector('calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);
    /* Creamos otra constante para convertir el HTMLCollection a Array */
    keypadButtonsArray.forEach ( (button)=>{

        /* A cada boton le agregamos un listener */
        button.addEventListener('click', ()=>{
            console.log(button.innerHTML);
        })
    })

});

