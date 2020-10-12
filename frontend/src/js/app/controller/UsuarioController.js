class UsuarioController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputNome = $('#name');
        this._inputEmail = $('#mail');
        this._inputSenha = $('#password');
       
        this._listaUsuarios = new ListaUsuario();
        this._usuarioView = new UsuarioView($('#usuariosView'));

        this._usuarioView.update(this._listaUsuarios);

        this._ordemAtual = '';

    }
    
    

    adiciona(event) {
        event.preventDefault();
        this._listaUsuarios.adiciona(this._criaUsuario());
        this._usuarioView.update(this._listaUsuarios);
        this._limpaFormulario();
        
    }

    _criaUsuario() {
        return new Usuario(
            this._inputNome.value,
            this._inputEmail.value,
            this._inputSenha.value);    
    }
    
    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputEmail.value = '';
        this._inputSenha.value = '';
        this._inputNome.focus();   
    }
        
    ordena(coluna) {
        
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem(); 
        } else {
            this._listaNegociacoes.ordena((p, s) => p[coluna] - s[coluna]);    
        }
        this._ordemAtual = coluna;    
    }
}