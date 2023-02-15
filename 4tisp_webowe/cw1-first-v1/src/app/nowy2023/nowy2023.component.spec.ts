import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nowy2023Component } from './nowy2023.component';

describe('Nowy2023Component', () => {
  let component: Nowy2023Component;
  let fixture: ComponentFixture<Nowy2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nowy2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nowy2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
