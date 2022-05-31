import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDniComponent } from './dialog-dni.component';

describe('DialogDniComponent', () => {
  let component: DialogDniComponent;
  let fixture: ComponentFixture<DialogDniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
