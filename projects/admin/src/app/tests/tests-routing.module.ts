import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestLayoutComponent} from "./test-layout/test-layout.component";

const routes: Routes = [
  {
    path: '',
    component: TestLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./tests-list/tests-list.module').then(m => m.TestsListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
