import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {


  ngOnInit() {
    // let obs = new Observable((observer)=>{observer.next(Math.random())}) //Observer

    //Subject
    // const subject = new Subject();


    // //2 subscribers 
    // //subscriber1
    // subject.subscribe((val)=>{console.log(val);
    // })

    // //subscriber2 
    // subject.subscribe((val)=>{console.log(val);
    // })

    // subject.next(Math.random());   

    //Ajax Call
    const subject = new Subject
    const ajdata = ajax('https://randomuser.me/api/');

    subject.subscribe((res)=>{console.log(res);})
    subject.subscribe((res)=>{console.log(res);})
    subject.subscribe((res)=>{console.log(res);})
    subject.subscribe((res)=>{console.log(res);})   

    ajdata.subscribe(subject);
 
  }

}
