import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --------- Routing --------- //
import { DashboardRoutingModule } from './dashboard.routing';

// --------- Components ---------//
import { DasboardComponent } from '../../components/dasboard/dasboard.component';
import { AddModule } from 'src/app/modules/add/add.module';
import { HomeModule } from 'src/app/modules/home/home.module';

@NgModule({
  declarations: [DasboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AddModule,
    HomeModule
  ]
})
export class DashboardModule { }
