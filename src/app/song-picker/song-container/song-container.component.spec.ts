import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongContainerComponent } from './song-container.component';

describe('SongContainerComponent', () => {
  let component: SongContainerComponent;
  let fixture: ComponentFixture<SongContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongContainerComponent]
    });
    fixture = TestBed.createComponent(SongContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
