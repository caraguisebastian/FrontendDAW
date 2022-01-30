import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titleTest: String = 'test123';
  public counterTest: number = 0;
  public selectedUser =  { id: 11, name: 'asda', background: "red"};
  public listTest = [
    { id: 11, name: 'asda', background: "red"},
    { id: 12, name: 'assdada', background: "blue"},
    { id: 13, name: 'aasdsadsda', background: "green"},
    { id: 14, name: 'asczxzxcda', background: "yellow"},
    { id: 15, name: 'asasdgda', background: "white"},
    { id: 16, name: 'asweqweda', background: "red"},
    { id: 17, name: 'aserqeda', background: "red"},
    { id: 18, name: 'asasfda', background: "red"},
  ]

  constructor() { }

  public incrementCounter(){
    console.log(this.counterTest);
    this.counterTest++;
  }

  ngOnInit(): void {
    console.log('home init')
  }

  ngOnDestroy(): void {
    console.log('home destroyed')
  }

  selectUser(user: any){
    this.selectedUser = user
  };
}
