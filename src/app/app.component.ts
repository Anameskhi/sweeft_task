import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
             <lib-ng-toast>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sweeft_task';
}
