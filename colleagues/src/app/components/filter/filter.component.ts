import { Component, OnInit } from '@angular/core';
import { ColleaguesService } from 'src/app/services/colleagues.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(public colleaguesService: ColleaguesService) { }

  ngOnInit(): void {
  }

}
