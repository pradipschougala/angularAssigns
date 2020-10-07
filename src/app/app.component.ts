import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  value  = 5;

}

  // oddNumbers :number[] = [];
  // evenNumbers: number[] = [];


  // serverElements = [{type:'server', name:'Testsrvr', content:'Just a test!'}];
  // evenNums:number[] = [];
  // oddNums:number[] = [];


  // onServerAdded(serverData : { serverName:string, serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBluePrintAdded(bluePrintData : {serverName:string, serverContent:string}) {
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name: bluePrintData.serverName,
  //     content: bluePrintData.serverContent
  //   });
  // }
  ///////////////////////// Life Cycle Hooks Added //////////////////////////////////// 
  // onChangeFirst(){
  //   this.serverElements[0].name = "Chnaged!"
  // }

  // onDestroyFirst(){
  //   this.serverElements.splice(0,1);
  // }

  // onIntervalFired(firedLastNumber : number){
  //   if (firedLastNumber % 2 === 0){
  //     this.evenNumbers.push(firedLastNumber);
  //   }
  //   else{
  //     this.oddNumbers.push(firedLastNumber);
  //   }
  //     console.log();
  // }


  // eventOnEmition(eventFromGameControl :number){
  //   if(eventFromGameControl % 2 === 0)
  //   {
  //     this.evenNums.push(eventFromGameControl);
  //   }else{
  //     this.oddNums.push(eventFromGameControl);
  //   }


  // }

 

  // servers = [];


  // onAddServer(){
  //   this.servers.push('Another Seerver');
  // }
  // onRemoveServer(id: number){
  //   const position = id + 1;
  //   this.servers.splice(position, 1);
  // }

