import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRipeComponent } from './header-ripe.component';

describe('HeaderRipeComponent', () => {
  let component: HeaderRipeComponent;
  let fixture: ComponentFixture<HeaderRipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
