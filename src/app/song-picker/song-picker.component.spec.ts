import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPickerComponent } from './song-picker.component';

describe('SongPickerComponent', () => {
  let component: SongPickerComponent;
  let fixture: ComponentFixture<SongPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongPickerComponent]
    });
    fixture = TestBed.createComponent(SongPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
