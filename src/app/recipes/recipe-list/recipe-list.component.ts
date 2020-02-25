import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdMGxW6c9PHroDG-wMXq3zFYZQ6i_0rmo2JH1hwRPQe2dKokI8')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
