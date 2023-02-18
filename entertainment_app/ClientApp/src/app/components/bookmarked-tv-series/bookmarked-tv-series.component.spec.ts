import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedTvSeriesComponent } from './bookmarked-tv-series.component';

describe('BookmarkedTvSeriesComponent', () => {
  let component: BookmarkedTvSeriesComponent;
  let fixture: ComponentFixture<BookmarkedTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedTvSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
