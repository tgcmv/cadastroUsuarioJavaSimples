class UsuarioView {
    
    constructor(elemento) {
        this._elemento = elemento;
    }
    
    _template(model) {
        return `
        <table>
            <thead>
                <tr>
                    <th onclick="usuarioController.ordena('nome')">Nome</th>
                    <th onclick="usuarioController.ordena('email')">Email</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.usuarios.map(n => `
                    <tr>
                        <td>${n.nome}</td>
                        <td>${n.email}</td>
                    </tr>
                `).join('')}                
            </tbody>
        </table>
        `;
    }
    
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}
