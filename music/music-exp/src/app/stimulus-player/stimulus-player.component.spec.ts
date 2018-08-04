import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulusPlayerComponent } from './stimulus-player.component';

describe('StimulusPlayerComponent', () => {
  let component: StimulusPlayerComponent;
  let fixture: ComponentFixture<StimulusPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StimulusPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StimulusPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
