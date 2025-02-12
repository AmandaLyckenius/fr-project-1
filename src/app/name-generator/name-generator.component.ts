import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-name-generator',
  imports: [],
  templateUrl: './name-generator.component.html',
  styleUrl: './name-generator.component.css'
})
export class NameGeneratorComponent {

  petNames: string [] = ["Berit", "Pepsi", "Hjördis", "Bob", "Pelle"]
  randomName: string = "";

  @Output() generatedName = new EventEmitter<string>()
  

  generateRandomName(): string {
    const index = Math.floor(Math.random() * this.petNames.length)
    return this.petNames[index]
  }

  assignRandomName(){
    this.randomName = this.generateRandomName();
    this.generatedName.emit(this.randomName)

    
  }


  

  

}
