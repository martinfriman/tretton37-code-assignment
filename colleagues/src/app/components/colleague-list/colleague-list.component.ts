import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  colleagueList = [];

  constructor(private apiSerrvice: ApiService) { }

  ngOnInit(): void {

    this.apiSerrvice.getAllColleuges().subscribe((result) => {
      console.log(result);
    })
  }

}
