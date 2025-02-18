import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PetName } from '../models/pet-name.model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-name-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-generator.component.html',
  styleUrl: './name-generator.component.css'
})

export class NameGeneratorComponent {

  petNames: PetName [] = [
    {name: "Berit", gender:"hona"}, 
    {name: "Pepsi", gender:"both"}, 
    {name:"Hjördis", gender:"hona"}, 
    {name:"Bob", gender:"hane"}, 
    {name:"Pelle", gender:"hane"}, 
    {name:"Daisy", gender:"hona"}, 
    {name:"Rocky", gender: "hane"}, 
    {name:"Bodil", gender:"hona"}, 
    {name:"Selma", gender:"hona"}, 
    {name:"Pyret", gender:"both"}, 
    {name:"Fluffy", gender:"both"}, 
    {name:"Saffran", gender:"both"}, 
    {name:"Zingo", gender:"both"}, 
    {name:"Mumin", gender:"both"}, 
    {name:"Doris", gender:"hona"}
  ]

  randomName: PetName | null = null
  previousName: PetName | null = null
  listOfGeneratedNames: PetName[] = [];
  
  includeFemale: boolean = true
  includeMale: boolean = true
  includeBoth: boolean = true

  constructor(private router: Router) {}

  generateRandomName(): PetName | null{

    if(!this.includeFemale && !this.includeMale && !this.includeBoth){
      this.includeFemale = true;
      this.includeMale = true;
      this.includeBoth = true;
    }

    const filteredNames = this.petNames.filter(pet =>
    (this.includeFemale && pet.gender === "hona") ||
    (this.includeMale && pet.gender === "hane") ||
    (this.includeBoth && pet.gender === "both")

    )

    if(filteredNames.length === 0){
      return null 
    }


    const index = Math.floor(Math.random() * filteredNames.length)
    return filteredNames[index]
  }


  assignRandomName() : void {

    let newRandomName = this.generateRandomName();   

    if(!newRandomName ){
      this.randomName = null
      return
    }

    while(this.previousName && newRandomName.name  == this.previousName.name) {
      newRandomName = this.generateRandomName()!;   
    }

    this.randomName = newRandomName;
    this.previousName = newRandomName;

    
    this.listOfGeneratedNames.push(this.randomName)
  }

  navigateToList(): void {
    console.log("Skickar lista:", this.listOfGeneratedNames);
    this.router.navigate(['/name-list'], { state: { list: this.listOfGeneratedNames } });
  }

  

}
