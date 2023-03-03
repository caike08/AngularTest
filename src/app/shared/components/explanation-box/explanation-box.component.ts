import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explanation-box',
  templateUrl: './explanation-box.component.html',
  styleUrls: ['./explanation-box.component.scss']
})
export class ExplanationBoxComponent {
  @Input() explanation!: string
}
