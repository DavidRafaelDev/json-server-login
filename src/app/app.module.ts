import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Adicionado para suportar roteamento

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ModalAdicionarProdutoComponent } from './modal-adicionar-produto/modal-adicionar-produto.component';
import { ModalEditarProdutoComponent } from './modal-editar-produto/modal-editar-produto.component';
import { ModalEditUsuarioComponent } from './modal-edit-usuario/modal-edit-usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ModalAdicionarProdutoComponent,
    ModalEditarProdutoComponent,
    ModalEditUsuarioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
