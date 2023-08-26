export default class Arma {
    static nArmas = 0;
  
    constructor(nombre,damage,primary,secondary,juego,descripcion,imagen) {
      this._nombre = nombre;
      this._damage = damage;
      this._primary = primary;
      this._secondary = secondary;
      this._juego = juego;
      this._descripcion = descripcion;
      this._id = ++Arma.nArmas;
      this._imagen = imagen;
    }
  
    get nombre() {
      return this._nombre;
    }

    get imagen() {
      return this._imagen;
    }
  
    get damage() {
      return this._damage;
    }
  
    get primary() {
      return this._primary;
    }
    get secondary() {
      return this._secondary;
    }
  
    get juego() {
      return this._juego;
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
  
    set damage(damage) {
      this._damage = damage;
    }
  
    set primary(primary) {
      this._primary = primary;
    }
  
    set secondary(secondary) {
      this._secondary = secondary;
    }
  
    set juego(juego) {
      this._juego = juego;
    }
  
    set descripcion(descripcion) {
      this._descripcion = descripcion;
    }
  }
  

