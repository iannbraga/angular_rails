import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoListComponent } from './componentes/estado-list/estado-list.component';
import { EstadoFormComponent } from './componentes/estado-form/estado-form.component';

const routes: Routes = [
  { path: 'list', component: EstadoListComponent },
  { path: 'estados', component: EstadoListComponent },
  { path: 'new', component: EstadoFormComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
