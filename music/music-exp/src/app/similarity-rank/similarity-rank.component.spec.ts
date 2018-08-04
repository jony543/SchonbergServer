import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarityRankComponent } from './similarity-rank.component';

describe('SimilarityRankComponent', () => {
  let component: SimilarityRankComponent;
  let fixture: ComponentFixture<SimilarityRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarityRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarityRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
