import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() closeLoginEvent = new EventEmitter<boolean>();

  closeLoginForm(): void{
    this.closeLoginEvent.emit(true);
  }
}
