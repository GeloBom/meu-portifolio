import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LinkNavBar } from './models/link.navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public colapsarNavBar: boolean = false;

  public linksNavBar: LinkNavBar[] = [
    {href: "#sobre", texto: "Sobre mim"},
    {href: "#habilidades", texto:"Habilidades"},
    {href: "#stack", texto: "Stack"},
    {href: "#experiencias", texto: "Experiencias"},
    {href: "#portfolio", texto: "Portfólio"},
  ];
}
