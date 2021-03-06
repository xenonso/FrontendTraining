import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  home: string = 'Home';

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
    })
  }

  dataServiceClick() {
    this.data.externalFirstClick();
  }

  firstClick() {
    this.h1Style = !this.h1Style;
    this.home = 'Changed home';
  }

}
