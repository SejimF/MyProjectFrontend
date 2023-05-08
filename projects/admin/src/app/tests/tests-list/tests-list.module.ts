import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsListRoutingModule } from './tests-list-routing.module';
import { TestsListComponent } from './tests-list/tests-list.component';


@NgModule({
  declarations: [
    TestsListComponent
  ],
  imports: [
    CommonModule,
    TestsListRoutingModule
  ]
})
export class TestsListModule { }
