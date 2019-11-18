import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //initialize the clickCounter
  clickCounter: number = 0;
  
  //initialize name property
  name: string='';

  constructor() { }

  ngOnInit() {
  }

  // function for the clickCounter
  countClick() {
    this.clickCounter += 1;
  }

  // function for decrease clickCounter
  decrClick(){
    this.clickCounter -= 1;
  }

}