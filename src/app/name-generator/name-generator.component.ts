import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-name-generator',
  imports: [],
  templateUrl: './name-generator.component.html',
  styleUrl: './name-generator.component.css'
})
export class NameGeneratorComponent {

  petNames: string [] = ["Berit", "Pepsi", "Hjördis", "Bob", "Pelle", "Daisy", "Rocky", "Bodil", "Selma", "Pyret", "Fluffy"]
  randomName: string = "";
  previousName: string = ""


  @Output() generatedName = new EventEmitter<string>()
  

  generateRandomName(): string {
    const index = Math.floor(Math.random() * this.petNames.length)
    return this.petNames[index]
  }

  assignRandomName(){
    let newRandomName = this.generateRandomName()   
    
    while(newRandomName == this.previousName) {
      newRandomName = this.generateRandomName()   //medan newRandomName är samma som previousName så gör man om generateRandomName

    }

    this.randomName = newRandomName   //när newRandomName får ett nytt unikt värde sparas det i variabeln randomName

    this.previousName = this.randomName   //sätter previousName till det som nyss slumpats fram, för att det sedan ska kunna jämföras mot nästa slumpade namn

    this.generatedName.emit(this.randomName)    //skickar det nya namnet via eventemitter

    
  }


  

  

}
