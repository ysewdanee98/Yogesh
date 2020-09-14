import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  popup: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  popUpToggle(){
    this.popup = !this.popup;
  }

  operationSearch(){
    console.log("Search button clicked!")
  }

}
