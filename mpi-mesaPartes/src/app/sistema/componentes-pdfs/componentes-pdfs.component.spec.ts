import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPdfsComponent } from './componentes-pdfs.component';

describe('ComponentesPdfsComponent', () => {
  let component: ComponentesPdfsComponent;
  let fixture: ComponentFixture<ComponentesPdfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesPdfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesPdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
