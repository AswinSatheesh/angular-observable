import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-observables';

  @ViewChild('createbtn')
  createButton?: ElementRef;  

  createBtnObser; 

  data: any[] = [];

  arr1 = [1,2,3,4];
  arr2 = ['A','B','C'];

  // myObservable = new Observable((observer) => {
  //   // observer.next([1,2,3,4,5]);
  //   // observer.next(1);
  //   setTimeout(() => { observer.next(1) }, 1000);
  //   setTimeout(() => { observer.next(2) }, 2000);
  //   // setTimeout(() => { observer.error(new Error('Something Went Wrong, Please try again later!')) }, 3000);
  //   setTimeout(() => { observer.next(3) }, 4000);
  //   setTimeout(() => { observer.next(4) }, 5000);
  //   setTimeout(() => {observer.complete()},6000);

  // })

  // myObservable = of(this.arr1,this.arr2,"Aswin",1234,'B');
  // myObservable = from(this.arr1);

  promiseData = new Promise((resolve,reject) => {
    resolve([10,20,30,40]);
  })
  myObservable = from(this.promiseData);

  GetAsyncData() {
    // this.myObservable.subscribe((val: any) => {
    //   this.data.push(val);
    // },
    //   (myerror) => {
    //     alert(myerror.message)
    //   },
    // ()=>{
    //   alert('All data Stream is completed!');
    // });

    // subscribe ((),(),())
    // subscribe( {next:(), error: (), complete: ()} )
    this.myObservable.subscribe({
      next :(val : any) => {
        this.data.push(val);
        console.log(val);
        
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All data Stream is completed!');
      }
    })
  }

  buttonClicked(){
    let count = 0;
    this.createBtnObser = fromEvent(this.createButton.nativeElement,'click')
                          .subscribe((data)=>{
                            console.log(data);
                            this.showItem(++count);
                          });
    
  }

  ngAfterViewInit(){
    this.buttonClicked();
  }

  showItem(val){
    let div = document.createElement('div');
    div.innerText = 'item' + val;
    div.className = 'data-list';
    document.getElementById('container').appendChild(div);
  }
}
