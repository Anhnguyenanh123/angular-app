import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Task 1',
      dueDate: '2022-01-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 1',
      summary: 'Task 1',
      dueDate: '2022-01-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 1',
      summary: 'Task 1',
      dueDate: '2022-01-01',
    },
  ];

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId)!;
  }

  onConpleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
