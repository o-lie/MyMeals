export type Recipe = {
	id: number,
	name: string,
	timePrep: Date,
	calories: number,
	ingredients: Ingredient[],
	steps: string[]
}

export type Ingredient = {
	id: number,
	name: string,
	quantity: string | number,
	unit?: string
}
