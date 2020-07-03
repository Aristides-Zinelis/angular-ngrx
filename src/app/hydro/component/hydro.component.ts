
import { getAllRivers } from '../store/hydro.selectors';
import { riverActionTypes } from './../store/hydro.actions';
import { State } from '../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { River } from '../model/hydro.model';
import { HydroService } from '../services/hydro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-hydro',
  templateUrl: './hydro.component.html',
  styleUrls: ['./hydro.component.css']
})
export class HydroComponent implements OnInit {

  rivers$: Observable<River[]>;

  riverToBeUpdated: River;

  isUpdateActivated = false;

  constructor(private hydroService: HydroService, private store: Store<State>) { }

  ngOnInit() {
    this.rivers$ = this.store.select(getAllRivers);
  }

  deleteRiver(riverId: string) {
    this.store.dispatch(riverActionTypes.deleteRiver({riverId}));
  }

  showUpdateForm(river: River) {
    this.riverToBeUpdated = {...river};
    this.isUpdateActivated = true;
  }

  updateRiver(updateForm) {
    const update: Update<River> = {
      id: this.riverToBeUpdated.id,
      changes: {
        ...this.riverToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(riverActionTypes.updateRiver({update}));

    this.isUpdateActivated = false;
    this.riverToBeUpdated = null;
  }
}