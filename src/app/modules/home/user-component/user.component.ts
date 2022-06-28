import { Component, Input } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'

})
export class UserComponent {
  @Input() user!: User;
  @Input() loading: boolean = false;
}
