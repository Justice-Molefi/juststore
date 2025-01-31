import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ProductsComponent } from "./products/products.component";
import { NgIf } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NavbarComponent, SearchBarComponent, ProductsComponent, LoginComponent, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showLogin: boolean = false;
  showRegister: boolean = true;  
}
