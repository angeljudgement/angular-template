import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallSeasonComponent } from './fall-season.component';

describe('FallSeasonComponent', () => {
  let component: FallSeasonComponent;
  let fixture: ComponentFixture<FallSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
