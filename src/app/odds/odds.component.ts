import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {

  @Input() number:number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
