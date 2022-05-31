import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecForYouComponent } from './rec-for-you.component';

describe('RecForYouComponent', () => {
  let component: RecForYouComponent;
  let fixture: ComponentFixture<RecForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
