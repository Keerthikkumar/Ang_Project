import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  Reactive_Form_Content = new FormGroup({
    First_Name : new FormControl('Keerthik'),
    Second_Name : new FormControl('Kumar'),
    address : new FormGroup({
      Area : new FormControl('kulathur'),
      Mobile : new FormControl('94869558074')
    })
  })

  Reactive_Form_Summit()
  {
    console.log(this.Reactive_Form_Content.value);
    
  }
}
