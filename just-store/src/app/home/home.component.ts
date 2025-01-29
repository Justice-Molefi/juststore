import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SearchBarComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
