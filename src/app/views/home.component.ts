import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExplanationService } from '../core/services/explanation/explanation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  explanation!: string;

  constructor(
    private _explanationService: ExplanationService,
    private _router: Router
  ) {
    this.explanation = this._explanationService.getExplanation(
      this._router.url
    );
  }

  ngOnInit(): void {
    this._router.events.subscribe(
      (r) =>
        (this.explanation = this._explanationService.getExplanation(
          this._router.url
        ))
    );
  }
}
