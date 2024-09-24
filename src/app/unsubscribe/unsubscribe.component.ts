import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {

  counter = interval(1000);
  data1 : number[]=[];
  subscriber1;
  data2 : number[]=[];
  subscriber2;
  data3 : number[]=[];
  subscriber3;

  OnSubscribe1(){
    this.subscriber1 =  this.counter.subscribe((res)=>{
      this.data1.push(res)
    })
  }

  
  OnSubscribe2(){
    this.subscriber2 =  this.counter.subscribe((res)=>{
      this.data2.push(res)
    })
  }

  
  OnSubscribe3(){
    this.subscriber3 =  this.counter.subscribe((res)=>{
      this.data3.push(res)
    })
  }

  OnUnsubscribe1(){
    this.subscriber1.unsubscribe();
  }

  
  OnUnsubscribe2(){
    this.subscriber2.unsubscribe();
  }

  
  OnUnsubscribe3(){
    this.subscriber3.unsubscribe();
  }
}
