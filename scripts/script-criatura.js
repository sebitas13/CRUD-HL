import Criatura from "../classes/criatura.js"; "../classes/criatura";
// import listaCriaturas from './listaCriaturas.js';
import {listaCriaturas} from "../archive/archivo.js"
import {imagenesCriaturas} from "../archive/archivo.js"

let id_select = 0;
let objCriatura = {};
let nombre = document.querySelector("#nombre");
let afiliacion = document.querySelector("#afiliacion");
let tipo = document.querySelector("#tipo");
let salud = document.querySelector("#salud");
let armas = document.querySelector("#armas");
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
  let inpunts = [nombre,afiliacion,tipo,salud,armas,descripcion,url];
  let incompleto = false;
  inpunts.forEach(e=> {
    if(e.value=='') incompleto = true;
  })
  if(incompleto){
    alert('Campos incompletos');
    return; 
  }



  if (e.submitter.id == "btnAgregar") {
    let criatura = new Criatura(
      nombre.value,
      afiliacion.value,
      tipo.value,
      salud.value,
      armas.value,
      descripcion.value,
      url.value
    );

    listaCriaturas.agregarCriatura(criatura);
    actualizarTarjeta(criatura);//se actualiza con el obj recien creado
    setFormulario(false);

    
  } else if (e.submitter.id == "btnActualizar") {
    console.log("id_seleccionado ", id_select);
    listaCriaturas.editarCriatura(
      id_select,
      nombre.value,
      afiliacion.value,
      tipo.value,
      salud.value,
      armas.value,
      descripcion.value,
      url.value
    );

    actualizarTarjeta(objCriatura); //Se actualiza el obj actual
    setFormulario(false);
  } else if (e.submitter.id == "btnLimpiar") {
    limpiarCampos();
  } else if (e.submitter.id == "btnEliminar") {
    
    listaCriaturas.eliminarCriatura(id_select);
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
  objCriatura = listaCriaturas.obtenerCriatura(id_select);
  nombre.value = objCriatura.nombre;
  afiliacion.value = objCriatura.afiliacion;
  tipo.value = objCriatura.tipo;
  salud.value = objCriatura.salud;
  armas.value = objCriatura.armas;
  descripcion.value = objCriatura.descripcion;
  url.value = objCriatura.imagen;
  imagen_cargada.src = objCriatura.imagen;
 
  actualizarTarjeta(objCriatura);
  
}

function actualizarTarjeta(objCriatura){
  let contenido;
  while(tcontenido.firstChild){
    tcontenido.removeChild(tcontenido.firstChild);
  }
  
  contenido = `
    <form
      <div class="imagen-contenido">
        <img src="${objCriatura.imagen}" alt="">
      </div>
      <div class="informacion">
          <h4>${objCriatura.nombre}</h4>
          <h6>afiliacion:</h6>
          <p>${objCriatura.afiliacion}</p>
          <h6>tipo:</h6>
          <p>${objCriatura.tipo} </p>
          <h6>salud:</h6>
          <p>${objCriatura.salud} </p>
          <h6>armas:</h6>
          <p>${objCriatura.armas} </p>
          <h6>descripcion:</h6>
          <p>${objCriatura.descripcion}</p>
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
        <img src="../assets/images/gordon2.jpeg" alt="">
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
  
  listaCriaturas.criaturas.forEach((e) => {
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
  actualizarTarjeta(objCriatura);
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
    imagenesCriaturas.forEach(e=> {
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