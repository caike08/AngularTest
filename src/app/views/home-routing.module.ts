import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplanationComponent } from './explanation/explanation.component';
import { HomeComponent } from './home.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'explanation', component: ExplanationComponent},
      { path: 'test1', component: Test1Component },
      { path: 'test2', component: Test2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
