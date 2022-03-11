import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague.model';
import { ColleaguesService } from 'src/app/services/colleagues.service';

@Component({
  selector: 'app-colleague-card',
  templateUrl: './colleague-card.component.html',
  styleUrls: ['./colleague-card.component.scss']
})
export class ColleagueCardComponent implements OnInit {
  @Input()
  colleague: Colleague;

  constructor(public colleaugesService: ColleaguesService) {}

  ngOnInit(): void {}
}
