import { Component, OnInit } from '@angular/core';

@Component({
selector:".app-server",
templateUrl:"./server.component.html",

})
export class ServerComponent implements OnInit{

    EnableButton:boolean=false;
    serverCondition:string="server turned off";
    ngOnInit() {

        setTimeout(()=>{
            this.EnableButton=true;

        },2000);
    }

  turnonserver(){
      this.serverCondition = "he he he";
  }
    serverId:number = 1;
    serverName:string="locolhost://";
    getServerID(){
        return this.serverId;
    }
}



