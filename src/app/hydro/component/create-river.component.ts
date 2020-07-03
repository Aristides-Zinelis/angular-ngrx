  import { River } from '../model/hydro.model';
import { createRiver } from '../store/hydro.actions';
import { State } from '../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-river',
  templateUrl: './create-river.component.html'
})
export class CreateRiverComponent implements OnInit {

  constructor(private store: Store<State>) { }


  ngOnInit() {
  }
  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const river: River = {id: null, name: submittedForm.value.name, countrySource: submittedForm.value.countrySource, length: submittedForm.value.length, photo: submittedForm.value.foto};
    this.store.dispatch(createRiver({river}));

  }
}
