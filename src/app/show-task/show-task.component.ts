import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  // constructor() { }
  constructor(private takeService : TaskService) { }


  tasks : string[] = ['task1','task2','task3'];

  // takeService : TaskService = Inject(TaskService);

  ngOnInit(){
    this.takeService.CreateTask.subscribe((value)=>{
      this.tasks.push(value); 
    })
  }

}
