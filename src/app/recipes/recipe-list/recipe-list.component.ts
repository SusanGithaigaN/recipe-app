import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // add dummy data
    new Recipe('Test recipe','This is simply a test', 'https://tinyurl.com/3j3ftwhk'),
    new Recipe('Newly added recipe','New recipe', 'https://tinyurl.com/42zzmskp')
    
  ];

  ngOnInit() {
      
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
