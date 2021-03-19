import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crowdlending-poc-app';
  constructor() {
    sessionStorage.setItem('userId', uuid());
  }
}
