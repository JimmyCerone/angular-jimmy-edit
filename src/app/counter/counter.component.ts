import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  player1GameScore = 0;
  player1GameScoreDisplay = '0';
  player1SetScore = 0;
  player2GameScore = 0;
  player2GameScoreDisplay = '0';
  player2SetScore = 0;

  increment1 () {
    this.player1GameScore++;
    if (this.player1GameScore > 3 && this.player2GameScore != 3) {
      this.player1GameScore = 0;
      this.player1GameScoreDisplay = '0';
      this.player2GameScore = 0;
      this.player2GameScoreDisplay = '0';
      this.player1SetScore++;
    }
    this.UpdateDisplay1();
  }
  UpdateDisplay1 () {
    if (this.player1GameScore == 1) {
      this.player1GameScoreDisplay = '15';
    }
    else if (this.player1GameScore == 2) {
      this.player1GameScoreDisplay = '30';
    }
    else if (this.player1GameScore == 3) {
      this.player1GameScoreDisplay = '40';
    }
    else if (this.player1GameScore > 3 && this.player1GameScore != this.player2GameScore) {
      this.player1GameScoreDisplay = 'Adv';
    }
    else {
      this.player1GameScoreDisplay = '40';
      this.player2GameScoreDisplay = '40';
    }
  }
  increment2 () {
    this.player2GameScore++;
    if (this.player2GameScore > 3) {
      this.player1GameScore = 0;
      this.player1GameScoreDisplay = '0';
      this.player2GameScore = 0;
      this.player2GameScoreDisplay = '0';
      this.player2SetScore++;
    }
    if (this.player2GameScore == 1) {
      this.player2GameScoreDisplay = '15';
    }
    else if (this.player2GameScore == 2) {
      this.player2GameScoreDisplay = '30';
    }
    else if (this.player2GameScore == 3) {
      this.player2GameScoreDisplay = '40';
    }
    else if (this.player2GameScore > 3 && this.player1GameScore != this.player2GameScore) {
      this.player1GameScoreDisplay = 'Adv';
    }
    else {
      this.player2GameScoreDisplay = '40';
      this.player1GameScoreDisplay = '40';
    }
  }

  //decrement() {
  //  this.counter--;
  //}

  constructor() { }

  ngOnInit() {
  }

}