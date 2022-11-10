import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabylonComponent } from './babylon.component';

describe('BabylonComponent', () => {
  let component: BabylonComponent;
  let fixture: ComponentFixture<BabylonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabylonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabylonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
