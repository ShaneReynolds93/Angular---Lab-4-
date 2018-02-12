import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
i:number = 0;
text:string;
hidden = true;

  Counter(){
    this.i++;
  }

  show(){
    if(this.hidden == true){
      

    }

}
