import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAulasComponent } from './lista-de-aulas.component';

describe('ListaDeAulasComponent', () => {
  let component: ListaDeAulasComponent;
  let fixture: ComponentFixture<ListaDeAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
