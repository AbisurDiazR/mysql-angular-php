import { Component } from '@angular/core';

//modulos para el comportamiento de la aplicacion
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-mysql-php';

  usuarios = null;

  usuario = {
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null
  }

  constructor(private usuariosService: UsuariosService){
  }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuariosService.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }

  altaUsuario(){
    this.usuariosService.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'ok'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  bajaUsuario(idUsuario){
    this.usuariosService.bajaUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado']=='ok'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario(){
    this.usuariosService.editarUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado']=='ok'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  seleccionarUsuario(idUsuario){
    this.usuariosService.seleccionarUsuario(idUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  hayRegistros(){
    if (this.usuarios == null) {
      return false;
    } else {
      return true;
    }
  }
}
