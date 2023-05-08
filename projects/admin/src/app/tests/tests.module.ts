import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestLayoutComponent } from './test-layout/test-layout.component';


@NgModule({
  declarations: [
    TestLayoutComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule
  ]
})
export class TestsModule { }
