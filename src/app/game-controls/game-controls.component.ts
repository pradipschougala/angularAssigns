import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent implements OnInit {

    @Output() emittedGameInterval = new EventEmitter<number>();
    gameInterval = 0;
    countGameInterval;

  constructor() { }

  ngOnInit(): void {
  }

  clickToStart(){
    this.countGameInterval = setInterval(()=>{
      this.emittedGameInterval.emit(this.gameInterval+1);
      this.gameInterval++;
      console.log(this.gameInterval);
    },1000);
    // console.log(this.countGameIntrval);
  }

  clickToPause(){
    clearInterval(this.countGameInterval);
  } 
}
