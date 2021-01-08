import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CodigoClienteComponent } from './componentes/codigoSeguridad/codigoSeguridad/codigoCliente/codigo-cliente/codigo-cliente.component';
import { CodigoVendedorComponent } from './componentes/codigoSeguridad/codigoSeguridad/codigoVendedor/codigo-vendedor/codigo-vendedor.component';
import { FormularioClienteComponent } from './componentes/formulario/formularioCliente/formulario-cliente/formulario-cliente.component';
import { FormularioVendedorComponent } from './componentes/formulario/formularioVendedor/formulario-vendedor/formulario-vendedor.component';
import { HomeClienteComponent } from './componentes/home/homeCliente/home-cliente/home-cliente.component';
import { HomeVendedorComponent } from './componentes/home/homeVendedor/home-vendedor/home-vendedor.component';
import { LoginClienteComponent } from './componentes/login/loginCliente/login-cliente/login-cliente.component';
import { LoginVendedorComponent } from './componentes/login/loginVendedor/login-vendedor/login-vendedor.component';
import { ClienteComponent } from './componentes/nuevaContraseña/cliente/cliente/cliente.component';
import { VendedorComponent } from './componentes/nuevaContraseña/vendedor/vendedor/vendedor.component';
import { RecuperarClienteComponent } from './componentes/recuperarContraseña/recuperarCliente/recuperar-cliente/recuperar-cliente.component';
import { RecuperarVendedorComponent } from './componentes/recuperarContraseña/recuperarVendedor/recuperar-vendedor/recuperar-vendedor.component';
import { LoginPrincipalComponent } from './componentes/login/loginPrincipal/login-principal/login-principal.component';

@NgModule({
  declarations: [
    AppComponent,
   
    CodigoClienteComponent,
    CodigoVendedorComponent,
    FormularioClienteComponent,
    FormularioVendedorComponent,
    HomeClienteComponent,
    HomeVendedorComponent,
    LoginClienteComponent,
    LoginVendedorComponent,
    ClienteComponent,
    VendedorComponent,
    RecuperarClienteComponent,
    RecuperarVendedorComponent,
    LoginPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
