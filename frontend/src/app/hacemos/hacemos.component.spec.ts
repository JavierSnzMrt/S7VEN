import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacemosComponent } from './hacemos.component';

describe('HacemosComponent', () => {
  let component: HacemosComponent;
  let fixture: ComponentFixture<HacemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
