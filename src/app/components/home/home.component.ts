import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

jobs = [
  {
    "name": "Wipro",
    "start": "01/08/2021",
    "finish": "At Moment"
  },
  {
    "name": "Lynk",
    "start": "01/03/2021",
    "finish": "01/08/2021"
  }
]

ngOnInit(): void {
  
}

}
