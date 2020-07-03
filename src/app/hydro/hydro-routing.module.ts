import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HydroComponent } from './component/hydro.component';
import { HydroResolver } from './hydro.resolver';

const routes: Routes = [{ path: '', component: HydroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HydroRoutingModule { }
