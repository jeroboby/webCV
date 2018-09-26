import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { CompetenceComponent } from './competence/competence.component';
import { ExperienceComponent } from './experience/experience.component';
import { ViePersonnelleComponent } from './vie-personnelle/vie-personnelle.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { webCVService } from './services/webCV.service';
import { FourOfHourComponent } from './four-of-hour/four-of-hour.component';

const appRoutes: Routes = [
  { path: 'formation', component: FormationComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'viePerso', component: ViePersonnelleComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', component: AccueilComponent },
  { path: 'not-found', component:FourOfHourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    CompetenceComponent,
    ExperienceComponent,
    ViePersonnelleComponent,
    AccueilComponent,
    HeaderComponent, 
    FourOfHourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [webCVService],
  bootstrap: [AppComponent]
})
export class AppModule { }
