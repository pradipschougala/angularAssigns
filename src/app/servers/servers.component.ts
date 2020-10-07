import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewUser : boolean = false;
  serverCreationStatus = 'No server was Created';
  serverName = "NameIsThere";
  username = "My Name";
  serverCreated = false;
  servers = ['testServer', 'TestServer 2'];
  showSecret = false;
  log = [];
  constructor() { 

    setTimeout(()=>{this.allowNewUser = true},2000)
    
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName); 
    this.serverCreationStatus = "Server was Created"+this.serverName;
  }

  onUpdateServer(event:Event){
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails(){
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length+1);

  }
  

 

  
}
