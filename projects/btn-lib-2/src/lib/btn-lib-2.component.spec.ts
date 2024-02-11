import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLib2Component } from './btn-lib-2.component';

describe('BtnLib2Component', () => {
  let component: BtnLib2Component;
  let fixture: ComponentFixture<BtnLib2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnLib2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnLib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
