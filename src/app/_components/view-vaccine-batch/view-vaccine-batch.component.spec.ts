import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVaccineBatchComponent } from './view-vaccine-batch.component';

describe('ViewVaccineBatchComponent', () => {
  let component: ViewVaccineBatchComponent;
  let fixture: ComponentFixture<ViewVaccineBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVaccineBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVaccineBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
