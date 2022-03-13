import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAulasPorModuloComponent } from './listar-aulas-por-modulo.component';

describe('ListarAulasPorModuloComponent', () => {
  let component: ListarAulasPorModuloComponent;
  let fixture: ComponentFixture<ListarAulasPorModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAulasPorModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAulasPorModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
