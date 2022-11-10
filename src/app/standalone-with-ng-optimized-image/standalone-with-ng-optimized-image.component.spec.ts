import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneWithNgOptimizedImageComponent } from './standalone-with-ng-optimized-image.component';

describe('StandaloneWithNgOptimizedImageComponent', () => {
  let component: StandaloneWithNgOptimizedImageComponent;
  let fixture: ComponentFixture<StandaloneWithNgOptimizedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneWithNgOptimizedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneWithNgOptimizedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
