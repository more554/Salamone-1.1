
//querySelecto y getElementbyClassName
const imagesDerecha = [
  "path1..",
  "path2..".
  "path3..",
  "path4"
];
const imagesIzqu= [
  "path1..",
  "path2..".
  "path3..",
 "path4"
];


let indice = 0;

const imgDerecha =  Document.getElementbyClass("main-image")
const imgIzquierda =  Document.getElementbyClass("statue-image")
const boton = Document.getElementbyId("next-btn")
//la imagenes cambian solo en el eento click del boton 
boton.addEventListener('click' , function(){
  imgDerecha.src = imgDerecha2;
});
    
