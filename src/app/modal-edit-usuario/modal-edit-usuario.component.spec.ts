import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditUsuarioComponent } from './modal-edit-usuario.component';

describe('ModalEditUsuarioComponent', () => {
  let component: ModalEditUsuarioComponent;
  let fixture: ComponentFixture<ModalEditUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditUsuarioComponent]
    });
    fixture = TestBed.createComponent(ModalEditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
