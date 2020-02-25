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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdMGxW6c9PHroDG-wMXq3zFYZQ6i_0rmo2JH1hwRPQe2dKokI8'),
    new Recipe('A Test Recipe2', 'This is a simply test2',
      'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
