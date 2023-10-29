import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisedetailsComponent } from './practisedetails.component';

describe('PractisedetailsComponent', () => {
  let component: PractisedetailsComponent;
  let fixture: ComponentFixture<PractisedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractisedetailsComponent]
    });
    fixture = TestBed.createComponent(PractisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
