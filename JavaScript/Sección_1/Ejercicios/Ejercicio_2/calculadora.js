const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacion = '';

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valorBoton = boton.textContent;

        if (valorBoton === 'C') {
            operacion = '';
            pantalla.textContent = '0';
        } else if (valorBoton === '=') {
            try {
                pantalla.textContent = eval(operacion);
                operacion = pantalla.textContent;
            } catch (error) {
                pantalla.textContent = 'Error';
                operacion = '';
            }
        } else {
            if (operacion === '0' && valorBoton !== '.') {
                operacion = valorBoton;
            } else {
                operacion += valorBoton;
            }
            pantalla.textContent = operacion;
        }
    });
});