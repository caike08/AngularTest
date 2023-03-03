import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationBoxComponent } from './explanation-box.component';

describe('ExplanationBoxComponent', () => {
  let component: ExplanationBoxComponent;
  let fixture: ComponentFixture<ExplanationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
