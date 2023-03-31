import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clicks: number = 0;

  counts($click: number): void {
    this.clicks = $click;
  }

  keydowns($code: string): void {
    alert(`Key Press: ${$code}`);
  }
}
