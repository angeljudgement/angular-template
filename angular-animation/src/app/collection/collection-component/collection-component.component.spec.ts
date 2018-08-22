import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponentComponent } from './collection-component.component';

describe('CollectionComponentComponent', () => {
  let component: CollectionComponentComponent;
  let fixture: ComponentFixture<CollectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
