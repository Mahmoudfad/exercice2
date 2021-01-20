import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
userForm : FormGroup
  constructor() { }
  
  ngOnInit(): void {
    this.userForm= new FormGroup({
      firstName: new FormControl('',[ Validators.required,Validators.minLength(3)]),
      email: new FormControl('',  Validators.required),
      cardtype: new FormControl('',Validators.required),
      cardnum: new FormControl('', Validators.minLength(16)),
      expiration: new FormControl(''),
      code: new FormControl(''),
   
    });
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
   
   console.log(this.userForm);
   
  }
  
}

