import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PetName } from '../models/pet-name.model';


@Component({
  selector: 'app-name-list',
  imports: [CommonModule],
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.css'
})

export class NameListComponent {

  listOfGeneratedNames: PetName[] = []     

  constructor() {
    const state = history.state.list;
    if (state) {
      this.listOfGeneratedNames = state as PetName[]; 
    }
  }

}
