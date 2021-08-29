import { Component, OnInit } from '@angular/core';
import { TodosService } from './timeddata.servie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public counnter = 0;
   i = 0;

   items : any[] = [];

  constructor(private todoService : TodosService ){

  }
  title = 'indexdbtest';

  ngOnInit(){
    for ( let i = 0; i < 5000000; i++ ){
      this.i++;
      this.items.push({ title : this.i.toString(), id : i});

    }

   console.log(this.items.length);
  }

  public add() {

    
   
    console.log("all added");

  }
  public retrieve(){
    console.log(this.todoService.getAll().then(result=>{
      console.log(result);
    }));
  }

  public clear(){
     this.todoService.clear();
  }

  public bulkGet(){
    this.todoService.getWhere().then(result=>{
      console.log(result);
    });
 }

  public bulkAdd(){

    console.log(this.counnter);
    if (this.counnter > this.items.length){
      this.items = [];
      return;
    }

     let bulkItems = this.items.slice(this.counnter,this.counnter + 1000);
     this.counnter = this.counnter +1000;

    this.todoService.bulkAdd(bulkItems).then(result=>{
      this.bulkAdd();

    });
   
  }

  public incrementCounter(){
    this.counnter++;
  }
}
