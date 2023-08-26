export default class Criatura {
    static nCriaturas = 0;
  
    constructor(nombre,afiliacion,tipo,salud,armas,descripcion,imagen) {
      this._nombre = nombre;
      this._afiliacion = afiliacion;
      this._tipo = tipo;
      this._salud = salud;
      this._armas = armas;
      this._descripcion = descripcion;
      this._id = ++Criatura.nCriaturas;
      this._imagen = imagen;
    }
  
    get nombre() {
      return this._nombre;
    }

    get imagen() {
      return this._imagen;
    }
  
    get afiliacion() {
      return this._afiliacion;
    }
  
    get tipo() {
      return this._tipo;
    }
    get salud() {
      return this._salud;
    }
  
    get armas() {
      return this._armas;
    }
  
    get descripcion() {
      return this._descripcion;
    }
  
  
    get id() {
      return this._id;
    }

    
  
    set nombre(nombre) {
      this._nombre = nombre;
    }

    set imagen(imagen) {
      this._imagen = imagen;
    }
  
    set afiliacion(afiliacion) {
      this._afiliacion = afiliacion;
    }
  
    set tipo(tipo) {
      this._tipo = tipo;
    }
  
    set salud(salud) {
      this._salud = salud;
    }
  
    set armas(armas) {
      this._armas = armas;
    }
  
    set descripcion(descripcion) {
      this._descripcion = descripcion;
    }
  }
  

