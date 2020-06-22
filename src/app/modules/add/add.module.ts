import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add.routing';
import { AddComponent } from 'src/app/components/add/add.component';



@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AddRoutingModule
  ]
})
export class AddModule { }
