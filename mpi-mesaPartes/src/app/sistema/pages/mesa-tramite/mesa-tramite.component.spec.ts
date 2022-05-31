import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaTramiteComponent } from './mesa-tramite.component';

describe('MesaTramiteComponent', () => {
  let component: MesaTramiteComponent;
  let fixture: ComponentFixture<MesaTramiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaTramiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
