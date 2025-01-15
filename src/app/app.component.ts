import { Component } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BackendFrontend';

  data:any

  constructor(private base:BaseService) {
    this.getData()
  }

  getData() {
    this.data = this.base.getData()
  }
}
