import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignmentthree',
  templateUrl: './assignmentthree.component.html',
  styleUrls: ['./assignmentthree.component.css']
})
export class AssignmentthreeComponent implements OnInit {

  btn_toggle:boolean=true;
  logTime=[];
  constructor() { }

  ngOnInit() {

  }
  logClick(){
    this.btn_toggle=!this.btn_toggle;
    var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(datetime);
this.logTime.push(this.logTime.length + 1);
  }
}
