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
import { FormationService } from './services/formation.service';
import { FourOfHourComponent } from './four-of-hour/four-of-hour.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormationFormComponent } from './formation/formation-form/formation-form.component';
import { CompetenceFormComponent } from './competence/competence-form/competence-form.component';
import { ExperienceFormComponent } from './experience/experience-form/experience-form.component';
import { ViePersonnelleFormComponent } from './vie-personnelle/vie-personnelle-form/vie-personnelle-form.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'formation', component: FormationComponent },
  { path: 'formation/new', canActivate: [AuthGuardService], component: FormationFormComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'competence/new', canActivate: [AuthGuardService], component: CompetenceFormComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'experience/new', canActivate: [AuthGuardService], component: ExperienceFormComponent },
  { path: 'viePerso', component: ViePersonnelleComponent },
  { path: 'viePerso/new', canActivate: [AuthGuardService], component: ViePersonnelleFormComponent },
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
    FourOfHourComponent, SignupComponent, SigninComponent, FormationFormComponent, CompetenceFormComponent, ExperienceFormComponent, ViePersonnelleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [FormationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
