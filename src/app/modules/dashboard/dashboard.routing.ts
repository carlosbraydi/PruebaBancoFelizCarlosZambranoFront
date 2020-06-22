import { NgModule } from '@angular/core';

// --------- Components --------- //
import { DasboardComponent } from 'src/app/components/dasboard/dasboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DasboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(
            m => m.HomeModule
          )
      },
      {
        path: 'add',
        loadChildren: () =>
          import('../add/add.module').then(
            m => m.AddModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
