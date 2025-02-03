import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() closeRegisterEvent = new EventEmitter<boolean>();

  closeRegisterForm():void{
    this.closeRegisterEvent.emit(true);
  }
}
