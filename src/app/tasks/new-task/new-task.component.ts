import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enterSummary = '';
  enterDate = '';

  private taskService = inject(TaskService);

  onCancle() {
    this.close.emit();
  }
  onCreateTask() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enterSummary,
        dueDate: this.enterDate,
      },
      this.userId
    );

    this.onCancle();
  }
}
