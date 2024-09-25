import { Component } from '@angular/core';
import { ItemStacks } from './models/item-stacks';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  public itensStack: ItemStacks[] = [
    { titulo: ".NET" },
    { titulo: "Angular" },
    { titulo: "TypeScript" },
    { titulo: "Node.js" },
    { titulo: "Discord.js" },
    { titulo: "Firebase" },
    { titulo: "Entity Framework" },
    { titulo: "Microsoft SQL Server" },
    { titulo: "MongoDB" },
    { titulo: "Selenium" },
    { titulo: "Cypress" },
  ]
  
}
