import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
