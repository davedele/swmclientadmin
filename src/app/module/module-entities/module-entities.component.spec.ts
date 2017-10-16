import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEntitiesComponent } from './module-entities.component';

describe('ModuleEntitiesComponent', () => {
  let component: ModuleEntitiesComponent;
  let fixture: ComponentFixture<ModuleEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
