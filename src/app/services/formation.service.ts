import { Injectable } from '@angular/core';
import { Formation } from '../models/formation.model';


import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class FormationService {
    
 formations: Formation[] = [];   
 formationSubject = new Subject<Formation[]>();

 constructor() { 
    this.getFormation();
  }

 emitFormation() {
    this.formationSubject.next(this.formations);
 }

 saveFormation() {
     firebase.database().ref('/webCV').child('/formation').set(this.formations)
 }

 getFormation() {
    firebase.database().ref('/webCV').child('/formation')
    .on('value', (data) => {
      this.formations = data.val() ? data.val() : [];
      this.emitFormation();
    });
  }

createNewFormation(newFormation : Formation) {
    this.formations.push(newFormation);
    this.saveFormation();
    this.emitFormation();
  }

removeFormation(formation: Formation) {
    const formationIndexToRemove = this.formations.findIndex(
        (formationEl) => {
        if(formationEl === formation) {
            return true;
            }
        }
        );
        this.formations.splice(formationIndexToRemove, 1);
        this.saveFormation();
        this.emitFormation();
    }

}