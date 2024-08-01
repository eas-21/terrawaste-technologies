import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizingComponent } from './fertilizing.component';

describe('FertilizingComponent', () => {
  let component: FertilizingComponent;
  let fixture: ComponentFixture<FertilizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
