import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNodeComponent } from './page-node.component';

describe('PageNodeComponent', () => {
  let component: PageNodeComponent;
  let fixture: ComponentFixture<PageNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
