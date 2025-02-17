import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-name-list',
  imports: [CommonModule],
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.css'
})

export class NameListComponent {

  listOfGeneratedNames: string[] = []     //ändrat så att listan hämtas via routing istället för @input

  constructor() {
    const state = history.state.list;
    if (state) {
      this.listOfGeneratedNames = state; 
    }
  }

}
