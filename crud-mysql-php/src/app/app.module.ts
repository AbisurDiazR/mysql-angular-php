import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importamos los modulos
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
