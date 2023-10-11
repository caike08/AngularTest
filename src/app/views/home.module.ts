import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { ExplanationComponent } from './explanation/explanation.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { SharedModule } from '../shared/shared.module';

import { UsersService } from '../core/services/users/users.service';
import { SortByPipe } from '../core/pipes/sortBy/sort-by.pipe';

const SERVICE_LIST = [
  UsersService,
]

const PIPE_LIST = [
  SortByPipe,
]

const COMPONENT_LIST = [
  HomeComponent,
  Test1Component,
  Test2Component,
  ExplanationComponent,
]

@NgModule({
  declarations: [
    ...COMPONENT_LIST,
    ...PIPE_LIST,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [
    ...SERVICE_LIST,
  ],
})
export class HomeModule { }
