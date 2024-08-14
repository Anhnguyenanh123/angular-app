import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancle = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enterSummary = '';
  enterDate = '';

  onCancle() {
    this.cancle.emit();
  }
  onCreateTask() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate,
    });
  }
}
