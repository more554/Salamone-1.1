
// Primer borrador: querySelecto y getElementbyClassName
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

const imgDerecha =  Document.getElementbyClassName("main-image")
const imgIzquierda =  Document.getElementbyClassName("statue-image")
const boton = Document.getElementbyId("next-btn")
//la imagenes cambian solo en el eento click del boton 
boton.addEventListener('click' , function(){
  imgDerecha.src = imgDerecha2;
});
  //
const imagesDerecha = [
  ];

const imageIzquierda = [
  
];

let indice = 0;

const imgDerecha = document.querySelector(".main-image");
const imgIzzquierda = document.querySelector(."statue");
const boton = document.getElementbyId("next-btn");

boton.addEventLIstener('click', function() {
indice = (indice +1) % imagesDerecha.length; //actualiza indice y cuano llega al ultime indice del arra vuelve al primero 

  imgDerecha.src = imageDerecha[indice];
  imgIzquierda.src = imagesIzquierda[indice]; //.src actualiza las imagenes 
});




  

    


//2do codigo corregido 

