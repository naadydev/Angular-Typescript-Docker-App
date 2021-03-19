import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsModalComponent } from './funds-modal.component';

describe('FundsModalComponent', () => {
  let component: FundsModalComponent;
  let fixture: ComponentFixture<FundsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
