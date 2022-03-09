import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague.model';
import { ColleaguesService } from 'src/app/services/colleagues.service';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  colleagueList: Colleague[] = [];

  constructor(public colleaguesService: ColleaguesService) { }

  ngOnInit(): void {
    
  }

}
