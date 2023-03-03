import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplanationBoxComponent } from './components/explanation-box/explanation-box.component';

@NgModule({
  declarations: [ExplanationBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [ExplanationBoxComponent]
})
export class SharedModule { }
