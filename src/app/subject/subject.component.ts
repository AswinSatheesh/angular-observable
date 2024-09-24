import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
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
    // const subject = new BehaviorSubject<number>(100);

    //Replay Subject
    // const subject = new ReplaySubject(2,10);
    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    //2 subscribers 
    //subscriber1
    // subject.subscribe((val)=>{console.log("subscriber 1 :" + val);
    // })

    //subscriber2 
    // subject.subscribe((val)=>{console.log("subscriber 2 :" + val);
    // })

    // subject.next(2020);   

    // subject.subscribe((val)=>{console.log("subscriber 3 :" + val);
    // })

    // subject.next(10); 
    // subject.subscribe((val)=>{console.log(val);
    // })
    //Ajax Call
    // const subject = new Subject
    // const ajdata = ajax('https://randomuser.me/api/');

    // subject.subscribe((res)=>{console.log(res);})
    // subject.subscribe((res)=>{console.log(res);})
    // subject.subscribe((res)=>{console.log(res);})
    // subject.subscribe((res)=>{console.log(res);})   

    // ajdata.subscribe(subject);

    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);

    // asyncSubject.subscribe(data => {console.log(`Subscriber1 : ${data}`);
    // })
 
    // asyncSubject.complete();
    // asyncSubject.next(400);
    // asyncSubject.complete();
    // asyncSubject.subscribe(data => {console.log(`Subscriber2 : ${data}`);
    // })

    const promise = new Promise((resolve,reject)=>{
      resolve(100);
      console.log("Promise Executed");
    });

    const obs = new Observable((sub)=>{
      sub.next(100);
      console.log('Observalbe executed');
      
    })

    obs.subscribe();
  }

}
