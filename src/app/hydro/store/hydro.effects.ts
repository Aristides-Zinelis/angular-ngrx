import { riverActionTypes, riversLoaded, updateRiver } from './hydro.actions';
import { HydroService } from './../services/hydro.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HydroEffects {

  loadRivers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(riverActionTypes.loadRivers),
      concatMap(() => this.hydroService.getAllRivers()),
      map(rivers => riverActionTypes.riversLoaded({rivers}))
    )
  );

  createRiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(riverActionTypes.createRiver),
      concatMap((action) => this.hydroService.createRiver(action.river)),
      tap(() => this.router.navigateByUrl('/courses'))
    ),
    {dispatch: false}
  );

  deleteRiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(riverActionTypes.deleteRiver),
      concatMap((action) => this.hydroService.deleteRiver(action.riverId))
    ),
    {dispatch: false}
  );

  updateRiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(riverActionTypes.updateRiver),
      concatMap((action) => this.hydroService.updateRiver(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private hydroService: HydroService, private actions$: Actions, private router: Router) {}
}