import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosProyectosComponent } from './todos-proyectos.component';

describe('TodosProyectosComponent', () => {
  let component: TodosProyectosComponent;
  let fixture: ComponentFixture<TodosProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
