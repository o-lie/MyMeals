import Recipe from "../models/RecipeModel.js";

export const getRecipes = async(req, res) =>{
    try {
        const response = await Recipe.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getRecipeById = async(req, res) =>{
    try {
        const response = await Recipe.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createRecipe = async(req, res) =>{
    try {
        await Recipe.create(req.body);
        res.status(201).json({msg: "Recipe Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRecipe = async(req, res) =>{
    try {
        await Recipe.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Recipe Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRecipe = async(req, res) =>{
    try {
        await Recipe.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Recipe Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}