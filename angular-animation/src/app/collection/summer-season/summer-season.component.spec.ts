import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerSeasonComponent } from './summer-season.component';

describe('SummerSeasonComponent', () => {
  let component: SummerSeasonComponent;
  let fixture: ComponentFixture<SummerSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
