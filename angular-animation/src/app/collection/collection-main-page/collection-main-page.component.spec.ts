import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMainPageComponent } from './collection-main-page.component';

describe('CollectionMainPageComponent', () => {
  let component: CollectionMainPageComponent;
  let fixture: ComponentFixture<CollectionMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
