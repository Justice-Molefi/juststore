import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faWishList = faHeart;
  faShoppingCart = faCartShopping;

  @Output() showLoginEvent = new EventEmitter<boolean>();
  @Output() showRegisterEvent = new EventEmitter<boolean>();


  showLoginForm(){
    this.showLoginEvent.emit(true);
  }

  showRegisterForm(){
    this.showRegisterEvent.emit(true);
  }
}
