export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
  }

  async buscarUsuarios() {
    return this.usuarios;
  }
}
