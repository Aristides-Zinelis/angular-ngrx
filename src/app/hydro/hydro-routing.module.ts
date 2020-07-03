import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HydroComponent } from './component/hydro.component';
import { HydroResolver } from './hydro.resolver';
import { CreateRiverComponent } from './component/create-river.component';

const routes: Routes = [{ path: 'hydro', component: HydroComponent }, {path: 'app-create-river', component: CreateRiverComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HydroRoutingModule { }
