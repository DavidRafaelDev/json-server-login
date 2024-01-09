import { Component, OnInit } from '@angular/core';
import { NewUsuario, Usuario, UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private route: Router) { }
  active = 1;
  usuario = { email: '', senha: '' };
  newUsuario: NewUsuario = { nome: '', email: '', senha: '', imagem: '../../assets/user.png' }
  showErroAlert = false;
  showSuccessAlert = false;
  ngOnInit() { }

  criarUsuario() {
    this.usuarioService.postUser(this.newUsuario).subscribe(
      {
        next: this.handleCriarUsuario.bind(this),
        error: this.handleGenericError
      }
    );
  }
  login() {
    this.usuarioService.login(this.usuario.email, this.usuario.senha).subscribe(
      {
        next: this.handleLogin.bind(this),
        error: this.handleGenericError
      }
    );
  }

  handleGenericError() {
    this.showErroAlert = true
  }
  handleLogin = (data: Usuario[]) => {
    if (data.length > 0) {
      this.showErroAlert = false;
      this.usuarioService.setUsuarioLogado(data[0]);
      this.route.navigate(["home"]);
    } else {
      this.showErroAlert = true;
    }
  }
  handleCriarUsuario() {
    this.active = 1;
    this.showSuccessAlert = true;
  }
}
