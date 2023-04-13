import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwdComponent } from './nwd.component';

describe('NwdComponent', () => {
  let component: NwdComponent;
  let fixture: ComponentFixture<NwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
