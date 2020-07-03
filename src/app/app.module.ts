import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HydroModule } from './hydro/hydro.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HydroResolver } from './hydro/hydro.resolver';
 
// import { environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HydroModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers, 
    }),
    true? StoreDevtoolsModule.instrument() : []
  ],
  providers: [HydroResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
