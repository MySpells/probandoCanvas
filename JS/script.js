//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
    context.beginPath(); //Este método nos permite iniciar un nuevo camino de trazo cada vez que nosotros llamemos la función dibujar, si nosotros soltamos el mouse y queremos dibujar en otra sección de la página, el trazo comenzará justo en esa sección y no donde se había quedado antes.
    context.moveTo(initialX, initialY);// Para mover las cordenadas iniciales a inicialX y Y
    context.lineWidth = 25;//Grosor de la línea del pincel
    context.strokeStyle = "#E389B9"; //Color del trazo
    context.lineCap = "round";
    context.lineJoin = "round"; //Estas propiedades line define la forma del trazo en bordes y terminación de línea. Con round es redondo
    context.lineTo(cursorX, cursorY);//Hasta donde va el trazo
    context.stroke();//Para dibujar como tal el trazo

    initialX = cursorX;
    initialY = cursorY;
}

const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;
    dibujar(initialX, initialY);
    mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => { //Para poder dibujar mientras movemos el ratón
    dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () =>{//Para poder quitar el click del ratón y que no dibuje si no se presiona
    mainCanvas.removeEventListener("mousemove", mouseMoving);
}

mainCanvas.addEventListener('mousedown', mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);