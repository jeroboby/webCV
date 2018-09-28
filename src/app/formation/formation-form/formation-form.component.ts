import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormationService } from '../../services/formation.service';
import { Router } from '@angular/router';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {

  formationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private formationsService : FormationService,
              private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formationForm = this.formBuilder.group({
      fromYear: ['', Validators.required],
      toYear: ['', Validators.required],
      school: ['', Validators.required],
      diplom: ['', Validators.required],
      fieldStudies: ['', Validators.required],
      description: ['', Validators.required],
      activity: ['', Validators.required]
    })
  }

  onSaveFormation() {
    const fromYear = this.formationForm.get('fromYear').value;
    const toYear = this.formationForm.get('toYear').value;
    const school = this.formationForm.get('school').value;
    const diplom = this.formationForm.get('diplom').value;
    const fieldStudies = this.formationForm.get('fieldStudies').value;
    const description = this.formationForm.get('description').value;
    const activity = this.formationForm.get('activity').value;
    const newFormation = new Formation(fromYear, toYear, school, diplom, fieldStudies, description, activity);
    this.formationsService.createNewFormation(newFormation);
    this.router.navigate(['/formation'])
    
    
  }

}
