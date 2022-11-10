import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standalone-with-ng-optimized-image',
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [provideCloudinaryLoader('https://res.cloudinary.com')],
  template: `
    <!-- above the fold -->
    <img ngSrc="https://res.cloudinary.com/dc56n6opp/image/upload/v1664926452/1620052525451_territory-caraibes-c1_ixpr5t.webp" width="200" height="300"
    rawSrcset="200w, 400w, 600w, 800w, 1000w, 1200w, 1600w, 2000w, 3000w"
    priority />

    <!-- below the fold -->
    <img ngSrc="https://res.cloudinary.com/dc56n6opp/image/upload/v1664926448/1620051570429_territory-antilles-c1_htikl9.webp"
    ngSrcset="200w, 400w, 600w, 800w, 1000w, 1200w, 1600w, 2000w, 3000w"
        style="margin-top: 10vh"
        width="300"
        height="300" />`
})
export class StandaloneWithNgOptimizedImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
