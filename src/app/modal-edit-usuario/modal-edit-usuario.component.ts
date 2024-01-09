import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoService } from '../produto.service';
import { UpdateService } from '../update.service';
import { Usuario, UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-modal-edit-usuario',
  templateUrl: './modal-edit-usuario.component.html',
  styleUrls: ['./modal-edit-usuario.component.css']
})
export class ModalEditUsuarioComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    imagem: ''
  }
  images = [
    "../../assets/user.png",
    "../../assets/darwin.png",
    "../../assets/crash.png",
    "../../assets/naruto.png",
    "../../assets/among.png",
    "../../assets/logo.png",
  ];
  imagemAtual: string = ''
  constructor(private updateService: UpdateService, private produtoService: ProdutoService,
    private usuarioService: UsuarioService, private activeModal: NgbActiveModal) { }
  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioLogado();
    this.imagemAtual = this.usuario.imagem
  }
  handleCloseModal() {
    this.activeModal.close();

  }

  handleEditUsuario() {
    this.usuarioService.editarUsuario(this.usuario.id, this.usuario.nome, this.usuario.email, this.imagemAtual, this.usuario.senha).subscribe({
      next: this.handleSaveEditUsuario.bind(this)
    })
  }
  handleSaveEditUsuario() {
    this.handleCloseModal();
  }
  getImagePath(image: string): string {
    return image;
  }

  atualizarImagemAtual(image: string): void {
    this.usuario.imagem = image
    this.imagemAtual = image;
  }
}
