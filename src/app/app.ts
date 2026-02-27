import { Component } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { ProductComponent } from "./features/product-component/product-component";
import { RouterOutlet } from "@angular/router";
import { Menu } from './shared/components/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenavModule, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
