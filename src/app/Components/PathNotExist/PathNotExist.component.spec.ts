/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PathNotExistComponent } from './PathNotExist.component';

describe('PathNotExistComponent', () => {
  let component: PathNotExistComponent;
  let fixture: ComponentFixture<PathNotExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathNotExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathNotExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
