const boton = document.getElementById("boton");
const contenido = document.getElementById("contenido");
const items = document.getElementById("items");
const fecha = document.getElementById("fecha");

let time = new Date();

fecha.innerHTML = time.toDateString()

let tareas=[];
let i=0;

class Usuario{
    constructor(tareaParam){
        this.tarea = tareaParam;
    }
}
function guardarTareas(){
    i++
    elemento = document.getElementById("input").value;
    tareas[i]= new Usuario(elemento);
    const revelar = ()=>{
        document.getElementById("input").value = ""
        /*Crear div*/
        let cajaParrafo= document.createElement("div")
        items.appendChild(cajaParrafo)
        cajaParrafo.classList.add("divTarea")
        
        /*Anadir checklist*/
        let checklist = document.createElement("button")
        cajaParrafo.appendChild(checklist)
        checklist.classList.add("checklist")
        
        /*Anadir texto*/
        let parrafo=document.createElement("p")
        parrafo.textContent=` ${tareas[i].tarea}`
        cajaParrafo.appendChild(parrafo);
        
        /*Cambio en el checklist y en el parrafo al darle click*/
        checklist.addEventListener("click", ()=>{checklist.style.backgroundColor="#04d4c3"; parrafo.classList.add("parrafoTachado");  })
        /*Anadir boton */
        let boton2 = document.createElement("i")
        cajaParrafo.appendChild(boton2)
        boton2.classList.add("fa-regular", "fa-trash-can")
        
        boton2.addEventListener("click", ()=>{cajaParrafo.remove("div")})
    }
    if(elemento != ""){
        revelar()
    }
}

boton.addEventListener("click", guardarTareas)
document.addEventListener("keydown",(keydown)=>{ 
    if(keydown.code === "Enter"){ 
        guardarTareas()
    } 
});
