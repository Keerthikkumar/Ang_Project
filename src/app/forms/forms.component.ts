import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  content!:Form_Content;

  ngOnInit(): void {
    this.content ={
      First_Name : "keerthi",
      Second_Name : "Kumar",
      Address:{Areas:"Stress",Mobiles:"8270869380"}
    }
  }
 
  Form_Submit(form:NgForm)
  {
    console.log(form.value);
    
  }
}

class Form_Content
{
  First_Name  !: string;
  Second_Name !: string ;
  Address !: {
    Mobiles :  string;
    Areas   :  string;
  }    
}