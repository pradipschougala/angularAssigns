import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evens',
  templateUrl: './evens.component.html',
  styleUrls: ['./evens.component.css']
})
export class EvensComponent implements OnInit {

  @Input() number : number;


  constructor() { }

  ngOnInit(): void {
  }

}
