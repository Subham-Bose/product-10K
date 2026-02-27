import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnManager } from './column-manager';

describe('ColumnManager', () => {
  let component: ColumnManager;
  let fixture: ComponentFixture<ColumnManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
