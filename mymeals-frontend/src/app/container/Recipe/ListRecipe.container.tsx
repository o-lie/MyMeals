import BreadcrumbsComponent from "../../components/Breadcrumbs.component";
import HeaderComponent from "../../components/Header.component";
import { useEffect, useState } from "react";
import axios from "axios";

function ListRecipeContainer() {
	const [recipes, setRecipe] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await axios.get("http://localhost:6000/recipes");
		setRecipe(response.data);
	};

	const deleteRecipe = async (id: number) => {
		try {
			await axios.delete(`http://localhost:5000/recipes/${id}`);
			getRecipes();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<BreadcrumbsComponent />
			<HeaderComponent
				title="Lista przepisów"
				text="Tutaj znajdziesz wszystkie przepisy, te gotowe, jak również dodane przez Ciebie!"
				buttonPrimary={{
					title: "Dodaj przepis",
					link: "/recipes/create"
				}}
			/>
			<div className="list-recipe">

			</div>
		</>
	)
}

export default ListRecipeContainer;