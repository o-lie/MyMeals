import React from "react";
import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom";
import ListRecipeView from "./views/Recipe/ListRecipe.view";
import CreateRecipeView from "./views/Recipe/CreateRecipe.view";
import EditRecipeView from "./views/Recipe/EditRecipe.view";
import DashboardLayout from "./layouts/Dashboard.layout";
import HomeView from "./views/Home.view";
import ListProductView from "./views/Product/ListProduct.view";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={ <DashboardLayout/> }>
					<Route index element={ <HomeView/> }/>
					<Route path="recipes" element={ <ListRecipeView/> }/>
					<Route path="recipes/create" element={ <CreateRecipeView/> }/>
					<Route path="recipes/:id/edit" element={ <EditRecipeView/> }/>
					<Route path="products" element={ <ListProductView />}/>
					{/*<Route path="shopping" element={ <ListProductView />}/>*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
