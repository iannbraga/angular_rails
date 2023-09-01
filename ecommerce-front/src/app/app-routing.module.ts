import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cidades', loadChildren:
  () => import('./cidade/cidade.module')
  .then(m => m.CidadeModule)},

  { path: 'estados', loadChildren:
  () => import('./estado/estado.module')
  .then(m => m.EstadoModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
