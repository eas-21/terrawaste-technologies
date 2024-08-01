import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiogasComponent } from './biogas.component';

describe('BiogasComponent', () => {
  let component: BiogasComponent;
  let fixture: ComponentFixture<BiogasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiogasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiogasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
