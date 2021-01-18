import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }
x:number
y:number 
  ngOnInit(): void {

  }
  show1(){
    this.y = this.x * 2 * 3,14 ;
  }
show2(){
  this.y = this.x * this.x ;
}
}
