import Arma from "../classes/arma.js";
// import ListaArmas from './listaArmas.js';
import {listaArmas} from "../archive/archivo.js";

import {imagenesArmas} from "../archive/archivo.js"


let id_select = 0;
let objArma = {};
let nombre = document.querySelector("#nombre");
let damage = document.querySelector("#damage");
let primary = document.querySelector("#primary");
let secondary = document.querySelector("#secondary");
let juego = document.querySelector("#juego");
let descripcion = document.querySelector("#descripcion");
let url = document.querySelector('#url');

let formulario = document.querySelector("#formulario");
let imagen_cargada = document.querySelector('#imagen-cargada');
let tcontenido = document.querySelector('.tarjeta-contenido');
let tformulario = document.querySelector(".tarjeta-formulario");
let timagenes = document.querySelector(".tarjeta-imagenes");


listaImagenes();

window.addEventListener("load", function () {
  actualizarTabla();
});

formulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
  e.preventDefault();
  let inpunts = [nombre,damage,primary,secondary,juego,descripcion,url];
  let incompleto = false;
  inpunts.forEach(e=> {
    if(e.value=='') incompleto = true;
  })
  if(incompleto){
    alert('Campos incompletos');
    return; 
  }



  if (e.submitter.id == "btnAgregar") {
    let arma = new Arma(
      nombre.value,
      damage.value,
      primary.value,
      secondary.value,
      juego.value,
      descripcion.value,
      url.value
    );

    listaArmas.agregarArma(arma);
    actualizarTarjeta(arma);//se actualiza con el obj recien creado
    setFormulario(false);

    
  } else if (e.submitter.id == "btnActualizar") {
    console.log("id_seleccionado ", id_select);
    listaArmas.editarArma(
      id_select,
      nombre.value,
      damage.value,
      primary.value,
      secondary.value,
      juego.value,
      descripcion.value,
      url.value
    );

    actualizarTarjeta(objArma); //Se actualiza el obj actual
    setFormulario(false);
  } else if (e.submitter.id == "btnLimpiar") {
    limpiarCampos();
  } else if (e.submitter.id == "btnEliminar") {
    
    listaArmas.eliminarArma(id_select);
    defectoTarjeta();
    setFormulario(false);
  }
  actualizarTabla();
}


function limpiarCampos(){
  imagen_cargada.src = '';
  formulario.reset();
}


function selectRow(elemento) {
  id_select = elemento.getAttribute("data-id"); //Siempre le ID actual seleccionado
  objArma = listaArmas.obtenerArma(id_select);
  nombre.value = objArma.nombre;
  damage.value = objArma.damage;
  primary.value = objArma.primary;
  secondary.value = objArma.secondary;
  juego.value = objArma.juego;
  descripcion.value = objArma.descripcion;
  url.value = objArma.imagen;
  imagen_cargada.src = objArma.imagen;
 
  actualizarTarjeta(objArma);
  
}

function actualizarTarjeta(objArma){
  let contenido;
  while(tcontenido.firstChild){
    tcontenido.removeChild(tcontenido.firstChild);
  }
  
  contenido = `
    <form
      <div class="imagen-contenido">
        <img src="${objArma.imagen}" alt="">
      </div>
      <div class="informacion">
          <h4>${objArma.nombre}</h4>
          <h6>damage:</h6>
          <p>${objArma.damage}</p>
          <h6>primary:</h6>
          <p>${objArma.primary} </p>
          <h6>secondary:</h6>
          <p>${objArma.secondary} </p>
          <h6>juego:</h6>
          <p>${objArma.juego} </p>
          <h6>descripcion:</h6>
          <p>${objArma.descripcion}</p>
      </div>
      <button type="submit" id="btnGestionar">gestionar</button> 
    </form> 
  `
  
  let form = document.createElement('form');
  form.innerHTML = contenido; 
  form.setAttribute('action','#')
  form.setAttribute('id','formGestionar')
  form.setAttribute('class','half-life')
  tcontenido.appendChild(form);

  let gestionar = document.querySelector("#formGestionar");
  gestionar.addEventListener("submit",gestion);
}

function defectoTarjeta(){
  let contenido;
  while(tcontenido.firstChild){
    tcontenido.removeChild(tcontenido.firstChild);
  }

  contenido = `
    <form
      <div class="imagen-contenido">
        <img src="../images/gordon2.jpeg" alt="">
      </div>

    </form> 
  `
  let form = document.createElement('form');
  form.innerHTML = contenido; 
  form.setAttribute('class','half-life')
  tcontenido.appendChild(form);

}


function actualizarTabla() {
  const tbody = document.querySelector("tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  listaArmas.armas.forEach((e) => {
    //<td>${e.id}</td>
    let contenido_fila = `
        <tr>
            <td>${e.nombre}</td>
        </tr>`;
    let fila = document.createElement("tr");
    fila.innerHTML = contenido_fila;
    fila.setAttribute("data-id", e.id);
    fila.onclick = function () {
      selectRow(this);
    };
    document.querySelector("#tbody").appendChild(fila);
  });
}



function gestion(e){
  e.preventDefault();
  actualizarTarjeta(objArma);
  setFormulario(true);  
}

let btnAdd = document.querySelector('#add');
btnAdd.addEventListener("click",add);

function add(){
  limpiarCampos();
  setFormulario(true);
}

let btnReg = document.querySelector('#reg');
btnReg.addEventListener("click",reg);

function reg(){
  limpiarCampos();
  setFormulario(false);
}

function setFormulario(value){
    if(value){
      tcontenido.setAttribute('style','display:none');  
      tformulario.setAttribute('style','display:flex');  
      timagenes.setAttribute('style','display:flex'); 
    }else{

      tcontenido.setAttribute('style','display:flex');  
      tformulario.setAttribute('style','display:none');  
      timagenes.setAttribute('style','display:none'); 

    }
}

// Imagenes para seleccionar
function listaImagenes(){
  imagenesArmas.forEach(e=> {
    let contenido_li = `<li>
          <img src="${e}" alt="">
    </li>`
  
    let elemento = document.createElement('li');
    elemento.innerHTML = contenido_li;
    elemento.setAttribute('data-url',e);
    elemento.onclick = function(){
      let imagen_select = elemento.getAttribute("data-url");
      url.value = imagen_select;
      imagen_cargada.src = imagen_select
      console.log(imagen_select);
    }
    
    document.querySelector('#lista-imagenes').appendChild(elemento);
  
  })
}