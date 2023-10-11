import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title: 'demo';

  show = true;

  showAnotherIf = false;

  skills = ['javascript', 'html', 'css'];

  caseNo = '3';

  showDeferComp: boolean = false
}
