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
      firstName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      cardtype: new FormControl(''),
      cardnum: new FormControl(''),
      expiration: new FormControl(''),
      code: new FormControl(''),
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
   
   console.log(this.userForm);
   
  }
  
}

