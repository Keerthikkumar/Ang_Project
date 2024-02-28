import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-htp-clnt-request',
  templateUrl: './htp-clnt-request.component.html',
  styleUrls: ['./htp-clnt-request.component.css']
})
export class HTPCLNTRequestComponent implements OnInit{

  User_name:JSON_name[]=[];

  JSON_Set_Data = new FormGroup({         //For Formcontrol variable 
    set_user_name : new FormControl(""),
    set_mail_id : new FormControl("")
  })

  constructor (private http_data : HttpClient)   //The Constructor To create Data from module TS HttpClientModules as http_data & private Keyward to declare the class 
  {
    // this.get_user_name().subscribe(Json_data =>(
    //   this.User_name = Json_data,
    //   console.log(this.User_name)
    //   )); 
  }

  ngOnInit(): void {  //Constructor And ngOninit
    this.get_user_name().subscribe(Json_data =>(this.User_name = Json_data));
  }

  get_user_name() //Get The JSON Object From Demo Url Link  
  {
    return this.http_data.get<JSON_name[]>("https://jsonplaceholder.typicode.com/users");
  }

  set_user_data()  //Set JSON Method using Post
  {
    return this.http_data.post<JSON_name>('https://jsonplaceholder.typicode.com/users',{
      name : this.JSON_Set_Data.controls.set_user_name.value,
      email : this.JSON_Set_Data.controls.set_mail_id.value
    });
  }
  set_json_user_data() //Onclick Set_data from Formcontrol Input
  {
    this.set_user_data().subscribe((Set_Json_data) =>{
      this.User_name.push(Set_Json_data);
    })
  }

}

 class JSON_name {  //JSON Eval variable and class Declare variable Name both are same
  name!:string ;
  email!:string;
}