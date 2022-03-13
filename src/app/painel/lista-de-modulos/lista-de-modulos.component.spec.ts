import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeModulosComponent } from './lista-de-modulos.component';

describe('ListaDeModulosComponent', () => {
  let component: ListaDeModulosComponent;
  let fixture: ComponentFixture<ListaDeModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
