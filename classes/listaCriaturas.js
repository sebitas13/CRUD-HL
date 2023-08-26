export default class ListaCriaturas {
    constructor() {
      this._criaturas = [];
    }
  
    agregarCriatura(criatura) {
      console.log(criatura);
      this._criaturas.unshift(criatura);
    }
  
    obtenerCriatura(id){
      let criatura;
      this._criaturas.forEach(e=>{
          if (e._id === parseInt(id)) {
              criatura =  e;
          }
      })
      return criatura;
    }
  
    editarCriatura(id,nombre,afiliacion,tipo,salud,armas,descripcion,imagen) {
     
      this._criaturas.forEach((e) => {
        if (e._id === parseInt(id)) {
          e.nombre = nombre;
          e.afiliacion = afiliacion;
          e.tipo = tipo;
          e.salud = salud;
          e.armas = armas;
          e.descripcion = descripcion;
          e.imagen = imagen;
        }
      });
    }
  
    eliminarCriatura(id) {
      this._criaturas = this._criaturas.filter((e) => {
        return e._id !== parseInt(id);
      });
    }
  
    get criaturas() {
      return this._criaturas;
    }
  
    set criaturas(criaturas) {
      this._criaturas = criaturas;
    }
  }

