import { Component ,Input,OnChanges,OnInit,DoCheck,OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-in',
  templateUrl: './child-in.component.html',
  styleUrls: ['./child-in.component.css']
})
export class ChildINComponent implements OnChanges,OnInit,DoCheck,OnDestroy{

  @Input('Child_Txt')Text_str : string []= ["text"];

  Arr_Index = 0;

  value_Update(txt_value:any)
  {
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgChange " + changes['Text_str'].currentValue);
    
  }
  
  ngOnInit(): void {
    console.log("Child in Class Called Ng OnInit");
    // this.Text_str.push("OnInit"); 

    this.Arr_Index = this.Text_str.length;
    
  }

  ngDoCheck(): void {
    
    if(this.Arr_Index < this.Text_str.length)
    {
      console.log("Modified Text "+ this.Text_str);
      
    }
  }

  ngOnDestroy(): void {
    console.log("Destroyed Child Component");

  }

}
