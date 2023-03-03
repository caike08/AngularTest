import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { ExplanationComponent } from './explanation/explanation.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        Test1Component,
        Test2Component,
        ExplanationComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        SharedModule,
    ]
})
export class HomeModule { }
