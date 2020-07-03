import { River } from '../model/hydro.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


export const loadRivers = createAction(
  '[Rivers List] Load Rivers via Service',
);

export const riversLoaded = createAction(
  '[Rivers Effect] Rivers Loaded Successfully',
  props<{rivers: River[]}>()
);

export const createRiver = createAction(
  '[Create River Component] Create River',
  props<{river: River}>()
);

export const deleteRiver = createAction(
  '[Rivers List Operations] Delete River',
  props<{riverId: string}>()
);

export const updateRiver = createAction(
  '[Rivers List Operations] Update River',
  props<{update: Update<River>}>()
);

export const riverActionTypes = {
  loadRivers,
  riversLoaded,
  createRiver,
  deleteRiver,
  updateRiver
};