import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeFormComponent } from './components/cidade-form/cidade-form.component';
import { CidadeListComponent } from './components/cidade-list/cidade-list.component';


@NgModule({
  declarations: [
    CidadeFormComponent,
    CidadeListComponent
  ],
  imports: [
    CommonModule,
    CidadeRoutingModule
  ]
})
export class CidadeModule { }
