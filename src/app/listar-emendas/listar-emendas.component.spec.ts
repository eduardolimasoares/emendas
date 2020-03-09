import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmendasComponent } from './listar-emendas.component';

describe('ListarEmendasComponent', () => {
  let component: ListarEmendasComponent;
  let fixture: ComponentFixture<ListarEmendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEmendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
