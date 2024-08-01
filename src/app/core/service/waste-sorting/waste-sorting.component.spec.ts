import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteSortingComponent } from './waste-sorting.component';

describe('WasteSortingComponent', () => {
  let component: WasteSortingComponent;
  let fixture: ComponentFixture<WasteSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
