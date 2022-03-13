import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeUsuariosComponent } from './list-de-usuarios.component';

describe('ListDeUsuariosComponent', () => {
  let component: ListDeUsuariosComponent;
  let fixture: ComponentFixture<ListDeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
