import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation.model';
import { Subscription } from 'rxjs';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: Formation[];
  formationSubscription: Subscription;
  
  constructor(private formationsService: FormationService, private router: Router) { }

  ngOnInit() {
    this.formationSubscription = this.formationsService.formationSubject.subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      }
    );
    this.formationsService.getFormation();
    this.formationsService.emitFormation();
  }

  onNewFormation() {
    this.router.navigate(['/formation', 'new'])
  }

  onDeleteFormation(formation: Formation) {
    this.formationsService.removeFormation(formation);
  }

  ngOnDestroy() {
    this.formationSubscription.unsubscribe();
  }

}
