import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLibComponent } from './btn-lib.component';

describe('BtnLibComponent', () => {
  let component: BtnLibComponent;
  let fixture: ComponentFixture<BtnLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
