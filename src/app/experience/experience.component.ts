import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Subscription } from 'rxjs';
import { ExperienceService } from '../services/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];
  experienceSubscription: Subscription;
  
  constructor(private experiencesService: ExperienceService, private router: Router) { }

  ngOnInit() {
    this.experienceSubscription = this.experiencesService.experienceSubject.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
    );
    this.experiencesService.getExperience();
    this.experiencesService.emitExperience();
  }

  onNewExperience() {
    this.router.navigate(['/experience', 'new'])
  }

  onDeleteExperience(experience: Experience) {
    this.experiencesService.removeExperience(experience);
  }

  ngOnDestroy() {
    this.experienceSubscription.unsubscribe();
  }

}
