import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDO-nnMlM-ws_rFGJIc4Z634gEr9twz-KZiSOTYFLQlqL2IJvLZhEqm3AUN0asLwQF14&usqp=CAU"
    ),
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDO-nnMlM-ws_rFGJIc4Z634gEr9twz-KZiSOTYFLQlqL2IJvLZhEqm3AUN0asLwQF14&usqp=CAU"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
