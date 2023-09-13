import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];

    this.formGroup = formBuilder.group({
      id: [(usuario && usuario.id) ? usuario.id : null],
      email: [(usuario && usuario.email) ? usuario.email : '', Validators.required],
      senha: [(usuario && usuario.senha) ? usuario.senha : '', Validators.required]
    })
  }

  login() {
    if (this.formGroup.valid) {
      const usuario = this.formGroup.value;
      if (usuario.id == null) {
        this.autenticacaoService.login(usuario.email, usuario.senha).subscribe({
          next: (usuarioCadastrado) => {
            this.router.navigateByUrl('/table');
          },
          error: (err) => {
            console.log('Erro ao autenticar' + JSON.stringify(err));
          }
        });
      }
    }
  }
}
