import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  // add references for new shopping list
  // get a value by using @viewchild
  // pass the name of the local ref(html:10)
  @ViewChild('nameInput') nameInputRef: ElementRef;
  // pass the name of the local ref(html:18)
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // METHOD 1
  // emit new event with a js object
  // {name:string, amount: number} : properties
  // ingredientAdded = new EventEmitter<{name:string, amount: number}>();

  // METHOD 2: use ingredient model
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // emit a new event that passes data to the parent component(shoppinglist)
  onAddItem(){
    // create new ingredient
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // emit new event and pass new ingredient as data
    this.ingredientAdded.emit(newIngredient);
  }
}
