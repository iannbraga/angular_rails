import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: '', loadChildren:
      () => import('./produto/produto.module')
        .then(m => m.ProdutoModule)
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
