import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterSeasonComponent } from './winter-season.component';

describe('WinterSeasonComponent', () => {
  let component: WinterSeasonComponent;
  let fixture: ComponentFixture<WinterSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
