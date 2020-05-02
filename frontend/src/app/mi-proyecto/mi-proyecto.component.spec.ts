import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiProyectoComponent } from './mi-proyecto.component';

describe('MiProyectoComponent', () => {
  let component: MiProyectoComponent;
  let fixture: ComponentFixture<MiProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
