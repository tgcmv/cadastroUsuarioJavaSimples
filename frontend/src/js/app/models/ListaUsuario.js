class ListaUsuario {

    constructor() {
        this._usuarios = [];
    }

    adiciona(negociacao) {
        this._usuarios.push(negociacao);
    }

    get usuarios() {
        return [].concat(this._usuarios);
    }
    
    ordena(criterio) {
        this._usuarios.sort(criterio);        
    }
    
    inverteOrdem() {
        this._usuarios.reverse();
    }    
}