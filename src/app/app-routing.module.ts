import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HydroResolver } from './hydro/hydro.resolver';


const routes: Routes = [{ path: 'hydro', loadChildren: () => import('./hydro/hydro.module').then(m => m.HydroModule), resolve: {
  courses: HydroResolver
} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
