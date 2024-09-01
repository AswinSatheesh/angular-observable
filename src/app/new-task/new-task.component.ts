import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }

  newTask  : string ='';

  // taskService : TaskService = Inject(TaskService);
  CreateTask(){
    console.log(this.newTask);
    this.taskService.OnCreateTask(this.newTask);
  }
}
