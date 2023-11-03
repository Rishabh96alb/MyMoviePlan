import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemasterComponent } from './moviemaster.component';

describe('MoviemasterComponent', () => {
  let component: MoviemasterComponent;
  let fixture: ComponentFixture<MoviemasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviemasterComponent]
    });
    fixture = TestBed.createComponent(MoviemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
