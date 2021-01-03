import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPrincipalComponent} from '../app/componentes/login/loginPrincipal/login-principal/login-principal.component';
import {LoginVendedorComponent} from '../app/componentes/login/loginVendedor/login-vendedor/login-vendedor.component';
import {LoginClienteComponent} from '../app/componentes/login/loginCliente/login-cliente/login-cliente.component';
import {FormularioClienteComponent} from '../app/componentes/formulario/formularioCliente/formulario-cliente/formulario-cliente.component';
import { FormularioVendedorComponent} from '../app/componentes/formulario/formularioVendedor/formulario-vendedor/formulario-vendedor.component';
import {RecuperarClienteComponent} from '../app/componentes/recuperarContraseña/recuperarCliente/recuperar-cliente/recuperar-cliente.component';
import {RecuperarVendedorComponent} from '../app/componentes/recuperarContraseña/recuperarVendedor/recuperar-vendedor/recuperar-vendedor.component';
import {CodigoClienteComponent} from '../app/componentes/codigoSeguridad/codigoSeguridad/codigoCliente/codigo-cliente/codigo-cliente.component';
import {CodigoVendedorComponent} from '../app/componentes/codigoSeguridad/codigoSeguridad/codigoVendedor/codigo-vendedor/codigo-vendedor.component';
import {ClienteComponent} from '../app/componentes/nuevaContraseña/cliente/cliente/cliente.component';
import {VendedorComponent} from '../app/componentes/nuevaContraseña/vendedor/vendedor/vendedor.component';
import {HomeClienteComponent} from '../app/componentes/home/homeCliente/home-cliente/home-cliente.component';
import {HomeVendedorComponent} from '../app/componentes/home/homeVendedor/home-vendedor/home-vendedor.component';

const routes: Routes = [

  {path:'', component:LoginPrincipalComponent},
  {path:'loginVendedor', component:LoginVendedorComponent},
  {path:'loginCliente', component:LoginClienteComponent},
  {path:'formularioCliente', component:FormularioClienteComponent},
  {path:'formularioVendedor', component:FormularioVendedorComponent},
  {path:'send-client-mail', component:RecuperarClienteComponent},
  {path:'send-seller-mail', component:RecuperarVendedorComponent},
  {path:'check-client-code', component:CodigoClienteComponent},
  {path:'check-seller-code', component:CodigoVendedorComponent},
  {path:'new-customer-password', component:ClienteComponent},
  {path:'new-seller-password', component:VendedorComponent},
  {path:'home-client', component:HomeClienteComponent},
  {path:'home-seller', component:HomeVendedorComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
