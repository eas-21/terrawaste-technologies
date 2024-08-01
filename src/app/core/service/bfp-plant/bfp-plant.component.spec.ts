import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BFPPlantComponent } from './bfp-plant.component';

describe('BFPPlantComponent', () => {
  let component: BFPPlantComponent;
  let fixture: ComponentFixture<BFPPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BFPPlantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BFPPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
