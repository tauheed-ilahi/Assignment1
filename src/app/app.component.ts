import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})
export class AppComponent {
  constructor(public service: ServiceService) {}
  title = 'assignment1';
  add() {
    this.service.tggle = false;
  }
}
