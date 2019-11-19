import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-getting-started-content',
    template: `
    <div class="content" role="main">

      <!-- Resources -->
      <h2>Resources</h2>
      <p>Here are some links to help you get started:</p>

      <div class="card-container">
          <a class="card" target="_blank" rel="noopener" href="https://ngrx.io/guide/store">
              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>

              <span>Learn Ngrx</span>

              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg> </a>

          <a class="card" target="_blank" rel="noopener" href="https://ngrx.io/guide/store-devtools">
              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>

              <span>Dev tool</span>

              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </a>

          <a class="card" target="_blank" rel="noopener" href="https://medium.com/ngrx">
              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                      d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21
                      7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14
                      0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
              </svg>

              <span>Ngrx Blog</span>

              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </a>

      </div>

      <!-- Get Started -->
      <h2>How to add/integrate Ngrx with your existing app?</h2>

      <input type="hidden" #selection>

      <div class="card-container">
          <div class="card card-small" tabindex="0">
              <!-- <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg> -->

              <span>Create State</span>
          </div>

          <div class="card card-small" tabindex="0">
              <span>Create Actions</span>
          </div>

          <div class="card card-small" tabindex="0">
              <span>Add Reducer</span>
          </div>

          <div class="card card-small" tabindex="0">
              <span>Add Effects</span>
          </div>

          <div class="card card-small" tabindex="0">
              <span>Create Selectors</span>
          </div>
      </div>
      <div class="card-container">
        <button mat-raised-button color="accent" (click)="getStartedClicked()">GET STARTED</button>
      </div>

  </div>
  `,
    styleUrls: []
})
export class GettingStartedContentComponent implements OnInit {

    constructor(
        private _router: Router
    ) { }

    ngOnInit() {
    }

    getStartedClicked(): void {
        this._router.navigate(['/hero/list']);
    }

}
