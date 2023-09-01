import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoRoutingModule } from './estado-routing.module';
import { EstadoFormComponent } from './componentes/estado-form/estado-form.component';
import { EstadoListComponent } from './componentes/estado-list/estado-list.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstadoFormComponent,
    EstadoListComponent
  ],
  imports: [
    CommonModule,
    EstadoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class EstadoModule { }
