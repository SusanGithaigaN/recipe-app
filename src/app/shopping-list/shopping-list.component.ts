import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Masala', 2),
    new Ingredient('Ginger', 1)
  ];

  constructor(){

  }
  ngOnInit() {
      
  }

  // receive ingredient of type Ingredient
  onIngredientAdded(ingredient: Ingredient){
    // push/add a new ingredient to array
    this.ingredients.push(ingredient);

  }
}
