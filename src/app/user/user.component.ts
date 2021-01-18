import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
name='toto';
email='toto@fivePoints.tn';
address= 'rue d\'usine Chotrana Ariana';
hobbies= ['Music','Movies','Sports'];
show= false
myButton='afficher'
  ngOnInit(): void {
  }
changeStatus(){
  if (this.show===false) {
    this.myButton='masquer'
    this.show=true 
  }
  else {
    this.myButton='afficher'
    this.show=false 
  }
}
delete(index) {
  this.hobbies.splice(index,1)
  console.log(this.hobbies);
}
}
