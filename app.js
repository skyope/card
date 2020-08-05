const buttonsSize = document.getElementsByClassName("size");
const buttonColor = document.querySelectorAll(".color");

//importante mencionar que el querySelectorAll me regresa una lista de nodos 
//el cual me permite usar el metodo forEach


//Seccion de funciones
function definirSize(e){
    for(let i=0 ;i<buttonsSize.length;i++){
        buttonsSize[i].classList.remove("active");
    }
    e.target.classList.add("active");
}

function cambiarColor(e){

    buttonColor.forEach(item=>{item.classList.remove("active");})
    e.target.classList.add("active");
    
    //seccion de atrapar los atributos
    let actualColor=e.target.getAttribute("primary");
    let color= e.target.getAttribute("color");

    //seccion de atrapar los items
    let item = document.querySelectorAll(".new");
    let buttonSendColor = document.querySelectorAll(".buy");
    let icoShare =document.querySelectorAll(".share");
    let zapatos = document.querySelectorAll(".shoe");

    console.log(color);
    //recorrido de elementos y agregar estilos
    icoShare.forEach((item)=>{item.style.color=actualColor})
    buttonSendColor.forEach((item)=>{ item.style.backgroundColor=actualColor;});
    item.forEach((item)=>{item.style.backgroundColor=actualColor});

    zapatos.forEach((item)=>{
        item.classList.remove("show");
        let colorZapatos= item.getAttribute("color");
        
        if(colorZapatos==color){
            item.classList.add("show");
        }

    })
}



//seccion de clicks
buttonColor.forEach(item =>{item.addEventListener("click", cambiarColor);});

for(let i=0 ;i<buttonsSize.length;i++){
    buttonsSize[i].addEventListener("click",definirSize);
}

