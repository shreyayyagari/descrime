import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimDetailsComponent } from './victim-details.component';

describe('VictimDetailsComponent', () => {
  let component: VictimDetailsComponent;
  let fixture: ComponentFixture<VictimDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
