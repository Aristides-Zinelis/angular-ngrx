import { HydroState } from './hydro.reducers';
import { River } from '../model/hydro.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './hydro.reducers';

export const riverFeatureSelector = createFeatureSelector<HydroState>('rivers');

export const getAllRivers = createSelector(
  riverFeatureSelector,
  selectAll
);

export const areRiversLoaded = createSelector(
  riverFeatureSelector,
  state => state.riversLoaded
);