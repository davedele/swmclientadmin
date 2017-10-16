import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEditContentsComponent } from './pages-edit-contents.component';

describe('PagesEditContentsComponent', () => {
  let component: PagesEditContentsComponent;
  let fixture: ComponentFixture<PagesEditContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesEditContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEditContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
