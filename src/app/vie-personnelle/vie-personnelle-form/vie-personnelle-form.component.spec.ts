import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViePersonnelleFormComponent } from './vie-personnelle-form.component';

describe('ViePersonnelleFormComponent', () => {
  let component: ViePersonnelleFormComponent;
  let fixture: ComponentFixture<ViePersonnelleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViePersonnelleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViePersonnelleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
