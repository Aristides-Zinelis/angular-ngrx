import { areRiversLoaded } from './store/hydro.selectors';
import { loadRivers, riversLoaded } from './store/hydro.actions';
import { State } from '../store/reducers/index';
import { River } from './model/hydro.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class HydroResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<State>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areRiversLoaded),
        tap((coursesLoaded) => {
          console.log('111', coursesLoaded);
          if (!coursesLoaded) {
            this.store.dispatch(loadRivers());
          }

        }),
        filter(coursesLoaded => coursesLoaded),
        first()
    );
  }
}