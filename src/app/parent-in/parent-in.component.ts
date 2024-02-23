import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-in',
  templateUrl: './parent-in.component.html',
  styleUrls: ['./parent-in.component.css']
})
export class ParentINComponent {

  Text:string = "From parent";

  Arr_Text:string[] = []

  Chk_Child = false;

  Add_Array()
  {
    this.Arr_Text.push(this.Text);
  }

}
