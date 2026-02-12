import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompletedTasks } from './list-completed-tasks';

describe('ListCompletedTasks', () => {
  let component: ListCompletedTasks;
  let fixture: ComponentFixture<ListCompletedTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCompletedTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCompletedTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
