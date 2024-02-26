import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  Reactive_Form_Content = new FormGroup({
    First_Name : new FormControl('',[Validators.required,Validators.minLength(5)]),
    Second_Name : new FormControl('Kumar'),
    address : new FormGroup({
      Area : new FormControl('kulathur',[Validators.required,Validators.maxLength(5)]),
      Mobile : new FormControl('94869558074')
    })
  })

  Reactive_Form_Summit()
  {
    console.log(this.Reactive_Form_Content.value);
    
  }

  
}
