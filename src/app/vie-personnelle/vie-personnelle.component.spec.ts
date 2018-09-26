import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViePersonnelleComponent } from './vie-personnelle.component';

describe('ViePersonnelleComponent', () => {
  let component: ViePersonnelleComponent;
  let fixture: ComponentFixture<ViePersonnelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViePersonnelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViePersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
