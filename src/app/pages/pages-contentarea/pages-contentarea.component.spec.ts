import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesContentareaComponent } from './pages-contentarea.component';

describe('PagesContentareaComponent', () => {
  let component: PagesContentareaComponent;
  let fixture: ComponentFixture<PagesContentareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesContentareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesContentareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
