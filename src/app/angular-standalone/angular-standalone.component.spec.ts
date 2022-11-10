import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStandaloneComponent } from './angular-standalone.component';

describe('AngularStandaloneComponent', () => {
  let component: AngularStandaloneComponent;
  let fixture: ComponentFixture<AngularStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
