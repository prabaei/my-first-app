import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {

  enableResetButton:boolean=true;
  usernameTest:string= "";
  resetUserName(){
    this.usernameTest="";
  }

  constructor() { 

   this.enableResetButton= this.usernameTest.length==0;
  }
  username(username:Event){
    this.usernameTest=(<HTMLInputElement>username.target).value;
  }
  ngOnInit() {
  }

}
