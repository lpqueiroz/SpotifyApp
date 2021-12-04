import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEditItemComponent } from './playlist-edit-item.component';

describe('PlaylistEditItemComponent', () => {
  let component: PlaylistEditItemComponent;
  let fixture: ComponentFixture<PlaylistEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistEditItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
