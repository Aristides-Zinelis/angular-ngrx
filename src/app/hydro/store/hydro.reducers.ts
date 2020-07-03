import { River } from './../model/hydro.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { riverActionTypes, riversLoaded } from './hydro.actions';

export interface HydroState extends EntityState<River> {
    riversLoaded: boolean;
}

export const adapter: EntityAdapter<River> = createEntityAdapter<River>();

export const initialState = adapter.getInitialState({
    riversLoaded: false
});

export const hydroReducer = createReducer(
  initialState,

  on(riverActionTypes.riversLoaded, (state, action) => {
    return adapter.addAll(
      action.rivers,
      {...state, riverssLoaded: true}
    );
  }),

  on(riverActionTypes.createRiver, (state, action) => {
    return adapter.addOne(action.river, state);
  }),

  on(riverActionTypes.deleteRiver, (state, action) => {
    return adapter.removeOne(action.riverId, state);
  }),

  on(riverActionTypes.updateRiver, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();