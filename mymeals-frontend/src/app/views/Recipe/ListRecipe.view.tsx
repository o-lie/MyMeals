import { useState } from "react";
import { Recipe } from "../../types/recipe.types";
import ListRecipeContainer from "../../container/Recipe/ListRecipe.container";

export default function ListRecipeView() {

	const [ recipes, setRecipes ] = useState<Recipe[]>([]);

	return (
		<>
			<ListRecipeContainer/>
		</>
	);
}