import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfdefenceComponent } from './selfdefence.component';

describe('SelfdefenceComponent', () => {
  let component: SelfdefenceComponent;
  let fixture: ComponentFixture<SelfdefenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfdefenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfdefenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
