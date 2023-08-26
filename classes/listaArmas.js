export default class ListaArmas {
    constructor() {
      this._armas = [];
    }
  
    agregarArma(arma) {
      console.log(arma);
      this._armas.unshift(arma);
    }
  
    obtenerArma(id){
      let arma;
      this._armas.forEach(e=>{
          if (e._id === parseInt(id)) {
              arma =  e;
          }
      })
      return arma;
    }
  
    editarArma(id, nombre,damage,primary,secondary,juego, descripcion,imagen) {
     
      this._armas.forEach((e) => {
        if (e._id === parseInt(id)) {
          e.nombre = nombre;
          e.damage = damage;
          e.primary = primary;
          e.secondary = secondary;
          e.juego = juego;
          e.descripcion = descripcion;
          e.imagen = imagen;
        }
      });
    }
  
    eliminarArma(id) {
      this._armas = this._armas.filter((e) => {
        return e._id !== parseInt(id);
      });
    }
  
    get armas() {
      return this._armas;
    }
  
    set armas(armas) {
      this._armas = armas;
    }
  }

