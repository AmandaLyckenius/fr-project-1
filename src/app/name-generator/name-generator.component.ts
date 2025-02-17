import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-name-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name-generator.component.html',
  styleUrl: './name-generator.component.css'
})

export class NameGeneratorComponent {

  petNames: string [] = ["Berit", "Pepsi", "Hjördis", "Bob", "Pelle", "Daisy", "Rocky", "Bodil", "Selma", "Pyret", "Fluffy", "Saffran", "Zingo", "Mumin", "Doris"]
  randomName: string = "";
  previousName: string = ""
  listOfGeneratedNames: string[] = [];

  constructor(private router: Router) {}

  generateRandomName(): string {
    const index = Math.floor(Math.random() * this.petNames.length)
    return this.petNames[index]
  }


  assignRandomName(){

    let newRandomName = this.generateRandomName();   

    while(newRandomName === this.previousName) {
      newRandomName = this.generateRandomName();   
    }

    this.randomName = newRandomName;
    this.previousName = this.randomName;

    
    this.listOfGeneratedNames.push(this.randomName)
  }

  navigateToList() {
    console.log("Skickar lista:", this.listOfGeneratedNames);
    this.router.navigate(['/name-list'], { state: { list: this.listOfGeneratedNames } });
  }

  

}
