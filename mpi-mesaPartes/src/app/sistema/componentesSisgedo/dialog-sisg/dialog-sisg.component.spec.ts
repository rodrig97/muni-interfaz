import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSisgComponent } from './dialog-sisg.component';

describe('DialogSisgComponent', () => {
  let component: DialogSisgComponent;
  let fixture: ComponentFixture<DialogSisgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSisgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSisgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
