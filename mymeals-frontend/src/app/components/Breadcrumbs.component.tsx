import useBreadcrumbs from "use-react-router-breadcrumbs";
import ListRecipeView from "../views/Recipe/ListRecipe.view";
import CreateRecipeView from "../views/Recipe/CreateRecipe.view";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function BreadcrumbsComponent() {
	const routes = [
		{
			path: "/recipes",
			element: <ListRecipeView/>,
			breadcrumb: "Przepisy"
		},
		{
			path: "/recipes/create",
			element: <CreateRecipeView/>,
			breadcrumb: "Stwórz"
		},
		{
			path: "/products",
			element: <ListRecipeView/>,
			breadcrumb: "Produkty"
		}
	];

	const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

	return (
		<div className="breadcrumbs">
			<Fragment>
				{
					breadcrumbs.map(({ match, breadcrumb }, index, array) =>
						index !== array.length - 1 ?
							<>
								<Link className="breadcrumbs__text" key={ match.pathname } to={ match.pathname }>
									{ breadcrumb }
								</Link>
								<div className="breadcrumbs__separator"> / </div>
							</>
							:
							<Link className="breadcrumbs__text" key={ match.pathname } to={ match.pathname }>
								{ breadcrumb }
							</Link>
					)
				}
			</Fragment>

		</div>
	);
}

export default BreadcrumbsComponent;