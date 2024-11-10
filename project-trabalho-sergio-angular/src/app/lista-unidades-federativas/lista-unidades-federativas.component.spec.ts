import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUnidadesFederativasComponent } from './lista-unidades-federativas.component';

describe('ListaUnidadesFederativasComponent', () => {
  let component: ListaUnidadesFederativasComponent;
  let fixture: ComponentFixture<ListaUnidadesFederativasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaUnidadesFederativasComponent]
    });
    fixture = TestBed.createComponent(ListaUnidadesFederativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
