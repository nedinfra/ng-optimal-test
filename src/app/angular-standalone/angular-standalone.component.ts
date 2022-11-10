import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-standalone',
  standalone: true,
  templateUrl: './angular-standalone.component.html',
  styleUrls: ['./angular-standalone.component.scss']
})
export class AngularStandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
