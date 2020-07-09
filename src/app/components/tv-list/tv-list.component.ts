import { Component, OnInit } from '@angular/core';

import { Tv } from 'src/app/models/tv';
import { TvServiceService } from 'src/app/services/tv-service.service';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})
export class TvListComponent implements OnInit {
  tvList: Tv[];
  tvData: Tv[];
  constructor(private tvService: TvServiceService) {
    this.tvList = [];
    this.tvData = [];
  }

  ngOnInit(): void {
    this.tvService.getTv()
      .subscribe(res => {
        this.tvList = res.results;
        this.tvData = res.results;
      });
  }
  getFilterTvList(input: any) {
    let value = input.target.value;
    this.tvList = this.tvData.filter(v => {
      if (value == '') {
        return this.tvData;
      } else {
        console.log(value)
        return v.name.toUpperCase().includes(value.toUpperCase());
      }
    });
  }

}
