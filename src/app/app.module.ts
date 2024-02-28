import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ParentINComponent } from './parent-in/parent-in.component';
import { ChildINComponent } from './child-in/child-in.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HTPCLNTRequestComponent } from './htp-clnt-request/htp-clnt-request.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentINComponent,
    ChildINComponent,
    FormsComponent,
    ReactiveFormComponent,
    HTPCLNTRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
