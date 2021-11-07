import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabswitchComponent } from './tabswitch.component';

describe('TabswitchComponent', () => {
  let component: TabswitchComponent;
  let fixture: ComponentFixture<TabswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
