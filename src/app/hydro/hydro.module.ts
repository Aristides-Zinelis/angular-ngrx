import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HydroRoutingModule } from './hydro-routing.module';
import { HydroComponent } from './component/hydro.component';
import { HydroService } from './services/hydro.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HydroEffects } from './store/hydro.effects';
import { hydroReducer } from  './store/hydro.reducers';
import { HttpClientModule } from '@angular/common/http';
import { CreateRiverComponent } from './component/create-river.component';


@NgModule({
  declarations: [HydroComponent, CreateRiverComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HydroRoutingModule,
    FormsModule,
    StoreModule.forFeature('rivers', hydroReducer),
    EffectsModule.forFeature([HydroEffects])
  ],
  providers: [HydroService],
  exports: [HydroComponent, CreateRiverComponent]
})
export class HydroModule { }
