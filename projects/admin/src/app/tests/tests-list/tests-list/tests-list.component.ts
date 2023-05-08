import {Component, OnInit} from '@angular/core';
import {AppComponentTestsLoadGQL} from "../../../../../../../shared/graphql/generated";

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnInit {

  constructor(
    private loadGQL: AppComponentTestsLoadGQL
  ) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loadGQL.fetch({}).subscribe(res => {
      console.log('RES', res);
    });
  }

}
