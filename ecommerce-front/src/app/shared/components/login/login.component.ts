import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class Usuario {
  email!: string
  senha!: string
}

export class LoginComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];

    this.formGroup = formBuilder.group({
      nome: [(usuario && usuario.email) ? usuario.email : '', Validators.required],
      marca: [(usuario && usuario.senha) ? usuario.senha : '', Validators.required]
    })
  }

  logar() {
    if (this.formGroup.valid) {
      const usuario = this.formGroup.value;
      if (usuario.email == '' || usuario.senha == '') {
        this.usuarioService.login(usuario).subscribe({
          next: (usuario) => {
            this.router.navigateByUrl('/table');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      }
    }
  }

}
