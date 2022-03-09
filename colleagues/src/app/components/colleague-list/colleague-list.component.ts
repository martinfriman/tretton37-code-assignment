import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  colleagueList = [];

  constructor() { }

  ngOnInit(): void {
  }

}
