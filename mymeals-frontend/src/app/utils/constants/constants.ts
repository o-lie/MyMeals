import { ReactComponent as RecipesIcon } from "../../../assets/images/recipes-icon.svg";
import { ReactComponent as ProductsIcon } from "../../../assets/images/products-icon.svg";
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shopping-icon.svg";

export const sidebarItems = [
	{
		icon: RecipesIcon,
		title: "Przepisy",
		link: "/recipes"
	},
	{
		icon: ShoppingIcon,
		title: "Zakupy",
		link: "/shopping"
	},
	{
		icon: ProductsIcon,
		title: "Produkty",
		link: "/products"
	}
];