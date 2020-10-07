import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('serverNameInput') serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  
  // newServerContent= '';
  // newServerName = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef; 
  constructor() {} 

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement){
    // console.log(this.serverContentInput);
    // console.log(nameInput.value)
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBluePrint(nameInput: HTMLInputElement){
    // console.log(this.serverContentInput);
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
