import { Component } from '@angular/core';


@Component({
  selector: 'app-name-generator',
  imports: [],
  templateUrl: './name-generator.component.html',
  styleUrl: './name-generator.component.css'
})
export class NameGeneratorComponent {

  petNames: string [] = ["Berit", "Pepsi", "Hjördis", "Bob", "Pelle"]
  randomName: string = "";

  generateRandomName(){
    const index = Math.floor(Math.random() * this.petNames.length)
    this.randomName = this.petNames[index]
  }

}
