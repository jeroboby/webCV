import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienceService } from '../../services/experience.service';
import { Router } from '@angular/router';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {

  experienceForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, 
              private experiencesService : ExperienceService,
              private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.experienceForm = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required], 
      place: ['', Validators.required],
      fromMonth: ['', Validators.required],
      fromYear: ['', [Validators.required, Validators.pattern(/(19|20)[0-9][0-9]/)]], 
      toMonth: ['', Validators.required],
      toYear: ['', [Validators.required, Validators.pattern(/(19|20)[0-9][0-9]/)]], 
      today: [''],
      description: ['', Validators.required]
    })
  }

  onSaveExperience() {
    const jobTitle = this.experienceForm.get('jobTitle').value;
    const company = this.experienceForm.get('company').value;
    const place = this.experienceForm.get('place').value;
    const fromMonth = this.experienceForm.get('fromMonth').value;
    const fromYear = this.experienceForm.get('fromYear').value;
    const toMonth = this.experienceForm.get('toMonth').value;
    const toYear = this.experienceForm.get('toYear').value;
    const description = this.experienceForm.get('description').value;
    const today = this.experienceForm.get('today').value;
    const newExperience = new Experience (jobTitle, company, place, fromMonth, fromYear, toMonth, toYear, description);
    newExperience.today = today;
    this.experiencesService.createNewExperience(newExperience);
    this.router.navigate(['/experience'])
    
  }


}
