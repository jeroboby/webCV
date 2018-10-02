import { Injectable } from '@angular/core';


import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable()

export class ExperienceService {
    
 experiences: Experience[] = [];   
 experienceSubject = new Subject<Experience[]>();

 constructor() { 
    this.getExperience();
  }

 emitExperience() {
    this.experienceSubject.next(this.experiences);
 }

 saveExperience() {
     firebase.database().ref('/webCV').child('/experience').set(this.experiences)
 }

 getExperience() {
    firebase.database().ref('/webCV').child('/experience')
    .on('value', (data) => {
      this.experiences = data.val() ? data.val() : [];
      this.emitExperience();
    });
  }

createNewExperience(newExperience : Experience) {
    this.experiences.push(newExperience);
    this.saveExperience();
    this.emitExperience();
  }

removeExperience(experience: Experience) {
    const experienceIndexToRemove = this.experiences.findIndex(
        (experienceEl) => {
        if(experienceEl === experience) {
            return true;
            }
        }
        );
        this.experiences.splice(experienceIndexToRemove, 1);
        this.saveExperience();
        this.emitExperience();
    }

}